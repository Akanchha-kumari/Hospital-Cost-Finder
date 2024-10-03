import React from 'react';
import { FaHospitalAlt, FaRegThumbsUp, FaRegComments } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const Services = () => {
  const navigate = useNavigate();
  const servicesContainerStyle = {
    padding: '40px',
    backgroundColor: '#d3d3d3',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
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
  };
  
  const serviceItemStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    margin: '20px',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer', 
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#004466',
    marginBottom: '10px',
  };

  const serviceNameStyle = {
    fontSize: '1.5rem',
    color: '#004466',
  };

  const slideInAnimation = `
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(-50px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

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

  const handleBackClick = () => {
    navigate('/search'); 
  };

  const handleReviewClick = () => {
    navigate('/hospitalreviews'); 
  };

  return (
    <>
      <style>{slideInAnimation}</style>
      <div style={servicesContainerStyle}>
        <button style={backButtonStyle} onClick={handleBackClick}>
          ← Back to Search
        </button>

        <h2 style={headingStyle}>Our Services</h2>
        <p style={paragraphStyle}>
          We offer hospital price comparison, hospital profiles, and user reviews for informed healthcare decisions.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '40px' }}>
          <div style={{ ...serviceItemStyle, animation: 'slideIn 1s ease-in-out forwards' }}>
            <FaHospitalAlt style={iconStyle} />
            <p style={serviceNameStyle}>Hospital Price Comparison</p>
          </div>
          <div style={{ ...serviceItemStyle, animation: 'slideIn 1.2s ease-in-out forwards' }}>
            <FaRegThumbsUp style={iconStyle} />
            <p style={serviceNameStyle}>Hospital Profiles</p>
          </div>
          <div 
            style={{ ...serviceItemStyle, animation: 'slideIn 1.4s ease-in-out forwards' }} 
            onClick={handleReviewClick} 
          >
            <FaRegComments style={iconStyle} />
            <p style={serviceNameStyle}>User Reviews</p>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 style={headingStyle}>How It Works</h2>
          <p style={paragraphStyle}>
            Simply search for the hospitals you're interested in. We'll show you detailed profiles, transparent pricing, and user feedback to help you make an informed decision.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
