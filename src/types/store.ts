import { store } from '@app/store'

export enum StateNames {
    photos = 'photos',
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type StoreWithReset<T, S> = T & {
    resetStore: (state: S) => void
}
