import React from "react";
import "./App.css";
import dog from './dog.jpg';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: "",
      color: "",
      breed: "",
      gender: "",
      weight: "",
      formComplete: false,
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  onColorChange = (event) => {
    this.setState({
      color: event.target.value,
    });
  };

  onBreedChange = (event) => {
    this.setState({
      breed: event.target.value,
    });
  };
  onGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  onWeightChange = (event) => {
    this.setState({
      weight: event.target.value,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      formComplete: true,
    });
    alert(
      `Your form has been submitted! We will contact you shortly to schedule a consultation for ${this.state.name}!`
    );
  };

  render() {
    return (
      <div className="App">
        {/* <div className='container'> */}
        <div className="left-div">
          <h1 className="big" >Pawtastic</h1>
          <p>
            We offer a range of preventative and wellness services - including
            exams, vaccinations, nutrition, and more. 
          </p>
          <h1>Wellness Exams</h1>
          <p>
            Preventative medicine is the key to keeping your pet happy and
            healthy. We believe that all pets should undergo a comprehensive
            wellness exam annually, which focuses on all body systems and helps
            us identify health conditions in your pet before they become
            difficult and expensive to treat. 
          </p>

          <img src={dog} alt="dog" />
        </div>

        <div className="right-div">
          <h1>Schedule a Consultation for Your Pup</h1>
          <form className="pup-form">
            <h2>Name</h2>
            <input
              type="name"
              placeholder="Yako"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <h2>Age</h2>
            <input
              type="number"
              value={this.state.age}
              onChange={this.onAgeChange}
            />
            <h2>Color</h2>
            <input
              type="text"
              value={this.state.color}
              onChange={this.onColorChange}
            />
            <h2>Breed</h2>
            <input
              type="text"
              value={this.state.breed}
              onChange={this.onBreedChange}
            />
            <h2>Weight</h2>
            <input
              type="name"
              placeholder="in lbs"
              value={this.state.weight}
              onChange={this.onWeightChange}
            />
            <h2>Gender</h2>
            <input
              type="text"
              value={this.state.gender}
              onChange={this.onGenderChange}
            />
            <button
              className="btn btn-primary btn-sm m-2"
              type="submit"
              onClick={this.submitForm}
            >
              Submit
            </button>
          </form>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
