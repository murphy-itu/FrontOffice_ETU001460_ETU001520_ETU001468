import { Component, useState } from "react";
import '../assets/css/Enchere.css';
import { useHistory, useParams } from "react-router-dom";
export default function Recherche () {

    const [password,setPassword] =useState("");
    const { idenchere } = useParams("idenchere");

    const submit = () =>{
        //   console.log(thijgds.state.email+" "+this.state.password);        
         //  console.log(this.state.email);
        /*   log.append("email",this.state.email);
           log.append("motdepasse",this.state.password);
           console.log(log.get("email"));*/
   
           fetch("https://encheremrrojog44-production-81c1.up.railway.app/utilisateur/liste",
           {
               method:"POST",
               headers : {"Content-Type":"application/json"},
             } ) 
             .then((res)=> res.json())
             .then((resultat)=>{
               console.log(resultat.token+" mandeha");            
              // setEnchere(resultat.data);
              sessionStorage.setItem('iduser',JSON.stringify(resultat.utilisateurid))
              sessionStorage.setItem('token',resultat.token);  
            //  navigate ("/insertMise/"+idenchere);
              
             });
             }
       
        return (
            <div class="container" >
                <div class="item item-cont" >                   
                </div>
                <div class="item" >
                    <div>                       
                    <input name=""/>
                    </div>
                </div>
            </div>
        )
    }
