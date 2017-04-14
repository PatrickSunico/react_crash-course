// Greeter Message Component Green
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

// Greeter Form Component Blue 
// bind on onFormSubmit then render via the Greeter Component whilst having the data needed via the form
var GreeterForm = React.createClass({
    // bind onFormSubmit
    onFormSubmit: function (e){
        e.preventDefault();
        // set an empty object to be checked and stored with the name and message props
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

// DOM Method Render
// ReactDOM render initializes the class Greeter
// <Greeter name={name}/> is a prop set in our default property 
ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);

