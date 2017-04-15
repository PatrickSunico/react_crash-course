var React = require('react');
// Link and Index Link Component
// Use Index Link for the index page and  Link for the regulars links
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  }
});

module.exports = Nav;