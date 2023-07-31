import { createSlice } from '@reduxjs/toolkit'
import { StateNames, StoreWithReset } from '@app/types/store'
import { PhotosState, PhotosStateReducers } from './photos.types'
import { initialState } from './photos.store'
import { reducers } from './photos.reducers'

export const photosStore = createSlice<
    PhotosState,
    StoreWithReset<PhotosStateReducers, PhotosState>,
    StateNames.photos
>({
    name: StateNames.photos,
    initialState,
    reducers,
})

export const { setIsFetchingPhotos, setIsFetchingNewPhotos, setPhotos, addPhotos, setPage, setGrayscale, resetStore } =
    photosStore.actions
