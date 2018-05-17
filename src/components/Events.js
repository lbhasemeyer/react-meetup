import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this._eventClicked = this._eventClicked.bind(this);
  }
  _eventClicked(eventSite) {
    window.location.href = eventSite;
  }
  render() {
    //enter all events by hand here
  	let events = [];
    events.push({name: 'React Denver', date: 'Tuesday, May 15', time: '6:00pm', location: 'Turing School', site: 'https://www.meetup.com/ReactDenver/events/dprpkpyxhbtb/', notes: 'Web Performance API, Rapid Prototyping with AWS & Three Year Anniversary Party'})
    events.push({name: 'Boulder React', date: 'Thursday, May 17', time: '6:00pm', location: 'Galvanize Boulder', site: 'https://www.meetup.com/Boulder-React-Meetup/events/250056984/', notes: 'Boulder React Coding Night'})
    events.push({name: 'React Denver', date: 'Tuesday, June 19', time: '6:00pm', location: 'Turing School', site: 'https://www.meetup.com/ReactDenver/events/247491530/', notes: ''})
    events.push({name: 'Boulder React', date: 'Thursday, June 21', time: '6:00pm', location: 'Galvanize Boulder', site: 'https://www.meetup.com/Boulder-React-Meetup/events/250056987/', notes: 'Boulder React Coding Night'})

    //build html for all events
    let allEvents = [];
    events.forEach(function(event){
      let oneEvent = (<span key={event.name + event.date} onClick={()=>this._eventClicked(event.site)} >
                        <div className="event__detail-name">{event.name}</div>
                        <div>{event.date} at {event.time}</div>
                        <div>{event.location}</div>
                        <div className="event__detail-notes">{event.notes}</div>
                      </span>);
      allEvents.push(oneEvent);
    }.bind(this));

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