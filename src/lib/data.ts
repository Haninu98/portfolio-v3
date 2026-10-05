export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  headlineRole: string;
  email: string;
  phone: string;
  phoneHref: string;
  location: string;
  resumeSummary: string;
  resumeSummaryShort: string;
  quote: string;
  github: string;
  linkedin: string;
  portfolioV1: string;
  resumePath: string;
  statusBadge: string;
  idCard: {
    idNo: string;
    dept: string;
    validTill: string;
    degree: string;
    keySkills: string[];
  };
}

export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface SkillItem {
  number: number;
  symbol: string;
  name: string;
  family: 'Languages' | 'Systems & Hardware' | 'PLM & Configuration' | 'DevOps & Tools';
  description: string;
  level: string;
  projects: string[];
  logoSvgName?: string;
  isBrand: boolean;
}

export interface ProjectItem {
  id: string;
  index: string;
  kicker: string;
  title: string;
  role: string;
  period: string;
  location: string;
  description: string;
  features: string[];
  tech: string[];
  github: string | null;
  illustrativeType: 'signaling_dashboard' | 'train_telemetry' | 'pipeline_status' | 'matrix_grid' | 'hardware_board' | 'sensor_graph';
  impact: string;
}

export interface CertificationItem {
  index: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  details: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'experience' | 'education';
  detail: string;
  badge?: string;
}

export interface AchievementItem {
  index: string;
  number: string;
  suffix?: string;
  targetValue: number;
  label: string;
  caption: string;
  detail: string;
  platform: string;
}

export const PROFILE: Profile = {
  name: "Hani IZEM",
  firstName: "Hani",
  lastName: "IZEM",
  role: "Electronics & Embedded Systems Engineer",
  headlineRole: "Electronics & Embedded Systems",
  email: "haniizem1998@gmail.com",
  phone: "+33 7 66 55 08 93",
  phoneHref: "tel:+33766550893",
  location: "Paris, France",
  resumeSummary: "Electronics and Industrial Computer Science Engineer with 3 years of work-study experience at Renault as an Embedded Systems Engineer. Currently Project Configuration & Change Manager at Alstom, I excel in process optimization, compliance tracking automation and tooling management. Curious and proactive, I quickly adapt to new technologies. Motivated and determined, I aim to contribute to ambitious technical projects in the transportation and industrial sectors.",
  resumeSummaryShort: "Passionate about embedded systems and railway transport, I bring a unique blend of technical expertise and project management skills to every challenge, from circuit design to large-scale configuration systems.",
  quote: "“Mastering complex railway & embedded systems from requirements baseline to on-track validation.”",
  github: "https://github.com/haniizem",
  linkedin: "https://www.linkedin.com/in/izem-hani",
  portfolioV1: "https://haniizem.github.io/",
  resumePath: "/resume.pdf",
  statusBadge: "Currently at Alstom • Paris, France",
  idCard: {
    idNo: "HI-75019",
    dept: "Embedded Systems & Rail",
    validTill: "2023",
    degree: "Ingénieur EI2I (Polytech Sorbonne)",
    keySkills: ["PLM & CCB", "Embedded C/C++", "DOORS DXL", "Signaling CBTC", "Python Pipelines"]
  }
};

export const NAV: NavItem[] = [
  { label: 'About', href: '#about', index: '01' },
  { label: 'Skills', href: '#skills', index: '02' },
  { label: 'Work', href: '#work', index: '03' },
  { label: 'Certifications', href: '#certifications', index: '04' },
  { label: 'Experience', href: '#experience', index: '05' },
  { label: 'Achievements', href: '#achievements', index: '06' },
  { label: 'Contact', href: '#contact', index: '07' },
];

