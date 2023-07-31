import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { en } from './en'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                ...en,
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})

const currentLanguage: string | null = localStorage.getItem('lang')

if (currentLanguage) i18n.changeLanguage(currentLanguage)

export default i18n
