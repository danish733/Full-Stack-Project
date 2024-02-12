import React from 'react'
import Header from '../header/Header'
import Home from './Home'
import {Box} from '@mui/material'

function HomeRender() {
  return (
    <div>
       <Header/>
     <Box style={{marginTop:70}}>
     <Home/>
     </Box>
    </div>
  )
}

export default HomeRender
