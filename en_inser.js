
const hardskills = [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PowerBI', icon: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000' },
    { name: 'Pandas', icon: 'https://pandas.pydata.org/static/img/pandas_mark.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'DBeaver', icon: 'https://img.icons8.com/?size=100&id=kjaF4LlvyR6g&format=png&color=000000' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
];

const softskills = [
    { name: 'Communication', icon: 'https://cdn-icons-png.flaticon.com/512/8103/8103854.png' },
    { name: 'Time Management', icon: 'https://cdn-icons-png.flaticon.com/512/201/201652.png' },
    { name: 'Teamwork', icon: 'https://cdn-icons-png.flaticon.com/512/4859/4859784.png' },
    { name: 'Creativity', icon: 'https://cdn-icons-png.flaticon.com/512/9439/9439709.png' },
    { name: 'Team Leadership', icon: 'https://cdn-icons-png.flaticon.com/512/4168/4168988.png' },
    { name: 'Instructional', icon: 'https://cdn-icons-png.flaticon.com/512/3471/3471600.png' },
    { name: 'Analysis', icon: 'https://cdn-icons-png.flaticon.com/512/3687/3687809.png' },
    { name: 'Flexibility', icon: 'https://cdn-icons-png.flaticon.com/512/5201/5201703.png' },
    { name: 'Willingness to Travel', icon: 'https://cdn-icons-png.flaticon.com/512/2060/2060284.png' },
    { name: 'Negotiation', icon: 'https://cdn-icons-png.flaticon.com/512/6002/6002984.png' },
    { name: 'Adaptability', icon: 'https://cdn-icons-png.flaticon.com/512/3316/3316286.png' },
    { name: 'Intellectual Curiosity', icon: 'https://cdn-icons-png.flaticon.com/512/6747/6747225.png' },
    { name: 'Agile Learning', icon: 'https://cdn-icons-png.flaticon.com/512/17324/17324171.png' }
];

const ticker_hard = document.getElementById('ticker_hard');
const ticker_soft = document.getElementById('ticker_soft');

// Add all tech items twice to create seamless infinite scrolling
function populateTicker() {
    hardskills.forEach(tech => {
        ticker_hard.appendChild(createTechItem(tech));
    });

    // Add duplicates for seamless scrolling
    hardskills.forEach(tech => {
        ticker_hard.appendChild(createTechItem(tech));
    });

    softskills.forEach(tech => {
        ticker_soft.appendChild(createTechItem(tech));
    });

    // Add duplicates for seamless scrolling
    softskills.forEach(tech => {
        ticker_soft.appendChild(createTechItem(tech));
    });
}

function createTechItem(tech) {
    const item = document.createElement('div');
    item.className = 'tech-item';

    const icon = document.createElement('img');
    icon.className = 'tech-icon';
    icon.src = tech.icon;
    icon.alt = tech.name + ' icon';

    const name = document.createElement('span');
    name.className = 'tech-name';
    name.textContent = tech.name;

    item.appendChild(icon);
    item.appendChild(name);

    return item;
}

populateTicker();



