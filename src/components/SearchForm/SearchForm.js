import { Component } from "react"; 
import "./SearchForm.css"

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleFormChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleCancelSubmit(e) {
    e.preventDefault();
  }

  handleFormSubmit(){
    this.props.history.push('/search', {query:this.state.query})
  }

  render() {
    return (
      <div className="filter">
        <form onSubmit={(e) => this.handleCancelSubmit}>
          <input
            onChange={(e) => this.handleFormChange(e)}
            name="query"
            value={this.state.query}
          />
          <button onClick={()=>this.handleFormSubmit()}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
