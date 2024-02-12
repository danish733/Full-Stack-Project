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
      <DividerLine style={{ left: "41%" }} />
      {text}
      <DividerLine style={{ right: "41%" }} />
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

function Deals() {
  return (
    <div>
       <TypographyComponent text="HOT DEALS" />
        <ImageWrape>
            <ReferImg src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/87bdf177-d99b-4b0b-92c6-34204e201aaf.jpg&w=1920&q=75" alt="" srcset="" />
            <ReferImg src="https://d32baadbbpueqt.cloudfront.net/Homepage/a8997373-1d93-460b-81a2-cadb84ab5cca.gif" alt="" srcset="" />
            <ReferImg src="https://d32baadbbpueqt.cloudfront.net/Homepage/9b92bb73-edd9-4b40-84be-c0a3f9c32d7c.gif" alt="" srcset="" />
        </ImageWrape>
    </div>
  )
}

export default Deals
