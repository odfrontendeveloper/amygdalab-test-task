import { useDispatch, useSelector } from 'react-redux'
import Header from '@app/components/Header'
import Content from '../Content'
import { useEffect } from 'react'
import { getPhotos } from '@app/saga/photos/photos.actions'

const Layout = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <>
            <Header />
            <Content />
        </>
    )
}

export default Layout
