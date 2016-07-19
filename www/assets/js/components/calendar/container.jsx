import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarMenu from 'js/components/calendarMenu/container.jsx'
import CalendarMonth from 'js/components/calendarMonth/container.jsx'
import CalendarAssignments from 'js/components/calendarAgenda/container.jsx'


export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
			<CalendarMenu />
			<CalendarMonth />
			<CalendarAssignments />			
		</div>		
    )
  }
}

