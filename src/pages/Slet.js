import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "/Slet/dron.jpg",
    caption: "",
  },
  {
    url: "/Slet/helikopter.jpg",
    caption: "",
  },
  {
    url: "/Slet/postolje.jpg",
    caption: "",
  },
  {
    url: "/Slet/pozadina.jpg",
    caption: "",
  },
];

const slides2 = [
  {
    url: "/Slet/penjanje.jpg",
    caption: "",
  },
  {
    url: "/Slet/ot.jpg",
    caption: "",
  },
  {
    url: "/Slet/vrece.jpg",
    caption: "",
  },
  {
    url: "/Slet/konopac.jpg",
    caption: "",
  },
];

const title = `Susret planinara osnovaca`;
const sub = `Pohod, takmičenje i druženje`;
const texts1 = [
  {
    txt: `Polazeći od poražavajuće činjenice da nam djeca „boluju od nedostatka prirode“ u našem Klubu grupa entuzijasta pokreće intezivne aktivnosti u organizovanom planinarenju mladih.`,
  },
  {
    txt: `Kako naš Klub već duži niz godina provodi sistematske aktivnosti na
    planinarenju mladih došli smo na ideju da organizujemo „Susret
    planinara osnovaca Sarajeva“ manifestaciju za veći broj djece. i
    ostava.`,
  },
];
const texts2 = [
  {
    txt: `Zašto takva manifestacija?`,
  },
  {
    txt: `Na „Suretu planinara osnovaca Sarajeva“ okupljamo školske sekcije
    planinarske, ekološke i izviđačke sa područja Sarajeva. Na
    manifestaciji učestvuju i predstavnici škola koji tek planiraju da
    oforme slične sekcije. Na ovaj način pomažemo i povezujemo djecu i
    škole, dajemo konkretnu podršku u izvođenju vannastavnih aktivnosti.`,
  },
];

function Slet() {
  return (
    <>
      <InfoPage
        title={title}
        sub={sub}
        texts1={texts1}
        texts2={texts2}
        slides1={slides1}
        slides2={slides2}
        src="https://www.youtube.com/embed/qo_4aU3o658?si=y47uHN1j_b5KXaM2"
      />
    </>
  );
}

export default Slet;
