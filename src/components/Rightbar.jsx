import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
    flex={2}
    p={2}
    sx={{
        display:{
            xs:"none",
            sm:"block"
        }
    }}
    >
      <Box position='fixed' width={320}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Erwin Rommel" src="https://bestofdate.com/img/celeb/erwin-rommel-22.jpg" />
          <Avatar alt="Rias" src="https://i.pinimg.com/236x/43/64/c5/4364c5349e73042031cd8966c9d8b0c5.jpg" />
          <Avatar alt="Creeper" src="https://avatarfiles.alphacoders.com/219/thumb-219254.png" />
          <Avatar alt="Taksim Dayı" src="https://i.ytimg.com/vi/q_GPNXnHTKo/maxresdefault.jpg" />
          <Avatar alt="Maqsud Semkirli" src="https://i.ytimg.com/vi/Woij_xgG9XA/mqdefault.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5} >
      
        <ImageListItem >
          <img
            src='https://rostec.ru/upload/iblock/50e/ijmphh6fu64qujnb2prhzgs59ep18lps.jpg'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://pbs.twimg.com/ext_tw_video_thumb/1526407571954966532/pu/img/QZjFJpfQulvkIw1C.jpg'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://i.pinimg.com/736x/88/ee/9c/88ee9c89662e60bb4a419e08f27dc035.jpg'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://ichef.bbci.co.uk/images/ic/1232x1232/p095kr23.jpg'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        <ImageListItem >
          <img
            src='https://pbs.twimg.com/media/EmMgcZ8XIAAJEVB.jpg'
            alt='Image thumbnail'
            loading="lazy"
          />
        </ImageListItem>
        </ImageList>
{/* #####################################################################################################################
####################################################################################################################
############################################################################################################# */}
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, maxHeight:200, overflowY:'scroll', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Creeper" src="https://avatarfiles.alphacoders.com/219/thumb-219254.png" />
        </ListItemAvatar>
        <ListItemText
          
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Creeper
              </Typography>
              {" I really like your new home"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Erwin Rommel" src="https://bestofdate.com/img/celeb/erwin-rommel-22.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="All right !"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Heinz Guderian
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar