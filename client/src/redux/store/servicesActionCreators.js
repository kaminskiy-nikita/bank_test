import {SET_SERVICES, SET_SERVICE_DETAILS, SET_IS_LOADING, SET_ERROR_REQUEST, GET_SERVICES, GET_SERVICE_DETAILS} from "./servicesActionTypes"


export const setServices = payload => ({type: SET_SERVICES, payload})
export const getServices = () => ({type: GET_SERVICES})

export const setIsLoading = payload => ({type: SET_IS_LOADING, payload})
export const setIsError = payload => ({type: SET_ERROR_REQUEST, payload})

export const setServiceDetails = payload => ({type: SET_SERVICE_DETAILS, payload})
export const getServiceDetails = id => ({type: GET_SERVICE_DETAILS, id})
