import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import five from './equipos/Panaderia/5.jpg'
import ocho from './equipos/Panaderia/8.jpg'
import nueve from './equipos/Panaderia/9.jpg'
import diez from './equipos/Panaderia/10.jpg'
import catorce from './equipos/Panaderia/14.jpg'
import sixteen from './equipos/Panaderia/16.jpg'
import twenty  from './equipos/Panaderia/20.jpg'
import twentyfour from './equipos/Panaderia/24.jpg'
import twentyfive  from './equipos/Panaderia/25.jpg'
import veintiseis from './equipos/Panaderia/26.jpg'
import veintisiete from './equipos/Panaderia/27.jpg'
import thirtyone from './equipos/Panaderia/31.jpg'

function panaderia() {

  return (
    <div className='App'>
      <h1>Equipos para Panaderias</h1>
    <img className='panimg' src={five}/>
    <img className='panimg' src={ocho}/>
    <img className='panimg' src={nueve}/>
    <img className='panimg' src={diez}/>
    <img className='panimg' src={catorce}/>
    <img className='panimg' src={sixteen}/>
    <img className='panimg' src={twenty}/>
    <img className='panimg' src={twentyfour}/>
    <img className='panimg' src={twentyfive}/>
    <img className='panimg' src={veintiseis}/>
    <img className='panimg' src={veintisiete}/>
    <img className='panimg' src={thirtyone}/>
    </div>
  );

}


export default panaderia;