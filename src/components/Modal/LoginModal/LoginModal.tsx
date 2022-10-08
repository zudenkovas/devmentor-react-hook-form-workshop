import { useRef } from 'react'
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import LoginForm, { LoginFormRef } from './LoginForm'

type ModalProps = Omit<DialogProps, 'onClose'> & {
  onClose: () => void
}

const Modal = ({ onClose, ...rest }: ModalProps) => {
  const formRef = useRef<LoginFormRef>(null)
  const handleSubmit = (values: any) => {
    console.log('Form submit values: ', values)
  }

  const handleLogin = () => {
    formRef.current?.submitForm()
  }

  return (
    <Dialog {...rest} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <LoginForm onSubmit={handleSubmit} ref={formRef} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
