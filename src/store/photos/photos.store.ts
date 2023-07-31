import { PhotosState } from './photos.types'

export const initialState: PhotosState = {
    isFetchingPhotos: false,
    isFetchingNewPhotos: false,
    grayScale: false,
    page: 1,
    photos: [],
}
