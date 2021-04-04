import React from "react";
import ReactDOM from "react-dom";

import CowNamesList from './CowNamesList.jsx';
import CowDetails from './CowDetails.jsx';
import CowForm from './CowForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [{name: 'Buttercup', description: 'A buttery cow.'}, {name: 'Daisy', description: 'A flowery cow.'}],
      currentCow: null
    }
  }

  handleCowEntryClick(cow) {
    this.setState({
      currentCow: cow
    });
  }

  handleCowSubmit(cow) {
    let newCows = this.state.cows.slice();
    newCows.push(cow);

    this.setState({
      cows: newCows
    });
  }

  render() {
    return (
      <div>
        <div>
          <CowDetails currentCow={this.state.currentCow}/>
        </div>
        <nav>
          <CowForm handleCowSubmit={this.handleCowSubmit.bind(this)}/>
        </nav>
        <div>
          <CowNamesList
            cows={this.state.cows}
            handleCowEntryClick = {this.handleCowEntryClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);