import { Add, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react';


const StyledModal=styled(Modal)({
    display:'grid', 
    placeItems:'center'
})

const UserBox=styled(Box)({
    display:'flex', 
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px',
    marginTop:"10px"
})

const AddComponent = () => {
    const [open, setOpen]=useState(false)
    console.log("Hi")
  return (
    <React.Fragment>
        <Tooltip 
        onClick={()=>setOpen(true)}
        title="Add Post" 
        sx={{position:'fixed', bottom:20, left:{
            xs:"calc(50% - 25px)",
            md:30
        }}}>
            <Fab color='primary' aria-label='add'>
                <Add />
            </Fab>
        </Tooltip>
        
        {/* MODAL */}

        <StyledModal
            open={open}
            onClose={()=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box width={400} minHeight={280} bgcolor="#fff" p={3} borderRadius={5}>
            <Typography variant='h6' color="gray">Create post</Typography>
            <UserBox>
                <Avatar 
                src='https://i.pinimg.com/736x/18/73/9d/18739d16ecc461b74796a3d95fa97695.jpg'
                sx={{width:30, height:30, }}/>
                <Typography fontWeight={500} variant="span">Esdeath</Typography>
            </UserBox>
            <TextField 
                sx={{
                    width:'100%'
                }}
                id="standard-multiline-static"
                label="Type something"
                multiline
                rows={3}
                placeholder="What's on your mind ?"
                
            />
            <Stack direction='row' gap={1} mt={2} mb={2}>
                <EmojiEmotions sx={{cursor:'pointer'}} color="warning" />
                <Image sx={{cursor:'pointer'}} color="success" />
                <VideoCameraBack sx={{cursor:'pointer'}} color="error" />
                <PersonAdd sx={{cursor:'pointer'}} color="secondary" />
            </Stack>
            <ButtonGroup fullWidth>
                <Button variant='contained'>Post</Button>
                <Button 
                variant='contained'
                sx={{width:"100px"}}>
                    <DateRange />
                </Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
    </React.Fragment>
  )
}

export default AddComponent