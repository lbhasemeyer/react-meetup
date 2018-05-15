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
    events.push({name: 'React Denver', date: 'Tuesday, May 15', location: 'Turing School', notes: 'Web Performance API, Rapid Prototyping with AWS & Three Year Anniversary Party'})
    events.push({name: 'Boulder React', date: 'Thursday, May 17', location: 'Galvanize Boulder', notes: 'Boulder React Coding Night'})
    events.push({name: 'React Denver', date: 'Tuesday, June 19', location: 'Turing School', notes: ''})
    events.push({name: 'Boulder React', date: 'Thursday, June 21', location: 'Galvanize Boulder', notes: 'Boulder React Coding Night'})
 
    //sort events by date
    // let sortedEvents = this._sortByKey(events, 'date');

    //build html for all events
    let allEvents = [];
    // sortedEvents.forEach(function(event){
    events.forEach(function(event){
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