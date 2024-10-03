import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HospitalForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: '',
    disease: '',
    price: '',
    surgeries: '',
    location: '',
  });
  const [hospitalData, setHospitalData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const fetchHospitals = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hospitals');
      setHospitalData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHospitals();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editIndex !== null) {
        await axios.put(`http://localhost:5000/api/hospitals/${editIndex}`, formData);
      } else {
        await axios.post('http://localhost:5000/api/hospitals', formData);
      }
      fetchHospitals();
      setFormData({ hospitalName: '', disease: '', price: '', surgeries: '', location: '' });
      setEditIndex(null);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (id) => {
    const hospital = hospitalData.find(h => h._id === id);
    setFormData(hospital);
    setEditIndex(id);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/hospitals/${id}`);
      fetchHospitals();
    } catch (error) {
      console.log(error);
    }
  };
  const handleBackClick = () => {
    navigate('/search'); 
  };

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f7',
  };

  const formContainerStyle = {
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    maxWidth: '900px',
    width: '100%',
    margin: 'auto',
    textAlign: 'center',
  };

  const formHeadingStyle = {
    fontSize: '2.5rem',
    color: '#004466',
    marginBottom: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '15px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '1.2rem',
    backgroundColor: '#004466',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
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
    transition: 'background-color 0.3s ease',
  };

  const tableStyle = {
    width: '100%',
    marginTop: '40px',
    borderCollapse: 'collapse',
  };

  const tableHeaderStyle = {
    backgroundColor: '#004466',
    color: '#fff',
    padding: '10px',
  };

  const tableRowStyle = {
    backgroundColor: '#fff',
    color: '#333',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
  };
  const buttonHoverStyle = {
    ':hover': {
      backgroundColor: '#002233',
    },
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        {}
        <button
          style={{ ...backButtonStyle, ...buttonHoverStyle }}
          onClick={handleBackClick}
        >
          ← Back to Search
        </button>

        <h2 style={formHeadingStyle}>Hospital Information Form</h2>

        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="text"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            placeholder="Hospital Name"
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="disease"
            value={formData.disease}
            onChange={handleChange}
            placeholder="Disease"
            style={inputStyle}
            required
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="surgeries"
            value={formData.surgeries}
            onChange={handleChange}
            placeholder="Surgeries"
            style={inputStyle}
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            style={inputStyle}
            required
          />

          <button
            type="submit"
            style={{ ...buttonStyle, ...buttonHoverStyle }}
          >
            {editIndex !== null ? 'Update Record' : 'Submit'}
          </button>
        </form>

        {}
        {hospitalData.length > 0 && (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Hospital Name</th>
                <th style={tableHeaderStyle}>Disease</th>
                <th style={tableHeaderStyle}>Price</th>
                <th style={tableHeaderStyle}>Surgeries</th>
                <th style={tableHeaderStyle}>Location</th>
                <th style={tableHeaderStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hospitalData.map((record, index) => (
                <tr key={record._id}>
                  <td style={tableRowStyle}>{record.hospitalName}</td>
                  <td style={tableRowStyle}>{record.disease}</td>
                  <td style={tableRowStyle}>${record.price}</td>
                  <td style={tableRowStyle}>{record.surgeries}</td>
                  <td style={tableRowStyle}>{record.location}</td>
                  <td style={tableRowStyle}>
                    <button
                      onClick={() => handleEdit(record._id)}
                      style={{ ...buttonStyle, ...buttonHoverStyle }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(record._id)}
                      style={{ ...buttonStyle, ...buttonHoverStyle }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HospitalForm;
