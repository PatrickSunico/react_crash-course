var React = require('react');
// Greeter Form Component Blue 
// bind on onFormSubmit then render via the Greeter Component whilst having the data needed via the form
var GreeterForm = React.createClass({
    // bind onFormSubmit
    onFormSubmit: function (e){
        e.preventDefault();
        // set an empty object to be checbpackked and stored with the name and message props
        var updates = {};
        // refers to form value
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if(name.length > 0) {
            this.refs.name.value = '';
            // store value props to be passed
            updates.name = name;
        }

        if(message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }
        // stored values after condition processing 
        this.props.onNewData(updates);

    },
    render: function() {
        return(
        <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name" placeholder="Enter Name"/><br/>
            <textarea type="text" ref="message" placeholder="Enter Message"></textarea><br/>
            <button>Submit</button>
        </form>
        );
    }
});

module.exports = GreeterForm;