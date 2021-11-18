import React from 'react';
import veggie from './images/plain.jpg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="Veggie col-4">
      <div className="card">
        <img src={ veggie } class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">On a diet and still wanna enjoy eating Pizza.Buy our dollar veggie pizza's.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;
