import LaptopIcon from '@mui/icons-material/Laptop';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';

export const config = {
    drawer: {
        width: 240,
    },
    fullname: "Jessie Brian Revil",
    title: "Jessie Brian Revil",
    links: [
        {
            text: 'Experiences',
            path: '/experiences',
            icon: LaptopIcon,
        },
        {
            text: 'Skills',
            path: '/skills',
            icon: LightbulbIcon,
        },
        {
            text: 'Connect',
            path: '/connect',
            icon: LinkIcon,
        },
        {
            text: 'About',
            path: '/about',
            icon: InfoIcon,
        }
    ]
};

export const home = {
    title: "Hi! I'm Jessie",

}

export const experiences = {
    title: "Experiences",
    contents: [
        {
            date: "Dec 2018 - present",
            icon: LaptopIcon,
            title: "Hong Leong Bank",
            subtitle: "Java Developer",
            link: "https://www.hlb.com.my",
            description: "Enhanced Client Facing Retail Internet Banking Web Application. Built Branch Remittance Web Application from ground-up",
        },
        {
            date: "Apr 2018 – Nov 2018",
            icon: LaptopIcon,
            title: "TrustArc",
            subtitle: "Analyst Programmer",
            link: "https://trustarc.com/",
            description: "Enhancement on Online Behavioral Advertising, Cookie Consents Web Application Portal, and GDPR Webhooks Services"
        },
        {
            date: "Jun 2014 - Mar 2018",
            icon: LaptopIcon,
            title: "Alliance Software Inc",
            subtitle: "Senior Technical Specialist I",
            link: "https://www.alliance.com.ph/index.html",
            description: "Developed and managed cutting edge software solutions for several Japanese Companies. Responsibilities also include unit testing and maintenance.",
        },
        {
            date: "April 2013 – May 2013",
            icon: LaptopIcon,
            title: "Ingenuity Global Consulting, Inc.",
            subtitle: "Intern",
            link: "https://www.ingenuity.ph/",
            description: "Developed a Book Sharing Django Python Web Application",
        },
    ]
};

export const skills = {
    title: 'Skills',
    certifications: [
        {
            title: 'Oracle Certified Associate',
            link: 'https://www.credly.com/badges/e83285e4-7ec2-40cf-ade0-a298ae4f1b79',
        },
        {
            title: 'Oracle Certified Professional',
            link: 'https://www.credly.com/badges/00e2bd5c-3a37-46b4-b6e2-20532e6165d0',
        },
    ],
    technologies: [
        {
            title: "Java",
            link: 'https://www.java.com/en/',
        },
        {
            title: "HTML",
            link: 'https://html.spec.whatwg.org/multipage/',
        },
        {
            title: "CSS",
            link: 'https://www.w3.org/Style/CSS/Overview.en.html',
        },
        {
            title: "SVN",
            link: 'https://subversion.apache.org/',
        },
        {
            title: "GIT",
            link: 'https://git-scm.com/',
        },
        {
            title: "Oracle DB",
            link: 'https://www.oracle.com/database/',
        },
        {
            title: "J2EE",
            link: 'https://www.oracle.com/java/technologies/appmodel.html',
        },
        {
            title: "Spring",
            link: 'https://spring.io/',
        },
        {
            title: "Thymeleaf",
            link: 'https://www.thymeleaf.org/',
        },
        {
            title: "Hibernate",
            link: 'https://hibernate.org/',
        },
        {
            title: "Mybatis",
            link: 'https://mybatis.org/mybatis-3/',
        },
        {
            title: "Javascript",
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
            title: "MySQL",
            link: 'https://www.mysql.com/',
        },
        {
            title: "Spring Web Flow",
            link: 'https://spring.io/projects/spring-webflow',
        },
        {
            title: "Primefaces",
            link: 'https://www.primefaces.org/',
        },
        {
            title: "IBM WebSphere",
            link: 'https://www.ibm.com/products/websphere-application-server',
        },
        {
            title: "SOAP",
            link: 'https://www.w3schools.com/xml/xml_soap.asp',
        },
        {
            title: "JUnit",
            link: 'https://junit.org/',
        },
        {
            title: "REST",
            link: 'https://w3.org/2001/sw/wiki/REST',
        },
        {
            title: "Swagger",
            link: 'https://swagger.io/',
        },
        {
            title: "JSF",
            link: 'https://www.oracle.com/java/technologies/javaserverfaces.html',
        },
        {
            title: "JBoss",
            link: 'https://www.jboss.org/',
        },
        {
            title: "Geb",
            link: 'https://www.gebish.org/',
        },
        {
            title: "Groovy",
            link: 'https://groovy-lang.org/',
        },
        {
            title: "Node.js",
            link: 'https://nodejs.org/en/',
        },
        {
            title: "React",
            link: 'https://reactjs.org/',
        },
        {
            title: "React Router",
            link: 'https://reactrouter.com/en/main',
        },
        {
            title: "React Redux",
            link: 'https://react-redux.js.org/',
        },
        {
            title: "SASS",
            link: 'https://sass-lang.com/',
        },
        {
            title: "TypeScript",
            link: 'https://www.typescriptlang.org//',
        },
        {
            title: "Python",
            link: 'https://www.python.org/',
        },
        {
            title: "Selenium",
            link: 'https://www.selenium.dev/',
        },
        {
            title: "GWT",
            link: 'https://www.gwtproject.org/',
        },
        {
            title: "PostgreSQL",
            link: 'https://www.postgresql.org/',
        },
        {
            title: "SQLite",
            link: 'https://www.sqlite.org/index.html',
        },
    ]
};


