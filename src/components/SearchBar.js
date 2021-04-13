import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  changed = (e) => {
    // console.log(e);  
    this.setState({ term: e.target.value });
  };

  submitted = (e) => {
    e.preventDefault(); 
    this.props.ontermsubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.submitted} className="ui form">
          <div className="field">
            <label> Search for any video </label>
            <input
              type="text"
              placeholder="Search anything..."
              value={this.state.term}
              onChange={this.changed}></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
