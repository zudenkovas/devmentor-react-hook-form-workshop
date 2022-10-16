import { useState } from 'react'
import { AppBar, Container, Button } from '@mui/material'
import { NavLink } from 'components/Link'
import { LoginModal } from 'components/Modal'
import { RouteKey } from 'navigation'

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <AppBar position='sticky' color='primary'>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '50px'
        }}
      >
        <NavLink to={RouteKey.Index} color='inherit' underline='none'>
          Home
        </NavLink>

        <div>
          <Button color='inherit' onClick={openModal}>
            Login
          </Button>
        </div>
      </Container>
      <LoginModal open={modalOpen} onClose={closeModal} />
    </AppBar>
  )
}

export default Header
