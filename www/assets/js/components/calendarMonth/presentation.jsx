import React, {Component, PropTypes} from 'react';

export default class ComponentXPresentation extends Component {
  render() {
    return (
      <section className="calendarMonth">
      	<table>
      		<caption>January</caption>
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
      		<tfoot>
      			<tr>
      				<td data-unit-type="unitG">8</td>
      				<td data-unit-type="unitG">9</td>
      				<td data-unit-type="unitG">10</td>
      				
      				<td data-unit-type="unitY">11</td>
      				<td data-unit-type="unitY">12</td>
      				<td data-unit-type="unitY">13</td>
      				<td data-unit-type="unitY">14</td>
      			</tr>
      		</tfoot>      		
      		<tbody>
      			<tr className="topicUnits">
      				<td data-unit-type="unitG" colSpan="3"> 
                                    <span className="wk">Wk 1 first half:</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>

                              <td data-unit-type="unitY" colSpan="4"> 
                                    <span className="wk">Wk 1 second half:</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>                              
      			</tr> 
                        <tr className="assignments">
                              <td data-unit-type="unitG"> <i className="spot"></i> </td>
                              <td data-unit-type="unitG">  &nbsp;</td>
                              <td data-unit-type="unitG"> &nbsp; </td>

                              <td data-unit-type="unitY">  &nbsp;</td>
                              <td data-unit-type="unitY"> <i className="spot"></i> </td>
                              <td data-unit-type="unitY"> &nbsp; </td>
                              <td data-unit-type="unitY"> &nbsp; </td>
                        </tr>                             			
      		</tbody>
      	</table>

      </section>
    )
  }
}


