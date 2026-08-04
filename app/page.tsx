const skills = [
  ["Programming", "Python, Go, JavaScript, TypeScript, C/C++, Java"],
  ["Frontend", "React, HTML, CSS, JavaScript/TypeScript"],
  ["Backend / APIs", "Node.js, FastAPI, Flask, REST APIs, Distributed Systems, Asynchronous Services"],
  ["ML Frameworks", "PyTorch, TensorFlow, JAX, torchvision, Core ML"],
  ["GPU / Low-Level", "CUDA, OpenCL, TensorRT, TVM, XLA"],
  ["Testing / DevOps", "Unit Testing, End-to-End Testing, CI/CD, Docker, Kubernetes, AWS Lambda, AWS Cognito, Amazon S3, AWS SageMaker, GCP Vertex AI, Linux"],
  ["Databases", "PostgreSQL, MongoDB, Redis, SQL"],
  ["Tools / Workflow", "Git, Terraform, Ansible, MLflow, Airflow, Prometheus, Grafana, Weights & Biases, Agile/Scrum Methodologies"],
];

const experience = [
  {
    role: "Research Assistant",
    company: "NYU AI4CE Lab",
    date: "September 2024 – Present · New York, NY",
    details: [
      "Developed and improved the Multiview Scene Graph (MSG) model using the large-scale ScanNet++ image and video dataset for multiview visual perception and 3D scene understanding, improving MSG edge IoU by 7%.",
      "Created a large-scale training dataset containing more than 1,000 scenes from the ScanNet++ dataset for MSG model development and evaluation.",
      "Implemented a VQ-VAE-based quantized variant of DINO-WM using pretrained DINOv2 visual representations for zero-shot planning and robotic manipulation, achieving a 4% performance improvement.",
      "Explored diffusion-based generative models using Diffusion Transformers (DiT) for structured scene representation and visual synthesis in 3D environments.",
    ],
    links: [
      ["DINO-WM", "https://dino-wm.github.io/"],
      ["Multiview Scene Graph", "https://ai4ce.github.io/MSG/"],
    ],
  },
  {
    role: "Teaching Assistant — DS-GA 1008 Deep Learning",
    company: "New York University · Prof. Yann LeCun",
    date: "January 2025 – May 2025 · New York, NY",
    details: [
      "Mentored students in deep learning architectures and multimodal machine-learning systems for Prof. Yann LeCun’s graduate Deep Learning course.",
      "Supported course instruction, technical discussions, assignment evaluation, and student guidance throughout the semester.",
    ],
    links: [],
  },
  {
    role: "Section Leader — DS-GA 1011 Natural Language Processing",
    company: "New York University",
    date: "September 2024 – December 2024 · New York, NY",
    details: [
      "Led NLP sections and mentored students through practical labs covering high-performance computing (HPC), reinforcement learning from human feedback (RLHF), and information retrieval.",
      "Helped more than 200 students across the teaching roles understand deep learning, NLP, and multimodal ML concepts and implementations.",
    ],
    links: [],
  },
  {
    role: "Member of Technical Staff – I",
    company: "Alphastream.ai",
    date: "August 2023 – August 2024 · Bengaluru, India",
    details: [
      "Engineered an end-to-end AutoML pipeline for dataset preparation, model training, evaluation, and deployment, reducing retraining time from 9 days to 3 days and improving extraction accuracy by 9%; led dataset curation and Label Studio annotation workflows with a team of 7 engineers.",
      "Fine-tuned and integrated the Co-DETR model to extract complex hierarchical patterns from tables, addressing 95% of prior model limitations and analyzing model robustness across evaluation datasets.",
      "Applied multimodal LayoutLMv3 for document visual-content understanding, identifying table text and images in PDFs and achieving a 14% accuracy improvement.",
    ],
    links: [],
  },
  {
    role: "Python Developer Intern",
    company: "Alphastream.ai",
    date: "December 2022 – July 2023 · Bengaluru, India",
    details: [
      "Developed an NLP-based parser integrated with Amazon Textract OCR to mask sensitive information, achieving 99% data-masking accuracy and improving extraction performance by 13%.",
      "Built a RAG pipeline for news-article processing, benchmarking LLMs including LLaMA, Qwen, and Mistral and achieving 97% summarization accuracy.",
      "Designed a personalized article-recommendation and ad-targeting pipeline based on user reading behavior, improving overall user engagement by 30%.",
    ],
    links: [],
  },
];

