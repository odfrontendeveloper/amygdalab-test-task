import { Action } from '@reduxjs/toolkit'
import { PhotosSagaActions } from './photos.types'

export const getPhotos = (): Action<PhotosSagaActions.GET_PHOTOS> => ({
    type: PhotosSagaActions.GET_PHOTOS,
})

export const getMorePhotos = (): Action<PhotosSagaActions.GET_MORE_PHOTOS> => ({
    type: PhotosSagaActions.GET_MORE_PHOTOS,
})
