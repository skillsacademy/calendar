export default function SomethingElse(state = {}, action){
	switch(action.type) {
		case 'A':             
            return Object.assign({}, state, {
                isFetching: true,
            });            
		default:
			return state;
	}
}
