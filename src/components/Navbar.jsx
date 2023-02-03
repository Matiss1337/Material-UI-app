import React from 'react'
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography, styled, InputBase, Avatar, } from '@mui/material';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import { display } from '@mui/system';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

const StyledToolbar = styled(Toolbar)({
  display: "flex", 
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  
}));


const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Matiss.TECH</Typography>
      <VideoSettingsIcon sx={{display:{xs:"block", sm:"none"}}}/>
      <Search ><InputBase placeholder='search' fullWidth></InputBase></Search>
      <Icons>
      <Badge badgeContent={4} color="error">
      <MailIcon/>
      </Badge>
      <Badge badgeContent={4} color="error">
      <NotificationsActiveOutlinedIcon/>
      </Badge>
      <Avatar src='https://avatars.githubusercontent.com/u/84022755?s=400&u=83b2ca7546e5e320a1d51478a1dc09f89fa022b4&v=4'/>
      </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar