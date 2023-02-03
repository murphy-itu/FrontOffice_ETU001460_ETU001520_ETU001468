import { useState } from "react";
import { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Loading } from "./loading";
import '../assets/assets/bootstrap/css/bootstrap.min.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/css/MUSA_input-helper-1.css';
import '../assets/assets/css/MUSA_input-helper.css';

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
     //   console.log(thijgds.state.email+" "+this.state.password);        
      //  console.log(this.state.email);
     /*   log.append("email",this.state.email);
        log.append("motdepasse",this.state.password);
        console.log(log.get("email"));*/

        fetch("https://encheremrrojog44-production-81c1.up.railway.app/utilisateur/login",
        {
            method:"POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify({"email":email,"motdepasse":password})
          } ) 
          .then((res)=> res.json())
          .then((resultat)=>{
            console.log(resultat.token+" mandeha");            
           // setEnchere(resultat.data);
           sessionStorage.setItem('iduser',JSON.stringify(resultat.utilisateurid))
           sessionStorage.setItem('token',resultat.token);  
           navigate ("/insertMise/"+idenchere);
           
          });
          }
    
        return (
            <>
            {
                loading?(
                    <Loading/>
                ):(
                    <div class="container">
                        <div class="item" ></div>
                        <div class="item" >
                            <h3> Login </h3>
                            <input type="text" class="form-control" value={email} onChange={(event)=>setEmail(event.target.value)} name="email"/>
                            <br />
                            <input class="form-control" type="password" name="password" value={password} onChange={(event)=>setPassword(event.target.value)} />
                            <br />
                            <a onClick={()=>submit()} class="btn btn-primary " >Login</a>
                        </div>
                    </div>
                )
            }</>
        )
    
}