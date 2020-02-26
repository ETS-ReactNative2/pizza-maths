import React from "react";
import "../styles/PizzaCard.css";
const PizzaCard = ({
  name,
  diameter,
  price,
  quantity,
  pizzaId,
  addButtonClick
}) => {
  let roundedDiameter;
  if (diameter % 1 === 0) {
    roundedDiameter = diameter;
  } else {
    roundedDiameter = Number(diameter).toFixed(1);
  }
  const area = (Math.PI * Math.pow(diameter / 2, 2)).toFixed(2);
  const circumference = (Math.PI * diameter).toFixed(2);
  return (
    <div className="PizzaCard" key={pizzaId}>
      <h4>Name: {name}</h4>
      <h4>Diameter (in inches): {roundedDiameter}</h4>
      <h4>Price per pizza: £{Number(price).toFixed(2)}</h4>
      <span>
        <p>Quantity: {quantity}</p>
        <button type="button" className="addButton" onClick={addButtonClick}>
          Add
        </button>
        <button
          type="button"
          className="removeButton"
          id={"removeButton for " + pizzaId}
        >
          Remove
        </button>
      </span>

      <h4>Total: £{Number(price * quantity).toFixed(2)}</h4>
      <p>
        Area: {area * quantity} in<sup>2</sup>
      </p>
      <p>Crust: {circumference * quantity} inches</p>
      <p>
        Area to crust (bigger means more area compared to crust):{" "}
        {((area * quantity) / (circumference * quantity)).toFixed(2)}
      </p>
      <p>
        Price per in<sup>2</sup>: £{(Number(price) / area).toFixed(2)}
      </p>
    </div>
  );
};

export default PizzaCard;
