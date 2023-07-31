import { PayloadAction } from '@reduxjs/toolkit'

export type ErrorType = {
    message: string
    code: number
}

export type StateAction<S, P> = (state: S, payload: PayloadAction<P>) => void
