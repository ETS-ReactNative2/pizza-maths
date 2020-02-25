import React, { Component } from "react";
import "../styles/InputForm.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: "",
      diameterInput: "",
      priceInput: null
    };
  }
  handleInput = input => {
    input.preventDefault();
    let inchesVal = this.state.diameterInput;
    if (document.getElementById("cm").checked) {
      inchesVal = this.state.diameterInput / 2.54;
    }
    const newPizza = {
      name: this.state.nameInput,
      diameter: inchesVal,
      price: this.state.priceInput,
      quantity: 1
    };
    this.props.updatePizzas(newPizza);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleInput}>
          <div>
            <div class="pizzaOption">
              <span class="inputOptions">
                <p>Name</p>
                <input
                  type="text"
                  required
                  name="pizzaName"
                  onChange={event =>
                    this.setState({ nameInput: event.target.value })
                  }
                />
              </span>
            </div>
            <div class="pizzaOption">
              <span class="inputOptions">
                <p>Diameter</p>
                <input
                  type="number"
                  required
                  name="diameter"
                  onChange={event =>
                    this.setState({ diameterInput: event.target.value })
                  }
                />
                <input type="radio" id="cm" name="units" value="cm" required />
                <label htmlFor="cm">cm</label>
                <input type="radio" id="in" name="units" value="in" required />
                <label htmlFor="in">in</label>
              </span>
            </div>
            <div class="pizzaOption">
              <span class="inputOptions">
                <p>Price (£)</p>
                <input
                  type="number"
                  required
                  name="price"
                  step="0.01"
                  onChange={event =>
                    this.setState({ priceInput: event.target.value })
                  }
                />
              </span>
            </div>
          </div>

          <button type="submit" label="Submit">
            I'm hungry!
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
