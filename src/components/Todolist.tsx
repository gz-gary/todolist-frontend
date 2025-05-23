import { Checkbox, List, ListItem, Typography } from '@mui/material'

type TodolistItem = {
  title: string,
  finished: boolean
}

export default function Todolist(finshed: boolean) {
  const testFinishedList: TodolistItem[] = [
    {title: 'Research report', finished: true},
  ]

  const testNotFinishedList: TodolistItem[] = [
    {title: 'Compilers Project', finished: false},
    {title: 'BDP Project', finished: false},
    {title: 'Compilers Homework', finished: false},
  ]

  return (
    <List>
      {
        (finshed ? testFinishedList : testNotFinishedList).map(
          ({title, finished}, index) => (
            <ListItem key={index}>
              <Typography>{title}</Typography>
              <Checkbox defaultChecked={finished}/>
            </ListItem>
          )
        )
      }
    </List>
  )
}