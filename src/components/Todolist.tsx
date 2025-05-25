'use client'

import InputDialog from '@/components/InputDialog'
import { apiUrl } from '@/lib/constants'
import { TodolistItem } from '@/lib/types'
import AddIcon from '@mui/icons-material/Add'
import { Box, Card, CardActions, CardContent, Checkbox, Fab, List, ListItem, Skeleton, Tooltip, Typography } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export default function Todolist({ finished }: { finished: boolean }) {
  const queryClient = useQueryClient()

  const { isPending, error, data } = useQuery({
    queryKey: ['todolistItems'],
    queryFn: () =>
      fetch(`${apiUrl}/items`)
        .then(response => response.json() as Promise<TodolistItem[]>)
  })

  const mutationPost = useMutation({
    mutationFn: (item: TodolistItem) => {
      return fetch(
        `${apiUrl}/items`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todolistItems'] })
    }
  })

  const mutationPatch = useMutation({
    mutationFn: (item: TodolistItem) => {
      return fetch(
        `${apiUrl}/items/${item.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(item),
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todolistItems'] })
    }
  })

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  /* Loading: skeleton */
  if (isPending) return (
    <Box sx={{ flex: 1 }}>
      <List sx={{ width: '100%', height: '100%' }}>
        <ListItem>
          <Skeleton variant="rectangular" width="100%"></Skeleton>
        </ListItem>
        <ListItem>
          <Skeleton variant="rectangular" width="100%"></Skeleton>
        </ListItem>
        <ListItem>
          <Skeleton variant="rectangular" width="100%"></Skeleton>
        </ListItem>
      </List>
    </Box>
  )

  /* Error: message */
  if (error) return `An error has occurred: ${error.message}`

  const finishedList: TodolistItem[] = data.filter(({title: _, finished}) => finished)
  const notFinishedList: TodolistItem[] = data.filter(({title: _, finished}) => !finished)

  /* Ok: the Todolist */
  return (
    <Box sx={{
      flex: 1,
      position: 'relative',
      display: 'flex',
      minHeight: 0,
      overflow: 'hidden',
    }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <List>
          {
            (finished ? finishedList : notFinishedList).map(
              ({id, title, finished}, _) => (
                <ListItem key={id}>
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
                      <Checkbox 
                        defaultChecked={finished}
                        disabled={finished}
                        onChange={(event: React.ChangeEvent) => {
                          const checked = (event.target as HTMLInputElement).checked;
                          if (checked) {
                            mutationPatch.mutate({
                              id: id,
                              title: title,
                              finished: true
                            })
                          }
                        }}
                      />
                    </CardActions>
                  </Card>
                </ListItem>
              )
            )
          }
        </List>
      </Box>

      {
      !finished && (
        <>
          <Fab 
            size="medium"
            color="primary"
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              zIndex: 100
            }}
            onClick={() => {
              setIsDialogOpen(true)
            }}
          >
            <Tooltip title="Add a new to-do">
              <AddIcon/>
            </Tooltip>
          </Fab>
          <InputDialog 
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            handleSubmit={(formJson) => {
              const item = {
                title: formJson.input,
                finished: false,
              } as TodolistItem
              mutationPost.mutate(item)
            }}
          >
          </InputDialog>
        </>
      )}
    </Box>
  )
}