import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "/Skola/IspredDoma.jpg",
    caption: "",
  },
  {
    url: "/Skola/cvorovi.jpg",
    caption: "",
  },
  {
    url: "/Skola/kolona.jpg",
    caption: "",
  },
  {
    url: "/Skola/stoni.jpg",
    caption: "",
  },
  {
    url: "/Skola/vrece.jpg",
    caption: "",
  },
  {
    url: "/Skola/kolona2.jpg",
    caption: "",
  },
  {
    url: "/Skola/dron.jpg",
    caption: "",
  },
];

const title = `Škola planinarstva`;
const sub = `Škola sa najdužom tradicijom i najvećim brojem članova u BiH.`;
const texts1 = [
  {
    txt: ` Od 2010.g. u našem Klubu egzistira i Omladinska sekcija koja okuplja veći broj djece i mladih. Polazeći od poražavajuće činjenice da nam djeca „boluju od nedostatka prirode“ u našem Klubu grupa entuzijasta pokreće intezivne aktivnosti u organizovanom planinarenju mladih.`,
  },
  {
    txt: `Vodeći se činjenicama da djeca koja aktivno provode vrijeme u prirodi,
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
    karakter.`,
  },
];

function Skola() {
  return (
    <>
      <InfoPage
        title={title}
        sub={sub}
        texts1={texts1}
        slides1={slides1}
        src="https://www.youtube.com/embed/b-Zx_H842KM?si=QBHejgN93--kVpU1"
      />
    </>
  );
}

export default Skola;
