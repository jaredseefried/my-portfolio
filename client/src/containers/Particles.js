import React, { Component } from 'react'
import Particles from "react-tsparticles";

const colorsArray = ['#695ca8', '#00acfc', '#fff', '#696969']

const randomColors = (color) => {
  let i = Math.floor(Math.random() * colorsArray.length);
  if (color && i in colorsArray) {
    return colorsArray.splice(i, 1)[0]
  }
  return colorsArray[i]
}


class ParticlesBG extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#121212",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: 'rgba(255, 255, 255, 0.3)',
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 0.24,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: .08,
              random: true,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
              anim: {
                enable: true,
                random: true
              }
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticlesBG