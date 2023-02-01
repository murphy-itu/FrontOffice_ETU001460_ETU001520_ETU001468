class NameForm extends React.Component {
     constructor(props) { super(props); 
        this.state = {value: ''}; 
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        

    }
    faireRedirection() {
        let url = "maNouvelleURL";
        this.props.history.push(url);
      }

         handleChange(event) { this.setState({value: event.target.value}); }
          handleSubmit(event) { alert('Le nom a été soumis : ' + this.state.value); 
          event.preventDefault(); 
          this.faireRedirection.bind(this);
        }
           render() { return (
             <form onSubmit={this.handleSubmit}>
             <label> Nom : <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label> <input type="submit" value="Envoyer" /> 
              </form> ); 
              } 
            }