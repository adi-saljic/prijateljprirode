import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paragraph } from "./styledComponents";

const Footer = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#EEF8FC",
        color: "#0F8FA9",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100px",

        width: "100%",
      }}
    >
      {/* Left side content */}
      <Box padding="10px">
        <Typography>PSK "Prijatelj prirode" Sarajevo</Typography>
        <Paragraph>Adresa</Paragraph>
        <Paragraph>Kontakt</Paragraph>
      </Box>

      {/* Right side icons */}
      <Box mr={4} width="20%" display="flex" flexDirection="column">
        <Box display="flex">
          <IconButton onClick={() => handleIconClick("")}>
            <FacebookIcon />
          </IconButton>
          <IconButton onClick={() => handleIconClick("")}>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton onClick={() => handleIconClick("")}>
            <EmailIcon />
          </IconButton>
          <IconButton onClick={() => handleIconClick("")}>
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
