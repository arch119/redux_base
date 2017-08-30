
const visibilityFilter = (state='SHOW_ALL', action) => {
    switch(action.TYPE){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter