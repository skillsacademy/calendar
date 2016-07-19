import React, {Component, PropTypes} from 'react';

export default class ComponentXPresentation extends Component {
  render() {
    return (
      <section className="calendarMenu">

      	<div className="row">
	      	<div className="col-xs-4">
		      	<button className="calendarSettings"><span className="sr-only">Settings</span></button>
	      	</div>
	      	<div className="col-xs-4 pull-right">
		      	<ul className="buttons">
		      		<li>
		      			<button className="calendarWeekView"></button>
		      		</li>
		      		<li>
		      			<button className="calendarSingleMonthView"></button>
		      		</li>
		      		<li>
		      			<button className="calendarMultipleMonthsView"></button>
		      		</li>
		      	</ul>
	      	</div>	      	
      	</div>

      </section>
    )
  }
}


