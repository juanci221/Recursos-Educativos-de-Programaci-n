// Data structures remain the same as in your original code
const courses = [ 
    
    {
        title: "freeCodeCamp - Responsive Web Design",
        platform: "freeCodeCamp",
        description: "Aprende HTML y CSS desde cero mediante proyectos prácticos.",
        url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        level: "Principiante",
        category: "Desarrollo Web"
    },
    {
        title: "JavaScript.info - El Lenguaje JavaScript Moderno",
        platform: "JavaScript.info",
        description: "Documentación y tutoriales completos sobre JavaScript.",
        url: "https://es.javascript.info/",
        level: "Intermedio",
        category: "Desarrollo Web"
    },
    {
        title: "¡Aprovecha!",
        platform: "Mercado-Pago",
        description: "Te regalo *36% de descuento para que compres tu máquina Point Smart",
        url: "https://mpago.li/2tEJ6n5",
        level: "Descuento ",
        category: "Publicidad"
    },
    {
        title: "The Odin Project - Desarrollo Full Stack",
        platform: "The Odin Project",
        description: "Curso gratuito y completo de desarrollo web full stack.",
        url: "https://www.theodinproject.com/paths/full-stack-javascript",
        level: "Intermedio",
        category: "Desarrollo Web"
    },
    {
        title: "Full Stack Open",
        platform: "Universidad de Helsinki",
        description: "Curso profundo sobre desarrollo web moderno con React, Node.js, Express y MongoDB.",
        url: "https://fullstackopen.com/es/",
        level: "Intermedio",
        category: "Desarrollo Web"
    },
    {
        title: "Curso de TypeScript",
        platform: "TypeScript",
        description: "Manual oficial y tutoriales para aprender TypeScript desde cero.",
        url: "https://www.typescriptlang.org/docs/handbook/intro.html",
        level: "Intermedio",
        category: "Desarrollo Web"
    },
  
    {
        title: "Vue.js - Guía Oficial",
        platform: "Vue.js",
        description: "Documentación y tutoriales oficiales de Vue.js, un framework progresivo para construir interfaces de usuario.",
        url: "https://vuejs.org/guide/introduction.html",
        level: "Intermedio",
        category: "Desarrollo Web"
    },

    {
        title: "CS50 de Harvard - Introducción a la Informática",
        platform: "edX",
        description: "Un curso fundamental para aprender lógica de programación, estructuras de datos y algoritmos.",
        url: "https://cs50.harvard.edu/x/2024/",
        level: "Principiante",
        category: "Informática"
    },
    {
        title: "Python para Todos",
        platform: "Universidad de Michigan (Coursera)",
        description: "Serie de cursos gratuitos que cubren Python desde lo básico hasta aplicaciones prácticas.",
        url: "https://www.py4e.com/",
        level: "Principiante",
        category: "Informática"
    },
    {
        title: "Algoritmos y Estructuras de Datos",
        platform: "Open Data Structures",
        description: "Libro gratuito sobre estructuras de datos y algoritmos con ejemplos en varios lenguajes.",
        url: "https://opendatastructures.org/",
        level: "Intermedio",
        category: "Informática"
    },
 
    {
        title: "Introduction to Computer Science and Programming in Python",
        platform: "MIT OpenCourseWare",
        description: "Curso completo de MIT sobre programación y ciencias de la computación usando Python.",
        url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
        level: "Principiante",
        category: "Informática"
    },

    {
        title: "Kaggle - Python for Data Science",
        platform: "Kaggle",
        description: "Curso gratuito para aprender Python, enfocado en ciencia de datos y análisis.",
        url: "https://www.kaggle.com/learn/python",
        level: "Principiante",
        category: "Ciencia de Datos"
    },
    
    {
        title: "Fast.ai - Practical Deep Learning",
        platform: "Fast.ai",
        description: "Curso práctico de deep learning para programadores.",
        url: "https://course.fast.ai/",
        level: "Intermedio",
        category: "Ciencia de Datos"
    },
    {
        title: "Data Science con R",
        platform: "DataCamp",
        description: "Introducción al análisis de datos usando R y RStudio.",
        url: "https://www.datacamp.com/courses/free-introduction-to-r",
        level: "Principiante",
        category: "Ciencia de Datos"
    },

    {
        title: "Google - Machine Learning Crash Course",
        platform: "Google",
        description: "Un curso introductorio a machine learning con ejercicios y teoría.",
        url: "https://developers.google.com/machine-learning/crash-course?hl=es-419",
        level: "Intermedio",
        category: "Inteligencia Artificial"
    },
    {
        title: "Google Developers - Cursos Gratuitos",
        platform: "Google",
        description: "Una colección de cursos gratuitos sobre diferentes tecnologías y herramientas.",
        url: "https://developers.google.com/machine-learning/crash-course",
        level: "Intermedio",
        category: "Inteligencia Artificial"
    },
   
    {
        title: "Elements of AI",
        platform: "Universidad de Helsinki",
        description: "Curso introductorio a la IA sin necesidad de conocimientos de programación.",
        url: "https://www.elementsofai.com/",
        level: "Principiante",
        category: "Inteligencia Artificial"
    },

    {
        title: "Unity Learn - Junior Programmer Pathway",
        platform: "Unity Learn",
        description: "Un curso gratuito para aprender a programar videojuegos con Unity.",
        url: "https://learn.unity.com/pathway/junior-programmer",
        level: "Intermedio",
        category: "Videojuegos"
    },
    {
        title: "Godot Docs - Getting Started",
        platform: "Godot Engine",
        description: "Documentación oficial y tutoriales para comenzar a desarrollar videojuegos en Godot.",
        url: "https://docs.godotengine.org/en/stable/getting_started/index.html",
        level: "Intermedio",
        category: "Videojuegos"
    },
    {
        title: "API Phaser - Aprender a Crear Juegos",
        platform: "Phaser",
        description: "Un framework para crear juegos en HTML5 que es fácil de usar.",
        url: "https://phaser.io/",
        level: "Intermedio",
        category: "Videojuegos"
    },
    
    {
        title: "Pygame Tutorial",
        platform: "Pygame",
        description: "Tutorial oficial para crear juegos en Python usando Pygame.",
        url: "https://www.pygame.org/wiki/tutorials",
        level: "Principiante",
        category: "Videojuegos"
    },

    {
        title: "Docker para Desarrolladores",
        platform: "Docker",
        description: "Guía oficial para aprender a usar Docker en el desarrollo de software.",
        url: "https://docs.docker.com/get-started/",
        level: "Intermedio",
        category: "DevOps"
    },
    
    {
        title: "Kubernetes Basics",
        platform: "Kubernetes",
        description: "Tutorial interactivo oficial para aprender Kubernetes.",
        url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
        level: "Intermedio",
        category: "DevOps"
    },
    {
        title: "Jenkins Tutorial",
        platform: "Jenkins",
        description: "Guía paso a paso para aprender integración continua con Jenkins.",
        url: "https://www.jenkins.io/doc/tutorials/",
        level: "Intermedio",
        category: "DevOps"
    },

    {
        title: "AWS Cloud Practitioner Essentials",
        platform: "Amazon AWS",
        description: "Curso gratuito para aprender los fundamentos de la computación en la nube.",
        url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
        level: "Principiante",
        category: "Cloud Computing"
    },
   
    {
        title: "Microsoft Azure Fundamentals",
        platform: "Microsoft Learn",
        description: "Fundamentos de Azure y computación en la nube.",
        url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/",
        level: "Principiante",
        category: "Cloud Computing"
    },
    {
        title: "Google Cloud Basics",
        platform: "Google Cloud",
        description: "Conceptos básicos de Google Cloud Platform.",
        url: "https://cloud.google.com/training/basics",
        level: "Principiante",
        category: "Cloud Computing"
    },

    {
        title: "Flutter & Dart - The Complete Guide",
        platform: "Flutter.dev",
        description: "Documentación y codelabs oficiales para aprender desarrollo móvil con Flutter.",
        url: "https://flutter.dev/docs/get-started/codelab",
        level: "Principiante",
        category: "Desarrollo Móvil"
    },
    
    {
        title: "Android Basics in Kotlin",
        platform: "Android Developers",
        description: "Curso oficial de Google para desarrollar aplicaciones Android.",
        url: "https://developer.android.com/courses/android-basics-kotlin/course",
        level: "Principiante",
        category: "Desarrollo Móvil"
    },
    {
        title: "iOS App Dev Tutorials",
        platform: "Apple Developer",
        description: "Tutoriales oficiales de Apple para desarrollo iOS con SwiftUI.",
        url: "https://developer.apple.com/tutorials/app-dev-training",
        level: "Principiante",
        category: "Desarrollo Móvil"
    },

    {
        title: "PostgreSQL Tutorial",
        platform: "PostgreSQL Tutorial",
        description: "Tutorial completo sobre PostgreSQL y bases de datos relacionales.",
        url: "https://www.postgresqltutorial.com/",
        level: "Principiante",
        category: "Bases de Datos"
    },
    
    {
        title: "MongoDB University",
        platform: "MongoDB",
        description: "Cursos gratuitos oficiales de MongoDB.",
        url: "https://university.mongodb.com/",
        level: "Principiante",
        category: "Bases de Datos"
    },
    {
        title: "Redis University",
        platform: "Redis",
        description: "Aprende Redis desde lo básico hasta casos de uso avanzados.",
        url: "https://university.redis.com/",
        level: "Intermedio",
        category: "Bases de Datos"
    },

    {
        title: "Git y GitHub para Principiantes",
        platform: "GitHub Learning Lab",
        description: "Aprende control de versiones con Git y GitHub de forma interactiva.",
        url: "https://github.com/skills",
        level: "Principiante",
        category: "Herramientas"
    },
    
    {
        title: "Visual Studio Code Tutorial",
        platform: "Microsoft",
        description: "Guía completa para usar VS Code eficientemente.",
        url: "https://code.visualstudio.com/docs/introvideos/basics",
        level: "Principiante",
        category: "Herramientas"
    },
    {
        title: "Linux Journey",
        platform: "Linux Journey",
        description: "Aprende Linux desde cero de forma interactiva.",
        url: "https://linuxjourney.com/",
        level: "Principiante",
        category: "Herramientas"
    }
];


