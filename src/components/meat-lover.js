import React from 'react';
import meat from './images/plain.jpg';
import './css/slice.css';

function MeatLover() {
  return(
    <div className="MeatLover col-4">
      <div className="card">
        <img src={ meat } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Meat Lover's Slice</h5>
          <p className="card-text">Cant decide between eating pizza or meat?Well thats why we have pizza with pepperoni,meatballs,and susages.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;
