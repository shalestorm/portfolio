import React from 'react';
import AnimatedText from './AnimatedText';
import MultiBlobBackground from './MultiBlobBackground';

export default function Hero() {
    return (
        <section id="Me" className="hero-section">
            <img src="skyler.png" alt="Skyler McLain" className="hero-photo" />
            <MultiBlobBackground />
            <div>
                <h1>Hi, I’m Skyler McLain.</h1>
                <h2>
                    I’m a <AnimatedText />
                </h2>
                <p>Welcome to my portfolio — a space where creativity meets code.</p>
            </div>
        </section>
    );
}
