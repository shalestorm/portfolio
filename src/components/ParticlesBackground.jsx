import React from 'react';
import Particles from 'react-tsparticles';
import './ParticlesBackground.css';

export default function ParticlesBackground() {
    return (
        <div className="particles-wrapper">
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: { enable: false },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: 'repulse' },
                            resize: true
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 }
                        }
                    },
                    particles: {
                        color: { value: '#00fff7' },
                        links: {
                            color: '#00fff7',
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1
                        },
                        collisions: { enable: false },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: { default: 'bounce' },
                            random: false,
                            speed: 1,
                            straight: false
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 60
                        },
                        opacity: {
                            value: 0.3
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: { min: 1, max: 4 }
                        }
                    },
                    detectRetina: true
                }}
            />
        </div>
    );
}
