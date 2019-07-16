import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';



 function carniceria (){
         var express = require('express');
        var MongoClient = require('mongodb');

        MongoClient.MongoClient.connect('mongodb://localhost:27017/rcbiondi');

        return (
<div>

        <h2>Equipos para Carniceria</h2>
       



</div>
        );
    
} 
export default carniceria;


