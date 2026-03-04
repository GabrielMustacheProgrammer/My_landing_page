
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
    { name: 'Comunicação', icon: 'https://cdn-icons-png.flaticon.com/512/8103/8103854.png' },
    { name: 'Gestão do tempo', icon: 'https://cdn-icons-png.flaticon.com/512/201/201652.png' },
    { name: 'Trabalho em equipe', icon: 'https://cdn-icons-png.flaticon.com/512/4859/4859784.png' },
    { name: 'Criatividade', icon: 'https://cdn-icons-png.flaticon.com/512/9439/9439709.png' },
    { name: 'Gestão de equipe', icon: 'https://cdn-icons-png.flaticon.com/512/4168/4168988.png' },
    { name: 'Instrucional', icon: 'https://cdn-icons-png.flaticon.com/512/3471/3471600.png' },
    { name: 'Análise', icon: 'https://cdn-icons-png.flaticon.com/512/3687/3687809.png' },
    { name: 'Flexibilidade', icon: 'https://cdn-icons-png.flaticon.com/512/5201/5201703.png' },
    { name: 'Disponibilidade para viagens', icon: 'https://cdn-icons-png.flaticon.com/512/2060/2060284.png' },
    { name: 'Negociação', icon: 'https://cdn-icons-png.flaticon.com/512/6002/6002984.png' },
    { name: 'Adaptabilidade', icon: 'https://cdn-icons-png.flaticon.com/512/3316/3316286.png' },
    { name: 'Curiosidade intelectual', icon: 'https://cdn-icons-png.flaticon.com/512/6747/6747225.png' },
    { name: 'Aprendizado ágil', icon: 'https://cdn-icons-png.flaticon.com/512/17324/17324171.png' }
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
        year: "2025 - Presente",
        title: "Instrutor Cisco Network Academy (Parceira com Senac)",
        institution: "Cisco Network Academy",
        activities: [
            "Em parceria com o Senac Minas, atuo como instrutor credenciado pela Cisco Networking Academy (NetAcad), com acesso à plataforma oficial para criação e gestão de turmas. Essa parceria permite ministrar cursos nas áreas de Redes, Cibersegurança, Hardware e Programação, incluindo formações preparatórias para certificações como o CCNA."
        ],
        side: "right",
        delay: 0,
        img: ""
    },
    {
        year: "2024 - Presente",
        title: "Professor de TI",
        institution: "Senac Minas",
        activities: [
            "Ensino sobre hardware, montagem e manutenção de computadores:",
            "Windows e Linux, VirtualBox, VMware e Proxmox;",
            "Instalação de softwares e uso do Trello para gestão das equipes;",
            "Uso de multímetros, ferramentas de eletrônica, arduínos e impressora 3D para projetos maker.",
            "Ensino sobre redes e manutenção de redes Cisco:",
            "Cisco Packet Tracer, Linux, Windows, Windows Server, aapanel, XAMPP;",
            "VMware Workstation, Proxmox, Firewall PFSense e Fortinet;",
            "Equipamentos de rede: switches, access points, roteadores, racks e patch panels.",
            "Desenvolvimento de softwares, sites e análise de dados:",
            "Python, SQL Server, Pandas, Matplotlib e Power BI;",
            "PostgreSQL, DBeaver, MariaDB, MySQL Server;",
            "Figma, Penpot, Framer e Canva para prototipagem;",
            "Engenharia de requisitos e uso de IA's como ChatGPT, Lovable, N8N, DeepSeek;",
            "HTML, CSS, JavaScript, PHP, Node, SQL Server e WordPress CMS."
        ],
        side: "left",
        delay: 1,
        img: ""
    },
    {
        year: "2024 - 2025",
        title: "Analista de Sistemas",
        institution: "Stefanini (clientes: Vallourec e Zurich Seguros)",
        activities: [
            "No cliente Zurich Seguros – time de TI Comercial Insurance:",
            "Suporte ao sistema ERP I4PRO (aplicação de pacotes e intermediação com equipe I4PRO);",
            "Uso de SQL Server, DesktopRemote, PowerCenter e Azure DevOps;",
            "Gestão de chamados via WEX (I4PRO) e ServiceNow;",
            "Aplicação de fechamentos mensais e análise de negócios e sistemas.",
            "No cliente Vallourec/VSB:",
            "Manutenção e montagem de computadores, instalação e configuração de softwares;",
            "Suporte a reuniões ao vivo e configuração de usuários via Azure;",
            "Gestão de chamados via ServiceAide."
        ],
        side: "right",
        delay: 2,
        img: ""
    },
    {
        year: "2022 - 2024",
        title: "Técnico em Informática",
        institution: "UNA - Centro Universitário UNA",
        activities: [
            "Montagem e manutenção de computadores e periféricos;",
            "Instalação e manutenção de softwares e suporte a aulas ao vivo;",
            "Gravação de aulas e apoio a visitas do MEC;",
            "Configuração de IPs e inclusão em domínios (Active Directory);",
            "Manutenção de ramais telefônicos e dispositivos de rede;",
            "Abertura de chamados via ServiceNow;",
            "Colaboração com analistas de redes e programadores;",
            "Uso de CMS SharePoint para gestão interna."
        ],
        side: "left",
        delay: 2,
        img: ""
    },
    {
        year: "Nov 2021 (temporário Black Friday)",
        title: "Operador de Loja",
        institution: "Americanas S.A.",
        activities: [
            "Atendimento ao cliente e operação de caixa;",
            "Controle de estoque e reposição de mercadorias;",
            "Trabalho com metas e estratégias de vendas."
        ],
        side: "right",
        delay: 3,
        img: ""
    },
    {
        year: "Out 2021 (temporário – final de ano)",
        title: "Auxiliar de Serviços Gerais",
        institution: "Sartori Serviços / Gerdau Açominas",
        activities: [
            "Checklist de EPIs e inspeção de áreas da Aciaria;",
            "Suporte à segurança durante operações de parada;",
            "Limpeza e organização dos locais de trabalho;",
            "Inspeção de pontes rolantes e procedimentos de evacuação."
        ],
        side: "left",
        delay: 4,
        img: ""
    },
    {
        year: "Out 2021 (temporário – final de ano)",
        title: "Operador de Checkout",
        institution: "Supermercado Brasil",
        activities: [
            "Atendimento ao cliente e controle de estoque;",
            "Abertura e fechamento de caixa;",
            "Logística reversa e entregas domiciliares;",
            "Organização de prateleiras e suporte ao setor de vendas."
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
                <h2>Atividades</h2>
                <ul>
                    ${ativivies}
                </ul>
            </div>
        </div>
    `);
});


const formation = [
    {
        year: "2025 - Em Andamento (2026)",
        title: "Pós-Graduação Lato Sensu em Docência no Ensino Técnico",
        institution: "Universidade Senac",
        disciplines: ["Formação em andamento"],
        side: "right",
        delay: 1,
        img: ""
    },
    {
        year: "2025 - Em andamento (2026)",
        title: "MBA em Business Intelligence",
        institution: "Universidade Descomplica",
        disciplines: [
            "Coleta e Tratamento de Dados (30h)",
            "DataViz (30h)",
            "Python (30h)",
            "Big Data Analytics (30h)",
            "Arquitetura e Modelagem de Dados (30h)",
            "Estratégia e Modelos de Negócios (30h)",
            "Cultura de Dados (30h)",
            "Governança de Dados (30h)"
        ],
        side: "left",
        delay: 2,
        img: ""
    },
    {
        year: "2021 - 2024",
        title: "Graduação em Análise e Desenvolvimento de Sistemas",
        institution: "Centro Universitário Unicesumar",
        disciplines: [
            "Fundamentos e Arquiteturas de Computadores",
            "Gestão de Pessoas e Desenvolvimento de Equipes",
            "Algoritmos e Lógica de Programação 1 (C, Python)",
            "Algoritmos e Lógica de Programação 2 (C, Python)",
            "Design de Interação (Penpot, Figma...)",
            "Lógica para Computação",
            "Engenharia de Software (Scrum, UML)",
            "Banco de Dados (PostgreSQL, SQL Server, MariaDB)",
            "Matemática para Computação",
            "Sistemas Operacionais",
            "Formação Sociocultural e Ética 1",
            "Formação Sociocultural e Ética 2",
            "Estrutura de Dados 1 (C, Python)",
            "Estrutura de Dados 2 (C, Python)",
            "Programação 1 (Java)",
            "Programação 2 (Java)",
            "Programação 3 (Java)",
            "Processos de Negócios (COBIT, ITIL, Governança de TI)",
            "Tópicos Especiais (GitHub...)",
            "Empreendedorismo",
            "Gestão de Projetos",
            "Go – Projeto de Vida",
            "Go – Identificação de Oportunidades",
            "Go – Oportunidade e Resultados"
        ],
        side: "right",
        delay: 3,
        img: ""
    },
    {
        year: "2022 - 2023",
        title: "Curso Técnico em Informática",
        institution: "Senac Minas",
        disciplines: [
            "Montagem e Manutenção de Computadores",
            "Instalação de Hardware e Software para Computadores",
            "Projeto Integrador – Suporte e Manutenção de Computadores",
            "Instalação e Manutenção de Redes Locais de Computadores",
            "Instalação, Configuração e Monitoramento de Sistemas Operacionais de Redes Locais (Servidores, Win Server, Ubuntu Server)",
            "Projeto Integrador – Operação de Redes de Computadores",
            "Concepção, Análise e Planejamento de Desenvolvimento de Software (Python)",
            "Análise e Web Scraping de Dados (Python)",
            "Codificação, Manutenção e Documentação de Aplicativos Computacionais para Desktop e Dispositivos Móveis",
            "Codificação, Manutenção e Documentação de Aplicativos Computacionais para Internet (Sites)",
            "Execução de Testes e Implantação de Aplicativos Computacionais",
            "Desenvolvimento e Organização de Elementos Estruturais de Sites",
            "Manipulação e Otimização de Imagens Vetoriais, Bitmap e Elementos Visuais de Navegação para Web",
            "Projeto Integrador – Desenvolvimento Desktop, Mobile e Web"
        ],
        side: "left",
        delay: 4,

        img: ""
    },
    {
        year: "2016 - 2019",
        title: "Ensino Médio Técnico em Mecânica",
        institution: "Instituto Federal de Minas Gerais IFMG",
        disciplines: [
            "Ensino Médio integrado com curso técnico em mecânica",
            "Língua Portuguesa e Literatura",
            "Matemática",
            "Biologia",
            "Física",
            "Química",
            "História",
            "Geografia",
            "Filosofia",
            "Sociologia",
            "Língua Estrangeira Inglês",
            "Arte",
            "Educação Física",
            "Tecnologia dos Materiais",
            "Desenho Técnico AutoCad",
            "Automação",
            "Processos de Soldagem",
            "Física para Mecânica",
            "Informática"
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
                <h2>Disciplinas</h2>
                <ul>
                    ${disciplinasHTML}
                </ul>
            </div>
        </div>
    `);
});

