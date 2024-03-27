import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "/Skola/IspredDoma.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Skola/cvorovi.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Skola/kolona.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Skola/stoni.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Skola/vrece.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Skola/kolona2.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Skola/dron.jpg",
    caption: "Slide 3",
  },
];

const slides2 = [];

const title = `Škola`;
const sub = `Škola sa najdužom tradicijom i najvećim brojem članova u BiH.`;
const text = ` Od 2010.g. u našem Klubu egzistira i Omladinska sekcija koja okuplja veći broj djece i mladih. Polazeći od poražavajuće činjenice da nam djeca „boluju od nedostatka prirode“ u našem Klubu grupa entuzijasta pokreće intezivne aktivnosti u organizovanom planinarenju mladih.`;

function Skola() {
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
          Vodeći se činjenicama da djeca koja aktivno provode vrijeme u prirodi,
          posebno na većim nadmorskim visinama, poboljšavaju svoj imunološki
          sistem, kvalitetno troše i obnavljaju energiju. Poboljšavaju svoju
          krvnu sliku. Jačaju samopouzdanje jer nekad nedostižni i daleki vrhovi
          i predjeli upornošću i međusobnom podrškom u grupi postaju dostižni i
          sve lakše pristupačni. Savladavanjem prirodnih prepreka podspješuju
          motoričke sposobnosti. Socijane vještine i empatija dolaze do
          izražeja, pomoći drugom i tražiti pomoć postaje sastavni dio druženja.
          I naravno podjela zadovoljstva nakon uloženog truda i ostvarenog
          cilja. U konačnici poslije planinarenja postižu bolje rezultate u
          primarnim škoskim obavezama. Djeca realnije procjenjuju svoje
          psihofizičke mogućnosti i realnije žive u svom okruženju. Jačaju
          karakter.
        </Typography>
      </Box>
      <Box m={2} display="flex" justifyContent="center" alignItems="center">
        {/* Embedding YouTube video using iframe */}
        <iframe
          height="315"
          src="https://www.youtube.com/embed/b-Zx_H842KM?si=QBHejgN93--kVpU1"
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

export default Skola;
