import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import polls from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    authedUser,
    users,
    polls,
    loadingBar: loadingBarReducer,
})