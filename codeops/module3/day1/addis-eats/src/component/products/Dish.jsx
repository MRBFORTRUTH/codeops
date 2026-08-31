import { useState } from "react"
import "./Dish.css"

function Dish({ dish }) {
    const [count, setCount] = useState(0);

    function handleAdd() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="dish">
            <div>
                <img src={dish.image} alt={dish.name} />
            </div>
            <p>{dish.name}</p>
            <p>{dish.price}</p>
            <button onClick={handleAdd}>add</button>
            <p>{count}</p>
        </div>
    );
}

export default Dish;