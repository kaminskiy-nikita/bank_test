import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import servicesReducer from './servicesReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    servicesReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

