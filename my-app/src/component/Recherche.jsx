import { Component } from "react";
import '../assets/css/Enchere.css';

class Recherche extends Component {

    categorie = this.props.categorie;  
    
    render() {
        return (
            <div class="container" >
                <div class="item item-cont" >
                    <input type="text" name="Prixminimal"/>
                    Date : <input type="date" name="datedebut"/>
                    Categorie: <select name="idcategorie">
                    {
                        this.categorie.map((nom,index) =>
                            <option value={nom.id}>{nom.nom}</option>
                        )
                    } 
                    
                    </select>
                    Status: <select name="etat">
                   
                            <option value="1">En cours</option>
                            <option value="0">Fini</option>                    
                    </select>                    
                </div>
                <div class="item" >
                    <div>
                        <h1>{this.enchere.produit.nom}</h1>
                        <p>categorie : <strong>{this.enchere.produit.categorie.nom}</strong> </p>
                        <p>prix minimal : <strong>{this.enchere.prixminimal}</strong> </p>  
                        <p>date : <strong> {this.enchere.datetime} </strong> </p>
                        <p>{this.enchere.description}</p>
                        <p><a href=""><button onClick={()=>recherche()}>rencherir</button></a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recherche;


