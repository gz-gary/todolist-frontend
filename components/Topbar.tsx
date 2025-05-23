import { appTitle } from '@/lib/constants'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

export default function Topbar({
  handleMenuButtonClicked
}: {
  handleMenuButtonClicked: () => void
}) {
  /* 
  * { flexGrow: 1 } makes the label-div occupies all spaces
  * between buttons on the left and the right
  */

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ handleMenuButtonClicked }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appTitle}
          </Typography>
          <Button color="inherit" >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}