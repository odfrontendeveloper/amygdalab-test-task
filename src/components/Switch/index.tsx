import { FC, PropsWithChildren, memo } from 'react'
import cx from 'classnames'
import SwitchImage from '@app/assets/switchicon.png'
import { SwitchProps } from './Switch.props'
import './Switch.styles.scss'

const Switch: FC<PropsWithChildren<SwitchProps>> = ({ active, setActive, id, text }) => {
    return (
        <div className="switch">
            <label
                className={cx(['switchButton', active ? 'active' : 'inactive'])}
                style={{
                    backgroundImage: `url(${SwitchImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '12px',
                    backgroundPosition: '80% 50%',
                }}
                htmlFor={id}
            >
                <input type="checkbox" id={id} checked={active} onChange={() => setActive(!active)} />
            </label>
            <div className="switchText">{text}</div>
        </div>
    )
}

export default memo(Switch)
