import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getImage } from "../pages/SerbrnaLija";

const items = [
  {
    h4: "Planinarski dom na Malom polju",
    h5: "Informacije i cijene",
    image: getImage(
      "https://drive.google.com/file/d/1_1YS2Zd-Ior8A_2uwULfh7z9pr04RMDK/view?usp=drive_link"
    ),
    link: "/dom",
  },
  {
    h4: "Škola planinarstva",
    h5: "Izleti za mlade planinare",
    image: getImage(
      "https://drive.google.com/file/d/1usJgNPTEBEXnemFIoqUAB2gq2cFmYXd8/view?usp=drive_link"
    ),
    link: "/skola",
  },
  {
    h4: `Transferzala "Srebrna Lija" `,
    h5: "Visočica - Bjelašnica - Igman",
    image: getImage(
      "https://drive.google.com/file/d/1VaO-Qu6hFzpgRUaLM26ELrxWD5Y-cgG_/view?usp=drive_link"
    ),
    link: "/srebrnalija",
  },
  {
    h4: "Susret planinara osnovaca",
    h5: "Poseban projekat za mlade",
    image: getImage(
      "https://drive.google.com/file/d/1_KJdFSchpohk5GVV2uRAowXhm9-ADsKc/view?usp=drive_link"
    ),
    link: "/slet",
  },
  {
    h4: `Historija društva `,
    h5: "Naučite više",
    image: getImage(
      "https://drive.google.com/file/d/1TShPDydKwzoP5IlShsOAsILx4-wFRpBD/view?usp=drive_link"
    ),
    link: "/historija",
  },
  {
    h4: `Orijentiring `,
    h5: "Sport o kojem se malo zna",
    image: getImage(
      "https://drive.google.com/file/d/1BuMcZxx2avDTotUWRkdWQR5SFPuEyxaS/view?usp=drive_link"
    ),
    link: "/orijentiring",
  },
];

function Products({ title }) {
  return (
    <Box id="izdvojeno">
      <Typography variant="h4">PSK "Prijatelj prirode" Sarajevo</Typography>
      <Box className="artikl-container">
        {items.map((item, index) => {
          return (
            <Box className="artikl" key={index}>
              <Link to={item.link} style={{ textDecoration: "none" }}>
                <img src={item.image} alt="" />
                <Box
                  className="opis"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography variant="h4">{item.h4}</Typography>
                  <Typography variant="h5">{item.h5}</Typography>
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Products;
