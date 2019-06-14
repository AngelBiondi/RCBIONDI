import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import rcb1 from './rcb1.png'
import rcb2 from './rcb2.png'
import rcb3 from './rcb3.png'
import rcb4 from './rcb4.png'
import rcb5 from './rcb5.jpg'
import logorc from './logo.png'
import panaderia from './panaderia'
import charcuteria from './charcuteria'
import supermerca from './supermerca'
import restaurante from './restaurante'
import App from './App'
import { NavLink , Route , Switch, Link} from 'react-router-dom';


function mainp() {
    return(

    <div className="App">
          <header className="App-header">
        <img className="fp" src={rcb5} />

      </header>
 <section className="descrip">
        <img className="sp" src={logorc} />   <h1 className='textoo'>QUIENES SOMOS</h1>  <p className="textoo"> <br />
          Somos una Empresa Líder en la Venta de equipos para el Comercio,
          Distribuimos equipos de Refrigeración Comercial, equipos de Exhibición Comercial, Vitrinas, Equipos para Panaderías y Charcuterías, Neveras, Refrigeradores, Cavas, Hornos para Panadería y para Pizza, Rebanadoras Charcuteras, Molinos de Carne, Calentadores, Cocinas Industriales, Licuadoras Industriales, Balanzas Comerciales y demás Equipos para el Comercio.
          También ofrecemos un amplio stock de repuestos y consumibles para Equipos Comerciales y Refrigeración.

Estamos ubicados en el corazón de la ciudad.<br /> Distribuimos dentro de todo el territorio nacional.
 </p>

      </section>
      <hr />
    <section className='sections'>
 
    <p className='texto'>
      <div className='card-deck'>
        <div className="card" stylesheet="width: 18rem;">
          <img src={logorc} className="card-img-top" alt="..." />
<Link to='/panaderia' >Panaderia</Link>

          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={logorc} className="card-img-top" alt="..." />
          <NavLink to='/charcuteria'> Charcuteria</NavLink>

          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={logorc} className="card-img-top" alt="..." />
          <NavLink to='/restaurante' >Restaurantes</NavLink>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={logorc} className="card-img-top" alt="..." />
          <NavLink to='/supermerca' >Supermercados</NavLink>
         
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </p>
  </section>

  <hr />

  <section className="mapouter">
    <div className="gmap_canvas">
      <iframe width="600" height="500" className="gmap_canvas" src="https://maps.google.com/maps?q=refrigeracion%20comercial%20biondi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
    </div>
  </section>

  <section className="contacto">
    <p className="texto">
      CONTACTO:
 <li>0414-3525221</li>
      <li>rcbiondi@gmail.com</li>

      <br />

      HORARIOS DE ATENCION:
<li>Lunes-Viernes: 8:00AM-12:00M -- 2:00PM-5:00PM</li>
      <li>Sabado y Domingo: CERRADO</li>

      <br />

      ENCUENTRANOS: <br />
      Avenida Venezuela esquina Calle 40, Edificio Metropolitan, PB
      Sector Centro, Sentido Este - Oeste
      Barquisimeto 3001, Lara
      Venezuela
      <br />

      <a href="https://www.google.com/maps/place/Refrigeraci%C3%B3n+Comercial+Biondi/@10.0721212,-69.3337968,17z/data=!3m1!4b1!4m5!3m4!1s0x8e876772cdf5b0e3:0x1043b2661ce369d2!8m2!3d10.0721212!4d-69.3316081" className="btn btn-dark btn-lg active" role="button" aria-pressed="true">COMO LLEGAR</a>
    </p>
  </section>
    </div>
    );
}
export default mainp;