import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {

const [open, setOpen]=useState(false)

    const StyledToolbar=styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })

    const Search=styled("div")(({theme})=>({
        backgroundColor: '#fff',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width:"35%"
    }));

    const Icons=styled(Box)(({theme})=>({
        display:'none',
        alignItems:'center',
        gap: '1.25em',
        [theme.breakpoints.up('sm')]:{
            display:'flex'
        }
    }))

    const UserBox=styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        gap: '10px',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    }))
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography 
            sx={{
                display:{
                    xs:'none',
                    sm:'block'
                }
            }}
            variant='h6'>
                Feysbuk
            </Typography>
            <Pets 
            sx={{
                display:{
                    xs:'block',
                    sm:"none"
                },
                cursor:'pointer'
            }}
            />
            <Search>
                <InputBase sx={{flex:1}} placeholder='Search...' />
            </Search>
            <Icons >
                <Badge 
                sx={{cursor:'pointer'}}
                badgeContent={4} color='error'>
                    <Mail />
                </Badge>
                <Badge 
                sx={{cursor:'pointer'}}
                badgeContent={2} color='error'>
                    <Notifications />
                </Badge>
                <Avatar 
                sx={{
                    height:30,
                    width:30,
                    cursor:'pointer'
                }}
                src='https://i.pinimg.com/736x/18/73/9d/18739d16ecc461b74796a3d95fa97695.jpg'
                onClick={()=>setOpen(true)}
                />  
            </Icons>
            <UserBox
                onClick={()=>setOpen(true)}
            >
                <Avatar 
                sx={{
                    height:30,
                    width:30,
                    cursor:'pointer'
                }}
                src='https://i.pinimg.com/736x/18/73/9d/18739d16ecc461b74796a3d95fa97695.jpg'
                />
                <Typography variant='span'>Esdeath</Typography>
            </UserBox>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem 
        onClick={()=>setOpen(false)}
        >Profile</MenuItem>

        <MenuItem 
        onClick={()=>setOpen(false)}
        >My account</MenuItem>

        <MenuItem 
        onClick={()=>setOpen(false)}
        >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar