import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({})

const middleware = [thunk]

const storeMiddleware =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(rootReducer, storeMiddleware)

export default store
