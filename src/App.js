//Whenever we building an component we name it in CAPITAL Lette

import { Fragment } from "react";

function App(){
    let a = 10;
    return(
        <Fragment>
        <h1>JSX stands for JavaScript Syntax Extension , and All this which is written here is JSX</h1>
        <p>we have to use fragments which are these "<> </>"</p>
        <p>now,to use JS in here we use this {a} </p>
        </Fragment>
        //fragments all u to return multiple elements from react components by allowing you to group a list of children wihout adding any extra nodes 
    )
}

export default App;

//2a. Now why are we exporting this
//2a. Beacuse we want to render all this in "index.js" 