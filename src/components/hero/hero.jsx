import React, { useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';
import './hero.css';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import german_flag from '../../assets/german-flag.png';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      text: 'Almanya’da Mesleki Geleceğini Birlikte İnşa Edelim.',
      duration: 2,
      ease: 'none',
    });
  }, []);

  return (
    <div className="hero">
      <Particles
        init={particlesInit}
        options={{
          preset: 'links',
          fullScreen: { enable: false },
          background: { color: '#37363a' },
          particles: {
            links: {
              color: ['#ff5e5e', '#ffaa00', '#34c759', '#0a84ff', '#af52de'],
              distance: 120,
            },
            color: {
              value: '#fff',
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      <div className="hero-text">
        <h3 ref={textRef}></h3>
        <img src={german_flag} alt="German Flag" />
      </div>
    </div>
  );
};

export default Hero;