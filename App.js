import React from "react";
import ReactDOM from "react-dom/client";

// React Element => ReactElement- JS Object =>  HTMLElement(Render)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React..!!");
console.log(heading);

// JSX - HTML-like or XML-like syntax
// JSX => Babel transpiled it to React.createElement => ReactElement - JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading" className="heading">Namaste React using JSX..!!</h1>;
console.log(jsxHeading);

// JSX (transpiled before it reaches to the JS) -> PARCEL => BABEL

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);