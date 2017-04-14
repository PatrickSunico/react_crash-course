var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

// React Method createClass
// Greeter Class Red Greeter Component 
var Greeter = React.createClass({
    // if no props are explicitly assigned, get the Default props here
    // Default Props cannot be changed unless reassigned a new value
    // use getDefaultProps if you want static placeholder values 
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is a message'
        }; 
    },

    // getInitialState built in React function
    // use getInitialState if you want dynamic values 
    getInitialState: function() {
        return{
            // gets the props inside our default props
            name: this.props.name,
            message: this.props.message 
        };
    },

    // handleName from Greeter Form 
    // sent update object via greeter form
    handleData: function(updates) {
        this.setState(updates);
    },
    render: function(){
        // this.props values to be assigned 
        // if variable value is state data is defined via getInitialState function 
        // else if variable value is prop data it's defined as a default prop value or an explicit prop value
        var name = this.state.name;
        var message = this.state.message;
        return(
          <div class="greeter">
            {/*Nested Component + Props*/}
            <GreeterMessage name={name} message={message}/>
            {/*pass the props retrieved from the greeter form class*/}
            <GreeterForm onNewData={this.handleData}/>
          </div>  
        );
    }
});
module.exports = Greeter;

