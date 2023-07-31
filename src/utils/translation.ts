import { useTranslation } from 'react-i18next'
import { TranslationType } from '@app/types/translation'

export const useValidatedTranslation = () => {
    const translationObj = useTranslation()
    return {
        ...translationObj,
        t: (keyTranslate: TranslationType) => translationObj.t(keyTranslate),
    }
}
