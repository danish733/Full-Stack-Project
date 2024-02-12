

import React, { useState } from 'react'
import { Box,styled,Typography, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TypographyText = styled(Typography)({
    fontFamily: "Arial",
    fontSize: 14,
    marginTop: 15,
    marginLeft: 4,
    fontWeight: "medium",
    textTransform: "capitalize",
    display:'flex',
    whiteSpace: 'nowrap',
    cursor:'pointer'
    
  })

  const ArrowDownButton = styled(KeyboardArrowDownIcon)({
    cursor:'pointer'
  })

  const LogoutButton = styled(MenuItem)({
    padding: -5,
    margin:-4
  })

function Profile({account, setAccount}) {
    const [open ,setOpen] =useState(false)

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }

    const logoutUser=()=>{
        setAccount('')
    }

  return (
    <>
      <Box onClick={handleClick}>
      < TypographyText>Hi, { account } <ArrowDownButton/></ TypographyText>

      <Menu
       
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <LogoutButton onClick={()=>{ handleClose(); logoutUser(); }}>Logout</LogoutButton>
      </Menu>
      </Box>
    </>
  )
}

export default Profile
