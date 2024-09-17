import React from 'react';
import { useParams } from 'react-router-dom';

const HospitalProfile = ({ data }) => {
  const { id } = useParams();
  const hospital = data.find((hospital) => hospital.id === Number(id));

  if (!hospital) {
    return <p>Hospital not found!</p>;
  }

  return (
    <div className="hospital-profile">
      <h2>{hospital.name}</h2>
      <p><strong>Location:</strong> {hospital.location}</p>
      <p><strong>Cost:</strong> ₹{hospital.cost}</p>
      <p><strong>Disease Type:</strong> {hospital.diseaseType}</p>
      <p><strong>Rating:</strong> {hospital.rating}⭐</p>
      <h3>Reviews:</h3>
   
      <div>
        <input type="text" placeholder="Leave a review" />
        <button>Submit Review</button>
      </div>
    </div>
  );
};

export default HospitalProfile;
