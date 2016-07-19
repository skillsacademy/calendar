import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarMenu from 'js/components/calendarMenu/container.jsx'
import CalendarTableWeekView from 'js/components/calendarTableWeekView/container.jsx'
import CalendarAssignments from 'js/components/calendarAssignments/container.jsx'


export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
			<CalendarMenu />
			<CalendarTableWeekView />
			<CalendarAssignments />			
		</div>		
    )
  }
}

