'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { type User } from '@supabase/supabase-js'
import { FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { createClient } from '@/utils/supabase/client';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ user }: { user: User | null}) {
  const supabase = createClient()
  const [open, setOpen] = React.useState(false);
  const [groupType, setGroupType] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [groupName, setGroupName] = React.useState("");

  // Handle opening and closing modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Update group variables
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setGroupName(e.target.value);
  const handleChangeType = (e: SelectChangeEvent) => setGroupType(e.target.value);

  // Submit form
  const handleSubmit = (e : any) => {
    e.preventDefault();
    createGroup({name: groupName, type: groupType});
    //Close the modal and redirect to new group page
  }

  // Create the group
  async function createGroup({
    name,
    type,
  }: {
    name: string | null
    type: string | null
  }) {
    try {
      setLoading(true);

      const { error } = await supabase
      .from('groups')
      .insert({
        name: name,
        type: type,
        owner_id: user?.id
      });

      if (error){
        console.log("Error inserting new group into database: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create Group</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create a new group
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin='normal'>
              <InputLabel htmlFor="name">Group Name: </InputLabel>
              <Input id="name" name="name" type="text" value={groupName} onChange={handleNameChange} />
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <InputLabel id="select-type">Type</InputLabel>
              <Select
                labelId="select-type"
                id="type"
                label="Type"
                value={groupType}
                onChange={handleChangeType}
              >
                <MenuItem value={"Family"}>Family</MenuItem>
                <MenuItem value={"Close Friends"}>Close Friends</MenuItem>
                <MenuItem value={"Friends"}>Friends</MenuItem>
                <MenuItem value={"Extended Family"}>Extended Family</MenuItem>
                <MenuItem value={"Household"}>Household</MenuItem>
              </Select>
            </FormControl>  
            <Button type="submit">Submit</Button>
          </form>

        </Box>
      </Modal>
    </div>
  );
}