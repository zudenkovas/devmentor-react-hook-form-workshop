import { useImperativeHandle, forwardRef } from 'react'
import { Box } from '@mui/material'
import { FieldValues, useForm } from 'react-hook-form'
import TextInput from 'components/FormFields/TextInput'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type LoginFormProps = {
  onSubmit: (values: FieldValues) => void
}

export type LoginFormRef = {
  submitForm: () => void
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required()
})

const LoginForm = forwardRef<LoginFormRef, LoginFormProps>(
  ({ onSubmit }, ref) => {
    const { control, handleSubmit, watch } = useForm({
      resolver: yupResolver(validationSchema)
    })

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        handleSubmit(onSubmit)()
      }
    }))

    console.log(watch())

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
          label='Password'
          type='password'
        />
      </Box>
    )
  }
)

export default LoginForm
