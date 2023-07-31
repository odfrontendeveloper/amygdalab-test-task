export type ButtonProps = {
    type: 'button' | 'submit'
    onClick: () => void
    disabled?: boolean
    fullWidth?: boolean
}
