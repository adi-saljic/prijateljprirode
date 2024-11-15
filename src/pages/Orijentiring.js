import InfoPage from "./InfoPage";
import React, { useEffect } from "react";

const slides1 = [
  {
    url: "https://drive.google.com/thumbnail?id=1qp3noralGTFom8Gl-S8r817UTXZaemSP&sz=w4000",
    caption:
      "Reprezentacije Bosne i Hercegovine na Prvenstvu jugoistočne Evrope Igman 2023",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1EqlCrpC8mWP5x9LM-WM4M6CWT5mNiKLX&sz=w4000",
    caption: "Orijentiring karta Velikog polja",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1KQtaf-b6L89guPyTC4-LNsRhmBxYxAfg&sz=w4000",
    caption: "Zlatna ekipa, državni prvaci",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1kiTHXQ86pNNGRSrkRzJsv8rVaJhhSVPD&sz=w4000",
    caption: "",
  },

  {
    url: "https://drive.google.com/thumbnail?id=1WZVZ2FhOLIqfpc9cUAzS0EKsHVQXl5n2&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1WYNRpBqLkbMxHhoSiXw0Uo3yfkdPsEyh&sz=w4000",
    caption: "",
  },
];

const texts1 = [
  {
    txt: `Orijentiring je sport u kojem se uz pomoć karte i kompasa trebaju
    proći kontrolne tačke ucrtane na karti u što kraćem vremenu i
    pravilnom redoslijedu. Potiče iz skandinavskih zemalja, a danas je
    rasprostranjen u svim dijelovima svijeta.`,
  },
  {
    txt: `U Bosni i Hercegovini je manje zastupljen, ali naše društvo aktivno se
    takmiči od 2013. godine, otprilike kada je i osnovan Orijentiring
    savez Federacije Bosne i Hercegovine. Naši takmičari redovno učestvuju
    na državnim prvenstvima, a najbolji među njima svake godine idu i na
    balkanska prvenstva.`,
  },
  {
    txt: `Naš klub je takođe bio suorganizator prvog Prvenstva Jugoistočne
    Evrope na prostoru Bosne i Hercegovine. To takmičenje je održano u
    Sarajevu i na Igmanu, obilježeno rekordnim brojem takmičara iz našeg
    kluba i iz BiH. Trenutno nemaju posebne trenere i treninge, pa se
    oslanjaju na iskustvo svojih starijih kolega iz društva, literature i
    samostalne fizičke pripreme.`,
  },
  {
    txt: `Orijentiring se dijeli na orijentiring u trčanju, MTB orijentiring i
    orijentiring na skijama. Naši takmičari do sada su se takmičili samo u
    trčanju. Trke su podijeljene na sprint, koje se najčešće odvijaju u
    gradu, middle i long, koje se održavaju najčešće na planinama po
    raznom terenu. Uz pomoć takmičarskog kompasa i karte takmičar sam sebi
    određuje put kojim će ići. Kada dođe u krug koji je nacrtan na karti,
    tu nije priča gotova jer su prizme koje traži često sakrivene, i
    takmičar ima tabelu sa posebnim znakovima koji ga navode gdje se
    kontrolna tačka zapravo nalazi. Kada nađe prizmu, svoj čip koji drži
    na prstu prisloni uz kontrolnu stanicu i tada se stanica ocita na
    cipu. Po završetku trke, tj. kada takmičar uđe u cilj, ide do
    kontrolora koji mu isprintaju papirić na kojem se nalazi kada je bio
    na kojoj tački i u kojem redoslijedu ih je očitao.`,
  },
  {
    txt: `Orijentiring je sport u kojem se svi mogu takmičiti, pa tako i
    kategorije postoje za muške i ženske od 10 do 75+ godina. A za one
    najmlađe ili za početnike tu su orijentiring labirintovi u kojima je
    najlakše učiti čitanje karte.`,
  },
  {
    txt: `Osim što je sport, orijentiring promoviše timski rad, outdoor
    aktivnosti i razvoj navigacijskih vještina.`,
  },
];

const title = `Orijentiring`;
const sub = `Prvo misli pa onda trči`;

function Orijentiring() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <InfoPage title={title} sub={sub} texts1={texts1} slides1={slides1} />
    </>
  );
}

export default Orijentiring;
