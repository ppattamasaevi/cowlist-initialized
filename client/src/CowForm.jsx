import React from "react";
import axios from 'axios';

/*
USER STORY:

When the user types the name and description of a new cow they want to input into the database and presses the [Submit] button, the newly created cow's information should be displayed in the list from the previous step only after the data has been successfully written to the database.

// Allows user input that can re-set App's state on submit

*/

class CowForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cowName: '',
      cowDescription: ''
    }
  }

  handleFormChange(event) {
    if (event.target.name === 'name') {
      this.setState({
        cowName: event.target.value
      })
    } else {
      this.setState({
        cowDescription: event.target.value
      })
    }
  }

  saveNewCow(event) {
    event.preventDefault();
    const name = this.state.cowName;
    const description = this.state.cowDescription;

    const params = [name, description]
    axios.post('/cows', params)
      .then(() => {
        this.props.handleCowSubmit()
      })
      .catch((err) => {
        console.log('Error from server while saving new cow', err);
      });



    const allInputs = document.getElementsByClassName("inputs");

    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].value = '';
    }
  }

  render() {
    return (
      <div>
        <form>
          <h4>Add a new cow:</h4>
          <p>
            <input
              onChange={() => {
                this.handleFormChange(event)
              }}
              className="inputs"
              type="text"
              name="name"
              placeholder="Name for your new cow"
            ></input>
          </p>
          <p>
            <input
              onChange={() => {
                this.handleFormChange(event)
              }}
              className="inputs"
              type="text"
              name="description"
              placeholder="Description of your new cow"
            ></input>
          </p>
          <p><button onClick={()=>{this.saveNewCow(event)}}>Save a Cow</button></p>
        </form>
      </div>
    )
  }
}


export default CowForm;