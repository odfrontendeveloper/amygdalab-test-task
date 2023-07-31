import moment from 'moment'

const cookieUtils = {
    getItem: (name: string): string | null => {
        const value: string = '; ' + document.cookie
        const parts: any = value.split('; ' + name + '=')
        if (parts && parts.length === 2) {
            return parts.pop().split(';').shift()
        } else {
            return null
        }
    },
    setItem: (name: string, value: string): true => {
        document.cookie = `${name}=${value}; path=/; expires=${moment().add(1, 'day')}`
        return true
    },
    removeItem: (name: string): void => {
        document.cookie = `${name}=0; path=/; max-age=-1`
    },
}

export default cookieUtils
