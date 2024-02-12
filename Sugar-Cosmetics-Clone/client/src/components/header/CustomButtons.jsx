import { Box, Button, styled } from "@mui/material";
import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const LoginButton = styled(Button)({
  color: "white",
  fontFamily: "Arial",
  fontSize: 14,
  marginTop: 9,
  marginLeft: -5,
  fontWeight: "medium",
  textTransform: "capitalize",
});

const AccountCircleStyled = styled(AccountCircleIcon)({
  marginTop: 15,
  marginLeft: 130,
});

const IconsWrapper = styled(Box)({
  marginLeft: 75,
  marginTop: 12,
  display: "flex",
  justifyContent: "space-around",
});

const IconContainer = styled(Box)({
  marginRight: 10,
});



function CustomButtons() {
  const {account, setAccount } = useContext(DataContext);

  return (
    <Box display={"flex"}>
      <AccountCircleStyled />
      {
        account ? <Profile account={account} setAccount={setAccount}/> : <a href="/login">
        <LoginButton>Login/register</LoginButton>
      </a>
      }

      <IconsWrapper>
        <IconContainer>
          <FavoriteBorderIcon />
        </IconContainer>
        <IconContainer>
          <ShoppingBagOutlinedIcon />
        </IconContainer>
        <IconContainer>
          <MonetizationOnOutlinedIcon />
        </IconContainer>
      </IconsWrapper>
    </Box>
  );
}

export default CustomButtons;
