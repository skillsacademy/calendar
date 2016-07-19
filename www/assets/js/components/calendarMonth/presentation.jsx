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
                                    <span className="wk">Wk 1 first half:</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>

                              <td data-unit-type="unitY" colSpan="4"> 
                                    <span className="wk">Wk 1 second half:</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>                              
      			</tr>   
                        <tr className="dates">
                              <td data-unit-type="unitG">
                                    <i className="spot"></i> 
                                    <span className="date">8</span>
                              </td>
                              <td data-unit-type="unitG">9</td>
                              <td data-unit-type="unitG">10</td>
                              
                              <td data-unit-type="unitY">11</td>
                              <td data-unit-type="unitY">12</td>
                              <td data-unit-type="unitY">13</td>
                              <td data-unit-type="unitY">14</td>
                        </tr>

                        <tr className="splitWeek">
                              <td> 
                                    &nbsp;                                 
                              </td>
                              <td> 
                                   &nbsp;                                 
                              </td>
                              <td> 
                                   &nbsp;                                 
                              </td>                              
                              <td data-unit-type="unitB" colSpan="4"> 
                                    <span className="wk">Wk 1 second half:</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>
                              </td>                              
                        </tr> 

                        <tr className="dates">
                              <td>15</td>
                              <td>16</td>
                              <td>17</td>
                              
                              <td data-unit-type="unitB">
                                    <i className="spot"></i> 
                                    <span className="date">18</span> 
                              </td>
                              <td data-unit-type="unitB">19</td>
                              <td data-unit-type="unitB">20</td>
                              <td data-unit-type="unitB">21</td>
                        </tr>
      		</tbody>
      	</table>

      </section>
    )
  }
}


