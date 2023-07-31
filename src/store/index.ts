import { configureStore } from '@reduxjs/toolkit'
import { rootSaga, sagaMiddleware } from '@app/saga'
import { photosStore } from './photos'

export const store = configureStore({
    reducer: {
        photos: photosStore.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
