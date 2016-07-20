import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarAgenda from 'js/components/calendarAgenda/container.jsx'


export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
			<CalendarAgenda dispatch={this.props.dispatch}/>			
		</div>		
    )
  }
}

