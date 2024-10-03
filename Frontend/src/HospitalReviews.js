import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      console.log('Submitted review:', review);
      setReview('');
    } else {
      console.log('Review cannot be empty.');
    }
  };

  return (
    <div style={styles.pageContainer}>
      {}
      <button onClick={() => navigate('/services')} style={styles.pageBackButton}>
        ← Back
      </button>

      <div style={styles.container}>
        <h2 style={styles.heading}>Leave a Review</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <textarea
            style={styles.textArea}
            placeholder="Write your review here"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
const styles = {
  pageContainer: {
    position: 'relative', 
  },
  pageBackButton: {
    position: 'fixed', 
    top: '20px',
    left: '20px',
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  container: {
    maxWidth: '700px',
    margin: '100px auto', 
    padding: '40px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  textArea: {
    width: '100%',
    height: '500px', 
    padding: '200px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '15px',
    fontSize: '18px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};

export default ReviewForm;
