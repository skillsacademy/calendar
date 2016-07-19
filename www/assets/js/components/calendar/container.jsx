import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarMenu from 'js/components/calendarMenu/container.jsx'
import CalendarMonth from 'js/components/calendarMonth/container.jsx'
import CalendarMultiMonths from 'js/components/calendarMultiMonths/presentation.jsx'
import CalendarAgenda from 'js/components/calendarAgenda/container.jsx'


export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
			<CalendarMenu />
			<CalendarMultiMonths />
			<CalendarAgenda />			
		</div>		
    )
  }
}

