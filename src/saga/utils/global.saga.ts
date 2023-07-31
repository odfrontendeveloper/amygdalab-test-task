import { Action } from '@reduxjs/toolkit'
import { GlobalSagaActions } from './constants'

export const resetAll = (): Action<GlobalSagaActions.RESET_ALL> => ({
    type: GlobalSagaActions.RESET_ALL,
})
