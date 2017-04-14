// Greeter Message Component Green
var React = require('react');
var ReactDOM = require('react-dom');
// Main Class Container 
var React = require('react');

var objOne = {
    name: 'Patrick',
    location: 'Philadelphia'
};

var objTwo = {
    age:25,
    // spread operator adds values from another object
    ...objOne
};

console.log(objTwo);



// DOM Method Render
// ReactDOM render initializes the class Greeter
// <Greeter name={name}/> is a prop set in our default property 
ReactDOM.render(
    <h1>Boilerplate App</h1>,
    document.getElementById('app')
);

