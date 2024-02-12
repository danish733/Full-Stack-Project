import React from 'react';
import { Box, styled } from '@mui/material';

import { navData } from '../../constants/data';

const NavTextWrapper = styled(Box)({
  display: 'flex',
  marginLeft:-2,
  fontFamily:'arial',
  background:'#212121',
  color:'white',
  width:"97.5%",
  padding:20,
  overflowX:'hidden'
  
});

function Navbar() {
  return (
    <div>
      <NavTextWrapper>
        {navData.map((data, index) => (
          
            <p style={{marginLeft:35,fontSize:15}}>{data.text}</p>
         
        ))}
      </NavTextWrapper>
    </div>
  );
}

export default Navbar;

