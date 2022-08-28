import {put, takeEvery, call} from "redux-saga/effects";
import axios from "axios";
import {setIsLoading, setIsError, setServices, setServiceDetails} from "../store/servicesActionCreators";
import {GET_SERVICES, GET_SERVICE_DETAILS} from "../store/servicesActionTypes"


const servicesApi = axios.create( { baseURL: "http://localhost:7070/api"} );
const fetchServicesFromApi = () => servicesApi.get('/services');
const fetchServiceDetailFromApi = (id) => servicesApi.get(`/services/${id}`);

function* getServicesWorker() {
    try {
        yield put(setIsLoading(true))
        const { data } = yield call(fetchServicesFromApi)
        yield put(setServices(data))
        yield put(setIsError(false))
        yield put(setIsLoading(false))
    } catch (e) {
        yield put(setIsLoading(false))
        yield put(setIsError(true))
    }
}

function* getServiceDetailWorker({ id }) {
    try {
        yield put(setIsLoading(true))
        const {data} = yield call(() => fetchServiceDetailFromApi(id))
        yield put(setServiceDetails(data))
        yield put(setIsError(false))
        yield put(setIsLoading(false))
    } catch (e) {
        yield put(setIsLoading(false))
        yield put(setIsError(true))
    }
}

export function* servicesWatcher() {
    yield takeEvery(GET_SERVICES, getServicesWorker)
    yield takeEvery(GET_SERVICE_DETAILS, getServiceDetailWorker)
}
