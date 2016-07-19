import 'css/jsxComponents/calendar/_calendarAssignments.scss';


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PresentationLayer from './presentation.jsx'


class CalendarContainer extends Component {
  render() {
    return (
		<PresentationLayer />
    )
  }
}

CalendarContainer.propTypes = {
  title: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    subjects: 'Subjects',
  }
}

export default connect(
  mapStateToProps
)(CalendarContainer)
