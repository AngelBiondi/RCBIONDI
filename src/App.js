import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import rcb1 from './rcb1.png'
import rcb2 from './rcb2.png'
import rcb3 from './rcb3.png'
import rcb4 from './rcb4.png'
import rcb5 from './rcb5.jpg'
import logorc from './logo.png'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">R.C. BIONDI</a>
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
      <header className="App-header">
        <img className="fp" src={rcb5} />

      </header>
      <section className="descrip">
        <p> <img className="sp" src={logorc} />   QUIENES SOMOS <br />
          Somos una Empresa Líder en la Venta de equipos para el Comercio,
          Distribuimos equipos de Refrigeración Comercial, equipos de Exhibición Comercial, Vitrinas, Equipos para Panaderías y Charcuterías, Neveras, Refrigeradores, Cavas, Hornos para Panadería y para Pizza, Rebanadoras Charcuteras, Molinos de Carne, Calentadores, Cocinas Industriales, Licuadoras Industriales, Balanzas Comerciales y demás Equipos para el Comercio.
          También ofrecemos un amplio stock de repuestos y consumibles para Equipos Comerciales y Refrigeración.
          
Estamos ubicados en el corazón de la ciudad.<br /> Distribuimos dentro de todo el territorio nacional.
 </p>

      </section>

      <section className='sections'> 

         
          <div className="card" stylesheet="width: 18rem;">
            <img src={logorc} className="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Panadería
</button>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div classNameName="card" stylesheet="width: 18rem;">
            <img src={logorc} className="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Charcuterías
</button>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" stylesheet="width: 18rem;">
            <img src={logorc} className="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
              Restaurantes
</button>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>

          <div className="card" stylesheet="width: 18rem;">
            <img src={logorc} className="card-img-top" alt="..." />
            <button type="button" className="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
             SuperMercados
</button>
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        

      </section>




    </div>
  );
}

export default App;
