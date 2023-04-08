import React from "react";
import ReactDOM from "react-dom/client";

// React Element 
const heading = (
    <h1 className="heading" tabIndex="5">
        Namaste React using JSX..!!
    </h1>
);

const elem = <span>Hello, </span>; // React element

// React Functional Component
const Title = () => (
    <h1 className="heading" tabIndex="5">            
        {elem}
        Namaste React using JSX.
    </h1>
)
// const heading = () => {
//     return <h1>Namaste React Functional Component</h1>
// };

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        {Title()}
        <Title />
        <Title></Title>
        <h2>Namaste React Functional Component..!!</h2>
    </div>
);

// JSX expression must have one parent
const HeadingComponent2 = () => (
    <div> 
        <div id="container">
        <Title />
        <h2>Namaste React Functional Component..!!</h2>
        </div>
        <div id="container2"></div>
    </div>
);

// React Fragement - behaves like an empty tag
const HeadingComponent3 = () => (
    <React.Fragment>
        <div id="container">
        <Title />
        <h2>Namaste React Functional Component..!!</h2>
        </div>
        <div id="container2"></div>
    </React.Fragment>
);

// React Fragement works with empty tag
const HeadingComponent4 = () => (
    <>
        <div id="container">
        <Title />
        <h2>Namaste React Functional Component..!!</h2>
        </div>
        <div id="container2"></div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // Render React Element
root.render(<HeadingComponent />); // Render React Component