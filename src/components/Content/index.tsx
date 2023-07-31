import { useDispatch, useSelector } from 'react-redux'
import {
    selectGrayscale,
    selectIsFetchingNewPhotos,
    selectIsFetchingPhotos,
    selectPhotos,
} from '@app/store/photos/photos.selector'
import { useValidatedTranslation } from '@app/utils/translation'
import { UserPhoto } from '@app/store/photos/photos.types'
import Button from '@app/components/Button'
import './Content.styles.scss'
import { getMorePhotos } from '@app/saga/photos/photos.actions'

const Content = () => {
    const { t } = useValidatedTranslation()
    const dispatch = useDispatch()

    const grayscale: boolean = useSelector(selectGrayscale)
    const isFetchingPhotos: boolean = useSelector(selectIsFetchingPhotos)
    const isFetchingNewPhotos: boolean = useSelector(selectIsFetchingNewPhotos)
    const photos: UserPhoto[] = useSelector(selectPhotos)

    const loadMorePhotos = () => {
        dispatch(getMorePhotos())
    }

    const renderItem = (item: UserPhoto) => {
        return (
            <div
                className="contentItem"
                key={item.id}
                style={{
                    backgroundImage: `url(${`https://picsum.photos/id/${item.id}/400/500`}${
                        grayscale ? '?grayscale' : ''
                    })`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="contentItemDescription">
                    <div className="contentItemDescriptionAuthor">{item.author}</div>
                    <div className="contentItemDescriptionUrl">{item.url}</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="content">
                {!isFetchingNewPhotos && photos.map(renderItem)}
                {isFetchingPhotos && (
                    <>
                        <div className="contentSkeleton" />
                        <div className="contentSkeleton" />
                        <div className="contentSkeleton" />
                        <div className="contentSkeleton" />
                    </>
                )}
            </div>
            <div className="contentButton">
                <Button type="button" fullWidth onClick={loadMorePhotos} disabled={isFetchingPhotos}>
                    {t('fetchMorePhotos')}
                </Button>
            </div>
        </>
    )
}

export default Content
