import 'css/jsxComponents/calendar/_calendarMultiMonths.scss';

import React, {Component, PropTypes} from 'react';
import CalendarMonth from 'js/components/calendarMonth/container.jsx'

export default class ComponentXPresentation extends Component {
  render() {
    return (
      <div className="calendarMultiMonths">

        <div className="headerOfDays">
          <section className="calendarMonth">
            <table>
              <thead>
                <tr>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                  <th>S</th>
                </tr>
              </thead>
            </table>
          </section>
          <section className="calendarMonth">
            <table>
              <thead>
                <tr>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                  <th>S</th>
                </tr>
              </thead>
            </table>
          </section>                
        </div>

        <div className="monthList">

           <CalendarMonth/>
           <CalendarMonth/>
           <CalendarMonth/>
           <CalendarMonth/>

        </div>

    </div>
    )
  }
}


