import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button
} from '@mui/material'

type LoginModalProps = Omit<DialogProps, 'onClose'> & {
  onClose: () => void
}

const LoginModal = ({ onClose, ...rest }: LoginModalProps) => {
  return (
    <Dialog {...rest} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>Modal</DialogContent>

      <DialogActions>
        <Button>Login</Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default LoginModal
