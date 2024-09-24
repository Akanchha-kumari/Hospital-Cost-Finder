import React from 'react';

const Services = () => {
  const servicesContainerStyle = {
    padding: '40px',   backgroundColor: '#d3d3d3', 
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
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

  return (
    <div style={servicesContainerStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <p style={paragraphStyle}>
        We offer hospital price comparison, hospital profiles, and user reviews for informed healthcare decisions.
      </p>
    </div>
  );
};

export default Services;
