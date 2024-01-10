const reducer= (state,action) =>{
    
    switch (action.type) {
        case 'add':
            return {
                ...state,
                todos: [...state.todos,{name:action.payload}]
            }
            
    
        default:
            break;
    }

}
export {reducer}