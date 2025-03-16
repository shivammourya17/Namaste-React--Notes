import React from "react";
import ReactDOM from "react-dom/client";

//jsx-it s not same as react
// -> html like or xml syntax
// -> transpiled before it reaches the js engine
// ->  bable transplied it to react.createelement => reactelement-js object => htmlelement(render)

//react element
//jsx
// const jsxHeading =(
// <h1 className="head"> Namaste react using Jsx</h1>
// );

//functional based component
// it is a just a piece of js code with jsx code

const elem= <span>i am sakkskk</span>

const Title = () =>
{
   return(
    
   <h1>i am panda</h1>
)};

const titlee = 
(
    <h1>
        {elem}
        i am sak
    </h1>
);

 const numbers=2000;
//componmet composition 
//nesting of title is component compsotion
const HeadingComponent = () =>
{

    
    return(
        <div>
           <Title />
           <h3>{numbers}</h3>
           <h4>{titlee}</h4>
            <h5>i am her2o</h5>
        </div>
    
)};


const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(jsxHeading); //react element
root.render(<HeadingComponent/>) // functional based compoenent