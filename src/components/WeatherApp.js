import React from 'react';
import './WeatherApp.css';
import xhr from 'xhr';
import Plot from './Plot.js';

import { connect } from 'react-redux';
import {
  changeLocation,
  setSelectedTemp,
  setSelectedDate,
  setData,
  setDates,
  setTemps
} from '../actions';


// App.js
class WeatherApp extends React.Component {

    onPlotClick = (data) => {
        if (data.points) {
            this.props.dispatch(setSelectedDate(data.points[0].x));
            this.props.dispatch(setSelectedTemp(data.points[0].y));
        }
    };

    fetchData = (evt) => {
        evt.preventDefault();
        // redux - `this.state` changes to `this.props`
        var location = encodeURIComponent(this.props.location);

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

            self.props.dispatch(setData(body));
            self.props.dispatch(setDates(dates));
            self.props.dispatch(setTemps(temps));
            self.props.dispatch(setSelectedTemp(null));
            self.props.dispatch(setSelectedDate(''));
        });
    };

    changeLocation = (evt) => {
        // use redux way - dispatch the action
        this.props.dispatch(changeLocation(evt.target.value));
    };

    render() {
        var currentTemp = 'not loaded yet';
        if (this.props.data.list) {
            currentTemp = this.props.data.list[0].main.temp;
        }

        return (
        <div>
            <h1>Weather</h1>
            <form onSubmit={this.fetchData}>
                <label>I want to know the weather for
                    <input 
                        placeholder={"City, Country"}
                        type="text"
                        value={this.props.location}
                        onChange={this.changeLocation} 
                    />
                </label>
            </form>
            {(this.props.data.list) ? (
            <div className="wrapper">
                <p className="temp-wrapper">
                    <span className="temp">{ this.props.selected.temp ? this.props.selected.temp : currentTemp }</span>
                    <span className="temp-symbol">°C</span>
                    <span className="temp-date">
                        { this.props.selected.temp ? this.props.selected.date : ''}
                    </span>
                </p>
                <p>The temperature on { this.props.selected.date } will be { this.props.selected.temp }°C</p>
                <Plot 
                    xData={this.props.dates}
                    yData={this.props.temps}
                    onPlotClick={this.onPlotClick}
                    type="scatter"
                />
            </div>
            ) : null }
        </div>
        );
    }
}

function mapStateToProps (state){
    return {
        location: state.location,
        data: state.data,
        dates: state.dates,
        temps: state.temps,
        selected: state.selected
    };
}

export default connect(mapStateToProps)(WeatherApp);