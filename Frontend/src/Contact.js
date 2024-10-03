import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const contactContainerStyle = {
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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    animation: 'bounceIn 1s ease-in-out',
  };

  const inputStyle = {
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'transform 0.3s ease',
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '1.2rem',
    backgroundColor: '#004466',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    animation: 'bounceIn 1.5s ease-in-out',
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
      <div style={contactContainerStyle}>
        {}
        <button style={backButtonStyle} onClick={handleBackClick}>
          ← Back to Search
        </button>

        <h2 style={headingStyle}>Contact Us</h2>
        <p style={paragraphStyle}>
          You can reach us at: <strong>info@medicompare.com</strong> or fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {}
        <form style={formStyle}>
          <input type="text" placeholder="Your Name" style={inputStyle} required />
          <input type="email" placeholder="Your Email" style={inputStyle} required />
          <textarea placeholder="Your Message" style={{ ...inputStyle, height: '150px' }} required />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
