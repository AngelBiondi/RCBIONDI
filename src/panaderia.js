import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

function panaderia() {

        return (
                <div>
                         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">R.C. BIONDI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
          <span className="navbar-text">
            Refrigeracion Comercial Biondi
    </span>
        </div>
      </nav>
                        <div>
                                <ol>
                                        <li>1</li>
                                        <li>2</li>
                                        <li>3</li>
                                        <li>4</li>

                                </ol>
                        </div>
                        <p>hola</p>
                        <p>THIS IS A WHOLE DIFFERENT PAGE, WHY IT DOESN'T WORK</p>
                        <p></p>

                </div>
        );

}


export default panaderia;