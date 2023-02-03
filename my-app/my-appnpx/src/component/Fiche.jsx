import { Component } from "react";
import { useHistory } from "react-router-dom";
class Fiche extends Component {
    ficheenchere = this.props.ficheenchere;  
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>montant</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>{this.ficheenchere.utilisateur.nom}</td>
                        <td>{this.ficheenchere.utilisateur.Prenom}</td>
                        <td>{this.ficheenchere.montant}</td>
                        <td>
                            {
                                (this.ficheenchere.etat == 1)?("en-tête"):("depassé")
                            }
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Fiche;