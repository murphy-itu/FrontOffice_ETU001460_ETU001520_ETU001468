import { useEffect, useState } from "react";
import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "./loading"; 
import Navbar from "./Navbar";
import Fiche from "./Fiche";
var loading=false;

export default function InsertMise() {

 
 

    const [mise,setMise] =useState("");
    const [id,setId] =useState("");        
    const [etat,setEtat] =useState("");        
    const { idenchere } = useParams();
    const [detail,setDetail] = useState([]);

    const navigate = useNavigate()

  /*  changeHandle=(event)=>{
        if(event.target.name=="email"){
            this.setState({
                email:event.target.value
            });
        }
        if(event.target.name="password"){
            this.setState({
                password:event.target.value
            });
        }
    }

*/
const insertMise = () =>{
    //   console.log(this.state.email+" "+this.state.password);        
     //  console.log(this.state.email);
    /*   log.append("email",this.state.email);
       log.append("motdepasse",this.state.password);
       console.log(log.get("email"));*/
console.log(mise+" - "+sessionStorage.getItem('token'));
        console.log(sessionStorage.getItem('iduser'));
       fetch("https://encheremrrojog44-production-81c1.up.railway.app/Enchere/rencherir/",
       {
           method:"POST",
           headers:  { 
               'Accept':'application/json',
               'Access-Control-Allow-Origin': '*',
               'Content-Type':'application/json',
               'token':`${sessionStorage.getItem('token').toString()}`},
            
            body: JSON.stringify({
                "montant":mise,
                "utilisateur":{
                    "id":sessionStorage.getItem('iduser')
                },
                "idenchere":idenchere,
                "etat":1
                })
         } ) 
         .then((res)=> res.json())
         .then((resultat)=>{
           console.log(resultat+" mandeha"); 
           setEnchere(resultat);           
          // setEnchere(resultat.data);
         });
         }        



         
const DetailsEnchere = () =>{
    //   console.log(this.state.email+" "+this.state.password);        
     //  console.log(this.state.email);
    /*   log.append("email",this.state.email);
       log.append("motdepasse",this.state.password);
       console.log(log.get("email"));*/
        console.log(mise+" - "+sessionStorage.getItem('token'));
        console.log(sessionStorage.getItem('iduser'));
       fetch("https://encheremrrojog44-production-81c1.up.railway.app/Enchere/Enchere/"+idenchere,
       {
           method:"GET",
           headers:  { 
            'Accept':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json',
            'token':`${sessionStorage.getItem('token').toString()}`}
         } ) 
         .then((res)=> res.json())
         .then((resultat)=>{
            console.log(resultat.ficheenchere);
           setDetail(resultat.ficheenchere);
         });
         }        
const [enchere,setEnchere] = useState([]);
  /*  const submit = () =>{
     //   console.log(this.state.email+" "+this.state.password);        
      //  console.log(this.state.email);
     /*   log.append("email",this.state.email);
        log.append("motdepasse",this.state.password);
        console.log(log.get("email"));


        fetch("http://localhost:8082/Enchere/"+idenchere+"/details",
        {
            method:"GET",
            headers : {"Content-Type":"application/json",
                        "token":sessionStorage.getItem('token')
                    }
          } ) 
          .then((res)=> res.json())
          .then((resultat)=>{
            console.log(resultat+" mandeha"); 
            setEnchere(resultat);           
           // setEnchere(resultat.data);
          });
          }*/
          useEffect(()=>{
            console.log("shhhh");
            console.log(sessionStorage.getItem('token'));
            console.log(enchere+" iooo");
            setId(sessionStorage.getItem("iduser"));
            setEtat(1);
            DetailsEnchere();
        },[])
    
        return (<div>
                {
                    detail.map((d,index) => {
                        return (<Fiche key={index} ficheenchere={d}/>)
                    })
                }
                <Navbar enchere={idenchere} utilisateur={sessionStorage.getItem('iduser')}/>
                 <h3>Somme : </h3>
                 <input type="text" value={mise} onChange={(event)=>setMise(event.target.value)} name="email"/>                 
                 <button onClick={()=>insertMise()}>Encherir</button>
             
            </div>
        )
    
}