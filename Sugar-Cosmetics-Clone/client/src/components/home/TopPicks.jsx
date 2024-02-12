import React from 'react'
import styled from "@emotion/styled";
import {Box, Typography, Divider } from "@mui/material";


// TypographyComponent.js
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
      <DividerLine style={{ left: "36%" }} />
      {text}
      <DividerLine style={{ right: "36%" }} />
    </TypoFiled>
  );

  const ReferImg = styled('img')({
    width:'95%',
    display:'flex',
    // margin:'auto',
    borderRadius:'12px',
    marginBottom:50,
    marginLeft:30,
    justifyContent:'center'

  })

  const ImageWrape = styled(Box)({
    width:'30%',
    display:'flex',
    marginLeft:50

  })

function TopPicks() {
  return (
    <div>
       <TypographyComponent text="TOP PICKS OF THE WEEK" />
        <ImageWrape>
            <ReferImg src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/c84926c4-8914-484e-8ad5-649fd1980d1f.jpg&w=1920&q=75" alt="" srcset="" />
            <ReferImg src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/cd5c828f-a59f-4342-8955-25c7a9f7c70d.jpg&w=1920&q=75" alt="" srcset="" />
            <ReferImg src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/8b810378-baea-4a92-a85d-2e4412ad5c4b.jpg&w=1920&q=75" alt="" srcset="" />
        </ImageWrape>
    </div>
  )
}

export default TopPicks
