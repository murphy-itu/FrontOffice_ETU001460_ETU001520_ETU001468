import { Component, useState,useEffect } from "react";
import '../assets/css/Enchere.css';
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./Navbar";

import '../assets/css/Enchere.css';
import '../assets/assets/css/app.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/bootstrap/css/bootstrap.min.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/css/MUSA_input-helper.css';

export default function Historique () {

    const [historique,setHistorique] =useState([]);
    const { idenchere } = useParams("idenchere");
    const utilisateur = sessionStorage.getItem('iduser');
    const submit = () =>{
        //   console.log(thijgds.state.email+" "+this.state.password);        
         //  console.log(this.state.email);
        /*   log.append("email",this.state.email);
           log.append("motdepasse",this.state.password);
           console.log(log.get("email"));*/
           console.log("hhh");
           fetch("https://encheremrrojog44-production-81c1.up.railway.app/utilisateur/"+utilisateur+"/historique",
           {
            
               method:"GET",
               headers : { 'Accept':'application/json',
               'Access-Control-Allow-Origin': '*',
               'Content-Type':'application/json',
               'token':`${sessionStorage.getItem('token').toString()}`},
                
             } ) 
             .then((res)=> res.json())
             .then((resultat)=>{

                console.log(resultat)
                console.log(resultat.data);
                setHistorique(resultat.data);
            //  navigate ("/insertMise/"+idenchere);              
             });
             }
             useEffect(()=>{
                submit();
                console.log("shhhh");                
                console.log(historique+" iooo");
                                
            },[])
        
       
        return (
            
            <div> <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-light navbar-custom">
            <a class="navbar-brand" href="#">GEtit</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="/">Log Out</a></li>
                    </ul>
                </div>
           
        </nav>
                  <section>
    <div class="bg-circle-1 bg-circle">
        <div class="bg-circle-3 bg-circle"></div>
    </div>
    <header class="text-center text-white pulse animated masthead">
        <div class="masthead-content">
                <h1 class="masthead-heading mb-0"></h1>
                <h2 class="masthead-subheading mb-0">Les encheres en cours</h2>
        </div>
        <div class="bg-circle-2 bg-circle"></div>
    </header> 
    
               <Navbar enchere={idenchere} utilisateur={sessionStorage.getItem('iduser')}/>


                { 
                historique.map((h)=>    <div class="container" >
            <div class="item item-cont" >
                </div>
              <div class="item" ><div>   
              <p> <strong>{h.produit.nom}</strong> </p>                                                            
                        <p> <strong>{h.description}</strong> </p> 
                        <p>Categorie : <strong>{h.prixminimal}</strong> </p>                                           
                        <p> d'une durree de : <strong>{h.durree}</strong> </p> 
                        <p> Commencé le: <strong>{h.datetime}</strong> </p>                                           
                        <p> <strong>{h.utilisateur.nom}</strong> </p>                         
                        <p> <strong>{h.etat==0 ?(" Fini "
                ):(h.etat==1 &&( " En cours "))}</strong> </p> 
                 </div>  
                 </div> 
            </div>
                 )}</section></div> 
        )
    }
