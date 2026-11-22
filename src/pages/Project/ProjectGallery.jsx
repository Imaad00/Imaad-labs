import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Modal from "./Modal";
import { projects } from "./ProjectData";
import "./ProjectPage.css";

const projectImages = require.context("../../img", true);

export default function ProjectGallery({ category = "websites" }) {
  const [selected, setSelected] = useState(null);
  const intl = useIntl();
  const translate = (id) => intl.formatMessage({ id });
  const items = projects.filter((project) => project.category === category);
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />
      <main className="mas-proyect">
        <section className="More projects" id="projects">
          <h1 className="heading">
            <FormattedMessage id="projects" defaultMessage="Projects" />
          </h1>
          <nav className="navbar nav-proj" aria-label="Project categories">
            <NavLink exact to="/project" activeClassName="active">
              <FormattedMessage id="site-web" defaultMessage="Websites" />
            </NavLink>
            <NavLink to="/project/app" activeClassName="active">
              <FormattedMessage id="apps" defaultMessage="Apps" />
            </NavLink>
            <NavLink to="/project/game" activeClassName="active">
              <FormattedMessage id="games" defaultMessage="Games" />
            </NavLink>
          </nav>
        </section>
        <section
          className="projects__grid portfolio-project-grid"
          aria-label={`${category} projects`}
        >
          {items.map((project) => (
            <button
              className="projects__item portfolio-project-card"
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`${translate("project-view-details")} ${translate(project.titleId)}`}
            >
              <img
                src={projectImages(`./${project.image}`)}
                alt={translate(project.titleId)}
                className="projects__img"
                loading="lazy"
              />
              <span className="portfolio-project-card-title">
                {translate(project.titleId)}
              </span>
            </button>
          ))}
        </section>
      </main>
      <Modal
        estado={Boolean(selected)}
        cambiarEstado={(open) => {
          if (!open) setSelected(null);
        }}
      >
        {selected && (
          <div className="portfolio-project-detail">
            <img
              src={projectImages(`./${selected.image}`)}
              alt={translate(selected.titleId)}
            />
            <h2>{translate(selected.titleId)}</h2>
            <p>{translate(selected.descriptionId)}</p>
            {selected.technologies.length > 0 && (
              <p className="portfolio-tech-list">
                <strong>
                  <FormattedMessage
                    id="project-technologies"
                    defaultMessage="Technologies:"
                  />
                </strong>{" "}
                {selected.technologies.join(" · ")}
              </p>
            )}
            <div className="portfolio-detail-links">
              {selected.demo && (
                <a
                  className="custom-btn btn"
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage
                    id="project-live-demo"
                    defaultMessage="Live Demo"
                  />
                </a>
              )}
              {selected.repository && (
                <a
                  className="custom-btn btn-code"
                  href={selected.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage
                    id="project-repository"
                    defaultMessage="Repository"
                  />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
