
import React from 'react';
import './ExperiencesPage.css';

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi language */
import { FormattedMessage } from 'react-intl';

const Experiences = () => {
  const experiences = [
    {
      title: 'Software Development Engineer Intern',
      organization: 'Bluestock Fintech',
      duration: 'June 2025 – August 2025',
      description:
        'Worked on developing intelligent software solutions that simplify financial data analysis. This experience helped me strengthen my backend development, data handling, and problem-solving skills.',
      icon: 'fas fa-briefcase'
    },
    {
      title: 'Full-Stack Developer Intern',
      organization: 'LearnNex',
      duration: 'August 2024 – October 2024',
      description:
        'Gained practical experience building web applications and connecting frontend interfaces with backend services. It helped me understand the complete development process and improve my technical skills.',
      icon: 'fas fa-code'
    }
  ];

  const achievements = [
    {
      title: 'Research Paper Publication',
      organization: 'International Conference',
      duration: 'June 2026',
      description:
        'Published research exploring the use of quantum computing and deep learning for tuberculosis detection, contributing to the growing field of AI-powered healthcare.',
      icon: 'fas fa-file-alt'
    },
    {
      title: 'Best Innovation Project',
      organization: 'Project Open Day',
      duration: 'May 2026',
      description:
        'Received recognition for developing an innovative healthcare solution using quantum machine learning, combining research with practical implementation.',
      icon: 'fas fa-award'
    },
    {
      title: 'CodeStorm 25 Winner',
      organization: 'Christ Academy Institute for Advanced Studies',
      duration: 'March 2025',
      description:
        'Secured first place in a 48-hour hackathon, demonstrating creativity, teamwork, and the ability to develop solutions under time constraints.',
      icon: 'fas fa-trophy'
    }
  ];

  const education = [
    {
      title: 'Master of Technology',
      organization: 'CMR University',
      duration: '2026 – Present',
      description: 'Computer Science and Engineering',
      icon: 'fas fa-graduation-cap'
    },
    {
      title: 'Bachelor of Engineering',
      organization: 'Dayananda Sagar College of Engineering',
      duration: '2022 – 2026',
      description: 'Computer Science and Engineering',
      icon: 'fas fa-university'
    },
    {
      title: 'Pre-University Course',
      organization: "St. Joseph's Pre-University College",
      duration: 'Completed in 2022',
      description: 'Pre-University Education',
      icon: 'fas fa-school'
    }
  ];

  const renderCards = (items, isEducation = false) =>
    items.map((item, index) => (
      <div
        className="columns"
        key={item.title}
        data-aos="fade-up"
        data-aos-delay={(index % 3) * 100}
      >
        <i className={item.icon}></i>

        <h3>{item.title}</h3>

        <p>
          <strong>{item.organization}</strong>
        </p>

        {isEducation ? (
          <p>
            {item.description}
            <br />
            {item.duration}
          </p>
        ) : (
          <>
            <p>{item.description}</p>
            <p className="experience-date">
              {item.duration}
            </p>
          </>
        )}
      </div>
    ));

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="service-page">

        {/* Experience */}
        <section className="experiences" id="experiences">
          <h2 className="heading">
            <FormattedMessage
              id="professional-experience"
              defaultMessage="Professional Experience"
            />
          </h2>

          <div className="row">
            {renderCards(experiences)}
          </div>
        </section>

        {/* Achievements */}
        <section className="site-experience" id="achievements">
          <h2 className="heading">
            <FormattedMessage
              id="achievements"
              defaultMessage="Achievements"
            />
          </h2>

          <div className="row">
            {renderCards(achievements)}
          </div>
        </section>

        {/* Education */}
        <section className="site-experience" id="education">
          <h2 className="heading">
            <FormattedMessage
              id="education"
              defaultMessage="Education"
            />
          </h2>

          <div className="row">
            {renderCards(education, true)}
          </div>
        </section>

      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Experiences;