const projects = [
  {
    title: "Predictive Steering with I-JEPA",
    description: "Pretrained I-JEPA on Waymo and CARLA datasets and fine-tuned with ADL-JEPA for label-efficient steering-angle prediction, achieving 99.3% accuracy and validating in CARLA.",
    tools: "Python · PyTorch · CARLA · Waymo · ADL-JEPA",
    href: "https://github.com/nvklaxmikanth/Predictive-Steering-with-I-JEPA",
  },
  {
    title: "Multimodal Action Localization",
    description: "Enhanced VSLNet with LaViLa vision-language embeddings, stacked encoders, and vision-enhancer attention for Ego4D action localization, achieving 12.14 mIoU.",
    tools: "PyTorch · Ego4D · Omnivore · LaViLa",
    href: "https://github.com/nvklaxmikanth/multimodal-action-localization",
  },
  {
    title: "Research Paper Summarizer",
    description: "Built model-serving and monitoring components for a scientific-paper summarization system using transformer models, arXiv data, Flask APIs, and production observability tooling.",
    tools: "BART · Flask · Prometheus · Grafana · MLOps",
    href: "https://github.com/nvklaxmikanth/ResearchPaperSummarizer",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Implemented foundational data structures and algorithms in C, including queues, stacks, linked lists, heaps, tries, trees, graph traversal, Dijkstra, Prim, and Huffman coding.",
    tools: "C · Data Structures · Graph Algorithms",
    href: "https://github.com/nvklaxmikanth/DSA",
  },
  {
    title: "Camp Grounds",
    description: "Developed a campground web application with user authentication, reviews, and RESTful CRUD operations for creating and managing campground listings.",
    tools: "JavaScript · MongoDB · Express.js · Node.js",
    href: "https://github.com/nvklaxmikanth/camp-grounds",
  },
  {
    title: "Human Posture Detection",
    description: "Enhanced real-time posture detection by fine-tuning MoveNet with TensorFlow, achieving 93.73% accuracy, and built a user-friendly CNN-powered interface for improved accessibility.",
    tools: "Python · Flask · TensorFlow.js · MoveNet · CNN",
    href: "https://github.com/nvklaxmikanth/human-posture-detection",
  },
  {
    title: "Traffic Signs Recognition",
    description: "Created a convolutional neural-network application that classifies traffic signs, with model experimentation in Jupyter and a Flask-based prediction interface.",
    tools: "CNN · TensorFlow · Keras · Flask · Jupyter",
    href: "https://github.com/nvklaxmikanth/traffic-signs-recognition",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <nav className="container" aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Highlights</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero container" id="home">
        <img className="profilePhoto" src="./profile-venkat.png" alt="Portrait of Venkat Kumar Laxmi Kanth Nemala" />
        <div className="heroContent">
          <h1>Venkat Kumar Laxmi Kanth Nemala</h1>
          <p>NYU Computer Engineering graduate and Research Assistant at the AI4CE Lab, working on world models, embodied AI, multimodal learning, and 3D scene understanding.</p>
          <p>I build machine-learning systems that connect advanced research with real-world robotics, autonomous systems, and document intelligence.</p>
          <div className="actions">
            <a className="button primary" href="./Venkat_Kumar_Laxmi_Kanth_Resume.pdf" download>Download Résumé</a>
            <a className="button secondary" href="https://www.linkedin.com/in/nvklaxmikanth/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button secondary" href="mailto:vn2263@nyu.edu">Contact</a>
          </div>
        </div>
      </section>

      <section className="section researchSection" id="research">
        <div className="container">
          <div className="researchHeading">
            <p className="sectionLabel">Featured Research</p>
            <h2>World Models &amp; 3D Scene Understanding</h2>
            <p>Research at the intersection of embodied AI, robotic planning, and visual perception.</p>
          </div>
          <div className="researchGrid">
            <article className="researchCard">
              <p className="impact">~4% performance improvement</p>
              <h3>DINO-WM</h3>
              <p>Implemented a VQ-VAE-based quantized variant of DINO-WM using pretrained DINOv2 visual representations for zero-shot planning and robotic manipulation, achieving a 4% performance improvement.</p>
              <a href="https://dino-wm.github.io/" target="_blank" rel="noreferrer">Visit DINO-WM ↗</a>
            </article>
            <article className="researchCard">
              <p className="impact">~7% improvement in edge IoU</p>
              <h3>Multiview Scene Graph (MSG)</h3>
              <p>Developed and improved the Multiview Scene Graph model for multiview perception and 3D scene understanding using the large-scale ScanNet++ image and video dataset, improving MSG edge IoU by 7%.</p>
              <p>Created a large-scale training dataset containing more than 1,000 scenes from the ScanNet++ dataset for MSG model development and evaluation.</p>
              <a href="https://ai4ce.github.io/MSG/" target="_blank" rel="noreferrer">Visit MSG ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className="section shaded" id="education">
        <div className="container"><h2>Education</h2><div className="twoColumns">
          <article className="card"><h3>New York University</h3><p>New York, NY</p><p>Master of Science in Computer Engineering</p><p><strong>CGPA: 3.8/4.0</strong></p><p>August 2024 – May 2026</p></article>
          <article className="card"><h3>Vignan’s Institute of Information Technology</h3><p>Visakhapatnam, India</p><p>Bachelor of Technology in Computer Science and Engineering</p><p><strong>CGPA: 3.7/4.0</strong></p><p>August 2019 – May 2023</p></article>
        </div></div>
      </section>

      <section className="section" id="skills">
        <div className="container"><h2>Skills</h2><div className="skillGrid">{skills.map(([title, text]) => <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section shaded" id="experience">
        <div className="container narrow"><h2>Experience</h2><div className="timeline">{experience.map((item) => <article key={item.role}><h3>{item.role} <span>• {item.company}</span></h3><p className="date">{item.date}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{item.links.length > 0 && <div className="experienceLinks">{item.links.map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}>{label} ↗</a>)}</div>}</article>)}</div></div>
      </section>

      <section className="section" id="projects">
        <div className="container"><h2>Projects</h2><div className="projectGrid">{projects.map((project) => <article className="card projectCard" key={project.title}><h3>{project.title}</h3><p>{project.description}</p><p className="tools">{project.tools}</p><a className="projectLink" href={project.href} target="_blank" rel="noreferrer">View on GitHub ↗</a></article>)}</div></div>
      </section>

      <section className="section shaded" id="achievements">
        <div className="container"><h2>Highlights</h2><div className="twoColumns">
          <article className="card"><h3>Research Impact</h3><p>Improved MSG edge IoU by 7% and DINO-WM planning and manipulation performance by 4% through research at NYU AI4CE Lab.</p></article>
          <article className="card"><h3>Teaching at NYU</h3><p>Served separately as Teaching Assistant for Prof. Yann LeCun’s Deep Learning course and NLP Section Leader, leading labs on HPC, RLHF, and information retrieval while mentoring more than 200 students.</p></article>
        </div></div>
      </section>

      <section className="section contact" id="contact">
        <div className="container narrow"><h2>Contact</h2><p><strong>Email:</strong> <a href="mailto:vn2263@nyu.edu">vn2263@nyu.edu</a></p><p><strong>Phone:</strong> +1 (347) 798-7171</p><p><strong>Location:</strong> New York City</p><p><strong>GitHub:</strong> <a href="https://github.com/nvklaxmikanth" target="_blank" rel="noreferrer">github.com/nvklaxmikanth</a></p><p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nvklaxmikanth/" target="_blank" rel="noreferrer">linkedin.com/in/nvklaxmikanth</a></p></div>
      </section>

      <footer>© 2026 Venkat Kumar Laxmi Kanth Nemala</footer>
    </main>
  );
}
