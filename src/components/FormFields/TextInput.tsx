import { TextField, TextFieldProps } from '@mui/material'
import { useController, UseControllerProps } from 'react-hook-form'

type TextInputProps = TextFieldProps & UseControllerProps

const TextInput = ({ name, control, ...rest }: TextInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { isTouched, error }
  } = useController({
    name,
    control
  })

  return (
    <TextField
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      inputRef={ref}
      error={!!error?.message}
      helperText={error?.message}
    />
  )
}

export default TextInput
