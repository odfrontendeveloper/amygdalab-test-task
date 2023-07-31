import { PayloadAction } from '@reduxjs/toolkit'
import { StoreWithReset } from '@app/types/store'
import { PhotosState, PhotosStateReducers, UserPhoto } from './photos.types'
import { initialState } from './photos.store'

export const reducers: StoreWithReset<PhotosStateReducers, PhotosState> = {
    setIsFetchingPhotos: (state: PhotosState, payload: PayloadAction<boolean>) => {
        state.isFetchingPhotos = payload.payload
    },
    setIsFetchingNewPhotos: (state: PhotosState, payload: PayloadAction<boolean>) => {
        state.isFetchingNewPhotos = payload.payload
    },
    setPhotos: (state: PhotosState, payload: PayloadAction<UserPhoto[]>) => {
        state.photos = payload.payload
    },
    setGrayscale: (state: PhotosState, payload: PayloadAction<boolean>) => {
        state.grayScale = payload.payload
    },
    addPhotos: (state: PhotosState, payload: PayloadAction<UserPhoto[]>) => {
        state.photos = [...state.photos, ...payload.payload]
    },
    setPage: (state: PhotosState, payload: PayloadAction<number>) => {
        state.page = payload.payload
    },
    resetStore: (state: PhotosState) => {
        state = structuredClone(initialState)
        return state
    },
}
