import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 
import events from './events'

export default combineReducers({ events, form })
// export default combineReduers({ foo, bar, baz})