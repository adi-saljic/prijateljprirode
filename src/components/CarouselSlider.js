import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const CarouselSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box className="carousel-container">
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="h4">Carousel Slider</Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item>
            <Button onClick={goToPrevSlide}>
              <ArrowBackIos />
            </Button>
          </Grid>
          <Grid item>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
          </Grid>
          <Grid item>
            <Button onClick={goToNextSlide}>
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarouselSlider;
