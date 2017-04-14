var React = require('react');
var GreeterMessage = React.createClass({
    render:function() {
        // Once called via a nested component all values from within the parent class can be accessed by this component
        var name = this.props.name;
        var message = this.props.message;
        return(
            <div>
                <h1>Hello {name}!</h1>
                <p>paragraph message: {message}</p>
            </div>
        );
    }
});

module.exports = GreeterMessage;
