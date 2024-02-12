import React from 'react'
import {AppBar, Toolbar,Box, styled} from '@mui/material'
import sugar_logo from '../../images/sugar_logo.jpg'

import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'

const StyledHeader = styled(AppBar)`
    background: black;
    height: 70px
`

function Header() {

    

  return (
    <div>
      <StyledHeader>
            <Toolbar>
              <Link to='/'>
                <Box ml={11}>
                    <img src={sugar_logo} alt="logo" style={{width:155, marginTop:5}}/> 
                </Box>
                </Link>
                <Search/>
                <Box>
                <CustomButtons/>
                </Box>
            </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header
