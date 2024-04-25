// CardRow.js
import React from 'react';
import './index.css'; // Import CSS for styling
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Cards = () => {
  return (
    <div className="card-row">
        <div className="card">
          <NewspaperIcon />
          <div className="card-content">
            <h3>My Saved Library 1</h3>
            <p>dd/mm/yyyy</p>
          </div>
        </div>
        <div className="card">
          <NewspaperIcon />
          <div className="card-content">
            <h3>My Saved Library 2</h3>
            <p>dd/mm/yyyy</p>
          </div>
        </div>
        <div className="card">
          <NewspaperIcon />
          <div className="card-content">
            <h3>My Saved Library 3</h3>
            <p>dd/mm/yyyy</p>
          </div>
        </div>
        <div className="card">
          <NewspaperIcon />
          <div className="card-content">
            <h3>My Saved Library 4</h3>
            <p>dd/mm/yyyy</p>
          </div>
        </div>
    </div>
  );
};

export default Cards;
