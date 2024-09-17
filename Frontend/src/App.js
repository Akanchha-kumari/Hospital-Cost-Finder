import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HospitalProfile from './HospitalProfile';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [disease, setDisease] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [results, setResults] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const Data = [
    { id: 1, name: 'City Hospital', location: 'Delhi', cost: 5000, diseaseType: 'Cardiology', rating: 4.5 },
    { id: 2, name: 'Green Clinic', location: 'Mumbai', cost: 3000, diseaseType: 'Orthopedics', rating: 4.0 },
    { id: 3, name: 'Health Center', location: 'Delhi', cost: 7000, diseaseType: 'Neurology', rating: 3.8 },
    { id: 4, name: 'Life Hospital', location: 'Bangalore', cost: 4500, diseaseType: 'Cardiology', rating: 4.2 },
  ];

  // Detect user's current location using the browser's Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  }, []);

  const searchHospitals = () => {
    let filteredHospitals = Data.filter(
      (hospital) =>
        (disease === '' || hospital.diseaseType.toLowerCase().includes(disease.toLowerCase())) &&
        (location === '' || hospital.location.toLowerCase().includes(location.toLowerCase())) &&
        (cost === '' || hospital.cost <= Number(cost))
    );


    if (sortOption === 'price') {
      filteredHospitals = filteredHospitals.sort((a, b) => a.cost - b.cost);
    } else if (sortOption === 'rating') {
      filteredHospitals = filteredHospitals.sort((a, b) => b.rating - a.rating);
    }

    setResults(filteredHospitals);
  };

  return (
    <Router>
      <div className="App">
        <div className="header-container">
          <h1 className="header">Hospital Cost Finder</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
        
          <Route
            path="/"
            element={
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
                    type="text"
                    placeholder={currentLocation ? `Detected: ${currentLocation}` : 'Enter city or allow location access'}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />

                  <label>Enter Maximum Cost:</label>
                  <input
                    type="number" value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />

                  <label>Sort by:</label>
                  <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">None</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                  </select>

                  <button onClick={searchHospitals}>Search Hospitals</button>
                </div>

                <div className="results-container">
                  <h2>Search Results:</h2>
                  {results.length > 0 ? (
                    <ul>
                      {results.map((hospital) => (
                        <li key={hospital.id}>
                          <strong><Link to={`/hospital/${hospital.id}`}>{hospital.name}</Link></strong> - {hospital.location} - ₹{hospital.cost} - {hospital.diseaseType} - {hospital.rating}⭐
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No hospitals found</p>
                  )}
                </div>

                <div className="map-placeholder">
                  <h2>Map of Nearby Hospitals</h2>
                  <p>[Google Maps API Integration Placeholder]</p>
                </div>
              </div>
            }
          />

          <Route path="/hospital/:id" element={<HospitalProfile data={Data} />} />


          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
