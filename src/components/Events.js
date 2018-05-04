import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this._sortByKey = this._sortByKey.bind(this);
  }
  _sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  render() {
    //enter all events by hand here
  	let events = [];
    events.push({name: 'React Meetup', date: 'April 23, 6pm', location: 'Galvanize Boulder, 1023 Walnut', notes: 'Kombucha provided.'})
  	events.push({name: 'Dinner in Boulder', date: 'May 23, 7pm', location: 'North Boulder Taco Bell', notes: 'Bring some money!'})

    //sort events by date
    let sortedEvents = this._sortByKey(events, 'date');

    //build html for all events
    let allEvents = [];
    sortedEvents.forEach(function(event){
      let oneEvent = (<span key={event.name}>
                        <div className="event__detail-name">{event.name}</div>
                        <div className="event__detail-date-location">{event.date} at {event.location}</div>
                        <div className="event__detail-notes">{event.notes}</div>
                      </span>);
      allEvents.push(oneEvent);
    });
    return (
        <div className="events">
          <div className="events__title">
            Upcoming 
            <span className="events__react"> React </span>
            Events in Colorado
          </div>
          <div className="events__div">
            {allEvents}
	       </div>
        </div>
    );
  }
}

export default Events;