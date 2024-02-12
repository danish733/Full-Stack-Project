import React from "react";
import styled from "@emotion/styled";
import { Box, Typography, Divider } from "@mui/material";

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
    <DividerLine style={{ left: "24%" }} />
    {text}
    <DividerLine style={{ right: "24%" }} />
  </TypoFiled>
);

const ReferImg = styled("img")({
  width: "85%",
  display: "flex",
  margin: "auto",
  borderRadius: "12px",
  marginBottom: 50,
});

function Lalove() {
  return (
    <div>
      <TypographyComponent text="LA LA LOVE 18HR LIQUID LIPSTICKS! NOW IN 6 NEW SHADES" />
      <Box>
        <a href="https://">
          <ReferImg
            src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/2b1d2037-1dc3-4b94-8537-57cddbfb669e.jpg&w=1920&q=75"
            alt=""
            srcset=""
          />
        </a>
      </Box>
    </div>
  );
}

export default Lalove;
