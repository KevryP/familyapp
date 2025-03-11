import { useTheme } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';
import { Card, CardContent, Grid2, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const DashboardFinances = () => {
  const theme = useTheme()
  console.log(theme.palette.primary.main)
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={4}>
        <Card>
          <CardContent>
            <List>
              <ListItemButton sx={{color: theme.palette.primary.main}}>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Family Member1" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Family Member2" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Family Member3" />
              </ListItemButton>
            </List>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={8}>
        <Card>
          <CardContent>
            <List>
              <ListItemButton>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Card 1" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Card 2" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Card 3" />
              </ListItemButton>
            </List>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={8}>
        <Card>
          <CardContent>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}

export default DashboardFinances