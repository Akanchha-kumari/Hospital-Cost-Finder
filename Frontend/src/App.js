import './App.css';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [disease, setDisease] = useState('');
  const [results, setResults] = useState([]);

  const searchHospitals = () => {
    const Data = [
      { name: 'City Hospital', location: 'Delhi', cost: 5000, diseaseType: 'Cardiology' },
      { name: 'Green Clinic', location: 'Mumbai', cost: 3000, diseaseType: 'Orthopedics' },
      { name: 'Health Center', location: 'Delhi', cost: 7000, diseaseType: 'Neurology' },
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
    <div className="App">
      <h1 className="header">Hospital Cost Finder</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div id="search-hospitals">
        <p>Find hospitals based on your location, cost preferences, and medical needs.</p>

        <div className="form-container">
          <label>Enter Disease Type:</label>
          <input
            type="text" value={disease}
            onChange={(e) => setDisease(e.target.value)}
          />

          <label>Enter Location:</label>
          <input
            type="text" value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Enter Maximum Cost:</label>
          <input
            type="number" value={cost}
            onChange={(e) => setCost(e.target.value)}
          />

          <button onClick={searchHospitals}>Search Hospitals</button>
        </div>

        <div className="results-container">
          <h2>Search Results:</h2>
          {results.length > 0 ? (
            <ul>
              {results.map((hospital, index) => (
                <li key={index}>
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
  );
}

export default App;
