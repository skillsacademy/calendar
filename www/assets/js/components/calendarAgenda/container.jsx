import 'css/jsxComponents/calendar/_calendarAgenda.scss';


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import AddAgenda from 'js/actions/calendarAddAgenda.jsx'
import PresentationLayer from './presentation.jsx'


class CalendarContainer extends Component {


  onClickAddAgenda(evt){
    console.log(' you clicked me dude!');
    this.props.dispatch(AddAgenda('hello from onClickAddAgenda'))
  }

  render() {
    return (
		<PresentationLayer
      onClickAddAgenda={this.onClickAddAgenda.bind(this)} 
    />
    )
  }
}

CalendarContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    subjects: 'Subjects',
  }
}

export default connect(
  mapStateToProps
)(CalendarContainer)
