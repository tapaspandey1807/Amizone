const users = [
    {
        username: "A2040522298",
        subject: "mtech cse",
        password: "123456",
        name: "Mr. TARUN GUPTA",
        id: "A2040522298",
        cgpa: "8.42",
        attendance: "97%",
        email: "tarun.gupta@s.amity.edu",
        opacId: "1234567",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BCS501", name: "Advanced Data Structures", fraction: "5/5", percentage: "100%" },
            { code: "BCS502", name: "Machine Learning", fraction: "4/5", percentage: "80%" },
            { code: "BCS503", name: "Cloud Computing", fraction: "8/8", percentage: "100%" },
            { code: "BCS504", name: "Soft Computing", fraction: "5/6", percentage: "83.3%" },
            { code: "BCS505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
    {
        username: "A2040522299",
        subject: "mtech bio tech",
        password: "123456",
        name: "Ms. RIYA SHARMA",
        id: "A2040522299",
        cgpa: "9.10",
        attendance: "85%",
        email: "riya.sharma@s.amity.edu",
        opacId: "7654321",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BBT501", name: "Advanced Biochemistry", fraction: "4/5", percentage: "80%" },
            { code: "BBT502", name: "Genetic Engineering", fraction: "4/4", percentage: "100%" },
            { code: "BBT503", name: "Bioinformatics", fraction: "6/8", percentage: "75%" },
            { code: "BBT504", name: "Bioprocess Technology", fraction: "5/6", percentage: "83.3%" },
            { code: "BBT505", name: "Research Methodology", fraction: "2/2", percentage: "100%" }
        ]
    },
    {
        username: "A2040522300",
        subject: "mtech mechanical",
        password: "123456",
        name: "Mr. AMIT VERMA",
        id: "A2040522300",
        cgpa: "7.50",
        attendance: "65%",
        email: "amit.verma@s.amity.edu",
        opacId: "1122334",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BME501", name: "Advanced Thermodynamics", fraction: "3/5", percentage: "60%" },
            { code: "BME502", name: "Finite Element Analysis", fraction: "2/4", percentage: "50%" },
            { code: "BME503", name: "Robotics and Automation", fraction: "4/8", percentage: "50%" },
            { code: "BME504", name: "Fluid Mechanics", fraction: "3/6", percentage: "50%" },
            { code: "BME505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
    {
        username: "A2040522301",
        subject: "mtech bio tech",
        password: "123456",
        name: "Mr. AJAY CHOUDHARY",
        id: "A2040522301",
        cgpa: "7.82",
        attendance: "75%",
        email: "ajay.choudhary@s.amity.edu",
        opacId: "1234301",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BBT501", name: "Advanced Biochemistry", fraction: "4/5", percentage: "80%" },
            { code: "BBT502", name: "Genetic Engineering", fraction: "3/4", percentage: "75%" },
            { code: "BBT503", name: "Bioinformatics", fraction: "6/8", percentage: "75%" },
            { code: "BBT504", name: "Bioprocess Technology", fraction: "4/6", percentage: "66.6%" },
            { code: "BBT505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
    {
        username: "A2040522302",
        subject: "mtech cse",
        password: "123456",
        name: "Mr. AFZAL ASHRAF",
        id: "A2040522302",
        cgpa: "8.91",
        attendance: "92%",
        email: "afzal.ashraf@s.amity.edu",
        opacId: "1234302",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BCS501", name: "Advanced Data Structures", fraction: "5/5", percentage: "100%" },
            { code: "BCS502", name: "Machine Learning", fraction: "4/4", percentage: "100%" },
            { code: "BCS503", name: "Cloud Computing", fraction: "7/8", percentage: "87.5%" },
            { code: "BCS504", name: "Soft Computing", fraction: "6/6", percentage: "100%" },
            { code: "BCS505", name: "Research Methodology", fraction: "4/4", percentage: "100%" }
        ]
    },
    {
        username: "A2040522303",
        subject: "mtech mechanical",
        password: "123456",
        name: "Mr. FAHMSHAN PP",
        id: "A2040522303",
        cgpa: "6.55",
        attendance: "62%",
        email: "fahmshan.pp@s.amity.edu",
        opacId: "1234303",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BME501", name: "Advanced Thermodynamics", fraction: "3/5", percentage: "60%" },
            { code: "BME502", name: "Finite Element Analysis", fraction: "2/4", percentage: "50%" },
            { code: "BME503", name: "Robotics and Automation", fraction: "5/8", percentage: "62.5%" },
            { code: "BME504", name: "Fluid Mechanics", fraction: "3/6", percentage: "50%" },
            { code: "BME505", name: "Research Methodology", fraction: "2/4", percentage: "50%" }
        ]
    },
    {
        username: "A2040522304",
        subject: "mtech cse",
        password: "123456",
        name: "Ms. DURGA SINGH",
        id: "A2040522304",
        cgpa: "9.23",
        attendance: "98%",
        email: "durga.singh@s.amity.edu",
        opacId: "1234304",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BCS501", name: "Advanced Data Structures", fraction: "5/5", percentage: "100%" },
            { code: "BCS502", name: "Machine Learning", fraction: "4/4", percentage: "100%" },
            { code: "BCS503", name: "Cloud Computing", fraction: "8/8", percentage: "100%" },
            { code: "BCS504", name: "Soft Computing", fraction: "6/6", percentage: "100%" },
            { code: "BCS505", name: "Research Methodology", fraction: "4/4", percentage: "100%" }
        ]
    },
    {
        username: "A2040522305",
        subject: "mtech bio tech",
        password: "123456",
        name: "Mr. MOHIT SINGH RATHORE",
        id: "A2040522305",
        cgpa: "7.14",
        attendance: "70%",
        email: "mohit.rathore@s.amity.edu",
        opacId: "1234305",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BBT501", name: "Advanced Biochemistry", fraction: "3/5", percentage: "60%" },
            { code: "BBT502", name: "Genetic Engineering", fraction: "3/4", percentage: "75%" },
            { code: "BBT503", name: "Bioinformatics", fraction: "6/8", percentage: "75%" },
            { code: "BBT504", name: "Bioprocess Technology", fraction: "4/6", percentage: "66.6%" },
            { code: "BBT505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
    {
        username: "A2040522306",
        subject: "mtech mechanical",
        password: "123456",
        name: "Mr. JOB JACOB",
        id: "A2040522306",
        cgpa: "8.50",
        attendance: "88%",
        email: "job.jacob@s.amity.edu",
        opacId: "1234306",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BME501", name: "Advanced Thermodynamics", fraction: "4/5", percentage: "80%" },
            { code: "BME502", name: "Finite Element Analysis", fraction: "4/4", percentage: "100%" },
            { code: "BME503", name: "Robotics and Automation", fraction: "7/8", percentage: "87.5%" },
            { code: "BME504", name: "Fluid Mechanics", fraction: "5/6", percentage: "83.3%" },
            { code: "BME505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
    {
        username: "A2040522307",
        subject: "mtech cse",
        password: "123456",
        name: "Mr. SHARVAN THAKUR",
        id: "A2040522307",
        cgpa: "7.95",
        attendance: "80%",
        email: "sharvan.thakur@s.amity.edu",
        opacId: "1234307",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BCS501", name: "Advanced Data Structures", fraction: "4/5", percentage: "80%" },
            { code: "BCS502", name: "Machine Learning", fraction: "4/4", percentage: "100%" },
            { code: "BCS503", name: "Cloud Computing", fraction: "7/8", percentage: "87.5%" },
            { code: "BCS504", name: "Soft Computing", fraction: "5/6", percentage: "83.3%" },
            { code: "BCS505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    },
        username: "A2040522308",
        subject: "mtech cse",
        password: "123456",
        name: "Mr. KABIR BINDRA",
        id: "A2040522308",
        cgpa: "8.42",
        attendance: "97%",
        email: "kabir.bindra@s.amity.edu",
        opacId: "1234567",
        opacPassword: "123456",
        attendanceDetails: [
            { code: "BCS501", name: "Advanced Data Structures", fraction: "5/5", percentage: "100%" },
            { code: "BCS502", name: "Machine Learning", fraction: "4/5", percentage: "80%" },
            { code: "BCS503", name: "Cloud Computing", fraction: "8/8", percentage: "100%" },
            { code: "BCS504", name: "Soft Computing", fraction: "5/6", percentage: "83.3%" },
            { code: "BCS505", name: "Research Methodology", fraction: "3/4", percentage: "75%" }
        ]
    }

];

