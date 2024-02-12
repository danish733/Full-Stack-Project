import React from "react";
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #212121;
  width: 590px;
  height: 39px;
  border-radius: 4px 0px 0px 4px;
  margin-left: 108px;
  margin-top: 4px;
  border: 1px solid white;
`;

const InputSearchBase = styled(InputBase)(({ theme }) => ({
  padding: '5px 20px',
  fontSize: '16px',
  color: 'white', // Set the text color to white
  '& input': {
    '&::placeholder': {
      color: '#b6b6b6',
    },
  },
}));

const SearchIconWrapper = styled(Box)`
  color: black;
  margin-top: 10px;
  margin-left: 18px;
`;

function Search() {
  return (
    <div style={{ display: "flex" }}>
      <SearchContainer>
        <InputSearchBase placeholder='Try "Liquid Lipistick"' />
      </SearchContainer>
      <div
        style={{
          width: 110,
          background: "white",
          marginTop: 4,
          borderRadius: "0px 4px 4px 0px",
          marginLeft: -4,
          display:"flex",
          cursor:"pointer"
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <div style={{ color: "black", marginTop:12, fontFamily:"Arial" }}>Search</div>
      </div>
    </div>
  );
}

export default Search;
