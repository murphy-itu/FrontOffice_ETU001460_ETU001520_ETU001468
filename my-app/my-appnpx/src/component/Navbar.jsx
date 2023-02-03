import { Component } from "react";
import '../assets/css/Enchere.css';

import '../assets/css/Enchere.css';
import '../assets/assets/css/app.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/bootstrap/css/bootstrap.min.css';
import '../assets/assets/css/Login-Form-Clean.css';
import '../assets/assets/css/MUSA_input-helper.css';
import '../assets/assets/bootstrap/js/bootstrap.min.js';

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
            <div class="container">
                <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
            <a class="navbar-brand" href="#">GEtit</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a  class="nav-link"  href="/">Log Out</a></li>
                        <li class="nav-item"><a  class="nav-link"  href={"/Recherche/"+this.enchere} >Recherche     </a></li>
                        <li class="nav-item"><a   class="nav-link"   href={"/Historique/"+this.enchere} >Historique     </a></li>
                        <li class="nav-item"><a  class="nav-link"  href={"/HistoriqueMise/"+this.enchere} >Mes encheres misés    </a></li>
                    </ul>
                </div>
           
        </nav>
                <div class="item item-cont" >                   
                </div>               
           </div>
        )
    }
}

export default Navbar;