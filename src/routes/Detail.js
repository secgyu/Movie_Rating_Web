import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  const { title, year, director, summary, poster, cast } = location.state;

  return (
    <div className="detail-container">
      <div className="detail-poster">
        <img src={poster} alt={title} />
      </div>
      <div className="detail-info">
        <h1>
          {title} <span>({year})</span>
        </h1>
        <h3>Directed by: {director}</h3>
        <p className="summary">{summary}</p>
        <h4>Cast:</h4>
        <ul>
          {cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
