// Complete Module Database for all SDS Programmes

const MODULES_DATABASE = {
    "Cybersecurity and Forensics": [
        // Year 1 - Degree Core
        { code: "ZZ-1104", name: "Essential Mathematics for Digital Science", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1102", name: "Programming Fundamentals", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1103", name: "Introduction to Digital Transformation", year: 1, type: "Degree Core", credits: 4 },
        
        // Year 1 - Major Core
        { code: "ZC-1201", name: "Computer Architecture and Organisation", year: 1, type: "Major Core", credits: 4 },
        { code: "ZS-1201", name: "Introduction to Cybersecurity", year: 1, type: "Major Core", credits: 4 },
        
        // Year 1 - Major Option
        { code: "SM-1301", name: "Discrete Mathematics", year: 1, type: "Major Option", credits: 4 },
        
        // Year 2 - Major Core
        { code: "ZC-2205", name: "Data Structures and Algorithms", year: 2, type: "Major Core", credits: 4 },
        { code: "BB-2207", name: "Business Information System", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2202", name: "Operating Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2203", name: "Computer Networks", year: 2, type: "Major Core", credits: 4 },
        { code: "ZS-2201", name: "Digital Forensics", year: 2, type: "Major Core", credits: 4 },
        { code: "ZS-2202", name: "Computer Security", year: 2, type: "Major Core", credits: 4 },
        
        // Year 2 - Major Option
        { code: "SM-2203", name: "Linear Algebra and its Applications", year: 2, type: "Major Option", credits: 4 },
        { code: "SM-2205", name: "Intermediate Statistics", year: 2, type: "Major Option", credits: 4 },
        { code: "ZC-2301", name: "System Administration and IT Infrastructure", year: 2, type: "Major Option", credits: 4 },
        
        // Year 3 - Major Core
        { code: "ZS-3201", name: "Cybersecurity and Forensics Lab", year: 3, type: "Major Core", credits: 4 },
        
        // Year 3 - Major Option
        { code: "ZC-3301", name: "Computer Ethics", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3302", name: "Internet Programming and Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZS-3301", name: "Blockchain Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3305", name: "Systems Applications and Products for Data Processing", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3306", name: "Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3307", name: "Advanced Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3308", name: "User Experience Design Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3309", name: "User Experience Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3310", name: "Advanced User Interface System and Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3311", name: "Change Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3312", name: "Industrial Project Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3314", name: "Systems Applications and Products Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3315", name: "Database Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3316", name: "Computer Network Fundamentals, Security and Implementation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3317", name: "Systems Applications and Products Administration Advance", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3318", name: "Database Administration Advanced", year: 3, type: "Major Option", credits: 4 },
        
        // Year 4 - Major Core
        { code: "ZC-4202", name: "Entrepreneurship for Digital Scientists", year: 4, type: "Major Core", credits: 4 },
        { code: "ZS-4290", name: "Final Year Project", year: 4, type: "Major Core", credits: 8 },
        
        // Year 4 - Major Option
        { code: "BB-4328", name: "Management Information Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "BB-4332", name: "Project Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4301", name: "Computer Graphics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4302", name: "Business Technology Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4303", name: "Digital Business Models", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4301", name: "Cloud Computing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4302", name: "Cyber Criminology", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4303", name: "Cybercrime Law and Investigations", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4304", name: "Networks and Components Security", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4305", name: "Application and System Software Security", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4306", name: "Blockchain Applications for Healthcare", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4307", name: "Digital Supply Chain", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4309", name: "Emerging Technologies in Cybersecurity", year: 4, type: "Major Option", credits: 4 }
    ],

    "Computer Science": [
        // Year 1 - Degree Core
        { code: "ZZ-1104", name: "Essential Mathematics for Digital Science", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1102", name: "Programming Fundamentals", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1103", name: "Introduction to Digital Transformation", year: 1, type: "Degree Core", credits: 4 },
        
        // Year 1 - Major Core
        { code: "ZC-1201", name: "Computer Architecture and Organisation", year: 1, type: "Major Core", credits: 4 },
        { code: "ZC-1202", name: "Augmented and Virtual Reality", year: 1, type: "Major Core", credits: 4 },
        
        // Year 1 - Major Option
        { code: "SM-1301", name: "Discrete Mathematics", year: 1, type: "Major Option", credits: 4 },
        
        // Year 2 - Major Core
        { code: "ZC-2205", name: "Data Structures and Algorithms", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2201", name: "Database Design", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2202", name: "Operating Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2203", name: "Computer Networks", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2204", name: "Software Engineering", year: 2, type: "Major Core", credits: 4 },
        
        // Year 2 - Major Option
        { code: "SM-2203", name: "Linear Algebra and its Applications", year: 2, type: "Major Option", credits: 4 },
        { code: "SM-2205", name: "Intermediate Statistics", year: 2, type: "Major Option", credits: 4 },
        { code: "ZC-2301", name: "System Administration and IT Infrastructure", year: 2, type: "Major Option", credits: 4 },
        
        // Year 3 - Major Core
        { code: "ZC-3201", name: "Software Development Lab", year: 3, type: "Major Core", credits: 4 },
        { code: "ZC-3202", name: "Human Computer Interaction", year: 3, type: "Major Core", credits: 4 },
        
        // Year 3 - Major Option
        { code: "AX-3201", name: "Computer Generated Imagery", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3301", name: "Computer Ethics", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3302", name: "Internet Programming and Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3303", name: "Programming Languages", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3304", name: "Interactivity and Computation for Creative Practice", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3305", name: "Systems Applications and Products for Data Processing", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3306", name: "Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3307", name: "Advanced Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3308", name: "User Experience Design Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3309", name: "User Experience Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3310", name: "Advanced User Interface System and Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3311", name: "Change Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3312", name: "Industrial Project Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3313", name: "Game Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3314", name: "Systems Applications and Products Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3315", name: "Database Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3316", name: "Computer Network Fundamentals, Security and Implementation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3317", name: "Systems Applications and Products Administration Advance", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3318", name: "Database Administration Advanced", year: 3, type: "Major Option", credits: 4 },
        
        // Year 4 - Major Core
        { code: "ZC-4202", name: "Entrepreneurship for Digital Scientists", year: 4, type: "Major Core", credits: 4 },
        { code: "ZC-4290", name: "Final Year Project", year: 4, type: "Major Core", credits: 8 },
        
        // Year 4 - Major Option
        { code: "BB-4332", name: "Project Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4305", name: "Information Retrieval", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4306", name: "Natural Language Processing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4301", name: "Computer Graphics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4302", name: "Internet Application Development", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4303", name: "Large Scale Software Development", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4304", name: "Computational Modelling", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4309", name: "Emerging Technologies in Computing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4301", name: "Bioinformatics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4305", name: "Digital Product Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4306", name: "Digital Business Models", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4310", name: "Smart Systems for IR 4.0", year: 4, type: "Major Option", credits: 4 }
    ],

    "Data Science": [
        // Year 1 - Degree Core
        { code: "ZZ-1104", name: "Essential Mathematics for Digital Science", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1102", name: "Programming Fundamentals", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1103", name: "Introduction to Digital Transformation", year: 1, type: "Degree Core", credits: 4 },
        
        // Year 1 - Major Core
        { code: "ZC-1201", name: "Computer Architecture and Organisation", year: 1, type: "Major Core", credits: 4 },
        { code: "ZD-1201", name: "Introduction to Data Analytics", year: 1, type: "Major Core", credits: 4 },
        
        // Year 1 - Major Option
        { code: "HS-1413", name: "Biostatistics", year: 1, type: "Major Option", credits: 4 },
        { code: "SM-1301", name: "Discrete Mathematics", year: 1, type: "Major Option", credits: 4 },
        
        // Year 2 - Major Core
        { code: "ZC-2205", name: "Data Structures and Algorithms", year: 2, type: "Major Core", credits: 4 },
        { code: "BB-2207", name: "Business Information System", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2201", name: "Database Design", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2203", name: "Computer Networks", year: 2, type: "Major Core", credits: 4 },
        
        // Year 2 - Major Option
        { code: "SM-2203", name: "Linear Algebra and its Applications", year: 2, type: "Major Option", credits: 4 },
        { code: "ZC-2202", name: "Operating Systems", year: 2, type: "Major Option", credits: 4 },
        { code: "ZD-2301", name: "Data Engineering", year: 2, type: "Major Option", credits: 4 },
        { code: "ZC-2301", name: "System Administration and IT Infrastructure", year: 2, type: "Major Option", credits: 4 },
        
        // Year 3 - Major Core
        { code: "ZA-3202", name: "Machine Learning", year: 3, type: "Major Core", credits: 4 },
        { code: "ZD-3201", name: "Data Analytics Lab", year: 3, type: "Major Core", credits: 4 },
        
        // Year 3 - Major Option
        { code: "ZC-3301", name: "Computer Ethics", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3302", name: "Internet Programming and Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3305", name: "Systems Applications and Products for Data Processing", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3306", name: "Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3307", name: "Advanced Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3308", name: "User Experience Design Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3309", name: "User Experience Development Fundamentals", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3310", name: "Advanced User Interface System and Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3311", name: "Change Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3312", name: "Industrial Project Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3314", name: "Systems Applications and Products Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3315", name: "Database Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3316", name: "Computer Network Fundamentals, Security and Implementation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3317", name: "Systems Applications and Products Administration Advance", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3318", name: "Database Administration Advanced", year: 3, type: "Major Option", credits: 4 },
        
        // Year 4 - Major Core
        { code: "ZC-4202", name: "Entrepreneurship for Digital Scientists", year: 4, type: "Major Core", credits: 4 },
        { code: "ZD-4201", name: "Big Data Analytics and Data Warehousing", year: 4, type: "Major Core", credits: 4 },
        { code: "ZD-4290", name: "Final Year Project", year: 4, type: "Major Core", credits: 8 },
        
        // Year 4 - Major Option
        { code: "BB-4335", name: "Decision Support Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4302", name: "Deep Learning", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4305", name: "Information Retrieval", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4306", name: "Natural Language Processing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4301", name: "Computer Graphics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZC-4302", name: "Internet Application Development", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4301", name: "Bioinformatics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4302", name: "Business Technology Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4303", name: "Digital Business Intelligence", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4309", name: "Emerging Technologies in Data Analytics", year: 4, type: "Major Option", credits: 4 },
        { code: "ZS-4301", name: "Cloud Computing", year: 4, type: "Major Option", credits: 4 }
    ],

    "Artificial Intelligence & Robotics": [
        // Year 1 - Degree Core
        { code: "ZZ-1104", name: "Essential Mathematics for Digital Science", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1102", name: "Programming Fundamentals", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1103", name: "Introduction to Digital Transformation", year: 1, type: "Degree Core", credits: 4 },
        
        // Year 1 - Major Core
        { code: "ZC-1201", name: "Computer Architecture and Organisation", year: 1, type: "Major Core", credits: 4 },
        
        // Year 1 - Major Option
        { code: "SM-1301", name: "Discrete Mathematics", year: 1, type: "Major Option", credits: 4 },
        { code: "SP-1202", name: "Electricity and Magnetism", year: 1, type: "Major Option", credits: 4 },
        { code: "SP-1204", name: "Classical Mechanics", year: 1, type: "Major Option", credits: 4 },
        
        // Year 2 - Major Core
        { code: "ZC-2205", name: "Data Structures and Algorithms", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2202", name: "Operating Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZA-2201", name: "Artificial Intelligence", year: 2, type: "Major Core", credits: 4 },
        { code: "ZA-2202", name: "Physical Computing for Intelligent Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZA-2203", name: "Robotics Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZA-2204", name: "Electronics for Intelligent Systems", year: 2, type: "Major Core", credits: 4 },
        
        // Year 2 - Major Option
        { code: "SM-2203", name: "Linear Algebra and its Applications", year: 2, type: "Major Option", credits: 4 },
        { code: "ZC-2301", name: "System Administration and IT Infrastructure", year: 2, type: "Major Option", credits: 4 },
        
        // Year 3 - Major Core
        { code: "ZA-3201", name: "Intelligent Systems Lab", year: 3, type: "Major Core", credits: 4 },
        { code: "ZA-3202", name: "Machine Learning", year: 3, type: "Major Core", credits: 4 },
        
        // Year 3 - Major Option
        { code: "TM-3301", name: "Product Design Engineering", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3301", name: "Computer Ethics", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3302", name: "Internet Programming and Development", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3305", name: "Systems Applications and Products for Data Processing", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3306", name: "Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3307", name: "Advanced Business Application Programming", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3308", name: "User Experience Design Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3309", name: "User Experience Development Fundamentals", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3310", name: "Advanced User Interface System and Technology", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3311", name: "Change Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3312", name: "Industrial Project Management", year: 3, type: "Major Option", credits: 2 },
        { code: "ZC-3314", name: "Systems Applications and Products Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3315", name: "Database Administration Foundation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3316", name: "Computer Network Fundamentals, Security and Implementation", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3317", name: "Systems Applications and Products Administration Advance", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3318", name: "Database Administration Advanced", year: 3, type: "Major Option", credits: 4 },
        
        // Year 4 - Major Core
        { code: "ZC-4202", name: "Entrepreneurship for Digital Scientists", year: 4, type: "Major Core", credits: 4 },
        { code: "ZA-4290", name: "Final Year Project", year: 4, type: "Major Core", credits: 8 },
        
        // Year 4 - Major Option
        { code: "BB-4332", name: "Project Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4301", name: "Autonomous Mobile Robots", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4302", name: "Deep Learning", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4303", name: "Graph Models", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4304", name: "Multi Agent Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4305", name: "Information Retrieval", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4306", name: "Natural Language Processing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4307", name: "Artificial Life and Evolutionary Computation", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4308", name: "Machine Perception", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4309", name: "Emerging Technologies in Intelligent Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4310", name: "Smart Systems for IR 4.0", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4311", name: "Precision Agriculture", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4303", name: "Digital Business Intelligence", year: 4, type: "Major Option", credits: 4 }
    ],

    "Applied Artificial Intelligence": [
        // Year 1 - Degree Core
        { code: "ZZ-1104", name: "Essential Mathematics for Digital Science", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1102", name: "Programming Fundamentals", year: 1, type: "Degree Core", credits: 4 },
        { code: "ZZ-1103", name: "Introduction to Digital Transformation", year: 1, type: "Degree Core", credits: 4 },
        
        // Year 1 - Major Core
        { code: "ZI-1202", name: "Mathematics for Machine Learning", year: 1, type: "Major Core", credits: 4 },
        { code: "ZI-1201", name: "Artificial Intelligence (AI) Applications I", year: 1, type: "Major Core", credits: 4 },
        
        // Year 1 - Major Option
        { code: "SM-1301", name: "Discrete Mathematics", year: 1, type: "Major Option", credits: 4 },
        { code: "ZI-1301", name: "Applied Data Analytics 1", year: 1, type: "Major Option", credits: 4 },
        
        // Year 2 - Major Core
        { code: "ZA-2201", name: "Artificial Intelligence", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2202", name: "Operating Systems", year: 2, type: "Major Core", credits: 4 },
        { code: "ZI-2201", name: "Artificial Intelligence (AI) Applications II", year: 2, type: "Major Core", credits: 4 },
        { code: "ZC-2205", name: "Data Structures and Algorithms", year: 2, type: "Major Core", credits: 4 },
        { code: "ZI-2202", name: "Artificial Intelligence (AI) Applications III", year: 2, type: "Major Core", credits: 4 },
        
        // Year 2 - Major Option
        { code: "ZI-2302", name: "Applied Data Analytics 2", year: 2, type: "Major Option", credits: 4 },
        { code: "ZI-2301", name: "Blockchain Specialisation 1", year: 2, type: "Major Option", credits: 4 },
        { code: "ZI-2303", name: "Blockchain Specialization 2", year: 2, type: "Major Option", credits: 4 },
        { code: "SM-2203", name: "Linear Algebra and Its Applications", year: 2, type: "Major Option", credits: 4 },
        
        // Year 3 - Major Core
        { code: "ZA-3201", name: "Intelligent Systems Lab", year: 3, type: "Major Core", credits: 4 },
        { code: "ZA-3202", name: "Machine Learning", year: 3, type: "Major Core", credits: 4 },
        
        // Year 3 - Major Option
        { code: "ZC-3301", name: "Computer Ethics", year: 3, type: "Major Option", credits: 4 },
        { code: "ZC-3302", name: "Internet Programming and Development", year: 3, type: "Major Option", credits: 4 },
        
        // Year 4 - Major Core
        { code: "ZI-4290", name: "Final Year Project", year: 4, type: "Major Core", credits: 8 },
        { code: "ZC-4202", name: "Entrepreneurship for Digital Scientists", year: 4, type: "Major Core", credits: 4 },
        
        // Year 4 - Major Option
        { code: "BB-4332", name: "Project Management", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4302", name: "Deep Learning", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4303", name: "Graph Models", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4304", name: "Multi Agent Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4305", name: "Information Retrieval", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4306", name: "Natural Language Processing", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4307", name: "Artificial Life and Evolutionary Computation", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4308", name: "Machine Perception", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4309", name: "Emerging Technologies in Intelligent Systems", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4310", name: "Smart Systems for IR 4.0", year: 4, type: "Major Option", credits: 4 },
        { code: "ZA-4311", name: "Precision Agriculture", year: 4, type: "Major Option", credits: 4 },
        { code: "ZI-4301", name: "Advanced Applied Data Analytics 1", year: 4, type: "Major Option", credits: 4 },
        { code: "ZI-4302", name: "Advanced Applied Data Analytics 2", year: 4, type: "Major Option", credits: 4 },
        { code: "ZI-4303", name: "Machine Learning Specialization 1", year: 4, type: "Major Option", credits: 4 },
        { code: "ZI-4304", name: "Machine Learning Specialization 2", year: 4, type: "Major Option", credits: 4 },
        { code: "ZD-4303", name: "Digital Business Intelligence", year: 4, type: "Major Option", credits: 4 }
    ]
};

// Compulsory Breadth Modules (for all programmes)
const BREADTH_MODULES = [
    { code: "LE-1503", name: "Communication Skills I: Academic Reading and Writing Skills", year: 1, type: "Compulsory Breadth", credits: 4 },
    { code: "PB-1501", name: "Melayu Islam Beraja (MIB)", year: 1, type: "Compulsory Breadth", credits: 4 },
    { code: "LE-2503", name: "Communication Skills II: Academic Report Writing and Presentation", year: 2, type: "Compulsory Breadth", credits: 4 },
    { code: "MS-1501", name: "Islamic Civilisation and the Modern World", year: 1, type: "Compulsory Breadth", credits: 4 }
];

// Discovery Year Modules (for all programmes)
const DISCOVERY_YEAR_MODULES = [
    { code: "DY-S1", name: "Discovery Year Semester 1", year: 1, type: "Discovery Year", credits: 16 },
    { code: "DY-S2", name: "Discovery Year Semester 2", year: 1, type: "Discovery Year", credits: 16 }
];
