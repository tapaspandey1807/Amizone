document.addEventListener('DOMContentLoaded', () => {
    // === Authentication Check ===
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = "index.html";
        return;
    }

    // === Update User Profile Info ===
    // Header Info
    const userNameEl = document.querySelector('.user-name');
    const userIdEl = document.querySelector('.user-id');

    if (userNameEl) userNameEl.textContent = currentUser.name;
    if (userIdEl) userIdEl.textContent = currentUser.id;

    // === Logout Logic ===
    const logoutLink = document.querySelector('a[href="index.html"]'); // Adjust selector if needed
    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = "index.html";
        });
    }


    // === Dynamic Date & Class Schedule Logic ===
    const dateElement = document.querySelector('.panel-body.centered-dates h4');
    const classesContainer = document.querySelector('.panel-body.centered-dates .empty-state');
    const prevBtn = document.querySelector('.panel-controls button:first-child');
    const nextBtn = document.querySelector('.panel-controls button:last-child');

    // Store current date state
    let currentDate = new Date();

    // formatting options
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Subject Pool
    const subjects = [
        { name: 'Computer Graphics', code: 'BCS403', faculty: 'Dr. A. Sharma' },
        { name: 'Communication Skills - II', code: 'BCS401', faculty: 'Ms. P. Singh' },
        { name: 'Behavioral Science - IV', code: 'BCS404', faculty: 'Dr. R. Gupta' },
        { name: 'Data Communication', code: 'BCS405', faculty: 'Mr. K. Verma' },
        { name: 'Java Programming', code: 'BCS406', faculty: 'Ms. S. Jain' },
        { name: 'Operating Systems', code: 'BCS407', faculty: 'Dr. M. Kumar' }
    ];

    function generateRandomSchedule() {
        // Deterministic random based on date to keep it consistent (simple hash)
        // using date string as seed substitute
        const seedStr = currentDate.toDateString();
        let seed = 0;
        for (let i = 0; i < seedStr.length; i++) seed += seedStr.charCodeAt(i);

        // Simple seeded random function
        const seededRandom = () => {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        };

        const numClasses = Math.floor(seededRandom() * 3) + 3; // 3 to 5 classes
        const schedule = [];
        let startTime = 9; // 9 AM

        for (let i = 0; i < numClasses; i++) {
            const subject = subjects[Math.floor(seededRandom() * subjects.length)];
            schedule.push({
                time: `${startTime}:15 - ${startTime + 1}:05`,
                subject: subject.name,
                faculty: subject.faculty,
                room: 'Room ' + (100 + Math.floor(seededRandom() * 20))
            });
            startTime++;
            if (startTime === 13) startTime++; // Lunch break skip
        }
        return schedule;
    }

    function renderClasses(classes) {
        if (!classesContainer) return;

        if (classes.length === 0) {
            classesContainer.innerHTML = '<div class="no-classes">No classes scheduled for today.</div>';
            // Restore center alignment for empty state
            const panelBody = document.querySelector('.panel-body.centered-dates');
            if (panelBody) panelBody.style.justifyContent = 'center';
            return;
        }

        let html = '';
        classes.forEach(cls => {
            html += `
            <div class="class-item">
                <div class="class-time">${cls.time}</div>
                <div class="class-details">
                    <span class="class-subject">${cls.subject}</span>
                    <span class="class-faculty">${cls.faculty}</span>
                    <span class="class-location">${cls.room}</span>
                </div>
                <div class="class-status">Scheduled</div>
            </div>
            `;
        });
        classesContainer.innerHTML = html;
        // Top align for list
        const panelBody = document.querySelector('.panel-body.centered-dates');
        if (panelBody) panelBody.style.justifyContent = 'flex-start';
    }

    function updateDateDisplay() {
        if (dateElement) {
            dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
        }

        // Check Day: 0 = Sunday, 6 = Saturday
        const day = currentDate.getDay();

        if (day >= 1 && day <= 5) {
            // Mon-Fri
            const schedule = generateRandomSchedule();
            renderClasses(schedule);
        } else {
            // Weekend
            renderClasses([]);
        }
    }

    // Initialize with today's date
    updateDateDisplay();

    // Event Listeners for Buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            // Subtract 1 day
            currentDate.setDate(currentDate.getDate() - 1);
            updateDateDisplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Add 1 day
            currentDate.setDate(currentDate.getDate() + 1);
            updateDateDisplay();
        });
    }


    // === User Data: Attendance & CGPA ===

    // 1. Main Attendance Card
    const mainAttendance = document.querySelector('.stat-card.green .percent');
    if (mainAttendance) {
        mainAttendance.textContent = currentUser.attendance;
    }

    // 2. CGPA
    const cgpaElement = document.querySelector('.stat-card.orange h3');
    if (cgpaElement) {
        cgpaElement.textContent = 'CGPA : ' + currentUser.cgpa;
    }

    // 3. Email & OPAC Details
    // Email Panel
    const emailHeader = Array.from(document.querySelectorAll('.panel-header h3'))
        .find(el => el.textContent.trim() === "Email");

    if (emailHeader) {
        const emailPanelBody = emailHeader.closest('.content-panel').querySelector('.panel-body');
        if (emailPanelBody) {
            // Assuming strict structure from previously viewed home.html
            // <p class="small-text">Email-Id: <span class="blue">...</span></p>
            // <p class="small-text">Password: <span class="blue">...</span></p>
            const spans = emailPanelBody.querySelectorAll('span.blue');
            if (spans.length >= 1) spans[0].textContent = currentUser.email;
            // We don't have an email password in the mock data, but user asked for "change pass" implying OPAC or generally?
            // The user request said "change emal id and opac id and password". 
            // Usually email password isn't shown plain text or might remain hidden '*****'. 
            // I'll leave the password as star masked unless explicitly told otherwise, or duplicate the opac password if they meant that.
            // Re-reading user request: "change emal id and opac id and password".
            // Let's assume they want the OPAC ID/Pass changed and Email ID changed.
        }
    }

    // OPAC Panel
    const opacHeader = Array.from(document.querySelectorAll('.panel-header h3'))
        .find(el => el.textContent.trim().includes("Amity Central Library(OPAC)"));

    if (opacHeader) {
        const opacPanelBody = opacHeader.closest('.content-panel').querySelector('.panel-body');
        if (opacPanelBody) {
            const spans = opacPanelBody.querySelectorAll('span.blue');
            if (spans.length >= 2) {
                spans[0].textContent = currentUser.opacId;
                spans[1].textContent = currentUser.opacPassword;
            }
        }
    }


    // 3. User Specific Course Attendance Details
    const attendanceListContainer = document.querySelector('.panel-body.list-view');
    // We want to replace the static list with our dynamic user list
    // The problem is the notices are also in a .list-view.
    // We need to target the "My Attendance" panel specifically.

    // Finding the "My Attendance" panel body
    const attendancePanelHeader = Array.from(document.querySelectorAll('.panel-header h3'))
        .find(el => el.textContent.trim() === "My Attendance");

    if (attendancePanelHeader && currentUser.attendanceDetails) {
        const attendancePanelBody = attendancePanelHeader.closest('.content-panel').querySelector('.panel-body');

        if (attendancePanelBody) {
            let attendanceHtml = '';
            currentUser.attendanceDetails.forEach(course => {
                let badgeClass = 'green';
                const percentageVal = parseFloat(course.percentage);
                if (percentageVal < 75) badgeClass = 'red'; // Assuming red for low attendance based on previous logic
                else if (percentageVal < 85) badgeClass = 'yellow'; // Assuming yellow/orange

                // Fix color class mapping to match original CSS if known, or inline styles from previous code
                // Previous logic: < 75 red (#e74c3c), < 85 yellow (#f1c40f), else green (#2ecc71)
                // We'll stick to classes if they exist, or inline styles if we want to be safe,
                // but let's try to mimic the structure perfectly.

                let colorStyle = '';
                if (percentageVal < 75) colorStyle = 'style="border-color: #e74c3c; color: #e74c3c;"';
                else if (percentageVal < 85) colorStyle = 'style="border-color: #f1c40f; color: #f1c40f;"';
                else colorStyle = 'style="border-color: #2ecc71; color: #2ecc71;"';


                attendanceHtml += `
                <div class="list-item">
                    <div class="course-code">${course.code}</div>
                    <div class="course-name">${course.name}</div>
                    <div class="attendance-stat">
                        <span class="fraction">${course.fraction}</span>
                        <span class="percentage-badge" ${colorStyle}>${course.percentage}</span>
                    </div>
                </div>
                `;
            });
            attendancePanelBody.innerHTML = attendanceHtml;
        }
    }


    // === Sidebar Mobile Toggle ===
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const appContainer = document.querySelector('.app-container');

    if (sidebarToggle && sidebar) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        appContainer.appendChild(overlay);

        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }
});
