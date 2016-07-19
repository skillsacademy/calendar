import 'css/jsxComponents/calendar/_calendarMultiMonths.scss';

import React, {Component, PropTypes} from 'react';
import CalendarMonth from 'js/components/calendarMonth/container.jsx'

export default class ComponentXPresentation extends Component {
  render() {
    return (
      <div className="calendarMultiMonths">
           <CalendarMonth/>
           <CalendarMonth/>
           <CalendarMonth/>
           <CalendarMonth/>
      </div>
    )
  }
}


