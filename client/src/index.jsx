import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import CowNamesList from './CowNamesList.jsx';
import CowDetails from './CowDetails.jsx';
import CowForm from './CowForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cows: [],
      currentCow: null
    }
  }

  handleCowEntryClick(cow) {
    this.setState({
      currentCow: cow
    });
  }

  componentDidMount() {
    this.getAllCows();
  }

  getAllCows() {
    axios.get('/cows')
      .then(({data}) => {
        console.log('data from db', data);
        this.setState({
          cows: data[0]
        });
      })
  }

  handleCowSubmit() {
    this.getAllCows();
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