const t = (en, es) => ({ en, es })

function localizeValue(value, language) {
  if (Array.isArray(value)) {
    return value.map(item => localizeValue(item, language))
  }

  if (value && typeof value === 'object') {
    const keys = Object.keys(value)

    if (keys.includes('en') && keys.includes('es') && keys.length === 2) {
      return value[language] || value.en
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeValue(item, language)]),
    )
  }

  return value
}

const portfolioData = {
  personal: {
    name: 'Juan Diego Balsero Leon',
    brand: 'JBL',
    heroNameLead: 'Juan Diego',
    heroNameAccent: 'Balsero',
    heroNameTail: 'Leon',
    title: t('Data Engineer, AI Developer & Software Consultant', 'Ingeniero de Datos, Desarrollador de IA y Consultor de Software'),
    subtitle: t('Data Science, Analytics and Automation', 'Ciencia de Datos, Analítica y Automatización'),
    email: 'juandibl00@hotmail.com',
    phone: '0493939946',
    linkedin: 'https://www.linkedin.com/in/jbalsero/',
    linkedinLabel: 'linkedin.com/in/jbalsero',
    github: 'https://github.com/jdbalsero',
    githubLabel: 'github.com/jdbalsero',
    location: t('Melbourne, Australia', 'Melbourne, Australia'),
    cvUrl: '/prof-porfolio/assets/cv_juan_balsero.pdf',
    photoUrl: '/prof-porfolio/assets/juan_portfolio.jpg',
    availability: t('Open to Melbourne / Sydney roles', 'Disponible para roles en Melbourne / Sídney'),
    heroSummary: t(
      'IT engineer with an MSc in Data Science, blending data engineering, AI automation, business intelligence, and software delivery to solve complex business problems.',
      'Ingeniero de TI con una Maestría en Data Science, combinando ingeniería de datos, automatización con IA, inteligencia de negocios y desarrollo de software para resolver problemas empresariales complejos.',
    ),
    stats: [
      { value: '3+', label: t('Years Across Data, Software & DevOps', 'Años en Datos, Software y DevOps') },
      { value: '7 / 7', label: t('Master GPA', 'Promedio de Maestría') },
      { value: '2', label: t('Azure Certifications', 'Certificaciones de Azure') },
      { value: '6', label: t('Professional Roles', 'Roles Profesionales') },
    ],
  },

  education: [
    {
      degree: t('Master of Data Science and Innovation', 'Maestría en Ciencia de Datos e Innovación'),
      institution: 'University of Technology Sydney',
      shortName: 'UTS',
      domain: 'uts.edu.au',
      url: 'https://www.uts.edu.au',
      period: '2024 - 2025',
      detail: t(
        'Outstanding Academic Student Award. Advanced study in machine learning, modern data tooling, and practical AI delivery for business use cases.',
        'Premio a Estudiante Académico Destacado. Estudios avanzados en machine learning, herramientas modernas de datos y aplicación práctica de IA para casos de negocio.',
      ),
      badge: 'GPA 7 / 7',
      color: '#F59E0B',
    },
    {
      degree: t('Bachelor in Systems and Telecommunications Engineering', 'Ingeniería de Sistemas y Telecomunicaciones'),
      institution: 'Sergio Arboleda University',
      shortName: 'SAU',
      domain: 'usergioarboleda.edu.co',
      url: 'https://www.usergioarboleda.edu.co',
      period: '2017 - 2022',
      detail: t(
        'Graduated with academic honors. Built a strong foundation in software engineering, systems design, and applied technical problem solving.',
        'Graduado con honores. Construí una base sólida en ingeniería de software, diseño de sistemas y resolución aplicada de problemas técnicos.',
      ),
      badge: t('Academic Honors', 'Honores Académicos'),
      color: '#10B981',
    },
  ],

  about: {
    heading: t('From Software Delivery to Data & AI', 'De Desarrollo de Software a Datos e IA'),
    intro: t(
      'I started by building backend systems and deployment workflows, then grew into analytics, data engineering, and AI automation. That mix gives me a practical perspective: I care as much about reliable delivery and business impact as I do about models, pipelines, and technical elegance.',
      'Comencé construyendo sistemas backend y flujos de despliegue, y luego evolucioné hacia analítica, ingeniería de datos y automatización con IA. Esa combinación me da una perspectiva práctica: me importa tanto la entrega confiable y el impacto de negocio como los modelos, pipelines y la calidad técnica.',
    ),
  },

  journey: [
    {
      icon: 'API',
      year: '2022',
      title: t('Backend Developer', 'Desarrollador Backend'),
      where: 'Coally SAS',
      desc: t(
        'Built Node.js APIs, document workflows, and third-party integrations including OpenAI, SendGrid, and Twilio.',
        'Desarrollo de APIs en Node.js, flujos documentales e integraciones con terceros como OpenAI, SendGrid y Twilio.',
      ),
    },
    {
      icon: 'OPS',
      year: '2022-23',
      title: t('DevOps Technician', 'Técnico DevOps'),
      where: 'Informa Colombia',
      desc: t(
        'Maintained CI/CD flows with Docker and Jenkins, administered Kubernetes clusters, and planned deployment strategies.',
        'Mantenimiento de flujos CI/CD con Docker y Jenkins, administración de clúster de Kubernetes y planificación de estrategias de despliegue.',
      ),
    },
    {
      icon: 'WEB',
      year: '2023-24',
      title: t('Full Stack Developer', 'Desarrollador Full Stack'),
      where: 'Assisttu',
      desc: t(
        'Delivered secure React and Express features backed by PostgreSQL, MongoDB, AWS services, and cloud infrastructure.',
        'Entrega de funcionalidades seguras en React y Express respaldadas por PostgreSQL, MongoDB, servicios AWS e infraestructura en la nube.',
      ),
    },
    {
      icon: 'BI',
      year: '2023-24',
      title: t('Consultant', 'Consultor'),
      where: 'NFQ',
      desc: t(
        'Built Java customizations, JUnit tests, and Power BI reporting for Calypso-based client implementations.',
        'Desarrollo de personalizaciones en Java, pruebas con JUnit y reportes en Power BI para implementaciones de clientes basadas en Calypso.',
      ),
    },
    {
      icon: 'AI',
      year: '2025',
      title: t('AI Intern', 'Practicante de IA'),
      where: 'Synogize',
      desc: t(
        'Created agentic AI workflows, DLT ingestion, dbt transformations, and a Snowflake medallion MVP.',
        'Creación de flujos de Agentic AI, ingestión con DLT, transformaciones con dbt y un MVP medallion en Snowflake.',
      ),
    },
    {
      icon: 'HANA',
      year: '2025-Now',
      title: t('Associate Consultant', 'Consultor Asociado'),
      where: 'Synogize',
      desc: t(
        'Debugging SAP HANA procedures, automating data ingestion, and improving demand planning and order allocation.',
        'Depuración de procedimientos SAP HANA, automatización de ingestión de datos y mejora de planeación de demanda y asignación de órdenes.',
      ),
    },
  ],

  contact: {
    blurb: t(
      'Open to data engineering, AI, analytics, and software consulting roles in Melbourne, Sydney, and remote teams. Always happy to talk through interesting technical challenges.',
      'Abierto a oportunidades en ingeniería de datos, IA, analítica y consultoría de software en Melbourne, Sídney o equipos remotos. Siempre dispuesto a conversar sobre retos técnicos interesantes.',
    ),
    cvTitle: t('Full Curriculum Vitae', 'Currículum Vitae Completo'),
    cvSubtitle: t('Based in Melbourne | Open to Melbourne / Sydney', 'Ubicado en Melbourne | Disponible para Melbourne / Sídney'),
    footerLocation: 'Melbourne',
  },

  experience: [
    {
      role: t('Associate Consultant', 'Consultor Asociado'),
      company: 'Synogize',
      location: t('Sydney, AU', 'Sídney, AU'),
      period: t('Dec 2025 - Present', 'Dic 2025 - Actualidad'),
      bullets: [
        t('Debugged and modified SAP HANA SQL procedures for a TMCA vehicle demand planning and order allocation tool.', 'Debugging de procedimientos SQL de SAP HANA para una herramienta de planeación de demanda y asignación de órdenes de vehículos para TMCA.'),
        t('Implemented automated data ingestion pipelines and data migration into the TMCA business warehouse.', 'Implementación de pipelines automatizados de ingestión de datos y migración hacia el data warehouse de negocio de TMCA.'),
        t('Performed SIT testing across the master data platform, validating outputs between SAP HANA and Microsoft Fabric.', 'Realicé pruebas SIT sobre la plataforma de datos maestros, validando resultados entre SAP HANA y Microsoft Fabric.'),
        t('Supported improvements that increased the effectiveness of the planning process by 60%.', 'Apoyo de mejoras que incrementaron la efectividad del proceso de planeación en un 60%.'),
      ],
      tech: ['SAP HANA', 'SQL', 'Microsoft Fabric', 'Data Warehousing'],
    },
    {
      role: t('Data Science and AI Intern', 'Practicante de Ciencia de Datos e IA'),
      company: 'Synogize',
      location: t('Sydney, AU', 'Sídney, AU'),
      period: t('Aug 2025 - Nov 2025', 'Ago 2025 - Nov 2025'),
      bullets: [
        t('Developed agentic AI solutions to automate data engineering workflows using LangChain and LangGraph.', 'Desarrollo de soluciones de Agentic AI para automatizar flujos de ingeniería de datos usando LangChain y LangGraph.'),
        t('Implemented automated ingestion pipelines with DLT and transformation workflows with dbt.', 'Implementación de pipelines automatizados de ingestión con DLT y flujos de transformación con dbt.'),
        t('Designed an AI-driven MVP for ingestion, transformation, and structuring within a medallion architecture.', 'Diseñé un MVP impulsado por IA para ingestión, transformación y estructuración dentro de una arquitectura medallion.'),
        t('Integrated API-based data sources with Snowflake as the core data warehouse.', 'Integración de fuentes de datos basadas en APIs con Snowflake como data warehouse principal.'),
      ],
      tech: ['Python', 'LangChain', 'LangGraph', 'DLT', 'dbt', 'Snowflake'],
    },
    {
      role: t('Consultant', 'Consultor'),
      company: 'NFQ Advisory Services & Solutions',
      location: t('Remote', 'Remoto'),
      period: t('Jul 2023 - Jan 2024', 'Jul 2023 - Ene 2024'),
      bullets: [
        t('Developed customized products in Java within the Calypso platform for specific client needs.', 'Desarrollo de productos personalizados en Java dentro de la plataforma Calypso para necesidades específicas de clientes.'),
        t('Created JUnit coverage for automated processes used in BBVA Spain Calypso implementations.', 'Creación de pruebas con JUnit para procesos automatizados usados en implementaciones de Calypso para BBVA España.'),
        t('Designed Power BI dashboards to monitor performance metrics, infrastructure load, and possible trade errors.', 'Diseño de tableros en Power BI para monitorear métricas de desempeño, carga de infraestructura y posibles errores operativos.'),
      ],
      tech: ['Java', 'Calypso', 'JUnit', 'Power BI'],
    },
    {
      role: t('Full Stack Developer', 'Desarrollador Full Stack'),
      company: 'Assisttu (Tu Plan Live LLC)',
      location: t('Remote', 'Remoto'),
      period: t('Mar 2023 - Jan 2024', 'Mar 2023 - Ene 2024'),
      bullets: [
        t('Managed PostgreSQL, MongoDB, and HashiCorp Vault for application data and secure credential storage.', 'Administración de PostgreSQL, MongoDB y HashiCorp Vault para datos de aplicación y almacenamiento seguro de credenciales.'),
        t('Implemented CI/CD pipelines for cloud infrastructure deployment and maintenance through DigitalOcean.', 'Implementación pipelines CI/CD para despliegue y mantenimiento de infraestructura en la nube sobre DigitalOcean.'),
        t('Integrated AWS services including S3 and RDS into the web application infrastructure.', 'Integré servicios de AWS como S3 y RDS dentro de la infraestructura de la aplicación web.'),
        t('Built a React frontend with Material UI and a Node.js backend with Express and JWT-based authentication.', 'Desarrollo de un frontend en React con Material UI y un backend en Node.js con Express y autenticación basada en JWT.'),
        t('Acted as project manager for the development team, ensuring delivery quality and feature completeness.', 'Actué como project manager del equipo de desarrollo, asegurando calidad de entrega y completitud funcional.'),
      ],
      tech: ['ReactJS', 'Material UI', 'Node.js', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'AWS', 'DigitalOcean'],
    },
    {
      role: t('DevOps Technician', 'Técnico DevOps'),
      company: 'Informa Colombia',
      location: t('Colombia', 'Colombia'),
      period: t('Aug 2022 - Jun 2023', 'Ago 2022 - Jun 2023'),
      bullets: [
        t('Maintained CI/CD flows for enterprise applications using Docker and Jenkins.', 'Mantenimiento de flujos CI/CD para aplicaciones empresariales usando Docker y Jenkins.'),
        t('Administered Kubernetes clusters with k8s and Rancher.', 'Administración clústeres de Kubernetes con k8s y Rancher.'),
        t('Developed deployment strategies for new software products.', 'Desarrollo de estrategias de despliegue para nuevos productos de software.'),
        t('Partnered with internal teams to improve tooling that supported daily operational work.', 'Trabajé con equipos internos para mejorar herramientas que soportaban la operación diaria.'),
      ],
      tech: ['Docker', 'Jenkins', 'Kubernetes', 'Rancher', 'CI/CD'],
    },
    {
      role: t('Backend Developer', 'Desarrollador Backend'),
      company: 'Coally SAS',
      location: t('Colombia', 'Colombia'),
      period: t('Jun 2022 - May 2023', 'Jun 2022 - May 2023'),
      bullets: [
        t('Managed MongoDB databases for document storage and backend workflows.', 'Administración bases de datos MongoDB para almacenamiento documental y flujos backend.'),
        t('Integrated the Coally API with external services such as OpenAI, SendGrid, and Twilio.', 'Integración de la API de Coally con servicios externos como OpenAI, SendGrid y Twilio.'),
        t('Contributed to core back-end modules built in Node.js with the Express framework.', 'Contribuí a módulos backend centrales desarrollados en Node.js con el framework Express.'),
      ],
      tech: ['Node.js', 'ExpressJS', 'MongoDB', 'OpenAI', 'SendGrid', 'Twilio'],
    },
  ],

  projects: [
    {
      title: t('AI Data Engineering Agent for API-to-Warehouse Automation', 'Agente de Ingeniería de Datos con IA para Automatización de API a Data Warehouse'),
      category: t('Data Engineering / AI Agents', 'Ingeniería de Datos / Agentes de IA'),
      description: t(
        'Built a LangGraph-powered workflow that reads API documentation, recommends endpoints, generates DLT ingestion scripts, loads data into Snowflake, and then produces dbt models for a Bronze-Silver-Gold warehouse architecture.',
        'Construí un flujo impulsado por LangGraph que lee documentación de APIs, recomienda endpoints, genera scripts de ingestión con DLT, carga datos en Snowflake y luego produce modelos dbt para una arquitectura Bronze-Silver-Gold.',
      ),
      tech: ['LangGraph', 'Python', 'DLT', 'Snowflake', 'dbt', 'Streamlit', 'OpenAI'],
      color: '#F97316',
      image: '/prof-porfolio/assets/project_image_1.jpg',
      wide: true,
      link: 'https://github.com/jdbalsero/Data_Engineering_Agent',
      linkLabel: t('View repo ->', 'Ver repositorio ->'),
    },
    {
      title: t('RL GHG Compliance Consultant', 'Consultor de Cumplimiento GHG con RL'),
      category: t('AI / Sustainability', 'IA / Sostenibilidad'),
      description: t(
        'Built as a group project with fellow Master of Data Science students, this assistant helps users navigate Australian GHG compliance questions with a reinforcement-learning-enhanced LLM experience. My contribution focused on delivery, business analysis, and improving answer quality and groundedness.',
        'Desarrollado como proyecto grupal con compañeros de la Maestría en Ciencia de Datos, este asistente ayuda a los usuarios a navegar preguntas de cumplimiento GHG en Australia con una experiencia LLM mejorada por reinforcement learning. Mi aporte se enfocó en entrega, análisis de negocio y mejora de calidad y trazabilidad de respuestas.',
      ),
      tech: ['Python', 'Reinforcement Learning', 'LLM'],
      color: '#F97316',
      image: '/prof-porfolio/assets/project_image_2.jpg',
      link: 'https://huggingface.co/spaces/camilouribeg/ghg-digital-consultant',
      linkLabel: t('Open demo ->', 'Abrir demo ->'),
    },
    {
      title: t('Solana Next-Day High Price Forecasting Platform', 'Plataforma de Predicción del Precio Máximo del Día Siguiente para Solana'),
      category: t('Machine Learning / FinTech', 'Machine Learning / FinTech'),
      description: t(
        'End-to-end project to forecast Solana next-day high prices from historical crypto market data, combining feature engineering and regression modeling with a FastAPI prediction service and a Streamlit frontend for interactive consumption.',
        'Proyecto end-to-end para predecir el precio máximo del día siguiente de Solana a partir de datos históricos del mercado cripto, combinando feature engineering y modelos de regresión con un servicio de predicción en FastAPI y un frontend en Streamlit.',
      ),
      tech: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit', 'Kraken API', 'CoinGecko API'],
      color: '#6366F1',
      image: '/prof-porfolio/assets/project_image_3.jpg',
      wide: true,
      link: 'https://cryptocurrencydashboardgroup29.streamlit.app/',
      linkLabel: t('Open live demo ->', 'Abrir demo en vivo ->'),
    },
    {
      title: t('Big Data Taxi Fare Prediction Pipeline', 'Pipeline de Big Data para Predicción de Tarifas de Taxi'),
      category: t('Big Data / ML', 'Big Data / ML'),
      description: t(
        'Built a Databricks and PySpark pipeline over large-scale NYC taxi trip data, persisting curated Delta tables for analysis and training fare-prediction models from engineered trip, location, and time-based features.',
        'Construí un pipeline en Databricks y PySpark sobre datos masivos de viajes de taxi en NYC, persistiendo tablas Delta curadas para análisis y entrenamiento de modelos de predicción de tarifas a partir de variables de viaje, ubicación y tiempo.',
      ),
      tech: ['PySpark', 'Databricks', 'Delta Lake', 'Spark SQL', 'scikit-learn'],
      color: '#F59E0B',
      image: '/prof-porfolio/assets/project_image_4.jpg',
    },
    {
      title: t('Airflow + dbt Medallion Pipeline', 'Pipeline Medallion con Airflow + dbt'),
      category: t('Data Engineering', 'Ingeniería de Datos'),
      description: t(
        'End-to-end pipeline with bronze, silver, and gold layers, SCD Type 2 snapshots, star schema models, and business marts for Airbnb and Census revenue and demographic analysis.',
        'Pipeline end-to-end con capas bronze, silver y gold, snapshots SCD Tipo 2, modelos estrella y data marts para análisis de ingresos y demografía de Airbnb y Census.',
      ),
      tech: ['Apache Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'Python'],
      color: '#10B981',
      image: '/prof-porfolio/assets/project_image_5.jpg',
    },
  ],

  skillsGroups: [
    {
      group: t('Data & AI', 'Datos e IA'),
      items: ['Python', 'Machine Learning', 'scikit-learn', 'PyTorch', 'LangChain', 'LangGraph', 'AI Automation'],
    },
    {
      group: t('Data Engineering', 'Ingeniería de Datos'),
      items: ['SQL', 'ETL / ELT', 'DLT', 'dbt', 'Snowflake', 'SAP HANA', 'PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB'],
    },
    {
      group: t('Cloud & DevOps', 'Cloud y DevOps'),
      items: ['Docker', 'Jenkins', 'Kubernetes', 'Oracle Cloud Infrastructure', 'AWS S3', 'AWS RDS', 'DigitalOcean', 'HashiCorp Vault'],
    },
    {
      group: t('Software Engineering', 'Ingeniería de Software'),
      items: ['ReactJS', 'Material UI', 'Node.js', 'ExpressJS', 'NestJS', 'Java', 'Spring Boot', 'JUnit', 'JWT'],
    },
    {
      group: t('BI & Analytics', 'BI y Analítica'),
      items: ['Power BI', 'Data Analysis', 'Data Visualization', 'Business Intelligence', 'Dashboard Design'],
    },
  ],

  publication: {
    title: t(
      'Automation of Greenhouse Gas Emissions Estimates Associated with Natural Gas Production in the Appalachian Basin',
      'Automatización de Estimaciones de Emisiones de Gases de Efecto Invernadero Asociadas con la Producción de Gas Natural en la Cuenca de los Apalaches',
    ),
    publisher: 'OnePetro / SPE',
    url: 'https://onepetro.org/speets/proceedings-abstract/24ETS/24ETS/D012S005R002/548349',
  },
}

const uiCopy = {
  nav: {
    links: [
      { label: t('Profile', 'Perfil'), to: 'about' },
      { label: t('Education', 'Educación'), to: 'education' },
      { label: t('Experience', 'Experiencia'), to: 'experience' },
      { label: t('Projects', 'Proyectos'), to: 'projects' },
      { label: t('Stack', 'Stack'), to: 'skills' },
      { label: t('Contact', 'Contacto'), to: 'contact' },
    ],
    github: 'GitHub',
    downloadCv: t('Download CV', 'Descargar CV'),
    toggleMenu: t('Toggle menu', 'Abrir menú'),
    languageLabel: t('Language', 'Idioma'),
  },

  hero: {
    eyebrow: t('Melbourne-based Portfolio', 'Portafolio basado en Melbourne'),
    points: [
      t('Data engineering and warehouse automation', 'Ingeniería de datos y automatización de data warehouses'),
      t('Applied AI workflows with business delivery focus', 'Flujos de IA aplicada con foco en entrega de negocio'),
      t('Software consulting across backend, BI, and DevOps', 'Consultoría de software en backend, BI y DevOps'),
    ],
    exploreProjects: t('Explore Projects', 'Explorar Proyectos'),
    viewExperience: t('View Experience', 'Ver Experiencia'),
    currentIn: t('Currently in', 'Actualmente en'),
    currentFocus: t('Current Focus', 'Enfoque Actual'),
    currentFocusTitle: t('Building reliable data systems with practical AI.', 'Construyendo sistemas de datos confiables con IA práctica.'),
    currentFocusBody: t(
      'I’m interested in roles where data pipelines, analytics products, and automation can create clear operational value.',
      'Me interesan roles donde los pipelines de datos, productos analíticos y automatización generen valor operativo claro.',
    ),
    latestDegree: t('Latest Degree', 'Último Título'),
    reachOut: t('Reach Out', 'Contáctame'),
  },

  aboutSection: {
    narrativeEyebrow: t('Profile Narrative', 'Narrativa Profesional'),
    title: t('From delivery foundations into', 'De fundamentos de entrega hacia'),
    titleAccent: t('data and AI systems', 'sistemas de datos e IA'),
    outro: t(
      'That path shapes how I work today: I’m comfortable moving between business needs, implementation details, data models, application logic, and deployment concerns without losing sight of the outcome.',
      'Ese recorrido define cómo trabajo hoy: me siento cómodo moviéndome entre necesidades de negocio, detalles de implementación, modelos de datos, lógica de aplicación y despliegue, sin perder de vista el resultado.',
    ),
    bringTitle: t('What I Bring', 'Lo que Aporto'),
    bringBody: t(
      'Engineering discipline, consulting pragmatism, and analytical thinking across the full data lifecycle.',
      'Disciplina de ingeniería, pragmatismo de consultoría y pensamiento analítico a lo largo de todo el ciclo de vida de los datos.',
    ),
    workingStyleTitle: t('Working Style', 'Estilo de Trabajo'),
    workingStyleBody: t(
      'Hands-on, delivery-oriented, and comfortable collaborating across technical and business stakeholders.',
      'Práctico, orientado a la entrega y cómodo colaborando con stakeholders técnicos y de negocio.',
    ),
    careerEyebrow: t('Career Route', 'Ruta Profesional'),
    careerTitle: t('A path across backend, DevOps, consulting, BI, and AI.', 'Un camino entre backend, DevOps, consultoría, BI e IA.'),
    careerBody: t(
      'The sequence matters because each step added a new operating layer to how I solve problems.',
      'La secuencia importa porque cada etapa sumó una nueva capa operativa a mi forma de resolver problemas.',
    ),
  },

  educationSection: {
    eyebrow: t('Education', 'Educación'),
    title: t('Academic grounding with', 'Base académica con'),
    titleAccent: t('strong practical direction', 'fuerte orientación práctica'),
    intro: t(
      'Formal study sharpened the engineering, analytics, and AI work already present in my project experience.',
      'La formación académica fortaleció el trabajo en ingeniería, analítica e IA que ya venía desarrollando en mis proyectos.',
    ),
    visitInstitution: t('Visit institution ->', 'Visitar institución ->'),
  },

  experienceSection: {
    eyebrow: t('Experience', 'Experiencia'),
    title: t('A consulting-led', 'Una trayectoria guiada por la'),
    titleAccent: t('career timeline', 'consultoría'),
    intro: t(
      'My experience spans backend delivery, infrastructure, full-stack work, reporting, AI experimentation, and hands-on data engineering. That breadth is part of the value I bring.',
      'Mi experiencia cubre entrega backend, infraestructura, desarrollo full-stack, reporting, experimentación con IA e ingeniería de datos aplicada. Esa amplitud es parte del valor que aporto.',
    ),
    rolesCount: t('Professional roles captured in the portfolio', 'Roles profesionales incluidos en el portafolio'),
    dataDeliveryTitle: t('Data + Delivery', 'Datos + Entrega'),
    dataDeliveryBody: t('Built across product, platform, analytics, and automation contexts', 'Construido en contextos de producto, plataforma, analítica y automatización'),
    remoteTitle: t('AU + Remote', 'AU + Remoto'),
    remoteBody: t('Experience working across distributed and consulting environments', 'Experiencia trabajando en entornos distribuidos y de consultoría'),
  },

  projectsSection: {
    eyebrow: t('Projects', 'Proyectos'),
    title: t('Selected builds across', 'Proyectos seleccionados en'),
    titleAccent: t('AI, data engineering, and applied ML', 'IA, ingeniería de datos y ML aplicado'),
    intro: t(
      'These projects show how I apply data engineering, machine learning, and AI tooling to real delivery problems, from automation workflows to predictive platforms.',
      'Estos proyectos muestran cómo aplico ingeniería de datos, machine learning y herramientas de IA a problemas reales de entrega, desde flujos de automatización hasta plataformas predictivas.',
    ),
    featuredProject: t('Featured project', 'Proyecto destacado'),
    linkComingLater: t('Link coming later', 'Enlace próximamente'),
    openProject: t('Open project ->', 'Abrir proyecto ->'),
  },

  skillsSection: {
    eyebrow: t('Stack', 'Stack'),
    title: t('Technical coverage with a', 'Cobertura técnica con'),
    titleAccent: t('delivery mindset', 'mentalidad de entrega'),
    intro: t(
      'The portfolio sits at the intersection of data engineering, AI, analytics, and software implementation. These categories summarize the tools and domains I’m most comfortable shipping with.',
      'El portafolio se sitúa en la intersección entre ingeniería de datos, IA, analítica e implementación de software. Estas categorías resumen las herramientas y dominios con los que me siento más cómodo entregando soluciones.',
    ),
    notes: [
      t('Comfortable moving from ingestion and modeling to application delivery.', 'Cómodo moviéndome desde la ingestión y modelado hasta la entrega de aplicaciones.'),
      t('Strongest interest in data platforms, AI workflows, and analytics-enabling systems.', 'Mayor interés en plataformas de datos, flujos de IA y sistemas que habilitan analítica.'),
      t('Happy working across SQL, Python, app backends, dashboards, and deployment tooling.', 'Disfruto trabajar entre SQL, Python, backends de aplicaciones, dashboards y herramientas de despliegue.'),
    ],
    toolsLabel: t('tools', 'herramientas'),
  },

  contactSection: {
    eyebrow: t('Contact', 'Contacto'),
    title: t('Open to the next', 'Abierto al próximo'),
    titleAccent: t('data, AI, or consulting challenge', 'reto de datos, IA o consultoría'),
    email: t('Email', 'Correo'),
    linkedIn: 'LinkedIn',
    github: 'GitHub',
    phone: t('Phone', 'Teléfono'),
    downloadCv: t('Download CV', 'Descargar CV'),
    messageLinkedIn: t('Message on LinkedIn', 'Escribirme por LinkedIn'),
    availabilityEyebrow: t('Availability', 'Disponibilidad'),
    availabilityBody: t(
      'Based in Melbourne and open to opportunities across Melbourne, Sydney, or remote-first teams.',
      'Ubicado en Melbourne y abierto a oportunidades en Melbourne, Sídney o equipos remote-first.',
    ),
    cvBody: t(
      'A full export is available if you want the detailed version of experience, education, and project context.',
      'Hay una versión completa disponible si quieres el detalle de experiencia, educación y contexto de proyectos.',
    ),
    downloadPdf: t('Download the PDF ->', 'Descargar PDF ->'),
  },
}

export function getPortfolioContent(language = 'en') {
  return localizeValue(portfolioData, language)
}

export function getUiCopy(language = 'en') {
  return localizeValue(uiCopy, language)
}
