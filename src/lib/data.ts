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

export const PROJECTS_FR: ProjectItem[] = [
  {
    id: "marseille-metro",
    index: "01",
    kicker: "Alstom • Signalisation Ferroviaire",
    title: "Modernisation de la Signalisation du Métro de Marseille",
    role: "Project Configuration & Change Manager",
    period: "2024 — En cours",
    location: "Paris, France",
    description: "Gestion de configuration système et sous-systèmes pour le projet d'automatisation CBTC GoA4 du métro de Marseille, synchronisant la validation entre les plateformes d'intégration usine (FIVP) et les équipes sur site (T&C).",
    features: [
      "Animation des comités Change Control Board (CCB) et revues de baseline de livraison",
      "Coordination de l'ingénierie sous-systèmes avec les équipes de validation FIVP et T&C",
      "Administration et support utilisateur des outils TpPLM, IBM EWM et ClearQuest",
      "Pipeline d'automatisation Power Query & VBA réduisant l'effort de reporting de 85%"
    ],
    tech: ["TpPLM", "IBM EWM", "Rational ClearQuest", "Power Query", "VBA", "CBTC"],
    github: null,
    illustrativeType: "signaling_dashboard",
    impact: "-85% d'effort de reporting KPI récurrent"
  },
  {
    id: "rer-ng",
    index: "02",
    kicker: "Alstom • Commissioning sur Voie",
    title: "Essais et Commissioning sur Voie — Projet RER NG",
    role: "Chargé de Travaux — Validation Système",
    period: "2024 — En cours",
    location: "Île-de-France, France",
    description: "Validation système sur rames RER NG sur voies actives en tant que Chargé de Travaux, flashage de firmwares d'ECU critiques et dépannage en atelier sous tension caténaire 25 kV / 1,5 kV.",
    features: [
      "Validation de sûreté sur voies d'essais en qualité de Chargé de Travaux habilité",
      "Mises à jour logicielles et flashage d'ECU de sécurité : BCU, TDD, DAD, Net Box",
      "Maintenance, diagnostic de pannes et manœuvres de garage sous caténaire 25 kV / 1,5 kV",
      "Coordination des essais dynamiques avec les conducteurs et ingénieurs d'essais"
    ],
    tech: ["Safety ECUs", "CAN Bus", "B2V / BR / BC", "Outils de Diagnostic"],
    github: null,
    illustrativeType: "train_telemetry",
    impact: "100% de déploiements logiciels dans les délais"
  },
  {
    id: "renault-cybersecurity",
    index: "03",
    kicker: "Renault Group • Automatisation CI/CD",
    title: "Pipeline CI/CD & Cybersécurité des Calculateurs ECU",
    role: "Ingénieur Systèmes Embarqués (Alternance)",
    period: "2020 — 2023",
    location: "Guyancourt, France",
    description: "Conception d'un pipeline ETL d'intégration continue automatisé pour extraire et transformer les données JIRA, automatisant le reporting d'audit de cybersécurité des calculateurs automobiles.",
    features: [
      "Pipeline GitLab CI/CD automatisé ingérant la télémétrie des anomalies JIRA",
      "Réduction du cycle d'audit cybersécurité véhicule de 2 semaines à moins de 15 minutes",
      "Traitement de données Pandas / Matplotlib et génération de dashboards de direction",
      "Participation active à l'assurance qualité logicielle (QA) et spécifications techniques"
    ],
    tech: ["Python", "Pandas", "GitLab CI/CD", "JIRA REST API", "ISO 26262"],
    github: null,
    illustrativeType: "pipeline_status",
    impact: "Cycles d'audit : 2 semaines → < 15 min"
  },
  {
    id: "doors-traceability",
    index: "04",
    kicker: "Renault Group • Ingénierie des Exigences",
    title: "Suite Modulaire d'Automatisation DXL DOORS",
    role: "Ingénieur Systèmes Embarqués (Alternance)",
    period: "2020 — 2023",
    location: "Guyancourt, France",
    description: "Optimisation de la gestion des exigences IBM DOORS pour les systèmes électroniques automobiles, garantissant une traçabilité de bout en bout conforme à l'ISO 26262 via des scripts DXL modulaires.",
    features: [
      "Suites d'automatisation DXL modulaires pour vérifier les liens et détecter les écarts",
      "Génération instantanée des matrices de conformité ISO 26262 pour les architectes système",
      "Formalisation documentaire et création de tutoriels pour les équipes d'ingénierie",
      "Rétro-ingénierie de code source embarqué legacy pour conformité réglementaire"
    ],
    tech: ["IBM DOORS", "Scripts DXL", "ISO 26262", "Gestion des Exigences"],
    github: null,
    illustrativeType: "matrix_grid",
    impact: "100% de conformité aux audits ISO 26262"
  },
  {
    id: "wheelchair-kit",
    index: "05",
    kicker: "Polytech Sorbonne • Systèmes Embarqués",
    title: "Kit de Motorisation de Fauteuil Roulant Électrique",
    role: "Responsable Matériel & Firmware",
    period: "2022 — 2023",
    location: "Paris, France",
    description: "Conception et prototypage d'un kit de motorisation embarqué pour fauteuil roulant manuel avec microcontrôleur Arduino, télémétrie BMS et analyse de sûreté de fonctionnement AMDEC.",
    features: [
      "Firmware embarqué Arduino avec régulation de vitesse moteur PID",
      "Télémétrie Battery Management System (BMS) et relais de coupure d'urgence",
      "Matrice de maîtrise des risques AMDEC / FMEA conforme aux normes d'accessibilité",
      "Validation sur banc d'essai physique avec 99% de fiabilité de signal"
    ],
    tech: ["Arduino", "C Embarqué", "BMS", "AMDEC / FMEA", "SolidWorks"],
    github: null,
    illustrativeType: "hardware_board",
    impact: "99% de fiabilité télémétrique & sûreté ISO"
  },
  {
    id: "iot-beehive",
    index: "06",
    kicker: "Polytech Sorbonne • IoT & Télémétrie",
    title: "Système IoT de Ruche Connectée & Télémétrie",
    role: "Ingénieur Systèmes IoT",
    period: "2021 — 2022",
    location: "Paris, France",
    description: "Développement d'une station autonome solaire de surveillance environnementale mesurant le poids, la température et l'humidité, transmettant les données sans fil vers une base de données cloud.",
    features: [
      "Intégration multi-capteurs (jauge HX711, température / humidité DHT22)",
      "Architecture basse consommation avec gestion d'énergie solaire et batterie",
      "Transmission sans fil des mesures environnementales en temps réel",
      "Traitement et affichage des courbes télémétriques pour suivi apicole"
    ],
    tech: ["ESP32", "C++", "Capteurs IoT", "FreeRTOS", "Cloud Telemetry"],
    github: null,
    illustrativeType: "sensor_graph",
    impact: "Surveillance temps réel 24/7 & autonomie totale"
  }
];

