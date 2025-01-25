// src/components/DataFetcher.js
import React, { useEffect, useState } from 'react';
import './DataFetcher.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments'); // Fetch comments
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result.slice(0, 10)); // Limiting to first 10 comments for better display
      } catch (err) {
        console.error("Fetch error: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Fetching Comments...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-danger text-center mt-5">
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
      </div>
    );

  return (
    <div className="container mt-4">
      <h1 className="text-center  mb-4">User Comments</h1>
      <ul className="list-group">
        {data.map(comment => (
          <li key={comment.id} className="list-group-item p-3 mb-3 shadow-sm rounded">
            <h5 className="text-secondary">{comment.name}</h5>
            <p className="text-muted mb-1"><strong>Email:</strong> {comment.email}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
