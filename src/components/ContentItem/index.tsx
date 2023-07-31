import { FC, memo } from 'react'
import { ContentItemProps } from './ContentItem.types'
import './ContentItem.styles.scss'

const ContentItem: FC<ContentItemProps> = ({ id, author, url, grayscale }) => {
    return (
        <div
            className="contentItem"
            key={id}
            style={{
                backgroundImage: `url(${`https://picsum.photos/id/${id}/400/500`}${grayscale ? '?grayscale' : ''})`,
                backgroundSize: 'cover',
            }}
        >
            <div className="contentItemDescription">
                <div className="contentItemDescriptionAuthor">{author}</div>
                <div className="contentItemDescriptionUrl">{url}</div>
            </div>
        </div>
    )
}

export default memo(ContentItem)
