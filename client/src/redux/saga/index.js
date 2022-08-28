import {all} from "redux-saga/effects"
import {servicesWatcher} from "./servicesSaga";

export function* rootWatcher() {
    yield all([servicesWatcher()])
}
