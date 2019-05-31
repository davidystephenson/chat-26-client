import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import reduxThunk from 'redux-thunk'
import socketset from 'socketset'

const is = x => x

const initialState = []

function messages (state = initialState, action) {
  switch (action.type) {
    case 'MESSAGES':
      return action.payload
    default:
      return state
  }
}

function sent (state = false, action) {
  switch (action.type) {
    case 'MESSAGE_SENT':
      return !state
    default:
      return state
  }
}

const reducer = combineReducers({ messages, sent })

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : is

const socket = socketset('localhost:4000')

const middleware = applyMiddleware(socket, reduxThunk)

const enhancer = compose(middleware, devTools)

const store = createStore(reducer, enhancer)
store.dispatch({ type: 'SOCKETSET_CONNECT' })

export default store
