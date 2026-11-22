
import React from 'react';
import '../../pages/About/AboutPage.css';
import { Link } from 'react-router-dom';
import resume from '../../resume/Imaad@Resume.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi language */
import { FormattedMessage } from 'react-intl';

const Skill = ({ icon, name }) => (
  <div>
    <img
      alt={name}
      className="icons-skils"
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`}
      title={name}
    />
    <h5>{name}</h5>
  </div>
);

const About = () => (
  <section className="about-me" id="about-me">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="Who Am I" />
        </h3>

        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Mohammed Imaad Sharieff and I am a Backend Developer."
          />
        </h4>

        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I am currently pursuing my M.Tech in Computer Science and Engineering at CMR University."
          />
        </p>

        <ul>
          <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="Age:" />
              </span>
              22
            </p>
          </li>

          <li>
            <p>
              <span>
                <FormattedMessage id="hobbies" defaultMessage="Hobbies: " />
              </span>
              <FormattedMessage
                id="hobbies-value"
                defaultMessage="Gaming, Travelling"
              />
            </p>
          </li>

          <li>
            <p>
              <span>
                <FormattedMessage id="email" defaultMessage="Email: " />
              </span>
              imaad10c@gmail.com
            </p>
          </li>

          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              Bangalore, India
            </p>
          </li>
        </ul>

        <div className="more-info">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
            className="btn-code buttonDownload"
          >
            <FormattedMessage
              id="btn-resume"
              defaultMessage="Download Resume"
            />
          </a>

          <div className="more-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>

      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>
          <FormattedMessage
            id="technical-skills"
            defaultMessage="Technical Skills"
          />
        </h3>

        {/* Programming Languages */}
        <h4>
          <FormattedMessage
            id="programming-languages"
            defaultMessage="Programming Languages"
          />
        </h4>

        <div className="skill">
          <Skill icon="python/python-original.svg" name="Python" />
          <Skill icon="javascript/javascript-original.svg" name="JavaScript" />
          <Skill icon="cplusplus/cplusplus-original.svg" name="C++" />
        </div>

        {/* Frameworks & Technologies */}
        <h4>
          <FormattedMessage
            id="frameworks-technologies"
            defaultMessage="Frameworks & Technologies"
          />
        </h4>

        <div className="skill">
          <Skill icon="react/react-original.svg" name="React" />
          <Skill icon="fastapi/fastapi-original.svg" name="FastAPI" />
          <Skill icon="flask/flask-original.svg" name="Flask" />
          <Skill icon="django/django-plain.svg" name="Django" />
        </div>

        {/* Databases & Tools */}
        <h4>
          <FormattedMessage
            id="databases-tools"
            defaultMessage="Databases & Tools"
          />
        </h4>

        <div className="skill">
          <Skill icon="mysql/mysql-original.svg" name="MySQL" />
          <Skill icon="git/git-original.svg" name="Git" />
          <Skill icon="docker/docker-original.svg" name="Docker" />
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
