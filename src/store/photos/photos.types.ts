import { StateAction } from '@app/types/api'

export type UserPhoto = {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

export type PhotosState = {
    isFetchingPhotos: boolean
    isFetchingNewPhotos: boolean
    grayScale: boolean
    page: number
    photos: UserPhoto[]
}

export type PhotosStateReducers = {
    setIsFetchingPhotos: StateAction<PhotosState, boolean>
    setIsFetchingNewPhotos: StateAction<PhotosState, boolean>
    setPhotos: StateAction<PhotosState, UserPhoto[]>
    setGrayscale: StateAction<PhotosState, boolean>
    addPhotos: StateAction<PhotosState, UserPhoto[]>
    setPage: StateAction<PhotosState, number>
}
