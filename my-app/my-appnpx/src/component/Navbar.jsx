import { Component } from "react";
import '../assets/css/Enchere.css';
class Navbar extends Component {
    constuctor() {
        this.faireRedirection = this.faireRedirection.bind(this);
      }
    
      faireRedirection() {
        let url = "maNouvelleURL";
        this.props.history.push(url);
  /*      <p><link to={"/login/"+this.enchere}><button>Recherche</button></link></p>
        <p><link to={"/login/"+this.utilisateur}><button>Historique</button></link></p>
*/
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
                    <p><a href={"/Recherche/"+this.enchere+"/"+this.utilisateur} >Recherche</a></p>        
                    <p><a href={"/Recherche/"+this.enchere} >Historique</a></p>        
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;