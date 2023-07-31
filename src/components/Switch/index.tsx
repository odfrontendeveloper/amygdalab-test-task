import { FC, PropsWithChildren } from 'react'
import cx from 'classnames'
import { SwitchProps } from './Switch.props'
import './Switch.styles.scss'

const Switch: FC<PropsWithChildren<SwitchProps>> = ({ active, setActive, id, text }) => {
    return (
        <div className="switch">
            <label className={cx(['switchButton', active ? 'active' : 'inactive'])} htmlFor={id}>
                <input type="checkbox" id={id} checked={active} onChange={() => setActive(!active)} />
            </label>
            <div className="switchText">{text}</div>
        </div>
    )
}

export default Switch
