import { DeleteOutline, PlusOne } from '@mui/icons-material'
import { Button, styled, Typography } from '@mui/material'
import React from 'react'

const App = () => {

const BlackButton=styled(Button)({
  backgroundColor:'#111',
  "&:hover":{
    backgroundColor:'#222',
    color:"#fff"
  }  
})

  return (
    <div >App
      <Button color='otherColor' variant='contained' startIcon={<DeleteOutline />}>Lakartcicikicikatcka</Button>
      <Typography variant='h5' component='a'>Salam 33</Typography>
      <BlackButton variant='contained'>Duben</BlackButton>
    </div>
  )
}

export default App