import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarMonth from 'js/components/calendarMonth/container.jsx'
import CalendarAgenda from 'js/components/calendarAgenda/container.jsx'


export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
    		<CalendarMonth dispatch={this.props.dispatch}/>
			<CalendarAgenda dispatch={this.props.dispatch}/>			
		</div>		
    )
  }
}

