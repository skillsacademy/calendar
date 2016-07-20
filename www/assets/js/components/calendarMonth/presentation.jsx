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
      		<tbody>
      			<tr className="splitWeek">
      				<td data-unit-type="unitG" colSpan="3"> 
                                    <span className="wk">Wk 1</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>

                              <td  colSpan="4"> &nbsp;</td>                              
      			</tr>   
                        <tr className="dates">
                              <td data-unit-type="unitG">
                                    <i className="spot"></i> 
                                    <span className="date">8</span>
                              </td>
                              <td data-unit-type="unitG">9</td>
                              <td data-unit-type="unitG">10</td>
                              
                              <td>11</td>
                              <td>12</td>
                              <td>13</td>
                              <td>14</td>
                        </tr>
      		</tbody>
      	</table>

      </section>
    )
  }
}


