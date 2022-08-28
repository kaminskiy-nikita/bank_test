import {SET_SERVICES, SET_SERVICE_DETAILS, SET_IS_LOADING, SET_ERROR_REQUEST} from "./servicesActionTypes"

const defaultState = {
    services: [],
    serviceDetails: {},
    isLoading: false,
    isError: false,
};

export default function servicesReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_SERVICES:
            return {...state, services: action.payload}
        case SET_SERVICE_DETAILS:
            return {...state, serviceDetails: action.payload}
        case SET_ERROR_REQUEST: {
            return {...state, isError: action.payload}
        }
        case SET_IS_LOADING: {
            return {...state, isLoading: action.payload}
        }
        default:
            return state;
    }
}

