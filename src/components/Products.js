import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const items = [
  {
    h4: "Planinarski dom na Malom polju",
    h5: "Informacije i cijene",
    image: "/dom.jpg",
    link: "/infoPage",
  },
  {
    h4: "Škola planinarstva",
    h5: "Izleti za mlade planinare",
    image: "/dom.jpg",
    link: "/dom",
  },
  {
    h4: `Transferzala "Srebrna Lija" `,
    h5: "Visočica - Bjelašnica - Igman",
    image: "/dom.jpg",
    link: "/dom",
  },
  {
    h4: "Susret planinara osnovaca",
    h5: "Poseban projekat za mlade",
    image: "/dom.jpg",
    link: "/dom",
  },
  {
    h4: `Historija društva `,
    h5: "Naučite više",
    image: "/dom.jpg",
    link: "/dom",
  },
  {
    h4: `Orijentiring `,
    h5: "Sport o kojem se malo zna",
    image: "/dom.jpg",
    link: "/dom",
  },
];

function Products({ title }) {
  return (
    <Box id="izdvojeno">
      <Typography variant="h4">PSK "Prijatelj prirode" Sarajevo</Typography>
      <Box className="artikl-container">
        {items.map((item) => {
          return (
            <Box className="artikl">
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
