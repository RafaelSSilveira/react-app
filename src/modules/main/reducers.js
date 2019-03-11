import { combineReducers } from 'redux'

import HomeReducer from '../home/ducks/homeReducer'

const rootReducer = combineReducers({
    home: HomeReducer
})

export default rootReducer