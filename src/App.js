import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./Components/InputForm";
import InputForm from "./Components/InputForm";
import PizzaCard from "./Components/PizzaCard";
import PizzaCards from "./Components/PizzaCards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.state.pizzas.push(e);
    console.log(this.state);
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pizzarithmetic</h1>
          <h3>...best thing since sliced bread(pizza)</h3>
        </header>
        <InputForm
          updatePizzas={this.handleChange}
          pizzas={this.state.pizzas}
        />
        {/* <PizzaCard name="Test Pizza" diameter="20" price="7.80" /> */}
        <PizzaCards pizzas={this.state.pizzas} />
      </div>
    );
  }
}

export default App;