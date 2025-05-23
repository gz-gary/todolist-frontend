import { appTitle } from '@/lib/constants'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'
import { DarkModeContext } from 'theme'

export default function Topbar({
  handleMenuButtonClicked
}: {
  handleMenuButtonClicked: () => void
}) {
  /* 
  * { flexGrow: 1 } makes the label-div occupies all spaces
  * between buttons on the left and the right
  */
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext)

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
          <IconButton
            color="inherit"
            onClick={() => {
              setIsDarkMode(!isDarkMode)
            }}
          >
            {isDarkMode ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}