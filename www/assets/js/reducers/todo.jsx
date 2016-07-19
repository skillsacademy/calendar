
//note information passed via actions.....
// https://egghead.io/lessons/javascript-redux-writing-a-todo-list-reducer-adding-a-todo

export default function ToDo(state = [], action){
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id:action.id,
					text:action.text,
					completed:false
				}
			];

		case 'TOGGLE_TODO':
			return state.map(each => {
				if(each.id === action.id){
					return each;
				}
			});		
		default:
			return state;
	}
}
