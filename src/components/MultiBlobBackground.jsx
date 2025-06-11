import React, { useEffect, useState } from 'react';
import './MultiBlobBackground.css';

export default function MultiBlobBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            const x = e.clientX || e.touches?.[0]?.clientX || 0;
            const y = e.clientY || e.touches?.[0]?.clientY || 0;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);

    const blobs = [
        { className: 'blob1', fill: '#00fff7', multiplier: 0.01, duration: '20s' },
        { className: 'blob2', fill: '#ff00c3', multiplier: -0.01, duration: '18s' },
        { className: 'blob3', fill: '#ff6600', multiplier: 0.02, duration: '22s' },
        { className: 'blob4', fill: '#9400ff', multiplier: -0.015, duration: '26s' },
        { className: 'blob5', fill: '#00ff88', multiplier: 0.005, duration: '30s' },
    ];

    return (
        <div className="blob-bg">
            {blobs.map(({ className, fill, multiplier, duration }, index) => (
                <svg
                    key={index}
                    className={`blob ${className}`}
                    viewBox="0 0 200 200"
                    style={{
                        transform: `translate(${mousePos.x * multiplier}px, ${mousePos.y * multiplier}px)`,
                    }}
                >
                    <path fill={fill}>
                        <animate
                            attributeName="d"
                            dur={duration}
                            repeatCount="indefinite"
                            values="
              M44.4,-66.4C58.6,-57.3,71.4,-46.2,74.1,-32.7C76.8,-19.1,69.3,-3.1,63.9,11.5C58.6,26,55.4,39.1,47.2,48.4C39.1,57.7,26,63.2,11.9,68.4C-2.1,73.5,-17.2,78.3,-28.4,72.7C-39.6,67.1,-46.9,51,-56.7,36.9C-66.6,22.7,-78.9,10.4,-81.2,-3.7C-83.5,-17.8,-75.7,-33.5,-63.9,-44.3C-52.1,-55.1,-36.4,-60.9,-21.2,-68.1C-6,-75.3,8.7,-83.9,22.2,-82.7C35.6,-81.4,47.7,-70.4,44.4,-66.4Z;

              M43.3,-63.5C54.7,-55.3,62.9,-43.8,70.5,-30.2C78.1,-16.7,85.1,-0.9,81.5,12.9C77.9,26.7,63.8,38.5,49.7,47.2C35.7,56,21.7,61.6,6.6,64.2C-8.5,66.9,-24.6,66.5,-36.4,58.3C-48.1,50.1,-55.5,34.1,-63.4,17.6C-71.4,1,-80,-15.9,-76.1,-30.4C-72.2,-44.8,-55.9,-56.7,-40.1,-63.5C-24.4,-70.3,-12.2,-72.1,1.3,-73.9C14.8,-75.6,29.6,-77.6,43.3,-63.5Z;

              M44.4,-66.4C58.6,-57.3,71.4,-46.2,74.1,-32.7C76.8,-19.1,69.3,-3.1,63.9,11.5C58.6,26,55.4,39.1,47.2,48.4C39.1,57.7,26,63.2,11.9,68.4C-2.1,73.5,-17.2,78.3,-28.4,72.7C-39.6,67.1,-46.9,51,-56.7,36.9C-66.6,22.7,-78.9,10.4,-81.2,-3.7C-83.5,-17.8,-75.7,-33.5,-63.9,-44.3C-52.1,-55.1,-36.4,-60.9,-21.2,-68.1C-6,-75.3,8.7,-83.9,22.2,-82.7C35.6,-81.4,47.7,-70.4,44.4,-66.4Z"
                        />
                    </path>
                </svg>
            ))}
        </div>
    );
}
