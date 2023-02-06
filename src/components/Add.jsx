import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

const Add = () => {
  return (
    <Tooltip title="Delete" sx={{position:"fixed", bottom:20, 
    left:{xs:"calc(50% - 25px)", md:30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  )
}

export default Add