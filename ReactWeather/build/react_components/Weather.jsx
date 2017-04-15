var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      weather: this.props.weather
    };
  },
  weatherData: function(weatherInfo) {
    this.setState(weatherInfo);
  },
  render: function(){
    // weather info to be transfered
    var weather = this.state.weather;
    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewWeatherData={this.weatherData}/>
        <WeatherMessage weather={weather}/>
      </div>
    );
  }
});

module.exports = Weather;