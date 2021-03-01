import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer from './redux/reducers/index'
import rootSaga from './redux/sagas'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}; //초기상태는 당연히 빈값으로 정의 

const middlewares = [sagaMiddleware, routerMiddleware(history)];
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = 
    process.env.NODE_ENV === "production" ? compose : devtools || compose;

const store = createStore( //스토어를 만들어주세요 어떻게? 아래꺼 createRootReducer(history), initialState, composeEnhancer(applyMiddleware(...middlewares))합쳐서 만들어주세요 
    createRootReducer(history),
    initialState, //초기상태
    composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
//sagaMiddlware를 작동해주세요 .어디로 ? rootSaga로

export default store;