export const connect = {
    title: "Let's Connect",
    message: "Hello! 👋 Let's begin by selecting from the topics below.",
    default: {
        text: '',
        keywords: [],
        answer: "I'm sorry. I didn't quite catch that.",
        options: {}
    },
    default2: {

        text: '',
        keywords: [],
        answer: "Let's begin by selecting from the topics below.",
        options: { widget: "options", delay: 1500 }
    },
    connects: ['email', 'linkedin', 'github', 'stackoverflow', 'hackerrank'],
    context: [
        {
            text: 'email',
            keywords: ['email', 'email address', 'mail'],
            answer: 'Here you go',
            options: { widget: "card" },
            card: {
                header: 'eMail',
                content: 'jessie.revil04@gmail.com',
                subcontent: 'Send me a message using this email. I will try my best to respond the soonest possible. 😁',
                link: 'mailto:jessie.revil04@gmail.com',
            },
        },
        {
            text: 'linkedin',
            keywords: ['linkedin', 'socmed', 'social network'],
            answer: 'Here you go',
            options: { widget: "card" },
            card: {
                header: 'LinkedIn',
                content: 'jessie-brian-revil',
                subcontent: 'Visit, ping, or send me a connect invite. 😎',
                link: 'https://www.linkedin.com/in/jessie-brian-revil/',
            },
        },
        {
            text: 'github',
            keywords: ['github', 'git', 'projects'],
            answer: 'Here you go',
            options: { widget: "card" },
            card: {
                header: 'GitHub',
                content: 'jessierevil04',
                subcontent: 'This is the repository for my public personal projects. 🤭',
                link: 'https://github.com/jessierevil04',
            },
        },
        {
            text: 'stackoverflow',
            keywords: ['stackoverflow', 'stack', 'overflow'],
            answer: 'Here you go',
            options: { widget: "card" },
            card: {
                header: 'Stack Overflow',
                content: 'jessie-brian-revil',
                subcontent: "You may check my Stack Overflow activities from here 😬",
                link: 'https://stackoverflow.com/users/7187887/jessie-brian-revil',
            },
        },
        {
            text: 'hackerrank',
            keywords: ['hackerrank', 'Hacker Rank', 'Hacker', 'Rank'],
            answer: 'Here you go',
            options: { widget: "card" },
            card: {
                header: 'Hacker Rank',
                content: 'jessie_revil04',
                subcontent: "I sometimes solve some programming challenges here 🤓",
                link: 'https://www.hackerrank.com/jessie_revil04',
            }
        },
        {
            text: 'hello',
            keywords: ['hello', 'start', 'reset'],
            answer: "Hello! 👋 Let's begin by selecting from the topics below.",
            options: { widget: "options" }
        },
        {
            text: 'hi',
            keywords: ['hi'],
            answer: "Hi! 👋 Let's begin by selecting from the topics below.",
            options: { widget: "options" }
        },
        {
            text: 'name',
            keywords: ['name'],
            answer: "Hi! 👋 I am Jessie Brian Revil. Know me more by selecting from the topics below.",
            options: { widget: "options" }
        },
        {
            text: 'name',
            keywords: ['name'],
            answer: "Hi! 👋 I am Jessie Brian Revil. Know me more by selecting from the topics below.",
            options: { widget: "options" }
        },
    ],
};

export const about = {
    title: "About Me",
    content: [
        {
            title: "<Choice/>",
            content: [
                "Back when I was about to decide on which major in college should I take, making decision is a struggle. Should I take Dentistry, same as my mother? Or should I take Pharmaceutical Sciences, same path as my father? Additionally, due to popularity at that time, I included Bachelor of Science in Nursing in one of my selections. From these healthcare career options, I decided to take Computer Science.",
                "I have learned in my early age that decisions should be made with care. One thing I know of myself is that memorization is my weakness. I also know that I enjoy problem solving in my math and programming classes back in high school. Having these variables made me lean to a decision to take a course that relates to these subjects.",
            ],
        },
        {
            title: "<Career/>",
            content: [
                "From my years working with several companies, I have experienced enhancing some existing projects, building projects from ground-up, and doing research and development with working prototype. Several combinations of programming languages and technologies were used for these projects. Majority of my work focus on web development applications; some are in-house, and some are client-facing applications.",
                "An outsourcing company, providing services to their Japanese Clients, became my first employer. It was a challenging experience to work having instructions and deliverables in Japanese. I am commending my previous employer for I have adopted the Japanese work culture that now propels my professional career.",
                "I am now working for one of the leading banks in Malaysia. I am proud to be one of the developers of our Internet Banking System, specifically the remittance services. Working with this company expands my understanding on the domain of financial technology. It can be intimidating working with an enterprise project, but having a solid foundation and a good set of teams will absolutely produce a jubilant career.",
            ],
        },
        {
            title: "<Lifestyle/>",
            content: [
                "One cannot deny that Computer Programming is a key element of my life. There was a time when I enjoy providing answers in Stack Overflow questions, or had raised issue in one of the GitHub projects. Outside of programming, watching movie or tv series is a good stress reliever.  I am entertained by Marvel’s MEU, and multi-awarded movies. Moreover, I start my day by keeping myself healthy though doing some routines in our gym.",
            ]
        },
        {
            title: "<Growth/>",
            content: [
                "I have a physical Kanban board that lists my short- and long-term plans. This helps me visualize myself in the future, and for me to create a realistic process to make my goals obtainable. I review my knowledge through occasionally solving programming problems on some of the online technical assessment websites. The technologies used by my employers are very limited, and for me to expand my technological stack, I sometimes create small personal projects using technologies I haven’t tried before. It is a fact that technologies kept on updating. Thus, it is important to invest on oneself to keep up with the changes."
            ],
        },
    ],
};


