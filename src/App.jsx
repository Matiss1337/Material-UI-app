import React from 'react'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import {Box} from "@mui/material"; 
import { Container, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';


function App() {

  return (
    <Box>
<Navbar/>
<Stack direction="row" spacing={2} justifyContent="space-between">
<Sidebar/>
<Feed/>
<Rightbar/>
</Stack>
<Add/>
    </Box>
  )
}

export default App


