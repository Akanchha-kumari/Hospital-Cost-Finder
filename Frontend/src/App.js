import './App.css';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [cost, setCost] = useState('');
  const [disease, setDisease] = useState('');


  const searchHospitals = () => {
    const Data = [
      { name: 'City Hospital', location: 'Delhi', cost: '5000', diseaseType: 'Cardiology' },
 
    ];

   

  };

  return (
    <div className="App">
    
        <h1>Hospital Cost Finder</h1>
        <p>Find hospitals based on your location, cost preferences, and medical needs.</p>

        <div className="form-container">
        <label>Enter Disease Type:</label>
          <input
            type="text" value={disease}
            onChange={(e) => setDisease(e.target.value)}
            
          />

          
          <label>Enter Location:</label>
          <input
            type="text"  value={location}
            onChange={(e) => setLocation(e.target.value)}
          
          />

          <label>Enter Maximum Cost:</label>
          <input
            type="number" value={cost}
            onChange={(e) => setCost(e.target.value)}
          
          />

         

          <button onClick={searchHospitals}>Search Hospitals</button>
        </div>

       
  
    </div>
  );
}

export default App;
