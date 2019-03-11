export default function (state = { burguers: [], burguer: [],  ingredients: [] }, action) {
    let newState = null
    switch (action.type) {
        case 'BURGUERS_FETCH':
            newState = Object.assign({}, state)
            newState.burguers = action.payload
            return newState
        case 'BURGUER_FETCH':
            newState = Object.assign({}, state)
            newState.burguer = action.payload
            return newState
        case 'INGREDIENTS_FETCH':
            newState = Object.assign({}, state)
            newState.ingredients = action.payload
            return newState
        default:
            return state;
    }
}