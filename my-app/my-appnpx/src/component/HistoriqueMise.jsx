import { Component, useState,useEffect } from "react";
import '../assets/css/Enchere.css';
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./Navbar";
export default function HistoriqueMise () {

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
           fetch("https://encheremrrojog44-production-81c1.up.railway.app/Enchere/"+utilisateur+"/details",
           {
            
               method:"GET",
               headers : { //'Accept':'application/json',
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
               <h1>Historique des encheres que j'ai misé </h1>
               <Navbar enchere={idenchere} utilisateur={sessionStorage.getItem('iduser')}/>

                { 
                historique.map((h)=>    <div class="container" >
            <div class="item item-cont" >
                </div>
              <div class="item" ><div>   
              <p> <strong>{h.montant} AR</strong> </p>                                                            
                        <p> <strong>{h.datetime}</strong> </p> 
                        <p>Categorie : <strong>{h.enchere.produit.categorie.nom}</strong> </p>                                           
                        <p>  {h.enchere.description} </p> 
                        <p> Commencé le: <strong>{h.datetime}</strong> </p>                                           
                        <p>Votre situation :  <strong>{h.etat==0 ?(" Depassé "
                ):(h.etat==1 &&( " En tête "))}</strong> </p> 
                <p> Staut de l'Enchere : <strong>{h.enchere.etat==0 ?("Enchere Fini "
                ):(h.etat==1 &&( "Enchere En cours "))}</strong> </p> 
                 </div>  
                 </div> 
            </div>
                 )}</div> 
        )
    }