const experience = [
    {
        year: "2025 - Present",
        title: "Cisco Network Academy Instructor (Partner with Senac)",
        institution: "Cisco Network Academy",
        activities: [
            "In partnership with Senac Minas, I work as an instructor accredited by Cisco Networking Academy (NetAcad), with access to the official platform for creating and managing classes. This partnership allows me to teach courses in Networks, Cybersecurity, Hardware, and Programming, including preparatory training for certifications such as CCNA."
        ],
        side: "right",
        delay: 0,
        img: ""
    },
    {
        year: "2024 - Present",
        title: "IT Professor",
        institution: "Senac Minas",
        activities: [
            "Teaching hardware, computer assembly and maintenance:",
            "Windows and Linux, VirtualBox, VMware, and Proxmox;",
            "Software installation and use of Trello for team management;",
            "Use of multimeters, electronics tools, Arduinos, and 3D printers for maker projects."
        ],
        side: "left",
        delay: 1,
        img: ""
    },
    {
        year: "2024 - 2025",
        title: "Systems Analyst",
        institution: "Stefanini (clients: Vallourec and Zurich Seguros)",
        activities: [
            "Support for ERP I4PRO system;",
            "Use of SQL Server and Azure DevOps;",
            "Ticket management via ServiceNow."
        ],
        side: "right",
        delay: 2,
        img: ""
    },
    {
        year: "2022 - 2024",
        title: "IT Technician",
        institution: "UNA - Centro Universitário UNA",
        activities: [
            "Assembly and maintenance of computers and peripherals;",
            "IP configuration and Active Directory;",
            "Ticket creation via ServiceNow."
        ],
        side: "left",
        delay: 2,
        img: ""
    },
    {
        year: "Nov 2021 (temporary Black Friday)",
        title: "Store Operator",
        institution: "Americanas S.A.",
        activities: [
            "Customer service and cashier operation;",
            "Stock control and merchandise replenishment."
        ],
        side: "right",
        delay: 3,
        img: ""
    },
    {
        year: "Oct 2021 (temporary – end of year)",
        title: "General Services Assistant",
        institution: "Sartori Serviços / Gerdau Açominas",
        activities: [
            "PPE checklist and inspection;",
            "Safety support during shutdown operations."
        ],
        side: "left",
        delay: 4,
        img: ""
    },
    {
        year: "Oct 2021 (temporary – end of year)",
        title: "Checkout Operator",
        institution: "Supermercado Brasil",
        activities: [
            "Customer service and stock control;"
        ],
        side: "right",
        delay: 5,
        img: ""
    }
];

experience.forEach(cert => {
    const ativivies = cert.activities.map(d => `<li>${d}</li>`).join('');

    document.querySelector('.jobs_timeline').insertAdjacentHTML('beforeend', `
        <div class="timeline-item ${cert.side} fade-in ${cert.delay}">
            <div class="timeline-content">
                <div class="timeline-date">
                    <i data-feather="calendar" style="margin-right: 5px;"></i> ${cert.year}
                </div>
                <h3>${cert.title}</h3>
                <h4 class="institution_certi" >${cert.institution} <img class="img_icons" src=${cert.img}></h4>
                <h2>Activities</h2>
                <ul>
                    ${ativivies}
                </ul>
            </div>
        </div>
    `);
});


