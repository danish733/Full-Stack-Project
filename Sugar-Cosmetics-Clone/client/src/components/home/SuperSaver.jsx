import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const TypoFiled = styled(Typography)({
  fontFamily: "Arial",
  fontSize: 20,
  fontWeight: 700,
  textAlign: "center",
  position: "relative",
  padding: 50,
  color: "white",
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
    <DividerLine style={{ left: "40%" }} />
    {text}
    <DividerLine style={{ right: "40%" }} />
  </TypoFiled>
);

// Slide.js
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SlideWrapper = styled(Box)({
  backgroundColor: "#282828",
  marginTop: 50,
  marginBottom: 50,
  paddingBottom: 70,
});

const CarouselWrapper = styled(Carousel)({
  width: "75%",
  marginLeft: "12%",


  ".react-multiple-carousel__arrow": {
    backgroundColor:'black',
    
    
  },

  ".react-multiple-carousel__arrow--left": {
    backgroundColor:'#FC2779'

  },

  ".react-multiple-carousel__arrow--right": {
    backgroundColor:'#FC2779'
  },
});

const CarouselItem = styled(Box)({
  textAlign: "center",
  backgroundColor: "white",
  padding: "25px 45px",
  margin: "0 10px",
  borderRadius: "12px ",

});

const Image = styled("img")({
  width: "auto",
  height: 150,
  borderRadius: "8px ",
});

const ShortTitle = styled(Typography)({
  fontSize: 11,
});

const CartWrapper = styled(Box)({
  marginTop: 30,
  marginLeft: -40,
  marginRight: -40,
  marginBottom: -10,
  display: "flex",
});

const HeartWrapper = styled(Box)({
  width: 45,
  height: 45,
  border: "3px solid black",
  borderRadius: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "33px",
});

const CartAdd = styled(Box)({
  backgroundColor: "black",
  width: 190,
  height: 45,
  border: "3px solid black",
  borderRadius: "8px",
  marginLeft: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontFamily: "Arial",
  color: "white",
});

const Shade = styled(Typography)({
  color: "grey",
  fontSize:'12px',
  marginTop:'8px'
});

const PriceWrapper = styled(Typography)({
  display:'flex',
  justifyContent:'space-evenly',
  fontSize:'12px',
  marginTop:'8px'
});

const Mrp = styled(Typography)({
    fontSize: '12px',
    textDecoration: 'line-through',
    marginTop:2
  });
  
  const Cost = styled(Typography)({
    fontSize:'18px',
    fontWeight:'bold',
    marginTop:-2
  });
  
  const Discount = styled(Typography)({
    fontSize:'14px',
    color:'#FC2779'
  });

function SuperSaver({products}) {
  return (
    <div>
       <SlideWrapper>
      <TypographyComponent text="SUPER SAVERS" />
      <CarouselWrapper
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <CarouselItem key={product.id}>
            <Image src={product.url} alt="" srcSet="" />
            <ShortTitle>{product.title.shortTitle}</ShortTitle>
            <Shade>{product.tagline}</Shade>
            <PriceWrapper>
              <Mrp> ₹{product.price.mrp}</Mrp>
              <Cost> ₹{product.price.cost}</Cost>
              <Discount>({product.price.discount} off)</Discount>
            </PriceWrapper>
            <CartWrapper>
              <HeartWrapper>
                <FavoriteBorderIcon fontSize="inherit" />
              </HeartWrapper>
              <CartAdd>Add to cart</CartAdd>
            </CartWrapper>
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </SlideWrapper>
    </div>
  )
}

export default SuperSaver
