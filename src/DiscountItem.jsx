import { useState } from "react";

function discountItem(Props) {
  const [Amount, setCount] = useState(Props.Amount);
  let Stocky = "";

  function Decrease() {
    if (Amount >= 1) {
      setCount((amount) => amount - 1);
    }
  }

  if (Amount >= 1) {
    Stocky = (
      <button id="Instock" onClick={Decrease}>
        only {Amount} Left
      </button>
    );
  } else {
    Stocky = <button id="outOfStock">Out of Stock</button>;
  }

  return (
    <div className="discountItem">
      <img src="https://placekitten.com/350/350" alt="" />
      <p>{Props.name}</p>
      <p className="price">{Props.price}</p>
      {Stocky}
    </div>
  );
}

export default discountItem;
