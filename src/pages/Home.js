import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box, Button, Typography } from "@mui/material";
import Products from "../components/Products";
import { useState } from "react";
import "./home.css";
import FormDialog from "../components/FormDialog";

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
      <Box id="banner">
        <Box className="bg-image"></Box>
        <Box className="bg-text">
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
      <Products />

      
      <FormDialog
        open={isDialogOpen}
        handleClose={() => {
          setIsDialogOpen(false);
        }}
      />
      <Footer />
    </Box>
  );
}

export default Home;