export const CERTIFICATIONS_FR: CertificationItem[] = [
  {
    index: "01",
    title: "Habilitation Électrique BT / HT (B2V, BR, BC)",
    issuer: "Temis Formation",
    date: "2024",
    badge: "Sécurité & Ferroviaire",
    details: "Habilitation officielle de sécurité électrique basse et haute tension pour environnements ferroviaires industriels sous caténaire 25 kV / 1,5 kV."
  },
  {
    index: "02",
    title: "TOEIC for Engineer — Niveau C1",
    issuer: "IELTS Malta",
    date: "2023",
    badge: "Langue & International",
    details: "Attestation internationale de maîtrise de l'anglais technique et managérial pour ingénieurs, certifiée après séjour d'immersion à Malte. Coordination internationale au quotidien."
  },
  {
    index: "03",
    title: "Ingénierie des Systèmes Ferroviaires (Railway Systems)",
    issuer: "Alstom University",
    date: "2024",
    badge: "Signalisation Ferroviaire",
    details: "Formation complète aux principes de signalisation ferroviaire, architecture CBTC, enclenchements et systèmes d'automatismes de trains sécuritaires (fail-safe)."
  },
  {
    index: "04",
    title: "APSYS pour les Projets (Alstom Production System)",
    issuer: "Alstom University",
    date: "2024",
    badge: "Opérations & Méthodes",
    details: "Méthodologie Alstom Production System appliquée au pilotage de projet : standardisation, amélioration continue, synchronisation des jalons et élimination des gaspillages."
  },
  {
    index: "05",
    title: "DFQ Projets & Programmes (Design For Quality)",
    issuer: "Alstom University",
    date: "2024",
    badge: "Qualité & Conformité",
    details: "Méthodologie Design For Quality : revues de jalons qualité, anticipation des risques projet, matrices de conformité et validation des livrables."
  },
  {
    index: "06",
    title: "Éthique, Déontologie & Conformité",
    issuer: "Alstom University",
    date: "2024",
    badge: "Gouvernance",
    details: "Conformité réglementaire d'entreprise, déontologie des affaires, intégrité et respect des protocoles stricts de gouvernance industrielle."
  },
  {
    index: "07",
    title: "Bootcamp Python Data Science & Machine Learning",
    issuer: "Certification Udemy",
    date: "2023",
    badge: "Data Science & IA",
    details: "Traitement Big Data (PySpark), calcul numérique vectorisé (NumPy), manipulation de données (Pandas), visualisation (Plotly, Seaborn) et algorithmes de machine learning."
  }
];

