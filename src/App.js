import React, { Component } from "react";
import './App.css';
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import NumberOfEvents from "./NumberOfEvents";


class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  async componentDidMount() {
    this.mounted = true;
    await getEvents().then((events) => {
      if (this.mounted) {
        let locationsExtracted = extractLocations(events)
        this.setState({ events, locations: locationsExtracted });
        console.log('locations',locationsExtracted)
      }
    });
    console.log('locationsstate',this.state.locations)
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  updateNumberofEvents = (eventNumbers) => {
    this.setState({
      numberOfEvents: eventNumbers,
    });
    this.updateEvents(this.state.location, eventNumbers);
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateNumberofEvents={this.updateNumberofEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
