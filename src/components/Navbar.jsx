import React, { useState } from 'react'
import {Box} from "@mui/material";
import { AppBar, Toolbar, Typography, styled, InputBase, Avatar, } from '@mui/material';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
  display: "none",
  gap : "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap : "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  },
}));


const Navbar = () => {

  const [open, setOpen] = useState(false);

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
        <Badge badgeContent={2} color="error">
        <NotificationsActiveOutlinedIcon/>
        </Badge>
        <Avatar sx={{width: 40, height: 40}}
        onClick={() => setOpen(true)}
        src='https://avatars.githubusercontent.com/u/84022755?s=400&u=83b2ca7546e5e320a1d51478a1dc09f89fa022b4&v=4'/>
        </Icons>
        
        <UserBox><Avatar sx={{width: 40, height: 40}}
        onClick={() => setOpen(true)}
        src='https://avatars.githubusercontent.com/u/84022755?s=400&u=83b2ca7546e5e320a1d51478a1dc09f89fa022b4&v=4'/>
        <Typography variant='span'>Matiss</Typography>
        </UserBox>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar