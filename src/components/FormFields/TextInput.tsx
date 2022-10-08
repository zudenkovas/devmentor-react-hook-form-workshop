import { TextField, TextFieldProps } from '@mui/material'
import { useController, UseControllerProps } from 'react-hook-form'

type TextInputProps = TextFieldProps & UseControllerProps

const TextInput = ({
  name: fieldName,
  control,
  placeholder,
  label,
  ...rest
}: TextInputProps) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { isTouched, error }
  } = useController({
    name: fieldName,
    control,
    rules: { required: true },
    defaultValue: ''
  })

  return (
    <TextField
      {...rest}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      inputRef={ref}
      error={isTouched && !!error?.message}
      helperText={error?.message}
      placeholder={placeholder}
      label={label}
    />
  )
}

export default TextInput
