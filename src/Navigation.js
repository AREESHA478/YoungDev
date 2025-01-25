import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Single Page Application</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active "><Link to="/home"> Home</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/about">About</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/services">Services</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><Link to="/contact">Contact</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  

    
   
  );
}

export default Navigation;
