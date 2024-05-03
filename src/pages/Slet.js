import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { getImage } from "./SerbrnaLija";
const slides1 = [
  {
    url: getImage(
      "https://drive.google.com/file/d/1xnuoxmNRAlgfnzOELHbNozl4IH-uayIY/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/14_8KHsLSbP6O46TLzHqQ93zoKWH9O8hD/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1c9J5vwyjX7Umdv4egguNFD-LjmgH7QqA/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/123xTkpSDnBXXf90F9p6SSk5y760CAXFC/view?usp=drive_link"
    ),
    caption: "",
  },
];

const slides2 = [
  {
    url: getImage(
      "https://drive.google.com/file/d/12iRtyHCFOVzGJw3FF80MzYiLHDryaptd/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1TRWKnaD_Hxo4mD-kSriaqE9cdB7DTuE3/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1Nf1f83zezUf4rL1EZkqr80SsSuUmvzJg/view?usp=drive_link"
    ),
    caption: "",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1qhYOaDMz_Ywfso67T4aoiyMc-TlUpAQz/view?usp=drive_link"
    ),
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
