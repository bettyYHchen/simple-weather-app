import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="SearchForm">
      <form>
        <div className="form-group">
          <div className="row">
            <div className="col-8 form-input">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Enter the City or ZIP"
              />
            </div>
            <div className="col-4 form-button">
              <input type="submit" className="btn btn-light" value="search" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}