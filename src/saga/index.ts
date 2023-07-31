import createSagaMiddleware from '@redux-saga/core'
import { fork } from 'redux-saga/effects'
import photosSaga from './photos'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
    yield fork(photosSaga)
}
