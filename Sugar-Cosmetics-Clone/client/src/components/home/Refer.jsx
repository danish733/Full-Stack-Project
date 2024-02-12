import React from 'react'
import styled from "@emotion/styled";
import {Box, Typography, Divider } from "@mui/material";


const TypoFiled = styled(Typography)({
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: 700,
    textAlign: "center",
    position: "relative",
    padding: 30,
    color: "black",
  });
  
  const DividerLine = styled(Divider)({
    width: "55px",
    height: "1px",
    background: "#FC2779",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  });
  
  const TypographyComponent = ({ text }) => (
    <TypoFiled>
      <DividerLine style={{ left: "38%" }} />
      {text}
      <DividerLine style={{ right: "38%" }} />
    </TypoFiled>
  );

  const ReferImg = styled('img')({
    width:'95%',
    display:'flex',
    margin:'auto',
    borderRadius:'12px',
    marginBottom:50

  })




function Refer() {
  return (
    <div>
          <TypographyComponent text="REFER YOUR FRIENDS" />
        <Box>
            <a href="https://"><ReferImg src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F20395dda-05f5-4bdf-8015-a795d7c22678.jpg&w=1920&q=75" alt="" srcset="" /></a>
        </Box>

    </div>
  )
}

export default Refer
