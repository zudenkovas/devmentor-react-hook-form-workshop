import { useImperativeHandle, forwardRef } from 'react'
import { Box } from '@mui/material'
import { useForm, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import TextInput from 'components/FormFields/TextInput'

type LoginFormProps = {
  onSubmit: (values: FieldValues) => void
}

export type LoginFormRef = {
  submitForm: () => void
}

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required()
  })
  .required()

const LoginForm = forwardRef<LoginFormRef, LoginFormProps>(
  ({ onSubmit }, ref) => {
    const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) })

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        handleSubmit(onSubmit)()
      }
    }))

    return (
      <Box
        sx={{
          padding: '10px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <TextInput
          name='email'
          control={control}
          placeholder='Enter email'
          label='Email'
        />
        <TextInput
          name='password'
          control={control}
          placeholder='Enter password'
          type='password'
          label='Password'
        />
      </Box>
    )
  }
)

export default LoginForm
