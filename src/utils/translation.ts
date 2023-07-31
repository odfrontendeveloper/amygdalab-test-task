import { TranslationType } from '@app/types/translation'
import { useTranslation } from 'react-i18next'

export const useValidatedTranslation = () => {
    const translationObj = useTranslation()
    return {
        ...translationObj,
        t: (keyTranslate: TranslationType) => translationObj.t(keyTranslate),
    }
}
