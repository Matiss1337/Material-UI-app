import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <Container sx={{bgcolor: "tomato", height: "100vh"}}>
<Typography variant='h1' sx={{p:1}}>hello</Typography>
    </Container>
    </div>
  )
}

export default App
