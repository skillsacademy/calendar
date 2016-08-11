import React, {Component, PropTypes} from 'react';

export default class ComponentXPresentation extends Component {
      onClick(event){
console.log('tdclick = ', event.nativeEvent.target.innerHTML);
      }
  render() {
    return (
      <section className="calendarMonth">
      	<table onClick={this.onClick.bind(this)}>
      		<caption>January</caption>
      		<thead>
      			<tr>
      				<th>M</th>
      				<th>T</th>
      				<th>W</th>
      				<th>T</th>
      				<th>F</th>
      				<th>S</th>
      				<th>Sunday</th>
      			</tr>
      		</thead>     		
      		<tbody>
      			<tr className="splitWeek">
      				<td colSpan="3" data-unit-type="unitG">                                     
                                    <span className="wk">Wk 1</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>                            
                              </td>

                              <td  colSpan="4"> 
                                    <span className="wk">Wk 2</span>
                              </td>                              
      			</tr>   
                        <tr className="dates">
                              <td >
                                    <span className="spots">
                                          <i className="spot"></i> 
                                          <i className="spot"></i>
                                          <i className="spot"></i>
                                    </span>
                                    <span className="date">8</span>
                              </td>
                              <td><span className="date">9</span></td>
                              <td><span className="date">10</span></td>
                              <td><span className="date">11</span></td>
                              <td><span className="date">12</span></td>
                              <td><span className="date">13</span></td>
                              <td><span className="date">14</span></td>
                        </tr>

                        <tr className="splitWeek">
                              <td colSpan="3" data-unit-type="unitB">                                    
                                    <span className="wk">Wk 3</span>
                                    <span className="unitName">Algebra, quadratics, rearanging formulae, and identities</span>                    
                              </td>

                              <td colSpan="4" data-unit-type="unitY">                                    
                                    <span className="wk">Wk 4</span>
                                    <span className="unitName">Quizes by the dozen where lots of exercises are great.</span>                    
                              </td>                              
                        </tr>   
                        <tr className="dates">                              
                              <td><span className="date">15</span></td>
                              <td><span className="date">16</span></td>
                              <td><span className="date">17</span></td>
                              <td><span className="date">18</span></td>
                              <td><span className="date">19</span></td>
                              <td><span className="date">20</span></td>
                        </tr>  

                        {/* empty weeks example ....*/}
                        <tr className="splitWeek">
                              <td colSpan="3">                                    
                                    <span className="wk">Wk 5</span>                 
                              </td>

                              <td colSpan="4">                                    
                                    <span className="wk">Wk 6</span>                   
                              </td>                               
                        </tr>   
                        <tr className="dates">
                              <td ><span className="date">21</span></td>
                              <td><span className="date">22</span></td>
                              <td><span className="date">23</span></td>
                              <td><span className="date">24</span></td>
                              <td><span className="date">25</span></td>
                              <td><span className="date">26</span></td>
                              <td><span className="date">27</span></td>
                        </tr>    

                        {/* empty weeks example ....*/}
                        <tr className="splitWeek">
                              <td colSpan="3">                                    
                                    <span className="wk">Wk 7</span>                 
                              </td>

                              <td colSpan="4">                                    
                                    <span className="wk">Wk 8</span>                   
                              </td>                               
                        </tr>   
                        <tr className="dates">
                              <td ><span className="date">28</span></td>
                              <td><span className="date">29</span></td>
                              <td><span className="date">30</span></td>
                              <td><span className="date">31</span></td>
                              <td><span className="date">1</span></td>
                              <td><span className="date">2</span></td>
                              <td><span className="date">3</span></td>
                        </tr>                                                                   
      		</tbody>
      	</table>

      </section>
    )
  }
}


