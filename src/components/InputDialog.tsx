import { inputPrompt, inputTitle } from '@/lib/constants'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'

export default function InputDialog({
  isOpen,
  setIsOpen,
  handleSubmit,
}: {
  isOpen: boolean,
  setIsOpen: (arg0: boolean) => void,
  handleSubmit: (formJson: any) => void
}) {
  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      slotProps={{
        paper: {
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData as any).entries())
            handleSubmit(formJson)
            handleClose()
          }
        }
      }}
    >
      <DialogTitle>
        {inputTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {inputPrompt}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="input"
          name="input"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}