export const SKILL_GROUPS: SkillItem[] = [
  // --- Languages ---
  {
    number: 1,
    symbol: 'Py',
    name: 'Python',
    family: 'Languages',
    description: 'Data science (Pandas, NumPy), automated telemetry reporting, and ETL pipeline tooling for automotive and rail.',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline', 'Udemy ML Bootcamp'],
    isBrand: true,
  },
  {
    number: 2,
    symbol: 'C',
    name: 'Langage C',
    family: 'Languages',
    description: 'Low-level embedded development on 32-bit ARM/STM32 microcontrollers, device drivers, and FreeRTOS tasks.',
    level: 'Advanced',
    projects: ['Wheelchair Motorization Kit', 'Pattern Recognition Engine'],
    isBrand: true,
  },
  {
    number: 3,
    symbol: 'Cp',
    name: 'C++',
    family: 'Languages',
    description: 'Object-oriented programming, modular firmware design, and embedded signal processing architectures.',
    level: 'Intermediate',
    projects: ['Connected Beehive Telemetry System', 'Polyphonic Synthesizer'],
    isBrand: true,
  },
  {
    number: 4,
    symbol: 'Dx',
    name: 'DOORS DXL',
    family: 'Languages',
    description: 'Custom modular DXL automation suites to verify requirement links, detect discrepancies, and extract ISO 26262 matrices.',
    level: 'Expert',
    projects: ['Modular DOORS DXL Traceability Suite'],
    isBrand: false,
  },
  {
    number: 5,
    symbol: 'Vb',
    name: 'VBA / Office',
    family: 'Languages',
    description: 'Automated macros and user forms for generating delivery reports, discrepancy summaries, and KPI trackers in one click.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: true,
  },
  {
    number: 6,
    symbol: 'Pq',
    name: 'Power Query',
    family: 'Languages',
    description: 'ETL pipelines using M language for automated data ingestion between TpPLM, ClearQuest, and EWM databases.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: true,
  },
  {
    number: 7,
    symbol: 'Vh',
    name: 'VHDL',
    family: 'Languages',
    description: 'Digital logic circuit design, finite state machines (FSM), and testbenches synthesized on Xilinx FPGA targets.',
    level: 'Intermediate',
    projects: ['Licence EEA Prototyping', 'Polytech Digital Electronics'],
    isBrand: true,
  },
  {
    number: 8,
    symbol: 'Mt',
    name: 'MATLAB / Simulink',
    family: 'Languages',
    description: 'Dynamic systems modeling, active filtering, FFT frequency analysis, and automated PID feedback control.',
    level: 'Advanced',
    projects: ['Wheelchair Motorization Kit', 'Signal Processing Labs'],
    isBrand: true,
  },

  // --- Systems & Hardware ---
  {
    number: 9,
    symbol: 'Cb',
    name: 'CBTC Signaling',
    family: 'Systems & Hardware',
    description: 'Railway signaling principles, Communications-Based Train Control (CBTC) architecture, and GoA4 unattended automation.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization', 'Railway Systems Engineering'],
    isBrand: false,
  },
  {
    number: 10,
    symbol: 'Tr',
    name: 'Track Validation',
    family: 'Systems & Hardware',
    description: 'On-track testing, dynamic commissioning as Chargé de Travaux, and depot troubleshooting under 25kV / 1.5kV.',
    level: 'Advanced',
    projects: ['RER NG Project Live Track Commissioning'],
    isBrand: false,
  },
  {
    number: 11,
    symbol: 'Rt',
    name: 'FreeRTOS',
    family: 'Systems & Hardware',
    description: 'Preemptive multitasking real-time kernels, mutexes, queues, and task scheduling on embedded microcontrollers.',
    level: 'Advanced',
    projects: ['Polyphonic Synthesizer', 'Connected Beehive Telemetry System'],
    isBrand: true,
  },
  {
    number: 12,
    symbol: 'Mc',
    name: 'Microcontrollers',
    family: 'Systems & Hardware',
    description: 'Architecture and peripheral interfacing (SPI, I2C, UART, ADC/DAC) on STM32, ARM Cortex-M, and Arduino boards.',
    level: 'Advanced',
    projects: ['Wheelchair Motorization Kit', 'Polytech EI2I Labs'],
    isBrand: false,
  },
  {
    number: 13,
    symbol: 'Cn',
    name: 'CAN / FIVP',
    family: 'Systems & Hardware',
    description: 'Controller Area Network (CAN) bus decoding, diagnostic protocols, and Factory Integration & Validation Platform interfaces.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization', 'RER NG Commissioning'],
    isBrand: false,
  },
  {
    number: 14,
    symbol: 'Fp',
    name: 'FPGA Xilinx',
    family: 'Systems & Hardware',
    description: 'Digital logic implementation, Vivado synthesis, ModelSim simulation, and hardware timing verification.',
    level: 'Intermediate',
    projects: ['Sorbonne Microelectronics & Polytech EI2I'],
    isBrand: true,
  },
  {
    number: 15,
    symbol: 'Bm',
    name: 'BMS Battery Mgmt',
    family: 'Systems & Hardware',
    description: 'Lithium battery management, cell monitoring, safety relays, state-of-charge algorithms, and high-voltage safety.',
    level: 'Advanced',
    projects: ['Wheelchair Motorization Kit', 'Temis Electrical BT/HT'],
    isBrand: false,
  },
  {
    number: 16,
    symbol: 'Sc',
    name: 'SCADA Telemetry',
    family: 'Systems & Hardware',
    description: 'Industrial remote command, sensor telemetry, high-power distribution circuits, and hydrocarbon monitoring protocols.',
    level: 'Intermediate',
    projects: ['Sonatrach DRG Discovery Internship'],
    isBrand: false,
  },

  // --- PLM & Configuration ---
  {
    number: 17,
    symbol: 'Tp',
    name: 'TpPLM (Alstom)',
    family: 'PLM & Configuration',
    description: 'Railway product lifecycle management, formal product tree breakdown, and baseline status configuration tracking.',
    level: 'Expert',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: false,
  },
  {
    number: 18,
    symbol: 'Dr',
    name: 'IBM DOORS',
    family: 'PLM & Configuration',
    description: 'System requirement engineering, hierarchical breakdown, requirement attributes, and end-to-end traceability.',
    level: 'Expert',
    projects: ['Modular DOORS DXL Traceability Suite'],
    isBrand: true,
  },
  {
    number: 19,
    symbol: 'Ew',
    name: 'IBM EWM',
    family: 'PLM & Configuration',
    description: 'Engineering Workflow Management, sprint iteration planning, configuration item tracking, and deliverable governance.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: true,
  },
  {
    number: 20,
    symbol: 'Cq',
    name: 'ClearQuest',
    family: 'PLM & Configuration',
    description: 'Defect logging, technical change requests, change impact evaluation, and Change Control Board arbitration.',
    level: 'Advanced',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: true,
  },
  {
    number: 21,
    symbol: 'Cc',
    name: 'CCB Governance',
    family: 'PLM & Configuration',
    description: 'Leading and animating Change Control Boards, multi-subsystem impact analysis, and delivery milestone approvals.',
    level: 'Expert',
    projects: ['Marseille Metro Signaling Modernization'],
    isBrand: false,
  },
  {
    number: 22,
    symbol: 'Dq',
    name: 'DFQ Methodology',
    family: 'PLM & Configuration',
    description: 'Alstom Design For Quality gate reviews, risk mitigation, and milestone compliance verification.',
    level: 'Certified',
    projects: ['Alstom DFQ Projects & Programs'],
    isBrand: false,
  },
  {
    number: 23,
    symbol: 'Ap',
    name: 'APSYS System',
    family: 'PLM & Configuration',
    description: 'Alstom Production System applied to project execution, standardized workflows, and waste reduction.',
    level: 'Certified',
    projects: ['Alstom APSYS for Projects'],
    isBrand: false,
  },
  {
    number: 24,
    symbol: 'Vc',
    name: 'V-Cycle Systems',
    family: 'PLM & Configuration',
    description: 'Systems engineering lifecycle: customer requirements, subsystem allocation, design verification, and field validation.',
    level: 'Advanced',
    projects: ['Renault Group & Alstom Projects'],
    isBrand: false,
  },

  // --- DevOps & Tools ---
  {
    number: 25,
    symbol: 'Jr',
    name: 'JIRA & Confluence',
    family: 'DevOps & Tools',
    description: 'Agile defect tracking, project dashboards, and REST API integration for automated status reporting.',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline', 'Alstom Metro'],
    isBrand: true,
  },
  {
    number: 26,
    symbol: 'Gl',
    name: 'GitLab CI/CD',
    family: 'DevOps & Tools',
    description: 'Automated test runners, ETL extraction scripts, and continuous integration pipelines (.gitlab-ci.yml).',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline'],
    isBrand: true,
  },
  {
    number: 27,
    symbol: 'Gt',
    name: 'Git',
    family: 'DevOps & Tools',
    description: 'Distributed version control, branch management, code review workflows, and repository hygiene.',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline', 'Polytech Projects'],
    isBrand: true,
  },
  {
    number: 28,
    symbol: 'Lx',
    name: 'Linux / Bash',
    family: 'DevOps & Tools',
    description: 'Unix shell scripting, environment configuration, system automation, and test platform maintenance.',
    level: 'Advanced',
    projects: ['Renault Group & Polytech EI2I'],
    isBrand: true,
  },
  {
    number: 29,
    symbol: 'Vv',
    name: 'Vivado & ModelSim',
    family: 'DevOps & Tools',
    description: 'Electronic design automation (EDA), RTL simulation, waveform debugging, and synthesis on FPGA.',
    level: 'Intermediate',
    projects: ['Sorbonne & Polytech Hardware Labs'],
    isBrand: false,
  },
  {
    number: 30,
    symbol: 'Cd',
    name: 'Cadence & PSpice',
    family: 'DevOps & Tools',
    description: 'Analog and mixed-signal circuit simulation, semiconductor analysis, and clean-room microelectronics design.',
    level: 'Intermediate',
    projects: ['Sorbonne Clean Room Fabrication'],
    isBrand: false,
  },
  {
    number: 31,
    symbol: 'Pd',
    name: 'Pandas & NumPy',
    family: 'DevOps & Tools',
    description: 'High-performance multidimensional arrays, data wrangling, telemetry parsing, and statistical aggregation.',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline', 'Udemy ML Bootcamp'],
    isBrand: true,
  },
  {
    number: 32,
    symbol: 'Pl',
    name: 'Plotly & Matplotlib',
    family: 'DevOps & Tools',
    description: 'Automated data visualization, executive defect charting, and interactive test verification reporting.',
    level: 'Advanced',
    projects: ['Automotive ECU Cybersecurity CI/CD Pipeline'],
    isBrand: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "marseille-metro",
    index: "01",
    kicker: "Alstom • Railway Signaling",
    title: "Marseille Metro Signaling Modernization",
    role: "Project Configuration & Change Manager",
    period: "2024 — Present",
    location: "Paris, France",
    description: "System and subsystem configuration management for the Marseille Metro GoA4 CBTC signaling automation project across 4 railway sub-systems, synchronizing validation between factory platforms and live site teams.",
    features: [
      "Leading Change Control Board (CCB) committees & delivery baseline reviews",
      "Coordination of subsystem engineering with FIVP and T&C validation teams",
      "Tooling administration & user support for TpPLM, IBM EWM, and ClearQuest",
      "Automated Power Query & VBA KPI reporting pipeline reducing effort by 85%"
    ],
    tech: ["TpPLM", "IBM EWM", "Rational ClearQuest", "Power Query", "VBA", "CBTC"],
    github: null,
    illustrativeType: "signaling_dashboard",
    impact: "-85% recurring KPI reporting effort"
  },
  {
    id: "rer-ng",
    index: "02",
    kicker: "Alstom • Track Commissioning",
    title: "RER NG Project Live Track Commissioning",
    role: "Chargé de Travaux — System Validation",
    period: "2024 — Present",
    location: "Paris Region, France",
    description: "System validation on RER NG trainsets on live tracks as Chargé de Travaux, executing safety-critical ECU firmware flashing and depot fault-finding under 25kV / 1.5kV electrical overhead catenary environments.",
    features: [
      "Safety validation on live tracks as authorized Chargé de Travaux",
      "Firmware updates & flashing for safety-critical ECUs: BCU, TDD, DAD, Net Box",
      "Maintenance, troubleshooting, and garage operations under 25kV / 1.5kV",
      "Dynamic testing coordination with train drivers and commissioning engineers"
    ],
    tech: ["Safety ECUs", "CAN Bus", "B2V / BR / BC", "Diagnostic Tools"],
    github: null,
    illustrativeType: "train_telemetry",
    impact: "100% on-schedule software deployments"
  },
  {
    id: "renault-cybersecurity",
    index: "03",
    kicker: "Renault Group • CI/CD Automation",
    title: "Automotive ECU Cybersecurity CI/CD Pipeline",
    role: "Embedded Systems Engineer",
    period: "2020 — 2023",
    location: "Guyancourt, France",
    description: "Engineered an automated continuous integration ETL pipeline to extract, transform, and load JIRA defect data, automating the cybersecurity compliance status reporting across vehicle electronic control units.",
    features: [
      "Automated GitLab CI/CD ETL pipeline ingesting live JIRA defect telemetry",
      "Reduced vehicle cybersecurity audit cycle time from 2 weeks to under 15 minutes",
      "Python Pandas & Matplotlib telemetry wrangling and executive dashboard generation",
      "Active participation in software quality assurance (QA) and technical specs"
    ],
    tech: ["Python", "Pandas", "GitLab CI/CD", "JIRA REST API", "ISO 26262"],
    github: null,
    illustrativeType: "pipeline_status",
    impact: "Audit cycles: 2 weeks → < 15 minutes"
  },
  {
    id: "doors-traceability",
    index: "04",
    kicker: "Renault Group • Requirements Engineering",
    title: "Modular DOORS DXL Traceability Suite",
    role: "Embedded Systems Engineer",
    period: "2020 — 2023",
    location: "Guyancourt, France",
    description: "Optimized IBM DOORS requirement management for vehicle electronic systems, establishing 100% end-to-end traceability meeting strict ISO 26262 automotive functional safety standards through modular DXL scripting.",
    features: [
      "Custom modular DXL automation suites to verify links & detect discrepancies",
      "Instant generation of ISO 26262 compliance matrices for system architects",
      "Technical documentation formalization and tutorial creation for engineering teams",
      "Reverse engineering of legacy embedded source code for compliance verification"
    ],
    tech: ["IBM DOORS", "DXL Scripting", "ISO 26262", "Requirements Mgmt"],
    github: null,
    illustrativeType: "matrix_grid",
    impact: "100% ISO 26262 audit compliance"
  },
  {
    id: "wheelchair-kit",
    index: "05",
    kicker: "Polytech Sorbonne • Embedded Systems",
    title: "Electric Wheelchair Motorization Kit",
    role: "Hardware & Firmware Lead",
    period: "2022 — 2023",
    location: "Paris, France",
    description: "Designed and prototyped an embedded motorization kit for manual wheelchairs featuring Arduino microcontroller firmware, Battery Management System (BMS) telemetry, and FMEA industrial safety analysis.",
    features: [
      "Arduino embedded control firmware with PID motor velocity regulation",
      "Battery Management System (BMS) telemetry and emergency cutoff relays",
      "FMEA/AMDEC risk mitigation matrix meeting ISO accessibility safety standards",
      "Physical bench testing with 99% telemetry signal reliability"
    ],
    tech: ["Arduino", "Embedded C", "BMS", "AMDEC / FMEA", "SolidWorks"],
    github: null,
    illustrativeType: "hardware_board",
    impact: "99% telemetry reliability & ISO safety"
  },
  {
    id: "iot-beehive",
    index: "06",
    kicker: "Polytech Sorbonne • IoT & Telemetry",
    title: "Connected Beehive Telemetry System",
    role: "IoT Systems Engineer",
    period: "2021 — 2022",
    location: "Paris, France",
    description: "Built an autonomous solar-powered IoT environmental monitoring station tracking weight, internal temperature, and humidity inside beehives, transmitting telemetry over wireless networks to a cloud database.",
    features: [
      "Multi-sensor array integration (HX711 load cell, DHT22 temperature/humidity)",
      "Ultra-low-power sleep cycles powered by solar energy harvesting",
      "Relational SQL database backend and real-time telemetry dashboard",
      "Early warning alerts for swarm detection and abnormal colony conditions"
    ],
    tech: ["C++", "IoT Sensors", "SQL", "FreeRTOS", "Solar Harvesting"],
    github: null,
    illustrativeType: "sensor_graph",
    impact: "24/7 continuous hive health monitoring"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    index: "01",
    title: "Electrical Certification BT/HT (B2V, BR, BC)",
    issuer: "Temis Formation",
    date: "2024",
    badge: "Safety & Voltage",
    details: "Low and High Voltage electrical safety certification for mission-critical railway and industrial environments (25kV / 1.5kV overhead catenary)."
  },
  {
    index: "02",
    title: "TOEIC for Engineer — Level C1 (International)",
    issuer: "IELTS Malta",
    date: "2023",
    badge: "Language C1",
    details: "English proficiency certification for engineering professionals, certified through intensive immersion at IELTS Malta. Daily international coordination."
  },
  {
    index: "03",
    title: "Railway Systems Engineering",
    issuer: "Alstom University",
    date: "2024",
    badge: "Railway Signaling",
    details: "Comprehensive training on railway signaling principles, CBTC architecture, interlocking, and fail-safe automated train control systems."
  },
  {
    index: "04",
    title: "APSYS for Projects",
    issuer: "Alstom University",
    date: "2024",
    badge: "Project Operations",
    details: "Alstom Production System applied to project management: standardisation, continuous improvement, milestone synchronization, and waste elimination."
  },
  {
    index: "05",
    title: "DFQ Projects & Programs",
    issuer: "Alstom University",
    date: "2024",
    badge: "Quality Engineering",
    details: "Design For Quality methodology: quality gate reviews, risk anticipation, verification matrices, and delivery milestone compliance."
  },
  {
    index: "06",
    title: "Ethics & Compliance",
    issuer: "Alstom University",
    date: "2024",
    badge: "Corporate Governance",
    details: "Corporate compliance, business ethics, trade compliance, integrity standards, and high-responsibility governance in engineering."
  },
  {
    index: "07",
    title: "Python for Data Science and Machine Learning Bootcamp",
    issuer: "Udemy Certified",
    date: "2023",
    badge: "Data Science & ML",
    details: "Big Data processing (PySpark), numerical computing (NumPy), telemetry wrangling (Pandas), statistical visualization (Plotly), and machine learning."
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Project Configuration & Change Manager",
    organization: "Alstom",
    location: "Paris, France",
    type: "experience",
    badge: "Current Role",
    detail: "Leading configuration management for the Marseille Metro GoA4 CBTC modernization project. Synchronizing FIVP and T&C validation processes, chairing Change Control Boards (CCB), administering TpPLM/EWM, and developing automated Power Query/VBA KPI pipelines."
  },
  {
    year: "2024 — Present",
    title: "Chargé de Travaux — RER NG Commissioning",
    organization: "Alstom",
    location: "Paris Region, France",
    type: "experience",
    badge: "Field Validation",
    detail: "System validation on RER NG trainsets on live tracks as Chargé de Travaux. Firmware flashing and software updates on safety-critical ECUs (BCU, TDD, DAD, Net Box) under 25kV / 1.5kV electrical catenary."
  },
  {
    year: "2020 — 2023",
    title: "Embedded Systems Engineer (Alternance)",
    organization: "Renault Group",
    location: "Guyancourt, France",
    type: "experience",
    badge: "3 Years Work-Study",
    detail: "Engineered automated JIRA defect ETL pipelines in Python and GitLab CI/CD, reducing ECU cybersecurity audit cycles from 2 weeks to <15 min. Authored modular DOORS DXL suites ensuring 100% ISO 26262 requirement traceability."
  },
  {
    year: "2020 — 2023",
    title: "Diplôme d'Ingénieur — EI2I",
    organization: "Polytech Sorbonne",
    location: "Paris, France",
    type: "education",
    badge: "Engineering Degree",
    detail: "Electronics and Industrial Computer Science: Real-time systems (FreeRTOS), IoT and telecommunications, FPGA/VHDL digital logic, C/C++ object-oriented design, project management, and FMEA industrial risk mitigation."
  },
  {
    year: "2018 — 2020",
    title: "Licence EEA (Electronics, Energy, Automation)",
    organization: "Sorbonne Université",
    location: "Paris, France",
    type: "education",
    badge: "Bachelor's Degree",
    detail: "Analog and digital electronics, clean-room integrated circuit microfabrication (Cadence, PSpice), signal processing (FFT, filtering), MATLAB modeling, and autonomous delivery robot prototyping."
  },
  {
    year: "2017 — 2018",
    title: "Discovery Internship (Stage de Découverte)",
    organization: "Sonatrach DRG",
    location: "Béjaïa, Algérie",
    type: "experience",
    badge: "Industrial Immersion",
    detail: "First exposure to mission-critical industrial petrochemical processes. Servicing and maintenance of electrical distribution equipment, high-power relays, and remote SCADA tank volume telemetry."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    index: "01 / 05",
    number: "85",
    suffix: "%",
    targetValue: 85,
    label: "Reporting Effort Reduction",
    caption: "Alstom • Process Automation",
    detail: "Engineered automated VBA & Power Query pipelines consolidating TpPLM and ClearQuest records, eliminating repetitive manual exports.",
    platform: "Alstom"
  },
  {
    index: "02 / 05",
    number: "15",
    suffix: " min",
    targetValue: 15,
    label: "Audit Cycle Speedup",
    caption: "Renault Group • Down from 2 weeks",
    detail: "Implemented continuous integration ETL pipeline automating ECU cybersecurity verification across vehicle programs.",
    platform: "Renault"
  },
  {
    index: "03 / 05",
    number: "10",
    suffix: "+",
    targetValue: 10,
    label: "Projects Delivered",
    caption: "Industrial & Academic",
    detail: "Successfully led mission-critical railway signaling, automotive firmware, and embedded IoT hardware projects to completion.",
    platform: "Engineering"
  },
  {
    index: "04 / 05",
    number: "4",
    suffix: "+ yrs",
    targetValue: 4,
    label: "Industry Experience",
    caption: "Transportation & Tech",
    detail: "Proven track record across leading transportation giants Alstom and Renault Group, mastering the complete V-cycle systems lifecycle.",
    platform: "Career"
  },
  {
    index: "05 / 05",
    number: "100",
    suffix: "%",
    targetValue: 100,
    label: "Audit Baseline Compliance",
    caption: "ISO 26262 & Rail Standards",
    detail: "Zero non-conformities across formal configuration reviews, CCB approvals, and automotive functional safety audits.",
    platform: "Quality"
  }
];
