import React from 'react'
import {Particles} from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { useSelector } from "react-redux"

function MyParticles() {
    var pcolor = ''
    const theme =  useSelector((state)=>state.page.mode)
    const particlesInit = useCallback(async engine => {

          await loadFull(engine);
      }, []);

      const particlesLoaded = useCallback(async container => {
          await container;
      }, []);

      if(theme =='dark'){
        pcolor = "#ffffff"
      }
      else{
        pcolor = '#0000'
      }
        
  return (
    <div>
        <Particles className="particles"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 30,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "",
                        },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                        },
                        resize: true,
                    },
                    modes: {
                      grab: {
                        distance: 140,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 100,
                        size: 20,
                        duration: 2,
                        opacity: 0.3,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                },
                particles: {
                    color: {
                        value: pcolor ,
                    },
                    links: {
                        color: pcolor,
                        distance: 200,
                        enable: true,
                        opacity: 0.2,
                        width: 0.5,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },

                    number: {
                       
                        value: 50,
                    },
                    opacity: {
                      value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />        
    </div>
  )
}

export default MyParticles