const videos = [

    {
        title: "Midudev",
        url: "https://www.youtube.com/@midudev",
        description: "Uno de los canales más populares en español. Miguel Ángel Durán comparte contenido sobre desarrollo web, React, Node.js y las últimas tecnologías frontend.",
        tags: ["JavaScript", "React", "Node.js", "Frontend"],
        level: "Intermedio-Avanzado",
        highlight: "Streaming en vivo y proyectos prácticos"
    },
    {
        title: "Fazt",
        url: "https://www.youtube.com/@FaztTech",
        description: "Tutoriales completos sobre desarrollo web, bases de datos, y frameworks modernos. Excelente para principiantes y nivel intermedio.",
        tags: ["Full Stack", "Python", "JavaScript", "MongoDB"],
        level: "Principiante-Intermedio",
        highlight: "Tutoriales paso a paso"
    },
    {
        title: "¡Aprovecha!",
        platform: "Mercado-Pago",
        description: " ¡Hola!Te regalo hasta *36% de descuento para que compres el lector Point que mejor se ajuste a tu negocio*.",
        url: "https://mpago.li/21eLTms",
        level: "Descuento ",
        category: "Publicidad"
    },
    {
        title: "Bluuweb",
        url: "https://www.youtube.com/@bluuweb",
        description: "Ignacio Gutierrez ofrece cursos completos gratuitos sobre desarrollo web. Especializado en Vue.js, Bootstrap y Firebase.",
        tags: ["Vue.js", "Firebase", "Bootstrap"],
        level: "Principiante",
        highlight: "Cursos completos gratuitos"
    },
    {
        title: "Hola Mundo",
        url: "https://www.youtube.com/@HolaMundoDev",
        description: "Nicolas Schurmann comparte conocimientos avanzados sobre programación, sistemas y arquitectura de software.",
        tags: ["Arquitectura", "Sistemas", "Programación"],
        level: "Intermedio-Avanzado",
        highlight: "Conceptos avanzados explicados claramente"
    },
    {
        title: "Carlos Azaustre",
        url: "https://www.youtube.com/@carlosazaustre",
        description: "Especializado en JavaScript y el ecosistema de React. Contenido de calidad sobre desarrollo web moderno.",
        tags: ["JavaScript", "React", "Node.js"],
        level: "Intermedio",
        highlight: "Actualidad en desarrollo web"
    },
    {
        title: "MoureDev",
        url: "https://www.youtube.com/@mouredev",
        description: "Brais Moure comparte conocimientos sobre desarrollo móvil, retos de programación y tutoriales de varios lenguajes.",
        tags: ["Mobile", "Kotlin", "Swift", "Python"],
        level: "Todos los niveles",
        highlight: "Retos semanales de programación"
    },
    {
        title: "Soy Dalto",
        url: "https://www.youtube.com/@soydalto",
        description: "Cursos completos de programación con un estilo único y entretenido. Especializado en JavaScript y Python.",
        tags: ["JavaScript", "Python", "HTML", "CSS"],
        level: "Principiante-Intermedio",
        highlight: "Explicaciones dinámicas y entretenidas"
    },
    {
        title: "EDteam",
        url: "https://www.youtube.com/@EDteam",
        description: "Canal oficial de la plataforma EDteam. Contenido sobre desarrollo web, móvil y ciencia de datos.",
        tags: ["Desarrollo Web", "Mobile", "Data Science"],
        level: "Todos los niveles",
        highlight: "Contenido estructurado académicamente"
    },
    {
        title: "Programa con Nico",
        url: "https://www.youtube.com/@ProgramacionWeb",
        description: "Tutoriales detallados sobre desarrollo web full stack, con énfasis en proyectos prácticos.",
        tags: ["Full Stack", "MERN", "JavaScript"],
        level: "Principiante-Intermedio",
        highlight: "Proyectos prácticos completos"
    },
    {
        title: "Latente",
        url: "https://www.youtube.com/@Latente",
        description: "Enfoque en inteligencia artificial, machine learning y ciencia de datos con Python.",
        tags: ["IA", "Machine Learning", "Python", "Data Science"],
        level: "Intermedio-Avanzado",
        highlight: "Proyectos de IA y ML"
    },
    {
        title: "pildorasinformaticas",
        url: "https://www.youtube.com/@pildorasinformaticas",
        description: "Juan Díaz ofrece cursos extensos y detallados sobre varios lenguajes y tecnologías. Excelente para principiantes.",
        tags: ["Java", "Python", "SQL", "PHP"],
        level: "Principiante",
        highlight: "Cursos estructurados y detallados"
    },
    {
        title: "DominiCode",
        url: "https://www.youtube.com/@DominiCode",
        description: "Tutoriales sobre Angular, Firebase y desarrollo web moderno. Proyectos prácticos y consejos profesionales.",
        tags: ["Angular", "Firebase", "TypeScript"],
        level: "Intermedio",
        highlight: "Especializado en Angular"
    },
    {
        title: "Vida MRR",
        url: "https://www.youtube.com/@vidamrr",
        description: "Tutoriales sobre desarrollo web moderno, con énfasis en JavaScript y frameworks populares.",
        tags: ["JavaScript", "Vue.js", "React", "Node.js"],
        level: "Intermedio",
        highlight: "Proyectos prácticos del mundo real"
    },
    {
        title: "Codificandolo",
        url: "https://www.youtube.com/@Codificandolo",
        description: "Contenido sobre desarrollo de software, arquitectura y buenas prácticas. Enfoque profesional.",
        tags: ["Arquitectura", "Buenas Prácticas", "Software"],
        level: "Intermedio-Avanzado",
        highlight: "Perspectiva de la industria real"
    },
    {
        title: "Open Bootcamp",
        url: "https://www.youtube.com/@OpenBootcamp",
        description: "Formación completa en programación y desarrollo de software. Contenido estructurado y profesional.",
        tags: ["Full Stack", "Java", "Python", "JavaScript"],
        level: "Todos los niveles",
        highlight: "Formación estructurada gratuita"
    }
];




