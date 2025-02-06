import React from "react";        //we importing react libraries and component from react itself
import ReactDOM from 'react-dom/client';    //we importing react dom which is rendering the react component in out broswer
import App from "./App";  //2a.now by importing we can use the component of "App.js" inside "index.js"

const root = ReactDOM.createRoot(document.getElementById("root"));// from createRoot method we are craeting new root , 1. this root will render in "Public"=>"Index.HTML"

root.render(
  //for examples
  // <h1>hello world </h1>,
  <React.StrictMode> 
    <App/>
  </React.StrictMode>
)

//"root.render" allows us to render whatever we want to render on the screen 
//"React.StrictMode" is like a developer mode feature , which help in identifying the potential issue which might come while building app
//its note cumpulsory to use it , but its a good practice to use it .
//2a. but to make it work look at the line 11 , <App/> now this is what,which gonna render the mssg from App.js into the Index.js , and u can repeat it as many as time u want , more like reuse