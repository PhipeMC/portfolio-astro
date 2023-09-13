import GitImage from "../assets/sql-judge-image.jpg";

const technologies = [
    {
        name: "HTML",
        icon: "vscode-icons:file-type-html",
    },
    {
        name: "CSS",
        icon: "vscode-icons:file-type-css",
    },
    {
        name: "JavaScript",
        icon: "logos:javascript",
    },
    {
        name: "ReactJS",
        icon: "vscode-icons:file-type-reactjs",
    },
    {
        name: "Astro",
        icon: "vscode-icons:file-type-astro",
    },
    {
        name: "Bootstrap",
        icon: "logos:bootstrap",
    },
    {
        name: "Tailwind",
        icon: "vscode-icons:file-type-tailwind",
    },
    {
        name: "MySQL",
        icon: "vscode-icons:file-type-mysql",
    },
    {
        name: "Git",
        icon: "vscode-icons:file-type-git",
    },
    {
        name: "Github",
        icon: "mdi:github",
    },
]

const education = [
    {
        title: "General High School",
        institution: "Escuela de Nivel Medio Superior de Moroleón",
        city: "Moroleon",
        country: "Mexico",
        initialYear: 2015,
        finishYear: 2018
    },
    {
        title: "Computer Systems Engineer",
        institution: "TECNM Sur Guanajuato Campus",
        city: "Uriangato",
        country: "Mexico",
        initialYear: 2018,
        finishYear: 2023
    },
]

const projects = [
    {
        name: "SQL Judge",
        description: "Web app to practice SQL languaje build with HTML, CSS, JavaScript, PHP, Bootstrap and MySQL.",
        tags: [
            {
                name: "HTML",
                color: "text-white",
                background: 'bg-orange-600'
            },
            {
                name: "CSS",
                color: "text-white",
                background: 'bg-blue-700'
            },
            {
                name: "JavaScript",
                color: "text-black",
                background: 'bg-yellow-400'
            },
            {
                name: "PHP",
                color: "text-black",
                background: 'bg-indigo-400'
            },
            {
                name: "Rest API",
                color: "text-white",
                background: 'bg-green-600'
            },
            {
                name: "Bootstrap",
                color: "text-white",
                background: 'bg-purple-700'
            },
            {
                name: "MySQL",
                color: "text-white",
                background: 'bg-sky-900'
            },
            {
                name: "Schoolar Project",
                color: "text-white",
                background: 'bg-rose-600'
            },
        ],
        image: GitImage,
        source_link: undefined
    },
    {
        name: "Dental software",
        description: "Web app to practice SQL languaje build with HTML, CSS, JavaScript, PHP, Bootstrap and MySQL.",
        tags: [
            {
                name: "ReactJS",
                color: "text-black",
                background: 'bg-sky-400'
            },
            {
                name: "CSS",
                color: "text-white",
                background: 'bg-blue-700'
            },
            {
                name: "Bootstrap",
                color: "text-white",
                background: 'bg-purple-700'
            },
        ],
        image: GitImage,
        source_link: undefined
    },
    {
        name: "Recognition of errors in clothing using AI",
        description: "AI model trained with TensorFlow and Python than detect defects in clothing with a camera in real time.",
        tags: [
            {
                name: "Phyton",
                color: "text-white",
                background: 'bg-yellow-600'
            },
            {
                name: "Tensorflow",
                color: "text-white",
                background: 'bg-orange-500'
            },
            {
                name: "Raspberry PI",
                color: "text-white",
                background: 'bg-red-600'
            },
            {
                name: "AI",
                color: "text-white",
                background: 'bg-blue-600'
            },
            {
                name: "Schoolar Project",
                color: "text-white",
                background: 'bg-rose-600'
            },
        ],
        image: GitImage,
        source_link: undefined
    },
]



export { education, projects, technologies };