export const EXPERIENCE_FR: TimelineItem[] = [
  {
    year: "2024 — En cours",
    title: "Project Configuration & Change Manager",
    organization: "Alstom",
    location: "Paris, France",
    type: "experience",
    badge: "Poste Actuel",
    detail: "Pilotage de la gestion de configuration pour le projet de modernisation du métro de Marseille en CBTC GoA4. Synchronisation des processus de validation FIVP et T&C, présidence des comités CCB, administration des outils TpPLM/EWM et automatisation des KPI via Power Query et VBA."
  },
  {
    year: "2024 — En cours",
    title: "Chargé de Travaux — Validation & Commissioning RER NG",
    organization: "Alstom",
    location: "Île-de-France, France",
    type: "experience",
    badge: "Validation sur Voie",
    detail: "Validation système sur rames RER NG en essais dynamiques sur voies actives en tant que Chargé de Travaux habilité. Flashage logiciel et mises à jour des calculateurs de sécurité (BCU, TDD, DAD, Net Box) sous caténaire 25 kV / 1,5 kV."
  },
  {
    year: "2020 — 2023",
    title: "Ingénieur Systèmes Embarqués (Alternance)",
    organization: "Renault Group",
    location: "Guyancourt, France",
    type: "experience",
    badge: "3 Ans d'Alternance",
    detail: "Conception de pipelines ETL d'intégration continue sous Python et GitLab CI/CD, réduisant les audits de cybersécurité des calculateurs ECU de 2 semaines à moins de 15 minutes. Développement de scripts DXL sous DOORS assurant 100% de traçabilité ISO 26262."
  },
  {
    year: "2020 — 2023",
    title: "Diplôme d'Ingénieur — EI2I",
    organization: "Polytech Sorbonne",
    location: "Paris, France",
    type: "education",
    badge: "Diplôme d'Ingénieur",
    detail: "Électronique et Informatique Industrielle : Systèmes temps réel (FreeRTOS), IoT et télécommunications, logique numérique FPGA/VHDL, conception objet C/C++, gestion de projet et analyse des risques AMDEC."
  },
  {
    year: "2018 — 2020",
    title: "Licence EEA (Électronique, Énergie Électrique, Automatique)",
    organization: "Sorbonne Université",
    location: "Paris, France",
    type: "education",
    badge: "Licence Universitaire",
    detail: "Électronique analogique et numérique, microfabrication de circuits intégrés en salle blanche (Cadence, PSpice), traitement du signal (FFT, filtrage actif), modélisation MATLAB et robotique autonome."
  },
  {
    year: "2017 — 2018",
    title: "Stage de Découverte Industrielle",
    organization: "Sonatrach DRG",
    location: "Béjaïa, Algérie",
    type: "experience",
    badge: "Immersion Industrielle",
    detail: "Première immersion dans des infrastructures industrielles et pétrochimiques à haute criticité. Maintenance d'équipements de distribution électrique, relais de sécurité et suivi télémétrique SCADA des bacs de stockage."
  }
];

export const ACHIEVEMENTS_FR: AchievementItem[] = [
  {
    index: "01 / 05",
    number: "85",
    suffix: "%",
    targetValue: 85,
    label: "Réduction d'effort de reporting",
    caption: "Alstom • Automatisation des Processus",
    detail: "Conception de flux automatisés VBA & Power Query consolidant les bases TpPLM et ClearQuest, supprimant les extractions manuelles répétitives.",
    platform: "Alstom"
  },
  {
    index: "02 / 05",
    number: "15",
    suffix: " min",
    targetValue: 15,
    label: "Accélération du cycle d'audit",
    caption: "Renault Group • Réduit de 2 semaines",
    detail: "Mise en place d'un pipeline ETL d'intégration continue automatisant la vérification de conformité cybersécurité des calculateurs ECU.",
    platform: "Renault"
  },
  {
    index: "03 / 05",
    number: "10",
    suffix: "+",
    targetValue: 10,
    label: "Projets industriels & académiques",
    caption: "Transports & Systèmes Critiques",
    detail: "Pilotage avec succès de projets d'automatismes ferroviaires, de calculateurs embarqués automobiles et d'architectures matérielles connectées.",
    platform: "Ingénierie"
  },
  {
    index: "04 / 05",
    number: "4",
    suffix: "+ ans",
    targetValue: 4,
    label: "Années d'expérience industrielle",
    caption: "Transports & Hautes Technologies",
    detail: "Parcours éprouvé au sein des leaders des transports Alstom et Renault Group, maîtrisant l'ensemble du cycle en V des systèmes complexes.",
    platform: "Parcours"
  },
  {
    index: "05 / 05",
    number: "100",
    suffix: "%",
    targetValue: 100,
    label: "Conformité aux audits & normes",
    caption: "ISO 26262 & Standards Ferroviaires",
    detail: "Zéro non-conformité relevée lors des revues de configuration formelles, validations CCB et audits de sûreté de fonctionnement automobile.",
    platform: "Qualité"
  }
];

export function getProjects(lang: "en" | "fr"): ProjectItem[] {
  return lang === "fr" ? PROJECTS_FR : PROJECTS;
}

export function getCertifications(lang: "en" | "fr"): CertificationItem[] {
  return lang === "fr" ? CERTIFICATIONS_FR : CERTIFICATIONS;
}

export function getExperience(lang: "en" | "fr"): TimelineItem[] {
  return lang === "fr" ? EXPERIENCE_FR : EXPERIENCE;
}

export function getAchievements(lang: "en" | "fr"): AchievementItem[] {
  return lang === "fr" ? ACHIEVEMENTS_FR : ACHIEVEMENTS;
}

