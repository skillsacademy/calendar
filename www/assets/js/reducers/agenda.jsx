export default function Agenda(state = {}, action){
	switch(action.type) {
		case 'ADD_AGENDA':             
            return Object.assign({}, state, {
                isAdded: true,
            });            
		default:
			return state;
	}
}
