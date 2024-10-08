import './Search.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [disease, setDisease] = useState('');
  const [results, setResults] = useState([]);

  const navigate = useNavigate();

  const searchHospitals = () => {
    const Data = [
      { name: 'City Hospital', location: 'Delhi', cost: 5000, diseaseType: 'Cardiology' },
      { name: 'Green Clinic', location: 'Mumbai', cost: 3000, diseaseType: 'Orthopedics' },
      { name: 'Life Hospital', location: 'Bangalore', cost: 4500, diseaseType: 'Cardiology' },
    ];

    const filteredHospitals = Data.filter(
      (hospital) =>
        (disease === '' || hospital.diseaseType.toLowerCase().includes(disease.toLowerCase())) &&
        (location === '' || hospital.location.toLowerCase().includes(location.toLowerCase())) &&
        (cost === '' || hospital.cost <= Number(cost))
    );

    setResults(filteredHospitals);
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column' }}>
      <div style={{ backgroundColor: '#007bff', padding: '30px', textAlign: 'center', color: 'white', position: 'relative' }}>
        <h1 style={{ margin: 0, fontSize: '3rem' }}>Hospital Cost Finder</h1>
        <button
          onClick={() => navigate('/hospitalform')}
          style={{
            position: 'absolute',
            top: '50%',
            right: '30px',
            transform: 'translateY(-50%)',
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: '2px solid #ffffff',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Hospitals
        </button>
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><button onClick={() => navigate('/about')}>About</button></li>
          <li><button onClick={() => navigate('/services')}>Services</button></li>
          <li><button onClick={() => navigate('/contact')}>Contact</button></li>
        </ul>
      </nav>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa', padding: '40px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '800px' }}>
          <p style={{ marginBottom: '30px', fontSize: '1.5rem' }}>Find hospitals based on your location, cost preferences, and medical needs.</p>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Enter Disease Type:</label>
            <input
              type="text"
              value={disease}
              onChange={(e) => setDisease(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '10px' }}>Surgeries:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}
            />
          </div>

          <button
            onClick={searchHospitals}
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              padding: '12px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              width: '100%',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
          >
            Search Hospitals
          </button>

          <div style={{ marginTop: '30px' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Search Results:</h2>
            {results.length > 0 ? (
              <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
                {results.map((hospital, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <strong>{hospital.name}</strong> - {hospital.location} - ₹{hospital.cost} - {hospital.diseaseType}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hospitals found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
