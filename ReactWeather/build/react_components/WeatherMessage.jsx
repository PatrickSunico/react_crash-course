var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var weather = this.props.weather;
        return ( <h2> It 's Always Sunny in {weather}</h2>
        )
    }
});

module.exports = WeatherMessage;