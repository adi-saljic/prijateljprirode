import InfoPage from "./InfoPage";

import React, { useEffect } from "react";

const slides1 = [
  {
    url: "https://drive.google.com/thumbnail?id=1TShPDydKwzoP5IlShsOAsILx4-wFRpBD&sz=w4000",
    caption: `Osnivači "Prijatelj prirode" u Sarajevu 1905. godine`,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1BB7-7UGso4Y56acR4sqQot3dfz6FOmi4&sz=w4000",
    caption: `Izgradnja planinarske kuće na Boračkom jezeru 1926. godine`,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1ee4rvzFuHovXfuJYDHw5uMoYCA88E_qU&sz=w4000",
    caption: `Izlet na Malo polje`,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1djLUkJzaG3HTKaPTT7Vy1F3xM9_Egxtn&sz=w4000",
    caption: `Kako je prije izgledao dom na Malom polju`,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1uIqwacWan9aKznQe-z0_B-Zfo4RkPnTz&sz=w4000",
    caption: ``,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1pScsMp3iLPxUz8-k-JsORSjSkYbLlrbM&sz=w4000",
    caption: ``,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1Ie7aoIJ1wpRNFrJGsDU54S7WrYnHQl9T&sz=w4000",
    caption: ``,
  },
  {
    url: "https://drive.google.com/thumbnail?id=131VgmFGqiwvrfebxY--4U8s_ShatIFJg&sz=w4000",
    caption: ``,
  },
  {
    url: "https://drive.google.com/thumbnail?id=1--ko6-lfHkvcXbDamj0fHt54Srf1TDyZ&sz=w4000",
    caption: ``,
  },
];

const texts1 = [
  {
    txt: `Planinarski sportski klub „Prijatelj prirode“ Sarajevo je osnovan
    daleke 1905. godine, tačnije 5.4.1905.`,
  },
  {
    txt: `Prvobitni naziv mu je bio Turističko društvo Prijatelj prirode.
    Društvo je osnovano na inicijativu nekolicine radnika u željezničkoj
    radionici u Sarajevu. Ovo je prvo planinarsko udruženje u
    Austro-Ugarskoj monarhiji koje su osnovali i čiji su članovi bili
    radnici. Članovi društva su izuzetno aktivni u izgradnji planinarske
    infrastrukture (markiranje planinarskih staza, izgradnja
    planinarskih domova, osnivanje podružnica ...). Prvi svoj dom
    sagradili smo na Boračkom jezeru koji je otvoren 28.7.1927.g..
    Prostorije društva su se nalazile u Radničkom domu.`,
  },
  {
    txt: `Zahvaljujući svojoj radničkoj strukturi i svom djelovanju Društvo je
    bilo u nemilosti kod tadašnji vlasti koja im je ometala i
    zabranjivala rad 1913.g Poslije rata Društvo obnavlja svoj rad
    1919.g.. Kada je 1921. objavljena „Kraljeva obznana“ Društvo je
    formalno raspušteno te nastavlja svoj rad ilegalno.`,
  },
  {
    txt: `Društvo održava svoju novu izbornu skupštinu 1922.g. i postaje
    središnjica za prostor Jugoslavije gdje djeluju brojne podružnice
    Nastavljeno je razvijanje planinarske infrastrukture i izvođenje
    radnika u prirodu. I kod novih vlasti rad Društva je zabranjivan
    zbog avangardnih razmišljanja, spašavanja i udomljavanja Jevreja
    protjeranih iz Ausrije 1939.g..`,
  },
  {
    txt: `Radnička populacija trpi najveće gubitke u ratovima tako da je i
    Duštvo bilo neaktivno do početka 50tih godina.`,
  },
  {
    txt: `U Sarajevu 29.7.1953.g. u okviru PTTa se osniva-obnavlja rad Društva
    pod nazivom Planinarsko smučarsko društvo PTT „Prijatelj prirode“
    Sarajevo.`,
  },
  {
    txt: `Članovi Društva daju značajan doprinosu razvoju planinarstva
    jačajući infrastrukturu i učestvujući u svim značajnim planinarskim
    akcijama širom Jugoslavije. Na Igmanu je 1955.g. izgrađen
    planinarski dom na čijem mjestu se nalazi jedan od najbolji domova
    na ovim prostorima. Na Romniji lokalitet Crvene stijene 1970.g.
    opremljen je i otvoren dom skromnijeg kapaciteta.`,
  },
  {
    txt: `Potrebno je naglasiti da krajem 60tih članovi Društva čine većinu u
    skupini planinara koja markira i osigurava novu stazu za uspon na
    vrh Bosne i Hercegovine Maglić. Od tada do danas se ta staza zove
    „Poštarska“.`,
  },
  {
    txt: `Osim u razvoju i afirmaciji planinarstva Društvo je veoma aktivno i
    u organizaciji škola skijanja koje pohađa veliki broj djece i mladih
    ljudi.`,
  },
  {
    txt: `U novijoj istoriji Društvo se može pohvaliti da je 2002.g završilo
    obnovu doma na Igmanu koji služi za okupljanje planinara i
    organizovanje škola skijanja. Istaknuti član Društva je bio
    predsjednik Planinarskog saveza Bosne i Hercegovine. Od 2011.g.
    pored svih uobičajenih planinarskih aktivnosti u Društvu se počinje
    poklanjati posebna pažnja u radu sa djecom. Počinje sa radom škola
    planinarstva i pohodi za „malu raju“. U 2012.g. se osniva
    Orijentiring tim koji djeluje u okviru Društva i takmičari postižu
    dobre rezultate na domaćem prvenstvu i takmiče se kao
    reprezentativci na međunarodnim takmičenjima. Od 2016.g. Društvo je
    organizator manifestacije „Susret planinara osnovaca Sarajeva“. To
    je jednodnevna manifestacija ,promocije planinarstva i sportova
    vezanih za planinarstvo, kojoj prisustvuje više stotina osnovaca.`,
  },
  {
    txt: `Društvo je 2018. djelimično promjenilo svoje ime u Planinarski
    sportski klub Prijatelj prirode Sarajevo. Sve u cilju stvaranja
    uslova za razvoj sportova vezanih za planinarstvo...`,
  },
];

const title = `Historija`;
const sub = `Od početka do danas`;

function History() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InfoPage title={title} sub={sub} texts1={texts1} slides1={slides1} />
    </>
  );
}

export default History;
