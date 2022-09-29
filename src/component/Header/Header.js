import React from 'react';

const Header = () => {
    return (
        <div>
    <header className="sticky-top bg-success mb-3">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand text-white" href="index.html">Muscle Monsters</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link text-white" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="index.html">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="index.html">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="blog.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    
        </div>
    );
};

export default Header;