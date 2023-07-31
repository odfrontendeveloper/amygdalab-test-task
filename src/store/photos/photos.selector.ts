import { RootState } from '@app/types/store'
import { UserPhoto } from './photos.types'

export const selectIsFetchingPhotos = (state: RootState): boolean => state.photos.isFetchingPhotos
export const selectIsFetchingNewPhotos = (state: RootState): boolean => state.photos.isFetchingNewPhotos
export const selectPhotos = (state: RootState): UserPhoto[] => state.photos.photos
export const selectPhotosPage = (state: RootState): number => state.photos.page
export const selectGrayscale = (state: RootState): boolean => state.photos.grayScale
