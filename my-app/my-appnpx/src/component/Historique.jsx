import { Component, useState,useEffect } from "react";
import '../assets/css/Enchere.css';
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./Navbar";
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
           fetch("http://localhost:8082/utilisateur/"+utilisateur+"/historique",
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
            <div>
               <h1>Historique de mes encheres </h1>
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
                 )}</div> 
        )
    }
