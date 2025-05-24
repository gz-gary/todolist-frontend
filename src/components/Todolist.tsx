import { apiUrl } from '@/lib/constants'
import AddIcon from '@mui/icons-material/Add'
import { Box, Card, CardActions, CardContent, Checkbox, Fab, List, ListItem, Tooltip, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

type TodolistItem = {
  title: string,
  finished: boolean
}

export default function Todolist({ finished }: { finished: boolean }) {
  const { isPending, error, data } = useQuery({
    queryKey: ['todolistItems'],
    queryFn: () =>
      fetch(`${apiUrl}/items`)
        .then(response => response.json() as Promise<TodolistItem[]>)
  })

  if (isPending) return '...Loading'

  if (error) return `An error has occurred: ${error.message}`

  const finishedList: TodolistItem[] = data.filter(({title, finished}) => finished)
  const notFinishedList: TodolistItem[] = data.filter(({title, finished}) => !finished)

  const testFinishedList: TodolistItem[] = [
    {title: 'Research report', finished: true},
  ]

  const testNotFinishedList: TodolistItem[] = [
    {title: 'Compilers Project', finished: false},
    {title: 'BDP Project', finished: false},
    {title: 'Compilers Homework', finished: false},
  ]

  return (
    <Box sx={{ flex: 1, position: 'relative' }}>
      <List>
        {
          (finished ? finishedList : notFinishedList).map(
            ({title, finished}, index) => (
              <ListItem key={index}>
                <Card sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}
                >
                  <CardContent>
                    <Typography>{title}</Typography>
                  </CardContent>
                  <CardActions>
                    <Checkbox defaultChecked={finished}/>
                  </CardActions>
                </Card>
              </ListItem>
            )
          )
        }
      </List>
      {
      !finished && (
        <Fab 
          size="medium"
          color="primary"
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
        >
          <Tooltip title="Add a new to-do">
            <AddIcon/>
          </Tooltip>
        </Fab>
      )}
    </Box>
  )
}