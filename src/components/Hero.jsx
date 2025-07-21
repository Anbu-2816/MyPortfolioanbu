import React from 'react';

const Hero = () => {
  return (
    <section style={styles.heroSection}>
      <style>{`
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div style={styles.heroContent}>
        <h2 style={styles.heroTitle}>
          Hello, I'm <span style={styles.highlightedName}>Anbarasi S</span>
        </h2>
        <p style={styles.heroSubtitle}>
          <strong>Python Developer</strong> | <strong>MySQL</strong> | <strong>Django</strong> | <strong>HTML, CSS, JavaScript</strong> | <strong>React.js</strong>
        </p>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/MyPhoto.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  },
  heroContent: {
    animation: 'fadeSlideIn 1.5s ease-out forwards',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem',
    letterSpacing: '1px',
  },
  highlightedName: {
    color: '#00ffff',
    fontWeight: 800,
    textShadow: '0 0 5px rgba(0, 255, 255, 0.6)',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#e0e0e0',
    letterSpacing: '0.5px',
  },
};

export default Hero;
