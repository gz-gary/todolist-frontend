import ChecklistIcon from '@mui/icons-material/Checklist'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InfoIcon from '@mui/icons-material/Info'
import { Box, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Image from 'next/image'

interface SidebarItem {
  text: string,
  icon: React.ReactNode,
  route: string
}

export default function Sidebar({
  open,
  onClose
}: {
  open: boolean,
  onClose: () => void
}) {
  const itemList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        <ListItem key={-1} sx={{ marginBottom: 1 }}>
          <ListItemIcon>
            <Image
              src="/favicon.ico"
              alt="Todolist App"
              width={24}
              height={24}
            />
          </ListItemIcon>
          <ListItemText primary="Todolist App"/>
        </ListItem>
        <Divider role="presentation"></Divider>
        {[
          {
            text: 'Dashboard',
            icon: <DashboardIcon/>,
            route: '/',
          },
          {
            text: 'Todolist',
            icon: <ChecklistIcon/>,
            route: '/todolist',
          },
          {
            text: 'About',
            icon: <InfoIcon/>,
            route: '/about',
          },
        ].map((item: SidebarItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.route} LinkComponent={Link}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  )

  return (
    <Drawer 
      open={open}
      onClose={onClose}
    >
      {itemList}
    </Drawer>
  )
}