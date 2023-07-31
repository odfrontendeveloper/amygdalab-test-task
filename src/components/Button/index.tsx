import { FC, PropsWithChildren } from 'react'
import cx from 'classnames'
import { ButtonProps } from './Button.types'
import './Button.styles.scss'

const Button: FC<PropsWithChildren<ButtonProps>> = ({ type, children, onClick, disabled, fullWidth }) => {
    return (
        <button type={type} className={cx(['button', fullWidth && 'fullWidth'])} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
