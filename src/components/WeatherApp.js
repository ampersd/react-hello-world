import React from 'react';
import './WeatherApp.css';
import xhr from 'xhr';
import Plot from './Plot.js';


// App.js
class WeatherApp extends React.Component {
    // when saving anything to our local state, we have to predefine it
    state = {
        location: '',
        data: {},
        dates: [],
        temps: [],
        selected: {
            date: '',
            temp: null
        }
    };

    onPlotClick = (data) => {
        if (data.points) {
            this.setState({
                selected: {
                date: data.points[0].x,
                temp: data.points[0].y
                }
            });
        }
    };

    fetchData = (evt) => {
        evt.preventDefault();
        console.log('fetch data for', this.state.location);
        var location = encodeURIComponent(this.state.location);

        var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
        var urlSuffix = '&APPID=4993311051f75a9e6b655d22e4390bd1&units=metric';
        var url = urlPrefix + location + urlSuffix;
        
        var self = this;

        xhr({
            url: url
        }, function (err, data) {
            var body = JSON.parse(data.body);
            var list = body.list;
            var dates = [];
            var temps = [];
            for (var i = 0; i < list.length; i++) {
                dates.push(list[i].dt);
                temps.push(list[i].main.temp);
            }

            self.setState({
                data: body,
                dates: dates,
                temps: temps,
                selected: {
                    date: '',
                    temp: null
                }
            })
        });
    };

    changeLocation = (evt) => {
        this.setState({
            location: evt.target.value
        });
    };

    render() {
        var currentTemp = 'not loaded yet';
        if (this.state.data.list) {
            currentTemp = this.state.data.list[0].main.temp;
        }

        return (
        <div>
            <h1>Weather</h1>
            <form onSubmit={this.fetchData}>
                <label>I want to know the weather for
                    <input 
                        placeholder={"City, Country"}
                        type="text"
                        value={this.state.location}
                        onChange={this.changeLocation} 
                    />
                </label>
            </form>
            {(this.state.data.list) ? (
            <div className="wrapper">
                <p className="temp-wrapper">
                    <span className="temp">{ this.state.selected.temp ? this.state.selected.temp : currentTemp }</span>
                    <span className="temp-symbol">°C</span>
                    <span className="temp-date">
                        { this.state.selected.temp ? this.state.selected.date : ''}
                    </span>
                </p>
                <Plot 
                    xData={this.state.dates}
                    yData={this.state.temps}
                    onPlotClick={this.onPlotClick}
                    type="scatter"
                />
            </div>
            ) : null }
        </div>
        );
    }
}

export default WeatherApp;