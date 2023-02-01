import { useState } from "react";
import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "./loading";
var loading=false;

export default function Login() {

 
 

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const { idenchere } = useParams();




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
const navigate = useNavigate();
    const submit = () =>{
     //   console.log(this.state.email+" "+this.state.password);        
      //  console.log(this.state.email);
     /*   log.append("email",this.state.email);
        log.append("motdepasse",this.state.password);
        console.log(log.get("email"));*/


        fetch("http://localhost:8082/utilisateur/login",
        {
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({"email":email,"motdepasse":password})
          } ) 
          .then((res)=> res.json())
          .then((resultat)=>{
            console.log(resultat.token+" mandeha");            
           // setEnchere(resultat.data);
           sessionStorage.setItem('iduser',JSON.stringify(resultat.id))
           sessionStorage.setItem('token',JSON.stringify(resultat.token));  
           navigate ("/insertMise/"+idenchere);
           
          });
          }
    
        return (
            <>
            {
                loading?(
                    <Loading/>
                ):(
                    <div>
                        <h3>Login </h3>
                        <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} name="email"/>
                        <input type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                        <button onClick={()=>submit()}>Login</button>
                    </div>
                )
            }</>
        )
    
}