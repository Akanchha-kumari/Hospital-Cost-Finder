import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const About = () => {
  const navigate = useNavigate();
  const aboutContainerStyle = {
    padding: '60px',
    backgroundColor: '#d3d3d3',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
    margin: '40px auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#004466',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '40px',
  };

  const backButtonStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px 20px',
    backgroundColor: '#004466',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
  };
  const bounceAnimation = `
    @keyframes bounceIn {
      0% {
        transform: scale(0.9);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  const handleBackClick = () => {
    navigate('/search'); 
  };

  return (
    <>
      <style>{bounceAnimation}</style>
      <div style={aboutContainerStyle}>
        {}
        <button style={backButtonStyle} onClick={handleBackClick}>
          ← Back to Search
        </button>

        <h2 style={headingStyle}>About MediCompare</h2>
        <p style={paragraphStyle}>
          MediCompare is a hospital cost finder platform designed to help users compare medical services and prices across different hospitals. Our goal is to empower patients to make informed healthcare decisions by providing detailed cost breakdowns, hospital profiles, and user reviews.
        </p>

        <p style={paragraphStyle}>
          Whether you're seeking elective surgery, diagnostic procedures, or emergency care, MediCompare enables you to find the best hospital for your needs based on location, cost, and quality of care. Our platform aims to bring transparency to healthcare pricing, making it easier for patients to navigate their options.
        </p>

        <p style={paragraphStyle}>
          Join thousands of users who trust MediCompare for their healthcare decisions. We are committed to improving accessibility and transparency in the healthcare system by providing accurate and up-to-date information.
        </p>
      </div>
    </>
  );
};

export default About;
