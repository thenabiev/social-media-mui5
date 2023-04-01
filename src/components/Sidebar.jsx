import { AccountBox, Article, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
  return (
    <Box 
    flex={1}
    p={2}
    sx={{
        display:{
            xs:"none",
            sm:"block"
        },
    }}
    >
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText 
              sx={{
                display:{
                  xs:"none",
                  md:"block"
                }
              }}
              primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar