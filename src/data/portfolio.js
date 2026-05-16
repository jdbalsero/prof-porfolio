export const personal = {
  name: 'Juan Diego Balsero Leon',
  brand: 'JBL',
  heroNameLead: 'Juan Diego',
  heroNameAccent: 'Balsero',
  heroNameTail: 'Leon',
  title: 'Data Engineer, AI Builder & Software Consultant',
  subtitle: 'Data Science, Analytics and Automation',
  email: 'juandibl00@hotmail.com',
  phone: '0493939946',
  linkedin: 'https://www.linkedin.com/in/jbalsero/',
  linkedinLabel: 'linkedin.com/in/jbalsero',
  github: 'https://github.com/jdbalsero',
  githubLabel: 'github.com/jdbalsero',
  location: 'Melbourne, Australia',
  cvUrl: '/professional-porfolio/assets/cv_juan_balsero.pdf',
  photoUrl: '/professional-porfolio/assets/juan_portfolio.jpg',
  availability: 'Open to Melbourne / Sydney roles',
  heroSummary:
    'IT engineer with an MSc in Data Science, blending data engineering, AI automation, business intelligence, and software delivery to solve complex business problems.',
  stats: [
    { value: '3+', label: 'Years Across Data, Software & DevOps' },
    { value: '7 / 7', label: 'Master GPA' },
    { value: '2', label: 'Azure Certifications' },
    { value: '6', label: 'Professional Roles' },
  ],
}

export const education = [
  {
    degree: 'Master of Data Science and Innovation',
    institution: 'University of Technology Sydney',
    shortName: 'UTS',
    domain: 'uts.edu.au',
    url: 'https://www.uts.edu.au',
    period: '2024 - 2025',
    detail: 'Outstanding Academic Student Award. Advanced study in machine learning, modern data tooling, and practical AI delivery for business use cases.',
    badge: 'GPA 7 / 7',
    color: '#F59E0B',
  },
  {
    degree: 'Bachelor in Systems and Telecommunications Engineering',
    institution: 'Sergio Arboleda University',
    shortName: 'SAU',
    domain: 'usergioarboleda.edu.co',
    url: 'https://www.usergioarboleda.edu.co',
    period: '2017 - 2022',
    detail: 'Graduated with academic honors. Built a strong foundation in software engineering, systems design, and applied technical problem solving.',
    badge: 'Academic Honors',
    color: '#10B981',
  },
]

export const about = {
  heading: 'From Software Delivery to Data & AI',
  intro:
    'I started by building backend systems and deployment workflows, then grew into analytics, data engineering, and AI automation. That mix gives me a practical perspective: I care as much about reliable delivery and business impact as I do about models, pipelines, and technical elegance.',
}

export const journey = [
  {
    icon: 'API',
    year: '2022',
    title: 'Backend Developer',
    where: 'Coally SAS',
    desc: 'Built Node.js APIs, document workflows, and third-party integrations including OpenAI, SendGrid, and Twilio.',
  },
  {
    icon: 'OPS',
    year: '2022-23',
    title: 'DevOps Technician',
    where: 'Informa Colombia',
    desc: 'Maintained CI/CD flows with Docker and Jenkins, administered Kubernetes clusters, and planned deployment strategies.',
  },
  {
    icon: 'WEB',
    year: '2023-24',
    title: 'Full Stack Developer',
    where: 'Assisttu',
    desc: 'Delivered secure React and Express features backed by PostgreSQL, MongoDB, AWS services, and cloud infrastructure.',
  },
  {
    icon: 'BI',
    year: '2023-24',
    title: 'Consultant',
    where: 'NFQ',
    desc: 'Built Java customizations, JUnit tests, and Power BI reporting for Calypso-based client implementations.',
  },
  {
    icon: 'AI',
    year: '2025',
    title: 'AI Intern',
    where: 'Synogize',
    desc: 'Created agentic AI workflows, DLT ingestion, dbt transformations, and a Snowflake medallion MVP.',
  },
  {
    icon: 'HANA',
    year: '2025-Now',
    title: 'Associate Consultant',
    where: 'Synogize',
    desc: 'Debugging SAP HANA procedures, automating data ingestion, and improving demand planning and order allocation.',
  },
]

