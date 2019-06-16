import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

function panaderia() {

  return (
    <div className='App'>
      <h1>Equipos para Panaderias</h1>
     <div className="listish">

     <ul className='list-group list-group-flush'>

        <h2>Mobiliario</h2>
        
        <li className='list-group-item'>Mostrador pasta seca </li>
        <li className='list-group-item'>Mostrador charcutero </li>
        <li className='list-group-item'>Mostrador pasta fría </li>
        <li className='list-group-item'>Retromostrador</li>
        <li className='list-group-item'>Retromostrador panero</li>
        <li className='list-group-item'>Vitrina refrigerada</li>
        <li className='list-group-item'>Mueble para máquina de café</li>
        <li className='list-group-item'>Mueble de caja</li>
        <li className='list-group-item'>Máquina de café express</li>
        <li className='list-group-item'>Molino para café</li>
        <li className='list-group-item'>Rebanadora</li>
        <li className='list-group-item'>Termoselladora</li>
        <li className='list-group-item'>Balanza electrónica</li>
        <li className='list-group-item'>Balanza electrónica con etiquetadora</li>
     </ul>
     
     <ul className='list-group list-group-flush'>
        <h2>Maquinaria</h2>
        <li className='list-group-item'>Amasadora </li>
        <li className='list-group-item'>Sobadora </li>
        <li className='list-group-item'>Batidora</li>
        <li className='list-group-item'>Laminadora</li>
        <li className='list-group-item'>Horno para pan </li>
        <li className='list-group-item'>Cava sartenera</li>
        <li className='list-group-item'>Cava cuarto</li>
     </ul>
     </div>
    </div>
  );

}


export default panaderia;