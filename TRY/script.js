document.addEventListener('DOMContentLoaded', () => {
    // Selectors matching the exact replica HTML structure
    const loginForm = document.getElementById('loginform');
    const usernameInput = document.querySelector('input[name="_UserName"]');
    const passwordInput = document.querySelector('input[name="_Password"]');
    const btn = document.querySelector('.login100-form-btn');

    if (!loginForm || !usernameInput || !passwordInput || !btn) {
        console.error("Critical elements not found");
        return;
    }

    // Form Submission & Validation
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const originalText = btn.innerHTML;

        // Loading State
        btn.innerHTML = 'Logging in...';
        btn.style.opacity = '0.8';
        btn.disabled = true;

        // Validation Logic
        setTimeout(() => {
            const username = usernameInput.value;
            const password = passwordInput.value;

            // Find user in the global users array (loaded from users.js)
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Store user session
                localStorage.setItem('currentUser', JSON.stringify(user));
                window.location.href = "home.html";
            } else {
                alert("Invalid Username or Password!");

                // Reset state
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                btn.disabled = false;
            }
        }, 1500);
    });

    // Add focused class for styling if needed (optional, keeping basic matching)
    // The original template uses focus-input100 spread via CSS or other JS, 
    // but we'll leave the style.css logic alone effectively.
});
