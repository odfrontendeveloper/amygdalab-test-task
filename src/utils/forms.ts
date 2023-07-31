import { ChangeEvent } from 'react'

export const changeFieldWrapper =
    (
        setFieldError: (field: string, value: string | undefined) => void,
        handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
        setFieldError(e.target.name, undefined)
        handleChange(e)
    }
