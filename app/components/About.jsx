var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://github.com/matteplus/ReactWeather">Github repo</a> - This the source code of the project
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name
        </li>
        <li>
          <a href="http://foundation.zurb.com/sites/docs/">Foundation</a> - I used Foundation Sites to style the app
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
