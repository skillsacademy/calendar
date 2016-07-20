import {v4} from 'node-uuid';


// Action Creators ....
export default function AddAgenda (text){/* or do ajax thing and then return stuff ....etc*/
	return {
		type:'ADD_AGENDA',
		id: v4(),
		text
	}
};
