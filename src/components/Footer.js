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
        alignItems: "center",
        height: "100px",

        width: "100%",
      }}
    >
      {/* Left side content */}
      <Box padding="5px" width="80%">
        <Typography>PSK "Prijatelj prirode" Sarajevo</Typography>
        <Paragraph>Sjedište kluba: Behdžeta Mutevelića 12</Paragraph>
        <Paragraph>Kontakt: 061035544</Paragraph>
      </Box>

      {/* Right side icons */}
      <Box display="flex" flexDirection="column">
        <Box display="flex">
          <IconButton
            onClick={() =>
              handleIconClick(
                "https://www.facebook.com/profile.php?id=100057484306767"
              )
            }
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              handleIconClick(
                "https://www.instagram.com/psk_prijatelj_prirode?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              )
            }
          >
            <InstagramIcon />
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton
            onClick={() => handleIconClick("mailto:planinar@bih.net.ba")}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              handleIconClick("https://maps.app.goo.gl/5DTbPvNSyZLVzpBN6")
            }
          >
            <LocationOnIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