export const contact = {
  blurb:
    'Open to data engineering, AI, analytics, and software consulting roles in Melbourne, Sydney, and remote teams. Always happy to talk through interesting technical challenges.',
  cvTitle: 'Full Curriculum Vitae',
  cvSubtitle: 'Based in Melbourne | Open to Melbourne / Sydney',
  footerLocation: 'Melbourne',
}

export const experience = [
  {
    role: 'Associate Consultant',
    company: 'Synogize',
    location: 'Sydney, AU',
    period: 'Dec 2025 - Present',
    bullets: [
      'Debugged and modified SAP HANA SQL procedures for a TMCA vehicle demand planning and order allocation tool.',
      'Implemented automated data ingestion pipelines and data migration into the TMCA business warehouse.',
      'Performed SIT testing across the master data platform, validating outputs between SAP HANA and Microsoft Fabric.',
      'Supported improvements that increased the effectiveness of the planning process by 60%.',
    ],
    tech: ['SAP HANA', 'SQL', 'Microsoft Fabric', 'Data Warehousing'],
  },
  {
    role: 'Data Science and AI Intern',
    company: 'Synogize',
    location: 'Sydney, AU',
    period: 'Aug 2025 - Nov 2025',
    bullets: [
      'Developed agentic AI solutions to automate data engineering workflows using LangChain and LangGraph.',
      'Implemented automated ingestion pipelines with DLT and transformation workflows with dbt.',
      'Designed an AI-driven MVP for ingestion, transformation, and structuring within a medallion architecture.',
      'Integrated API-based data sources with Snowflake as the core data warehouse.',
    ],
    tech: ['Python', 'LangChain', 'LangGraph', 'DLT', 'dbt', 'Snowflake'],
  },
  {
    role: 'Consultant',
    company: 'NFQ Advisory Services & Solutions',
    location: 'Remote',
    period: 'Jul 2023 - Jan 2024',
    bullets: [
      'Developed customized products in Java within the Calypso platform for specific client needs.',
      'Created JUnit coverage for automated processes used in BBVA Spain Calypso implementations.',
      'Designed Power BI dashboards to monitor performance metrics, infrastructure load, and possible trade errors.',
    ],
    tech: ['Java', 'Calypso', 'JUnit', 'Power BI'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Assisttu (Tu Plan Live LLC)',
    location: 'Remote',
    period: 'Mar 2023 - Jan 2024',
    bullets: [
      'Managed PostgreSQL, MongoDB, and HashiCorp Vault for application data and secure credential storage.',
      'Implemented CI/CD pipelines for cloud infrastructure deployment and maintenance through DigitalOcean.',
      'Integrated AWS services including S3 and RDS into the web application infrastructure.',
      'Built a React frontend with Material UI and a Node.js backend with Express and JWT-based authentication.',
      'Acted as project manager for the development team, ensuring delivery quality and feature completeness.',
    ],
    tech: ['ReactJS', 'Material UI', 'Node.js', 'ExpressJS', 'PostgreSQL', 'MongoDB', 'AWS', 'DigitalOcean'],
  },
  {
    role: 'DevOps Technician',
    company: 'Informa Colombia',
    location: 'Colombia',
    period: 'Aug 2022 - Jun 2023',
    bullets: [
      'Maintained CI/CD flows for enterprise applications using Docker and Jenkins.',
      'Administered Kubernetes clusters with k8s and Rancher.',
      'Developed deployment strategies for new software products.',
      'Partnered with internal teams to improve tooling that supported daily operational work.',
    ],
    tech: ['Docker', 'Jenkins', 'Kubernetes', 'Rancher', 'CI/CD'],
  },
  {
    role: 'Backend Developer',
    company: 'Coally SAS',
    location: 'Colombia',
    period: 'Jun 2022 - May 2023',
    bullets: [
      'Managed MongoDB databases for document storage and backend workflows.',
      'Integrated the Coally API with external services such as OpenAI, SendGrid, and Twilio.',
      'Contributed to core back-end modules built in Node.js with the Express framework.',
    ],
    tech: ['Node.js', 'ExpressJS', 'MongoDB', 'OpenAI', 'SendGrid', 'Twilio'],
  },
]

export const projects = [
  {
    title: 'AI Data Engineering Agent for API-to-Warehouse Automation',
    category: 'Data Engineering / AI Agents',
    description:
      'Built a LangGraph-powered workflow that reads API documentation, recommends endpoints, generates DLT ingestion scripts, loads data into Snowflake, and then produces dbt models for a Bronze-Silver-Gold warehouse architecture.',
    tech: ['LangGraph', 'Python', 'DLT', 'Snowflake', 'dbt', 'Streamlit', 'OpenAI'],
    color: '#F97316',
    image: '/professional-porfolio/assets/project_image_1.jpg',
    wide: true,
    link: 'https://github.com/jdbalsero/Data_Engineering_Agent',
    linkLabel: 'View repo ->',
  },
  {
    title: 'RL GHG Compliance Consultant',
    category: 'AI / Sustainability',
    description:
      'Built as a group project with fellow Master of Data Science students, this assistant helps users navigate Australian GHG compliance questions with a reinforcement-learning-enhanced LLM experience. My contribution focused on delivery, business analysis, and improving answer quality and groundedness.',
    tech: ['Python', 'Reinforcement Learning', 'LLM'],
    color: '#F97316',
    image: '/professional-porfolio/assets/project_image_2.jpg',
    link: 'https://huggingface.co/spaces/camilouribeg/ghg-digital-consultant',
    linkLabel: 'Open demo ->',
  },
  {
    title: 'Solana Next-Day High Price Forecasting Platform',
    category: 'Machine Learning / FinTech',
    description:
      'End-to-end project to forecast Solana next-day high prices from historical crypto market data, combining feature engineering and regression modeling with a FastAPI prediction service and a Streamlit frontend for interactive consumption.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'Streamlit', 'Kraken API', 'CoinGecko API'],
    color: '#6366F1',
    image: '/professional-porfolio/assets/project_image_3.jpg',
    wide: true,
    link: 'https://cryptocurrencydashboardgroup29.streamlit.app/',
    linkLabel: 'Open live demo ->',
  },
  {
    title: 'Big Data Taxi Fare Prediction Pipeline',
    category: 'Big Data / ML',
    description:
      'Built a Databricks and PySpark pipeline over large-scale NYC taxi trip data, persisting curated Delta tables for analysis and training fare-prediction models from engineered trip, location, and time-based features.',
    tech: ['PySpark', 'Databricks', 'Delta Lake', 'Spark SQL', 'scikit-learn'],
    color: '#F59E0B',
    image: '/professional-porfolio/assets/project_image_4.jpg',
  },
  {
    title: 'Airflow + dbt Medallion Pipeline',
    category: 'Data Engineering',
    description:
      'End-to-end pipeline with bronze, silver, and gold layers, SCD Type 2 snapshots, star schema models, and business marts for Airbnb and Census revenue and demographic analysis.',
    tech: ['Apache Airflow', 'dbt', 'Snowflake', 'PostgreSQL', 'Python'],
    color: '#10B981',
    image: '/professional-porfolio/assets/project_image_5.jpg',
  },
]

export const skills = {
  'Data & AI': ['Python', 'Machine Learning', 'scikit-learn', 'PyTorch', 'LangChain', 'LangGraph', 'AI Automation'],
  'Data Engineering': ['SQL', 'ETL / ELT', 'DLT', 'dbt', 'Snowflake', 'SAP HANA', 'PostgreSQL', 'MySQL', 'Oracle SQL', 'MongoDB'],
  'Cloud & DevOps': ['Docker', 'Jenkins', 'Kubernetes', 'Oracle Cloud Infrastructure', 'AWS S3', 'AWS RDS', 'DigitalOcean', 'HashiCorp Vault'],
  'Software Engineering': ['ReactJS', 'Material UI', 'Node.js', 'ExpressJS', 'NestJS', 'Java', 'Spring Boot', 'JUnit', 'JWT'],
  'BI & Analytics': ['Power BI', 'Data Analysis', 'Data Visualization', 'Business Intelligence', 'Dashboard Design'],
}

export const publication = {
  title: 'Automation of Greenhouse Gas Emissions Estimates Associated with Natural Gas Production in the Appalachian Basin',
  publisher: 'OnePetro / SPE',
  url: 'https://onepetro.org/speets/proceedings-abstract/24ETS/24ETS/D012S005R002/548349',
  tachyusUrl: 'https://www.tachyus.com/projects/automation-of-greenhouse-gas-emission-estimates-associated-with-natural-gas-production-in-the-appalachian-basin',
  doi: '10.2118/221400-MS',
}
