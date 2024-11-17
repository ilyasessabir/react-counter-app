import React,{useState} from "react"
import './App.css';

export default function Counter(){

    //  Initialize state for count

    const [count,setCount] = useState(0);



    //  Function to increase the count
    const increase = ()=>{
        setCount(count+1)
    }

    //  Function to decrease the count
    const decrease = ()=>{
        setCount(count-1)
    }

    //  Function to reset the count to zero
    const reset  = ()=>{
        setCount(0)
    }



    //  Render the counter UI
    return(
    <div className="container">

        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={increase}>+</button>
    </div>
    )
}