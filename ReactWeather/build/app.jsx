// Greeter Message Component Green
var React = require('react');
var ReactDOM = require('react-dom');
// Main Class Container 
var React = require('react');
// Retrieving objects that are needed from the react-router property via es6 destructuing
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
// Pages 
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');



// DOM Method Render
// <Router> via the react-router library
ReactDOM.render(
    <Router history={hashHistory}>
        {/*render the Main Components along with it's children*/}
        <Route path="/" component={Main}>
            {/*Page URL Hash Specific*/}
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            {/*in Index /*/}
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

