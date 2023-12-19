import { useState } from "react";

function ShoppingItem(Props) {
    const [Amount, setCount] = useState(Props.Amount)
    let Stocky = ''

    function Decrease() {
        if (Amount >= 1) {
            setCount(amount => amount -1)
        }
    }

    if (Amount >= 1) {
        Stocky = <button id="Instock" onClick={Decrease}>only {Amount} Left</button>
    }
    else {
        Stocky = <button id="outOfStock">Out of Stock</button>
    }

    return(
        <div className="shoppingItem">
            <img src="http://via.placeholder.com/150/150" alt=""/>
            <h2>{Props.name}</h2>
            <p>{Props.price}</p>
               {Stocky}
        </div>
    )
}

export default ShoppingItem;