var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var weatherInfo = {};
    var weather = this.refs.weather.value;
    if(weather.length > 0){
      // reset the form 
      this.refs.weather.value = '';
      // store the weather information into weatherInfo
      weatherInfo.weather = weather;
    }
    this.props.onNewWeatherData(weatherInfo);
  },
  render:function() {
    return(
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="weather" placeholder="Enter City"/>
          <button>Submit</button>
        </form>
    );
  }
});


module.exports = WeatherForm;