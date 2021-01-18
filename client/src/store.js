import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {createBrowerHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'

import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowerHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)]
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_

const composeEnhancer = 
    process.env.NODE_ENV === "production" ? compose : devtools || compose;

const store = createStore( //스토어를 만들어주세요 어떻게? 아래꺼 createRootReducer(history), initialState, composeEnhancer(applyMiddleware(...middlewares))합쳐서 만들어주세요 
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export default store