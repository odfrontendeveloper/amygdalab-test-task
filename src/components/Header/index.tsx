import { useDispatch, useSelector } from 'react-redux'
import { selectGrayscale, selectIsFetchingPhotos } from '@app/store/photos/photos.selector'
import { useValidatedTranslation } from '@app/utils/translation'
import { getPhotos } from '@app/saga/photos/photos.actions'
import { setGrayscale } from '@app/store/photos'
import Button from '@app/components/Button'
import Switch from '@app/components/Switch'
import './Header.styles.scss'

const Header = () => {
    const isFetcing: boolean = useSelector(selectIsFetchingPhotos)
    const grayscale: boolean = useSelector(selectGrayscale)

    const dispatch = useDispatch()

    const { t } = useValidatedTranslation()

    const onFetchPhotos = (): void => {
        dispatch(getPhotos())
    }

    const setGrayscaleValue = (value: boolean): void => {
        dispatch(setGrayscale(value))
    }

    return (
        <div className="header">
            <div className="headerTitle">{t('title')}</div>
            <div className="headerContent">
                <Switch active={grayscale} setActive={setGrayscaleValue} id="switch" text={t('switchText')} />
                <Button type="button" onClick={onFetchPhotos} disabled={isFetcing}>
                    {t('fetchPhotosButtonText')}
                </Button>
            </div>
        </div>
    )
}

export default Header