const resources = [   {
    title: "W3Schools",
    url: "https://www.w3schools.com/",
    description: "Un recurso en línea excelente para aprender sobre HTML, CSS, JavaScript y más."
},
{
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/es/docs/Web",
    description: "Documentación completa sobre tecnologías web de Mozilla."
},
{
    title: "Coursera",
    url: "https://www.coursera.org/",
    description: "Plataforma que ofrece cursos de universidades de renombre en diversas áreas."
},
{
    title: "edX",
    url: "https://www.edx.org/",
    description: "Cursos gratuitos de universidades de élite y organizaciones reconocidas."
},
{
    title: "App_Mercado.Pago",
    url: " https://mpago.li/1fT9q18",
    description: "Si estás buscando una forma fácil y segura de gestionar tus finanzas, ¡te recomiendo la app de Mercado Pago!"
}

];

// State management
const state = {
    currentFilter: 'all',
    searchQuery: ''
};

// Utility functions
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// DOM Helpers
const createElement = (type, className, innerHTML = '') => {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
};

// Render functions
const createCard = (item, type) => {
    const card = createElement('div', 'card');
    
    const content = `
        <h4>${item.title}</h4>
        ${type === 'course' ? `
            <div class="badges">
                <span class="badge">${item.level}</span>
                <span class="badge">${item.category}</span>
            </div>
        ` : ''}
        <p><strong>${type === 'course' ? 'Plataforma: ' + item.platform : ''}</strong></p>
        <p>${item.description}</p>
        <a href="${item.url}" class="btn" target="_blank" rel="noopener noreferrer">
            ${type === 'course' ? 'Comenzar Curso' : type === 'video' ? 'Ver Video' : 'Visitar Recurso'}
        </a>
    `;
    
    card.innerHTML = content;
    return card;
};

