import { Component } from "react";
import '../assets/css/Enchere.css';
import '../assets/assets/css/app.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/bootstrap/css/bootstrap.min.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/css/MUSA_input-helper.css';

import { Link, useHistory } from "react-router-dom";
class Enchere extends Component {
    constuctor() {
        this.faireRedirection = this.faireRedirection.bind(this);
      }
    
      faireRedirection() {
        let url = "maNouvelleURL";
        this.props.history.push(url);


      }
    enchere = this.props.enchere;  
    render() {
        return (
              
            <div class="container" >
                <div class="item item-it" >
                    {
                        this.enchere.photos.map((photo,index) =>
                           <img class="img-fluid" key={index} src={""+photo.base64} />
                        )
                    }
                </div>                
                <div class="item" >
                    <div>
                        <h1>{this.enchere.produit.nom}</h1>
                        <p>categorie : <strong>{this.enchere.produit.categorie.nom}</strong> </p>
                        <p>prix minimal : <strong>{this.enchere.prixminimal}</strong> </p>  
                        <p>date : <strong> {this.enchere.datetime} </strong> </p>
                        <p>{this.enchere.description}</p>
                        <p><Link to={"/login/"+this.enchere.id}><button>rencherir</button></Link></p>
                    </div>
                </div>
            </div>
            

        )
    }
}

export default Enchere;