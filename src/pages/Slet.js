import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "/Slet/dron.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Slet/helikopter.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Slet/postolje.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Slet/pozadina.jpg",
    caption: "Slide 3",
  },
];

const slides2 = [
  {
    url: "/Slet/penjanje.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Slet/ot.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Slet/vrece.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Slet/konopac.jpg",
    caption: "Slide 3",
  },
];

const title = `Susret planinara osnovaca`;
const sub = `Pohod, takmičenje i druženje`;
const text = `Polazeći od poražavajuće činjenice da nam djeca „boluju od nedostatka prirode“ u našem Klubu grupa entuzijasta pokreće intezivne aktivnosti u organizovanom planinarenju mladih.`;

function Slet() {
  return (
    <>
      <Header />
      <InfoPage
        title={title}
        sub={sub}
        txt={text}
        slides1={slides1}
        slides2={slides2}
      />
      <Box m={2}>
        <Typography>
          Kako naš Klub već duži niz godina provodi sistematske aktivnosti na
          planinarenju mladih došli smo na ideju da organizujemo „Susret
          planinara osnovaca Sarajeva“ manifestaciju za veći broj djece. i
          ostava.
        </Typography>
        <Typography>Zašto takva manifestacija?</Typography>
        <Typography>Potkrovlje je opremljeno sa 10 kreveta.</Typography>
        <Typography>
          Na „Suretu planinara osnovaca Sarajeva“ okupljamo školske sekcije
          planinarske, ekološke i izviđačke sa područja Sarajeva. Na
          manifestaciji učestvuju i predstavnici škola koji tek planiraju da
          oforme slične sekcije. Na ovaj način pomažemo i povezujemo djecu i
          škole, dajemo konkretnu podršku u izvođenju vannastavnih aktivnosti.
        </Typography>
      </Box>
      <Box m={2} display="flex" justifyContent="center" alignItems="center">
        <iframe
          height="315"
          src="https://www.youtube.com/embed/qo_4aU3o658?si=y47uHN1j_b5KXaM2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            width: "100%", // Default width for all screen sizes
            maxWidth: "560px", // Max width to prevent iframe from being too wide
            margin: "0 auto", // Center the iframe horizontally
          }}
        ></iframe>
      </Box>
      <Footer />
    </>
  );
}

export default Slet;
