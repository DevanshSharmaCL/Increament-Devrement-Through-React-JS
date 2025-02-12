import React,{useState} from 'react'

const App = () =>{
    const [count,setcount]=useState(0);
    
    const handleClickInc = () => {
        setcount(count+1);
    }
    const handleClickDec = () => {
        setcount(count-1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>

    )
}

export default App