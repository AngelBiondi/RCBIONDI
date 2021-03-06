import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import rcb1 from './img/rcb1.png'
import rcb2 from './img/rcb2.png'
import rcb3 from './img/rcb3.png'
import rcb4 from './img/rcb4.png'
import rcb5 from './img/rcb5.jpg'
import logorc from './img/logo.png'
import panaderia from './cat/panaderia'
import charcuteria from './cat/charcuteria'
import carniceria from './cat/carniceria'
import restaurante from './cat/restaurante'
import mainp from './mainp'
import contactanos from './contact'
import { NavLink, Route, Switch, Link } from 'react-router-dom';



class App extends Component {
  constructor() {
    super()
    this.state = { apiResponse: '' }
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div className="App">

      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href='/' >R.C. BIONDI</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contacto</a>

              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li> */}
            </ul>
            <span className="navbar-text">
              Refrigeracion Comercial Biondi
      </span>
          </div>
        </nav>



        <Switch>
          <Route path="/" exact component={mainp} />
          <Route exact path="/panaderia" component={panaderia} />
          <Route exact path="/contact" component={contactanos} />
          <Route exact path="/charcuteria" component={charcuteria} />
          <Route exact path="/restaurante" component={restaurante} />
          <Route exact path="/carniceria" component={carniceria} />
        </Switch>



        <footer className="footer footer-expand-lg navbar-dark bg-primary">
          <p>REFRIGERACION COMERCIAL BIONDI </p>
        </footer>

        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    )
  }
}

export default App;
