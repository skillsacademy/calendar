import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ToDo  from './todo.jsx';
import ToDo2 from './todo2.jsx';
import Agenda from './agenda.jsx';
import SomethingElse from './somethingElse.jsx';

const ToDoGroup = {    
   todo:ToDo,
   todo2:ToDo2,
   agenda:Agenda
};

const combinedCustomReducers =  combineReducers({    
	...ToDoGroup,
  	SomethingElse,
	routing: routerReducer //not forgetting to add routerRedcuer to the mix too..
});

export default combinedCustomReducers