const formation = [
    {
        year: "2025 - Ongoing (2026)",
        title: "Postgraduate Lato Sensu in Teaching in Technical Education",
        institution: "University Senac",
        disciplines: ["Ongoing course"],
        side: "right",
        delay: 1,
        img: ""
    },
    {
        year: "2025 - Ongoing (2026)",
        title: "MBA in Business Intelligence",
        institution: "University Descomplica",
        disciplines: [
            "Data Collection and Treatment (30h)",
            "Data Visualization (30h)",
            "Python (30h)",
            "Big Data Analytics (30h)",
            "Data Architecture and Modeling (30h)",
            "Business Strategy and Models (30h)",
            "Data Culture (30h)",
            "Data Governance (30h)"
        ],
        side: "left",
        delay: 2,
        img: ""
    },
    {
        year: "2021 - 2024",
        title: "Bachelor's Degree in Systems Analysis and Development",
        institution: "Center University Unicesumar",
        disciplines: [
            "Computer Fundamentals and Architectures",
            "People Management and Team Development",
            "Programming and Algorithms 1 (C, Python)",
            "Programming and Algorithms 2 (C, Python)",
            "Interaction Design (Penpot, Figma...)",
            "Logic for Computing",
            "Software Engineering (Scrum, UML)",
            "Databases (PostgreSQL, SQL Server, MariaDB)",
            "Mathematics for Computing",
            "Operating Systems",
            "Sociocultural and Ethics Training 1",
            "Sociocultural and Ethics Training 2",
            "Data Structures 1 (C, Python)",
            "Data Structures 2 (C, Python)",
            "Programming 1 (Java)",
            "Programming 2 (Java)",
            "Programming 3 (Java)",
            "Business Processes (COBIT, ITIL, IT Governance)",
            "Special Topics (GitHub...)",
            "Entrepreneurship",
            "Project Management",
            "Go – Life Project",
            "Go – Opportunity Identification",
            "Go – Opportunity and Results"
        ],
        side: "right",
        delay: 3,
        img: ""
    },
    {
        year: "2022 - 2023",
        title: "Technical Course in Computer Science",
        institution: "Senac Minas",
        disciplines: [
            "Computer Assembly and Maintenance",
            "Hardware and Software Installation for Computers",
            "Integrator Project – Computer Support and Maintenance",
            "Installation and Maintenance of Local Computer Networks",
            "Installation, Configuration, and Monitoring of Operating Systems for Local Networks (Servers, Win Server, Ubuntu Server)",
            "Integrator Project – Computer Network Operation",
            "Software Development Planning and Analysis (Python)",
            "Data Analysis and Web Scraping (Python)",
            "Desktop and Mobile Application Coding, Maintenance, and Documentation",
            "Web Application Coding, Maintenance, and Documentation (Sites)",
            "Application Testing and Deployment",
            "Development and Organization of Website Structural Elements",
            "Manipulation and Optimization of Vector, Bitmap, and Navigation Visual Elements for Web",
            "Integrator Project – Desktop, Mobile, and Web Development"
        ],
        side: "left",
        delay: 4,
        img: ""
    },
    {
        year: "2016 - 2019",
        title: "Technical High School in Mechanics",
        institution: "Federal Institute of Minas Gerais IFMG",
        disciplines: [
            "High School integrated with technical course in mechanics",
            "Portuguese Language and Literature",
            "Mathematics",
            "Biology",
            "Physics",
            "Chemistry",
            "History",
            "Geography",
            "Philosophy",
            "Sociology",
            "Foreign Language English",
            "Art",
            "Physical Education",
            "Materials Technology",
            "Technical Drawing AutoCAD",
            "Automation",
            "Welding Processes",
            "Physics for Mechanics",
            "Computer Science"
        ],
        side: "right",
        delay: 5,
        img: ""
    }
];


formation.forEach(cert => {
    const disciplinasHTML = cert.disciplines.map(d => `<li>${d}</li>`).join('');

    document.querySelector('.education_timeline').insertAdjacentHTML('beforeend', `
        <div class="timeline-item ${cert.side} fade-in ${cert.delay}">
            <div class="timeline-content">
                <div class="timeline-date">
                    <i data-feather="calendar" style="margin-right: 5px;"></i> ${cert.year}
                </div>
                <h3>${cert.title}</h3>
                <h4 class="institution_certi" >${cert.institution} <img class="img_icons" src=${cert.img}></h4>
                <h2>Disciplines</h2>
                <ul>
                    ${disciplinasHTML}
                </ul>
            </div>
        </div>
    `);
});

