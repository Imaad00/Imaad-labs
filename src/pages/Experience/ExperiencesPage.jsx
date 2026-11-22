
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
      id: 'exp-bluestock',
      icon: 'fas fa-briefcase'
    },
    {
      id: 'exp-learnnex',
      icon: 'fas fa-code'
    }
  ];

  const achievements = [
    {
      id: 'achievement-paper',
      icon: 'fas fa-file-alt'
    },
    {
      id: 'achievement-award',
      icon: 'fas fa-award'
    },
    {
      id: 'achievement-hackathon',
      icon: 'fas fa-trophy'
    }
  ];

  const education = [
    {
      id: 'education-mtech',
      icon: 'fas fa-graduation-cap'
    },
    {
      id: 'education-be',
      icon: 'fas fa-university'
    },
    {
      id: 'education-puc',
      icon: 'fas fa-school'
    }
  ];

  const renderCards = (items, isEducation = false) =>
    items.map((item, index) => (
      <div
        className="columns"
        key={item.id}
        data-aos="fade-up"
        data-aos-delay={(index % 3) * 100}
      >
        <i className={item.icon}></i>

        <h3>
          <FormattedMessage id={`${item.id}-title`} />
        </h3>

        <p>
          <strong>
            <FormattedMessage
              id={
                isEducation
                  ? `${item.id}-university`
                  : `${item.id}-org`
              }
            />
          </strong>
        </p>

        {isEducation ? (
          <p>
            <FormattedMessage
              id={`${item.id}-course`}
            />
            <br />
            <FormattedMessage
              id={`${item.id}-duration`}
            />
          </p>
        ) : (
          <>
            <p>
              <FormattedMessage
                id={`${item.id}-desc`}
              />
            </p>

            <p className="experience-date">
              <FormattedMessage
                id={`${item.id}-date`}
              />
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
        <section
          className="experiences"
          id="experiences"
        >
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
        <section
          className="site-experience"
          id="achievements"
        >
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
        <section
          className="site-experience"
          id="education"
        >
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
