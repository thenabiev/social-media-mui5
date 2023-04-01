import { CheckBox, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import React from 'react'

const Feed = () => {
  return (
    <Box
    flex={4}
    bgcolor="#fff"
    p={2}
    >
       <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} src="https://i.pinimg.com/736x/18/73/9d/18739d16ecc461b74796a3d95fa97695.jpg" aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Esdeath"
        subheader="April 1, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://i.pinimg.com/736x/18/73/9d/18739d16ecc461b74796a3d95fa97695.jpg"
        alt="Esdeath"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Esdeath change profile picture
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<Favorite />} checkedIcon={<Favorite sx={{color:'red'}}/>} />

          
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card>
    </Box>
  )
}

export default Feed