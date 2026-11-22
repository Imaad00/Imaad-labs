
import React from 'react';
import '../../pages/Experience/ExperiencesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi language */
import { FormattedMessage } from 'react-intl';

const Experience = () => (
  <section className="experiences" id="experiences">
    <h2 className="heading">
      <FormattedMessage
        id="experiences"
        defaultMessage="My Journey"
      />
    </h2>

    <div className="row">

      {/* Experience */}
      <div
        className="columns"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <i className="fas fa-briefcase"></i>

        <h3>
          <FormattedMessage
            id="experience-title"
            defaultMessage="Experience"
          />
        </h3>

        <p>
          <strong>
            <FormattedMessage
              id="experience-role"
              defaultMessage="Software Development & Full-Stack Internships"
            />
          </strong>
        </p>

        <p>
          <FormattedMessage
            id="experience-description"
            defaultMessage="Gained practical industry experience at Bluestock Fintech and LearnNex, working on software development, machine learning, REST APIs, and full-stack applications."
          />
        </p>

        <p>
          <FormattedMessage
            id="experience-duration"
            defaultMessage="2024 – 2025"
          />
        </p>
      </div>

      {/* Achievements */}
      <div
        className="columns"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <i className="fas fa-trophy"></i>

        <h3>
          <FormattedMessage
            id="achievements-title"
            defaultMessage="Achievements"
          />
        </h3>

        <p>
          <strong>
            <FormattedMessage
              id="achievements-highlight"
              defaultMessage="Research Publication & Awards"
            />
          </strong>
        </p>

        <p>
          <FormattedMessage
            id="achievements-description"
            defaultMessage="Published a research paper on Quantum Convolutional Neural Networks, received the Best Innovation Project Award, and secured 1st place in the CodeStorm 25 Hackathon."
          />
        </p>

        <p>
          <FormattedMessage
            id="achievements-duration"
            defaultMessage="2025 – 2026"
          />
        </p>
      </div>

      {/* Education */}
      <div
        className="columns"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <i className="fas fa-graduation-cap"></i>

        <h3>
          <FormattedMessage
            id="education-title"
            defaultMessage="Education"
          />
        </h3>

        <p>
          <strong>
            <FormattedMessage
              id="education-degree"
              defaultMessage="B.E. & M.Tech in Computer Science"
            />
          </strong>
        </p>

        <p>
          <FormattedMessage
            id="education-description"
            defaultMessage="Completed my B.E. in Computer Science and Engineering at Dayananda Sagar College of Engineering and currently pursuing my M.Tech at CMR University."
          />
        </p>

        <p>
          <FormattedMessage
            id="education-duration"
            defaultMessage="2022 – Present"
          />
        </p>
      </div>

    </div>

    <div className="portfolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Experience);