const certificates = [
    {
        name: "Desenvolvimento Seguro",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso sobre utilização de práticas e verificações de códigos em busca de vulnerabilidades por meio do SonarQube.",
        img: ""
    },
    {
        name: "Design Thinking",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso focado na metodologia Design Thinking com ênfase em empatia, definição, ideação e prototipagem centrada no usuário.",
        img: ""
    },
    {
        name: "Power BI",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso introdutório sobre uso de dashboards e visualização de dados no Power BI.",
        img: ""
    },
    {
        name: "Prompt para ChatGPT",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Boas práticas de escrita de prompts, técnicas avançadas e conceitos de temperatura e top-p.",
        img: ""
    },
    {
        name: "Criação de Prompts - SAI APP",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre criação de prompts otimizados para IA no aplicativo SAI APP.",
        img: ""
    },
    {
        name: "Fundamentos Design Gráfico",
        institution: "Fundação Bradesco",
        year: 2024,
        description: "Curso de fundamentos de design gráfico e composição visual.",
        img: ""
    },
    {
        name: "Gestão Inteligente de Tempo",
        institution: "Workover Academy",
        year: 2024,
        description: "Gestão e priorização de tarefas, produtividade e foco pessoal.",
        img: ""
    },
    {
        name: "Negociação Estratégica",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre técnicas e estratégias de negociação corporativa.",
        img: ""
    },
    {
        name: "Negociações Eficazes",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso sobre técnicas de comunicação e persuasão em negociações.",
        img: ""
    },
    {
        name: "Scrum",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso introdutório sobre metodologia ágil Scrum e seus papéis, artefatos e eventos.",
        img: ""
    },
    {
        name: "TypeScript do Básico ao Avançado",
        institution: "Workover Academy",
        year: 2024,
        description: "Curso completo de TypeScript com fundamentos, tipos, classes e integração com frameworks.",
        img: ""
    },
    {
        name: "Mindset",
        institution: "Stefanini Brasil",
        year: 2024,
        description: "Curso sobre mentalidade de crescimento e comportamento profissional.",
        img: ""
    },
    {
        name: "Análise de Dados com Microsoft Power BI",
        institution: "BHS",
        year: 2023,
        description: "Curso sobre criação de dashboards e relatórios interativos no Power BI.",
        img: ""
    },
    {
        name: "Instrutor Python — Programando com Games",
        institution: "Centro Universitário Una",
        year: 2023,
        description: "Atuação como instrutor no curso de programação com games usando Python.",
        img: ""
    },
    {
        name: "AWS Educate: Introduction to Cloud 101",
        institution: "Amazon Web Services (AWS)",
        year: 2023,
        description: "Introdução à computação em nuvem com AWS Educate.",
        img: ""
    },
    {
        name: "Introdução à Análise de Dados - Microsoft Power BI",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Curso introdutório de análise de dados com Power BI.",
        img: ""
    },
    {
        name: "Segurança em Tecnologia da Informação",
        institution: "Fundação Bradesco",
        year: 2023,
        description: "Conceitos básicos de segurança digital, redes e proteção de dados.",
        img: ""
    },
    {
        name: "Facilitador do Curso de Operação de Informática Básica",
        institution: "Centro Universitário Una",
        year: 2022,
        description: "Certificação de facilitador no curso de operação de informática básica.",
        img: ""
    },
    {
        name: "Get Connected",
        institution: "Cisco Networking Academy",
        year: 2022,
        description: "Curso introdutório de redes e sistemas operacionais Windows.",
        img: ""
    },
    {
        name: "Operação de Checkout",
        institution: "Supermercado Brasil",
        year: 2020,
        description: "Treinamento em operação de caixa e atendimento ao cliente.",
        img: ""
    },
    {
        name: "Assiduidade — Exército Brasileiro",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Reconhecimento por assiduidade e disciplina exemplar.",
        img: ""
    },
    {
        name: "Honra ao Mérito — Exército Brasileiro",
        institution: "Exército Brasileiro",
        year: 2018,
        description: "Reconhecimento por destaque em desempenho e conduta.",
        img: ""
    },
    {
        name: "XII Jornada de Foguetes da MOBFOG",
        institution: "OBAFOG, SAB e AEB ",
        year: 2017,
        description: "Participação na competição nacional de foguetes com medalha de bronze.",
        img: ""
    },
    {
        name: "Especialista AutoCAD",
        institution: "Compuway",
        year: 2015,
        description: "Curso profissional de AutoCAD com práticas de modelagem e desenho técnico.",
        img: ""
    },
    {
        name: "Programa Vamos Falar de Ética",
        institution: "JA Brasil",
        year: 2015,
        description: "Curso sobre valores éticos e responsabilidade social no ambiente profissional.",
        img: ""
    },
    {
        name: "Programa As Vantagens de Permanecer na Escola",
        institution: "JA Brasil",
        year: 2014,
        description: "Programa educacional sobre a importância da continuidade dos estudos.",
        img: ""
    }
];


certificates.forEach(cert => {
    document.querySelector(".certificates-container").insertAdjacentHTML('beforeend', `
    
        <div class="certificate-card fade-in">
            <h3>${cert.name}</h3>
            <p class="institution_certi"><strong>Instituição:</strong> ${cert.institution} <img class="img_icons" src="${cert.img}" alt=""></p>
            <p><strong>Ano:</strong> ${cert.year}</p>
            <p class="cert_desc">${cert.description}</p>
        </div>

    `);
});

feather.replace();