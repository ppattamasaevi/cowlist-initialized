import React from "react";

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

  buildNewCow(event) {
    event.preventDefault();
    let newCow = {};
    newCow.name = this.state.cowName;
    newCow.description = this.state.cowDescription;
    this.props.handleCowSubmit(newCow);
  }

  render() {
    return (
      <div>
        <form>
          <h4>Create your own cow:</h4>
          <p>
            <input
              onChange={() => {
                this.handleFormChange(event)
              }}
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
              type="text"
              name="description"
              placeholder="Description of your new cow"
            ></input>
          </p>
          <p><button onClick={()=>{this.buildNewCow(event)}}>Submit New Cow</button></p>
        </form>
      </div>
    )
  }
}


export default CowForm;