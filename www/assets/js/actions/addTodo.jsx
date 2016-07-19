import {v4} from 'node-uuid';


// Action Creators ....
export default AddToDo = (text) => ({
	type:'ADD_TODO',
	id: v4(),
	text
});
