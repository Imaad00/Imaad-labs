import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          color: "#000",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
        fullScreen: {
          enable: false,
        },
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            enable: true,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            value: 0,
            direction: "random",
            animation: {
              enable: true,
              speed: 5,
            },
          },
          shape: {
            type: "image",
            image: [
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/claude/claude-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/mysql/mysql-original-wordmark.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/fastapi/fastapi-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/numpy/numpy-original.svg",
                width: 20,
                height: 20,
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.18.0/icons/pandas/pandas-original.svg",
                width: 20,
                height: 20,
              },
              /*{
                src: "",
                width: 20,
                height: 20,
              },
              {
                src: "",
                width: 20,
                height: 20,
              },*/
            ],
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
        },
      }}
    />
  );
}
