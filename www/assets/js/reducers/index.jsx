import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import ToDo  from './todo.jsx';
import ToDo2 from './todo2.jsx';
import SomethingElse from './somethingElse.jsx';

const ToDoGroup = combineReducers({    
   todo:ToDo,
   todo2:ToDo2
});

const combinedCustomReducers =  combineReducers({    
   ToDoGroup,
  	SomethingElse
});

export default combineReducers({    
    routing: routerReducer, //not forgetting to add routerRedcuer to the mix too..
    combinedCustomReducers
});



