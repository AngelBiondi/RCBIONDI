import 'bootstrap/js/dist/util.js';
import 'bootstrap/js/dist/dropdown';
import 'boostrap/js/dist/carousel';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import rcb1 from './rcb1.png'
import rcb2 from './rcb2.png'
import rcb3 from './rcb3.png'
import rcb4 from './rcb4.png'
import rcb5 from './rcb5.jpg'
import logorc from './logo.png'
import pana from './pana.jpg'
import rest from './rest.jpg'
import carne from './carne.jpg'
import charcu from './charcu.jpg'
import panaderia from './panaderia'
import charcuteria from './charcuteria'
import supermerca from './carniceria'
import restaurante from './restaurante'
import App from './App'
import { NavLink , Route , Switch, Link} from 'react-router-dom';


function mainp() {
    
    const script2 = document.createElement("script");

    script2.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
    script2.async = true;

    document.body.appendChild(script2);

    const script = document.createElement("script");

    script.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/umd/util.js";
    script.async = true;

    document.body.appendChild(script);

// no es eso

    return(
        
    <div className="App">
         <script src="/util.js"></script>
          <header className="App-header">
          <div className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={rcb1} className="d-block w-100" />
  </div>
    <div className="carousel-item">
      <img src={rcb2} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={rcb3} className="d-block w-100" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
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
 
    <div className='texto'>
      <div className='card-deck'>
        <div className="card" stylesheet="width: 18rem;">
          <img src={pana} className="card-img-top" alt="..." />
<NavLink to='/panaderia' className='navli'>Panaderia</NavLink>
  <hr/>
          <div className="card-body">
            <p className="card-text">Lista de Equipos disponibles para Panaderia hola</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={charcu} className="card-img-top" alt="..." />
          <NavLink to='/charcuteria' className='navli'> Charcuteria</NavLink>
            <hr/>
          <div className="card-body">
            <p className="card-text">Lista de Equipos disponibles para Charcuteria</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={rest} className="card-img-top" alt="..." />
          <NavLink to='/restaurante' className='navli'>Restaurantes</NavLink> <hr/>
          <div className="card-body">
            <p className="card-text">Lista de Equipos disponibles para Restaurantes</p>
          </div>
        </div>

        <div className="card" stylesheet="width: 18rem;">
          <img src={carne} className="card-img-top" alt="..." />
          <NavLink to='/carniceria' className='navli'>Carniceria</NavLink>  <hr/>
         
          <div className="card-body">
            <p className="card-text">Lista de Equipos disponibles para Carniceria</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <hr />

  <section className="mapouter">
    <div className="gmap_canvas">
      <iframe width="600" height="500" className="gmap_canvas" src="https://maps.google.com/maps?q=refrigeracion%20comercial%20biondi&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" />
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
      Avenida Venezuela esquina Calle 40, Edificio Metropolitan, Planta baja'
      Sector Centro, Sentido Este - Oeste
      Barquisimeto 3001, Lara
      Venezuela
      <br />

      {/* ESPERANDO POR FOTOS (LA EMPRESA DEBE ENVIARMELAS) PARA TERMINAR FRONT END */}

      <a href="https://www.google.com/maps/place/Refrigeraci%C3%B3n+Comercial+Biondi/@10.0721212,-69.3337968,17z/data=!3m1!4b1!4m5!3m4!1s0x8e876772cdf5b0e3:0x1043b2661ce369d2!8m2!3d10.0721212!4d-69.3316081" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">COMO LLEGAR</a>
    </p>
  </section>
  <script src="/util.js"></script>
    </div>

    );
}
export default mainp;