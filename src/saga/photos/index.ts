import { call, put, select, takeEvery } from 'redux-saga/effects'
import { addPhotos, setIsFetchingNewPhotos, setIsFetchingPhotos, setPage, setPhotos } from '@app/store/photos'
import { UserPhoto } from '@app/store/photos/photos.types'
import { PhotosSagaActions } from './photos.types'
import axios, { AxiosResponse } from 'axios'
import { selectPhotosPage } from '@app/store/photos/photos.selector'

const randomNumber = () => Math.floor(Math.random() * 20)

function* getPhotos() {
    try {
        yield put(setIsFetchingPhotos(true))
        yield put(setIsFetchingNewPhotos(true))
        const { data }: AxiosResponse<UserPhoto[]> = yield call(() =>
            axios.get(`https://picsum.photos/v2/list?limit=4&page=${randomNumber()}`),
        )
        yield put(setPhotos(data))
        yield put(setPage(1))
        yield put(setIsFetchingPhotos(false))
        yield put(setIsFetchingNewPhotos(false))
    } catch (e: unknown) {
        yield put(setIsFetchingPhotos(false))
        yield put(setIsFetchingNewPhotos(false))
    }
}

function* getMorePhotos() {
    try {
        const page: number = yield select(selectPhotosPage)
        yield put(setIsFetchingPhotos(true))
        const { data }: AxiosResponse<UserPhoto[]> = yield call(() =>
            axios.get(`https://picsum.photos/v2/list?limit=4&page=${randomNumber()}`),
        )
        yield put(addPhotos(data))
        yield put(setPage(page + 1))
        yield put(setIsFetchingPhotos(false))
    } catch (e: unknown) {
        yield put(setIsFetchingPhotos(false))
    }
}

function* photosSaga() {
    yield takeEvery(PhotosSagaActions.GET_PHOTOS, getPhotos)
    yield takeEvery(PhotosSagaActions.GET_MORE_PHOTOS, getMorePhotos)
}

export default photosSaga
