import React from 'react';
import "./SearchItem.css"

export default function SearchItem({
  fundsname = "Name 5",
  noOfMonths = "4",
  noOfInvestors = "556"
}) {
  return (
    <section id="main">

      <div className="container_proj">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <h2>{fundsname}</h2>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">{noOfMonths}</div>
              <div className="type">Months</div>
            </div>
            <div className="stat">
              <div className="value">{noOfInvestors}</div>
              <div className="type">Investors</div>
            </div>
          </div>
            <a href="./details" className="btn-flip" data-back="Know more" data-front="Know more"></a>
        </div>
      </div>
    </section>
  );
}
