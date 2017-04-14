var React = require('react');

// Child Component
var Nav = require('Navigation');

// Main Component
var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {/*the children that Inherits from the Main Class Component*/}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;