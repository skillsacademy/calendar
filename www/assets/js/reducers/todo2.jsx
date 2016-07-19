export default function ToDo2(state = {}, action){
	switch(action.type) {
		case 'A':             
            return Object.assign({}, state, {
                isFetching: true,
            });            
		default:
			return state;
	}
}
