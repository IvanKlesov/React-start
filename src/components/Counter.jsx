import React, {useState} from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0);

    function increment() {
        setCounter(count + 1)
    }

    function decrement() {
        setCounter(count - 1)
    }    

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter;