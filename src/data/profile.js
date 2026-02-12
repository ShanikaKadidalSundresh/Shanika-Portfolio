import profilePhoto from "../assets/profile.jpg";
import aboutImage from "../assets/about.jpg";

export const profile = {
    name: "Shanika Kadidal Sundresh",
    photo: profilePhoto,
    aboutImage: aboutImage, 
    tagline: "Data Scientist | Applied Machine Learning | AI & Data-Driven Solutions",
    location: "Chicago, IL",
    phone: "+1 (872) 899-0892",
    email: "shanikagowda291@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/shanikakadidalsundresh",
      github: "https://github.com/ShanikaKadidalSundresh",
      resume: "https://drive.google.com/file/d/1j6BdeyDrMhcYdpNqpu5PA4mMMaSXih1a/view?usp=drive_link",
    },

    about: [
      "I am a Data Science graduate student with a strong interest in building practical, data-driven solutions that support intelligent decision-making. My work spans machine learning, deep learning, time-series forecasting, data analysis, and end-to-end data pipelines, with a focus on transforming complex datasets into reliable, actionable insights.",
    
      "Through academic and industry projects, I have gained hands-on experience working with large, real-world datasets, applying data cleaning, feature validation, statistical analysis, deep learning, and machine learning techniques to solve business problems. I enjoy working at the intersection of analytics, machine learning, and engineering, and I am particularly interested in predictive modeling and applied data science.",
    
      "Driven by curiosity and continuous learning, I am motivated by the challenge of turning data into impact and am eager to contribute to teams building scalable, data-driven and AI-powered solutions."
    ],
    
    education: [
      {
        degree: "Master of Applied Science, Data Science",
        school: "Illinois Institute of Technology",
        dates: "Aug 2024 – May 2026",
        place: "Chicago, IL",
        gpa: "3.44/4.0",
        tags: [
          "Advanced Database Organization",
          "Regression",
          "Machine Learning",
          "Statistical Learning",
          "Data Preparation and Analysis",
          "Big Data Technologies",
          "Monte Carlo Methods in Finance",
          "Project Management",
        ],
        current: true,
      },
      {
        degree: "Bachelor of Engineering, Electronics and Communication Engineering",
        school: "New Horizon College of Engineering",
        dates: "Aug 2019 – Jun 2023",
        place: "Bangalore, Karnataka, India",
        gpa: "3.5/4.0",
        tags: [
          "Artificial Intelligence & Cognitive Computing",
          "Data Structures & OOP",
          "Blockchain Technology",
          "Routing and Switching",
          "Computer Architecture",
          "Probability & Statistics",
          "Calculus & Linear Algebra"
        ],
        current: false,
      },
    ],
    experience: [
      {
        title: "Data Science Intern",
        org: "Labelmaster",
        dates: "Jan 2026 – Present",
        place: "Chicago, IL",
        current: true,
        bullets: [
          "Integrated and stabilized a team-based LSTM sales forecasting pipeline using Python (TensorFlow), MLflow, Flask, and Tableau.",
          "Performed data cleaning, correlation analysis, and feature validation to improve time-series forecast accuracy.",
          "Delivered production-ready monthly and daily forecasts for 2026–2027 multi-year freight sales planning and decision-making.",
        ],
        chips: ["Python", "TensorFlow", "MLflow", "Flask", "Tableau", "LSTM", "Pandas", "NumPy"],
      },
      {
        title: "Build Student Consultant, Data Science",
        org: "The Build Fellowship",
        dates: "Sep 2025 – Oct 2025",
        place: "New York",
        current: false,

        github: "https://github.com/ShanikaKadidalSundresh/AI-Powered-Image-Retrieval-With-Vector-Databases",
        certificate: "https://drive.google.com/file/d/19bmYPHIFYDVirIftZ5f4lQjOEc3v-ui0/view?usp=drive_link",

        bullets: [
          "Built an AI-powered image retrieval system with vector databases, achieving 93.08% accuracy in image similarity search.",
          "Implemented end-to-end pipeline using PyTorch embeddings, FAISS indexing, and Dockerized workflows.",
          "Applied deep learning embedding techniques for efficient, production-oriented retrieval.",
        ],
        chips: ["PyTorch", "FAISS", "Docker", "Deep Learning", "Vector Databases", "Python", "Image Retrieval"],
      },
      {
        title: "Engineering Trainee",
        org: "Capgemini",
        dates: "Jan 2023 – Dec 2023",
        place: "Bangalore, India",
        current: false,
        bullets: [
          "Applied Python, Perl, and C for data processing, automation, and validation in Linux-based VLSI environments.",
          "Used statistical analysis to interpret Router RTL and overall system behavior, validating outputs and insights.",
        ],
        chips: ["Python", "Perl", "C", "Linux", "Statistical Analysis", "VLSI", "Test Benches", "RTL Verification"],
      },
    ],
    skills: [
      { title: "Programming Languages", icon: "code", items: ["Python", "R", "C++", "C", "SQL", "JavaScript"] },
      { title: "Data Science & ML", icon: "database", items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch"] },
      { title: "Visualization & Analytics", icon: "bar", items: ["Matplotlib", "Tableau", "Power BI", "Streamlit"] },
      { title: "Frameworks & Tools", icon: "wrench", items: ["Apache Spark", "Apache Hadoop", "Apache Kafka", "Flask", "Postman API", "Cloudinary", "Jupyter Notebook", "Google Colab", "RStudio", "Git", "GitHub"] },
      { title: "Cloud & DevOps", icon: "cloud", items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Linux", "Cisco Packet Tracer"] },
      { title: "Databases", icon: "server", items: ["MySQL", "MongoDB"] },
      { title: "Soft Skills", icon: "users", items: ["Product Management", "Leadership", "Collaborative", "Problem Solving", "Innovation"] },
    ],
    projects: [
      {
        title: "Nationwide Analysis of Post-COVID PM2.5 Air Pollution Trends in the U.S.",
        dates: "Aug 2025 – Dec 2025",
        bullets: [
          "Built scalable data pipelines and performed multi-year trend analysis on EPA PM2.5 data using PySpark, Databricks SQL, and Tableau, processing 100K+ monitoring records across 2022–2025.",
          "Analyzed EPA compliance and aggregated air quality data to identify pollution hotspots and seasonal trends.",
          "Identified year-over-year PM2.5 changes across the U.S.",
          "Processed 100K+ monitoring records with scalable data pipelines.",
        ],
        tech: ["PySpark", "Databricks", "SQL", "Tableau", "Data Engineering", "Environmental Analysis"],
        accent: "from-indigo-500 to-sky-500",
        link: "https://github.com/ShanikaKadidalSundresh/Nationwide-Analysis-of-Post-COVID-PM2.5-Air-Pollution-Trends-in-the-U.S.",
      },
      {
        title: "Stock Market Analysis Deploying ML Pipelines: Predictive Modeling for NVIDIA",
        dates: "Jan 2025 – May 2025",
        bullets: [
          "Developed ML pipelines for NVIDIA stock forecasting using Linear Regression, Random Forest, SVM, ARIMA, and LSTM with EDA, feature engineering, and RMSE-based evaluation (1999–2024).",
          "Engineered technical indicators including MA20, RSI, and Bollinger Bands.",
          "Conducted trend, seasonality, and correlation analysis for model comparison.",
          "Implemented RMSE-based evaluation for short-term price forecasting.",
        ],
        tech: ["Python", "LSTM", "Random Forest", "ARIMA", "Feature Engineering", "Time Series", "Linear Regression", "SVM", "RMSE"],
        accent: "from-fuchsia-500 to-pink-500",
        link: "https://github.com/ShanikaKadidalSundresh/Stock-Market-Analysis-Deploying-ML-Pipelines-Predictive-Modeling-for-NVIDIA",
      },
    ],
    certifications: [
      { title: "Microsoft Power BI Data Analyst", org: "Microsoft", link: "https://drive.google.com/file/d/10RAO9-RjDKXL7FWkx8Vgj0bQKKPxokii/view?usp=drive_link" },
      { title: "Google Data Analytics", org: "Google", link: "https://drive.google.com/file/d/1HNPZdmHOWyF97woRuYGhFpARwmFiyOCK/view?usp=drive_link" },
      { title: "Getting Started with Enterprise Data Science", org: "IBM", link: "https://drive.google.com/file/d/1v8CPX-3dUBKUQnZ2bXzDyhYC9dkmsxNV/view?usp=drive_link" },
      { title: "Python for Data Science", org: "NPTEL, IIT Madras", link: "https://drive.google.com/file/d/1h9-_-68IhgrhoiCMBSq5rNT4dfrVXUyg/view?usp=drive_link" },
      { title: "Getting Started with Enterprise-Grade AI", org: "IBM", link: "https://drive.google.com/file/d/1knmAPUtiPyuVs408ZXFVHwVON0vv_LyO/view?usp=drive_link" },
    ],
  };
  