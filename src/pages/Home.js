import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import Products from "../components/Products";
import { useState } from "react";
import "./home.css";

function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Box>
      <Header />
      <Box id="hero">
        <Box className="homeText">
          <Typography variant="h4" style={{ textAlign: "center" }}></Typography>
        </Box>
      </Box>
      <Products />

      <Box id="banner">
        <Box class="bg-image"></Box>
        <Box class="bg-text">
          <Typography variant="h4">
            Ostvarite mnoge pogodnosti tako što ćete postati član našeg društva
          </Typography>
          <Button
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            Postani član
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
