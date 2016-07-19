import React, {Component, PropTypes} from 'react';

export default class ComponentXPresentation extends Component {
  render() {
    return (
      <section className="calendarAgenda">
      	<h2 className="title">Assignments</h2>

      	<div className="rowBlock">
      		<div className="colInline">
      			<i className="spot"></i>
      			<span className="timeStart">00:00</span>
      			<span className="between">-</span>
      			<span className="timeEnd">00:00</span>
      		</div>
      		<div className="colInline">
      			<section className="quizBlock row" data-unit-type="unitG">
      				<div className="col-xs-8">
      					<div className="subject">
		      				<h2 className="subjectLabel">
		      					Algebra
		      				</h2>
		      				<h2 className="quizTitle">
		      					Title for this Quiz :)
		      				</h2>
	      				</div>
      				</div>
      				<div className="col-xs-4 pull-right">
      					<div className="btnWrap">
	      					<button className="btnArrow">
	      						<i className="iArrowLeft"></i>
	      					</button>
      					</div>
      				</div>
      			</section>
      		</div>
      	</div>

      	<div className="rowBlock">
      		<div className="colInline">
      			<i className="spot"></i>
      			<span className="timeStart">00:00</span>
      			<span className="between">-</span>
      			<span className="timeEnd">00:00</span>
      		</div>
      		<div className="colInline">
      			<section className="quizBlock row" data-unit-type="unitG">
      				<div className="col-xs-8">
      					<div className="subject">
		      				<h2 className="subjectLabel">
		      					Algebra
		      				</h2>
		      				<h2 className="quizTitle">
		      					Title for this Quiz :)
		      				</h2>
	      				</div>
      				</div>
      				<div className="col-xs-4 pull-right">
      					<div className="btnWrap">
	      					<button className="btnArrow">
	      						<i className="iArrowLeft"></i>
	      					</button>
      					</div>
      				</div>
      			</section>
      		</div>
      	</div>

      </section>
    )
  }
}


