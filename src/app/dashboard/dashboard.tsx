'use client'
import { Grid2, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { Diversity1, Logout, Settings } from '@mui/icons-material';
import DashboardFinances from './_components/DashboardFinances';
import { type User } from '@supabase/supabase-js'

const Dashboard = ({ user }: { user: User | null }) => {
  const theme = useTheme();
  
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={2}>
        <List id="">
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Finances" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Goals" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Family" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Family Group 2 (Close Fam)" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Diversity1 /></ListItemIcon>
            <ListItemText primary="Family Group 3 (ExtendedFam)" />
          </ListItemButton>
        </List>
        <List id="Options">
          <ListItemButton>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><Logout /></ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary={user?.id ? user.user_metadata.first_name + " " + user.user_metadata.last_name : "Profile"} />
          </ListItemButton>
        </List>
      </Grid2>
      <Grid2 size={10}>
        <DashboardFinances />
      </Grid2>
    </Grid2>
  )
}

export default Dashboard