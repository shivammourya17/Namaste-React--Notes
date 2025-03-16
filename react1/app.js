/*

<div id="parent">
    <div id="child">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
    <div id="child2">
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
</div>
*/

//creating this structure nested with arrays



const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[   
        React.createElement("h1",{},"i am h1"),
        React.createElement("h2",{},"i am h2"),
    ]),
    React.createElement("div",{id:"child2"},[   
        React.createElement("h1",{},"i am h1"),
        React.createElement("h2",{},"i am h2"),
    ]),

]);
// printing hello world from react 
// const heading = React.createElement
// (
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "hello world from react"
// );

// console.log(heading); //object
console.log(parent); // object
//object is an react element

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);
root.render(parent);
