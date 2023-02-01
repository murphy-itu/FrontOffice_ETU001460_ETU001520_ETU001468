import { Component } from "react";
import '../assets/css/Enchere.css';
import { useHistory } from "react-router-dom";
class Recherche extends Component {
    constuctor() {
        this.faireRedirection = this.faireRedirection.bind(this);
      }
    
      faireRedirection() {
        let url = "maNouvelleURL";
        this.props.history.push(url);
      }
    enchere = this.props.enchere;  
    utilisateur = this.props.utilisateur;
    render() {
        return (
            <div class="container" >
                <div class="item item-cont" >                   
                </div>
                <div class="item" >
                    <div>                       
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Recherche;