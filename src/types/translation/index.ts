export type GlobalTranslation = {
    title: string
    switchText: string
    fetchPhotosButtonText: string
    fetchMorePhotos: string
}

type FlattenKeys<T, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends object ? FlattenKeys<T[K], `${Prefix}${K & string}.`> : `${Prefix}${K & string}`
}[keyof T]

export type TranslationType = FlattenKeys<GlobalTranslation>
