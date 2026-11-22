import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { projects, featuredIds } from '../../pages/Project/ProjectData';

const projectImages = require.context('../../img', true);

const Project = () => {
  const intl = useIntl();
  const featured = featuredIds.map(id => projects.find(project => project.id === id)).filter(Boolean);
  return (
    <section className="projects" id="projects">
      <h2 className="heading"><FormattedMessage id="projects" defaultMessage="Projects" /></h2>
      <div className="project-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <Swiper spaceBetween={30} loop={featured.length > 3} grabCursor centeredSlides
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }} modules={[Pagination, Autoplay]}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="projects-slider mySwiper">
          {featured.map(project => (
            <SwiperSlide className="box" key={project.id}>
              <img src={projectImages(`./${project.image}`)} alt={intl.formatMessage({ id: project.titleId })} />
              <div className="content1">
                <h3>{intl.formatMessage({ id: project.titleId })}</h3>
                <p>{intl.formatMessage({ id: project.descriptionId })}</p>
                {project.technologies.length > 0 && <p className="tecnologias">{project.technologies.join(' · ')}</p>}
                {project.demo && <a href={project.demo} className="custom-btn btn" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-live-demo" defaultMessage="Live Demo" /></a>}
                {project.repository && <a href={project.repository} className="custom-btn btn-code" target="_blank" rel="noopener noreferrer"><FormattedMessage id="project-repository" defaultMessage="Repository" /></a>}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="portfolio-btn"><Link to="/project" className="custom-btn btn"><FormattedMessage id="btn-more-projects" defaultMessage="More projects" /></Link></div>
    </section>
  );
};
export default Project;
