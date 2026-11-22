
import React, { useState } from 'react';
import './AboutPage.css';

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import resume from '../../resume/Imaad@Resume.pdf';

/* Multi language */
import { FormattedMessage } from 'react-intl';

/* Image */
import imgabout from '../../img/home.jpg';

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const skills = [
  // Programming Languages
  { name: 'Python', src: devicon('python/python-original.svg') },
  { name: 'C++', src: devicon('cplusplus/cplusplus-original.svg') },
  { name: 'JavaScript', src: devicon('javascript/javascript-original.svg') },

  // Frontend Development
  { name: 'HTML', src: devicon('html5/html5-original.svg') },
  { name: 'CSS', src: devicon('css3/css3-original.svg') },
  { name: 'SCSS', src: devicon('sass/sass-original.svg') },
  { name: 'React', src: devicon('react/react-original.svg') },
  { name: 'Tailwind CSS', src: devicon('tailwindcss/tailwindcss-original.svg') },

  // Backend & Frameworks
  { name: 'Flask', src: devicon('flask/flask-original.svg') },
  { name: 'Django', src: devicon('django/django-plain.svg') },
  { name: 'FastAPI', src: devicon('fastapi/fastapi-original.svg') },
  { name: 'Streamlit', src: devicon('streamlit/streamlit-original.svg') },

  // Databases
  { name: 'MySQL', src: devicon('mysql/mysql-original.svg') },
  { name: 'MongoDB', src: devicon('mongodb/mongodb-original.svg') },
  { name: 'PostgreSQL', src: devicon('postgresql/postgresql-original.svg') },

  // AI, ML & Data Science
  { name: 'NumPy', src: devicon('numpy/numpy-original.svg') },
  { name: 'Pandas', src: devicon('pandas/pandas-original.svg') },
  { name: 'Scikit-learn', src: devicon('scikitlearn/scikitlearn-original.svg') },
  { name: 'PyTorch', src: devicon('pytorch/pytorch-original.svg') },
  { name: 'Hugging Face', src: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
  { name: 'LangChain', src: 'https://cdn.simpleicons.org/langchain' },
  { name: 'FAISS', src: 'https://cdn.simpleicons.org/meta' },
  { name: 'Qiskit', src: 'https://cdn.simpleicons.org/qiskit' },
  { name: 'Matplotlib', src: devicon('matplotlib/matplotlib-original.svg') },

  // Developer Tools
  { name: 'Git', src: devicon('git/git-original.svg') },
  { name: 'GitHub', src: devicon('github/github-original.svg') },
  { name: 'Docker', src: devicon('docker/docker-original.svg') },
  { name: 'Postman', src: devicon('postman/postman-original.svg') },
  { name: 'VS Code', src: devicon('vscode/vscode-original.svg') },
  { name: 'REST API', src: 'https://img.icons8.com/ios-filled/50/000000/api-settings.png' },
];

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="about-me-seccion" id="about-me">
          <div className="about-me-container">
            <div className="about-me-img-container">
              <img
                src={imgabout}
                alt="About me"
                className="about-me-img"
              />

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Imaad@Resume.pdf"
                className="btn-code resume buttonDownload"
              >
                <FormattedMessage
                  id="btn-resume"
                  defaultMessage="Download Resume"
                />
              </a>
            </div>

            <div className="about-me-info">
              <p>
                <FormattedMessage
                  id="about-info-1"
                  defaultMessage="I'm Mohammed Imaad Sharieff, a Software Developer with a passion for building scalable applications and exploring Artificial Intelligence and Machine Learning. I am currently pursuing my M.Tech in Computer Science and Engineering at CMR University."
                />
              </p>

              <div className={`hide parrafo-active ${showMore ? 'show' : ''}`}>
                <p>
                  <FormattedMessage
                    id="about-info-2"
                    defaultMessage="I have hands-on experience in full-stack development, backend systems, REST APIs, and database management. Through my internships and personal projects, I have worked with technologies such as Python, React, Flask, FastAPI, Django, MySQL, MongoDB, and Docker."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id="about-info-3"
                    defaultMessage="My interests also extend to AI/ML, Generative AI, and Quantum Machine Learning. I have developed projects involving intelligent chatbots, financial analysis, and quantum-enhanced image classification. I enjoy learning new technologies and applying them to solve real-world problems."
                  />
                </p>
              </div>

              <div className="btn-info">
                <button
                  type="button"
                  className="custom-btn btn-code"
                  id="btn-hide"
                  onClick={() => setShowMore(!showMore)}
                  aria-expanded={showMore}
                >
                  <span>{showMore ? '↑' : 'Read more'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>

            <div className="skill-container">
              {skills.map((skill, index) => (
                <div
                  className="skill-card"
                  key={skill.name}
                  data-aos="flip-up"
                  data-aos-delay={(index % 6) * 100}
                >
                  <img
                    alt={skill.name}
                    className="skills-img"
                    src={skill.src}
                    title={skill.name}
                    loading="lazy"
                  />

                  <h2 className="skill-name">
                    {skill.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;