const certificates = [
    {
        name: "Secure Development",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course on using code practices and checks to identify vulnerabilities through SonarQube.",
        img: ""
    },
    {
        name: "Design Thinking",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course focused on the Design Thinking methodology with emphasis on empathy, definition, ideation, and user-centered prototyping.",
        img: ""
    },
    {
        name: "Power BI",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Introductory course on using dashboards and data visualization in Power BI.",
        img: ""
    },
    {
        name: "ChatGPT Prompting",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Best practices for writing prompts, advanced techniques, and concepts of temperature and top-p.",
        img: ""
    },
    {
        name: "Prompt Creation - SAI APP",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on creating optimized AI prompts for the SAI APP application.",
        img: ""
    },
    {
        name: "Graphic Design Fundamentals",
        institution: "Fundação Bradesco",
        year: 2024,
        description: "Course on graphic design fundamentals and visual composition.",
        img: ""
    },
    {
        name: "Smart Time Management",
        institution: "Workover Academy",
        year: 2024,
        description: "Managing and prioritizing tasks, productivity, and personal focus.",
        img: ""
    },
    {
        name: "Strategic Negotiation",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on corporate negotiation techniques and strategies.",
        img: ""
    },
    {
        name: "Effective Negotiations",
        institution: "Workover Academy",
        year: 2024,
        description: "Course on communication and persuasion techniques in negotiations.",
        img: ""
    },
    {
        name: "Scrum",
        institution: "Workover Academy",
        year: 2024,
        description: "Introductory course on Agile Scrum methodology, including its roles, artifacts, and events.",
        img: ""
    },
    {
        name: "TypeScript from Basic to Advanced",
        institution: "Workover Academy",
        year: 2024,
        description: "Comprehensive TypeScript course covering fundamentals, types, classes, and framework integration.",
        img: ""
    },
    {
        name: "Mindset",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Course on growth mindset and professional behavior.",
        img: ""
    },
    {
        name: "Data Analysis with Microsoft Power BI",
        institution: "BHS",
        year: 2023,
        description: "Course on creating interactive dashboards and reports in Power BI.",
        img: ""
    },
    {
        name: "Python Instructor — Programming with Games",
        institution: "Centro Universitário Una",
        year: 2023,
        description: "Served as instructor in a Python game programming course.",
        img: ""
    },
    {
        name: "AWS Educate: Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        year: 2023,
        description: "Introduction to cloud computing with AWS Educate.",
        img: ""
    },
    {
        name: "Introduction to Data Analysis - Microsoft Power BI",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Introductory course on data analysis with Power BI.",
        img: ""
    },
    {
        name: "Information Technology Security",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Basic concepts of digital security, networks, and data protection.",
        img: ""
    },
    {
        name: "Basic Computer Operations Facilitator",
        institution: "Centro Universitário Una",
        year: 2022,
        description: "Certification as a facilitator in basic computer operations course.",
        img: ""
    },
    {
        name: "Get Connected",
        institution: "Cisco Networking Academy",
        year: 2022,
        description: "Introductory course on networking and Windows operating systems.",
        img: ""
    },
    {
        name: "Checkout Operation",
        institution: "Supermercado Brasil",
        year: 2020,
        description: "Training in cashier operation and customer service.",
        img: ""
    },
    {
        name: "Attendance — Brazilian Army",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Recognition for exemplary attendance and discipline.",
        img: ""
    },
    {
        name: "Honors of Merit — Brazilian Army",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Recognition for outstanding performance and conduct.",
        img: ""
    },
    {
        name: "XII MOBFOG Rocket Journey",
        institution: "OBAFOG, SAB e AEB",
        year: 2017,
        description: "Participation in the national rocket competition with bronze medal.",
        img: ""
    },
    {
        name: "AutoCAD Specialist",
        institution: "Compuway",
        year: 2015,
        description: "Professional AutoCAD course with modeling and technical drawing practices.",
        img: ""
    },
    {
        name: "Let's Talk Ethics Program",
        institution: "JA Brasil",
        year: 2015,
        description: "Course on ethical values and social responsibility in the professional environment.",
        img: ""
    },
    {
        name: "The Advantages of Staying in School Program",
        institution: "JA Brasil",
        year: 2014,
        description: "Educational program on the importance of continuing studies.",
        img: ""
    }
];


certificates.forEach(cert => {
    document.querySelector(".certificates-container").insertAdjacentHTML('beforeend', `
    
        <div class="certificate-card fade-in">
            <h3>${cert.name}</h3>
            <p class="institution_certi"><strong>Institution:</strong> ${cert.institution} <img class="img_icons" src="${cert.img}" alt=""></p>
            <p><strong>Year:</strong> ${cert.year}</p>
            <p class="cert_desc">${cert.description}</p>
        </div>

    `);
});

feather.replace();