const renderContent = (items, containerId, type) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    items.forEach(item => {
        const card = createCard(item, type);
        container.appendChild(card);
    });
};

// Filter functions
const filterCoursesByCategory = (courses, category) => {
    if (category === 'all') return courses;
    return courses.filter(course => course.category === category);
};

const filterContentBySearch = (items, searchQuery) => {
    if (!searchQuery) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
};

// Event handlers
const handleSearch = debounce((event) => {
    state.searchQuery = event.target.value;
    updateDisplay();
}, 300);

const handleFilterClick = (event) => {
    if (!event.target.classList.contains('filter-btn')) return;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => 
        btn.classList.remove('active')
    );
    event.target.classList.add('active');
    
    state.currentFilter = event.target.dataset.filter;
    updateDisplay();
};


const createVideoCard = (video) => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const tagsHtml = video.tags
        .map(tag => `<span class="badge">${tag}</span>`)
        .join('');
    
    const levelClass = video.level.toLowerCase().replace(/[^a-z]/g, '-');
    
    card.innerHTML = `
        <h4>
            <i class="fab fa-youtube"></i> 
            ${video.title}
        </h4>
        <div class="badges">
            <span class="badge level-badge ${levelClass}">${video.level}</span>
        </div>
        <div class="tags-container">
            ${tagsHtml}
        </div>
        <p class="description">${video.description}</p>
        <div class="highlight">
            <i class="fas fa-star"></i> 
            ${video.highlight}
        </div>
        <a href="${video.url}" class="btn" target="_blank" rel="noopener">
            <i class="fas fa-play-circle"></i>
            Ver Canal
        </a>
    `;
    
    return card;
};

const renderVideos = () => {
    const container = document.getElementById('videos-container');
    container.innerHTML = '';
    
    videos.forEach(video => {
        const card = createVideoCard(video);
        container.appendChild(card);
    });
};




// Main render function
const updateDisplay = () => {
    // Filter courses
    let filteredCourses = filterCoursesByCategory(courses, state.currentFilter);
    filteredCourses = filterContentBySearch(filteredCourses, state.searchQuery);
    renderContent(filteredCourses, 'courses-container', 'course');
    
    // Filter videos and resources only by search
    const filteredVideos = filterContentBySearch(videos, state.searchQuery);
    const filteredResources = filterContentBySearch(resources, state.searchQuery);
    
    renderContent(filteredVideos, 'videos-container', 'video');
    renderContent(filteredResources, 'resources-container', 'resource');
    
    // Update visibility of sections based on results
    document.getElementById('videos-section').style.display = 
        filteredVideos.length ? 'block' : 'none';
    document.getElementById('resources-section').style.display = 
        filteredResources.length ? 'block' : 'none';
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners
    document.getElementById('search')
        .addEventListener('input', handleSearch);
    document.querySelector('.filters')
        .addEventListener('click', handleFilterClick);
    
    // Initial render
    updateDisplay();
});