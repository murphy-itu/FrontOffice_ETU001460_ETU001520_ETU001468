import { Component } from "react";
import '../assets/css/Enchere.css';
import { useHistory } from "react-router-dom";
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
                <div class="item item-cont" >
                    {
                        this.enchere.photos.map((photo,index) =>
                            <div class="item-it"><img key={index} src={"data:image/jpeg;base64,"+photo.base64} /></div> 
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
                        <p><a href={"/login/"+this.enchere.id}><button>rencherir</button></a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enchere;