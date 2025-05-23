import { blogLink, githubLink, sourceCodeLink } from '@/lib/constants'
import CodeIcon from '@mui/icons-material/Code'
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Web'
import { Box, Button, Link, Stack, Typography } from '@mui/material'

export default function About() {
  return (
    <Box 
      sx={{ p: 5 }}
    >
      <Box>
        <Typography variant="h3" sx={{ marginBottom: 2 }}>
          About this app
        </Typography>
        <Typography>
          Todolist app, an application that help you manage your to-do list.
        </Typography>
        <Typography>
          Todolist应用，一个帮助您管理您的待办事项的应用。
        </Typography>
      </Box>
      <Stack 
        spacing={2}
        sx={{ m: 2 }}
      >
        {[
          {
            text: 'Check the source code of this page 🤗:',
            icon: (<CodeIcon/>),
            buttonText: 'Code',
            route: sourceCodeLink
          },
          {
            text: 'Follow me on github 😊:',
            icon: (<GitHubIcon/>),
            buttonText: 'Github',
            route: githubLink
          },
          {
            text: 'Visit my blog 🤓:',
            icon: (<WebIcon/>),
            buttonText: 'Blog',
            route: blogLink
          },
        ].map(({text, icon, buttonText, route}, index) => (
          <Box key={index}>
            <Typography>{text}</Typography>
            <Button
              startIcon={icon}
              href={route}
              LinkComponent={Link}
              variant="outlined"
              sx={{ textTransform: 'none' }}
            >
              {buttonText}
            </Button>
          </Box>
        ))}

      </Stack>
    </Box>
  )
}