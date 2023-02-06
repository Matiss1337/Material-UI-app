import React, {useState} from 'react'
import Fab from '@mui/material/Fab';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})


const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom: "20px",
})

const Add = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (<div>
    <Tooltip title="Delete" sx={{position:"fixed", bottom:20, 
    left:{xs:"calc(50% - 25px)", md:30}}}
    onClick={handleOpen}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
          <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
<Typography variant="h6" color="grey" textAlign="center">Create post</Typography>
<UserBox>
    <Avatar alt="Barfy" 
      src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
      sx={{ width: 30, height: 30}}/>
<Typography fontWeight={500} variant="span">Barfy</Typography>
</UserBox>
        <TextField
        sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="Woof Woof!"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsOutlinedIcon color='primary'/>
            <BrokenImageOutlinedIcon color='secondary'/>
            <OndemandVideoOutlinedIcon color='success'/>
            <GroupAddOutlinedIcon color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
      <Button>Post</Button>
      <Button sx={{width:"100px"}}><CalendarMonthOutlinedIcon/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
      </div>
  )
}

export default Add