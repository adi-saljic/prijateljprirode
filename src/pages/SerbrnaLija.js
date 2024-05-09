import InfoPage from "./InfoPage";

import React, { useEffect } from "react";

export const getImage = (rawURL: string) => {
  const RAW_URL1 = rawURL.split("/d/");
  const RAW_URL2 = RAW_URL1[1].split("/view");
  const IMAGE_ID = RAW_URL2[0];
  return `https://drive.google.com/thumbnail?id=${IMAGE_ID}&sz=w4000`;
};

const slides1 = [
  {
    url: getImage(
      "https://drive.google.com/file/d/1VaO-Qu6hFzpgRUaLM26ELrxWD5Y-cgG_/view?usp=drive_link"
    ),
    caption: "Izgled značke",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1-bIjKwBEy9vTFjPp0W3wiqWpD0XyGnBP/view?usp=drive_link"
    ),
    caption: "Krvavac",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1Vza1aUAG3LJ17AxR6lV5eCgfl6FovMhL/view?usp=drive_link"
    ),
    caption: "Karta rute",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1mWw6cKL1YBtv3fRxSmuRRV8xUFRGxmFy/view?usp=drive_link"
    ),
    caption: "",
  },
];

const slides2 = [
  {
    url: getImage(
      "https://drive.google.com/file/d/1jHroWv5D-o3ZwhlM3wb_oUlKtgooUclv/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 1: Tušila",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1WGblR9nPED-vO9tl9vDCHgwxkmp6AJfd/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 2: vrh Vito",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1zZoWg4WglUz4lx6dWEbBVYyXoImJY4Iu/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 3: vrh Drstva",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1HyrAHSwDj3cMpVbRYTIJqF7ISuDL4Bhs/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 4: selo Bobovica",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1rE8DtNMr1-_0cj0dEhlUIz1PsI5dv84c/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 5: Kanjon Rakitnice",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/19A_h83BuZIV6yuPLIYydING0-D3FNUQz/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 6: Lukomir",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/13W-Ff6IauOF90QkXGVz3X4BnZOTtKsBh/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 7: vrh Krvavac",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1EBiJFeqB6tqUCKJlCo2p7v3NTuMyW0bI/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 8: Planinarska kuća Sitnik",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/15Iw_bjGtI92PyjIWdfnyybcq0cNOFZth/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 9: Planinaski dom Stanari",
  },
  {
    url: getImage(
      "https://drive.google.com/file/d/1_1YS2Zd-Ior8A_2uwULfh7z9pr04RMDK/view?usp=drive_link"
    ),
    caption: "Kontrolna tačka 10: Finish u našem domu na Malom polju",
  },
];

const texts1 = [
  {
    txt: `Polazna tačka naše transferzale nalazi se u Tušilima (1200 metara n/v)
    na planini Visočici. Visočicu smatraju prirodnom granicom između
    Hercegovine i Bosne. Ime je dobila po svojim brojnim markantnim
    vrhovima. Najviši vrh je Džamija (1967m n/v) a nama je posebno
    zanimljiv treći po visini, Vito (1960 m n/v). Oivičena je rijekama
    Ljutom, Neretvom i nama interesantnom Rakitnicom. Visočica je omiljena
    zbog svojih brojnih pašnjaka, i poznata je po nekropoli stećaka.`,
  },
  {
    txt: `Od planinarskog doma „Vrela- Tušila“ preko livade, kroz listopadnu
    šumu i pored izvora dolazimo do prirodnog amfiteatra, kojeg mještani
    zovu Kaoca. Dok uživano u pogledu na vrh Vito, mislimo da do njega
    možemo stići jako brzo ali treba savladati eksponirani uspon sa
    siparom.`,
  },
  {
    txt: `Nakon 2,5-3 sata uživamo u pogledu sa vrha Vito. Pogled seže na
    Vranicu, Čvrsnicu, Prenj, Zelengoru , Leliju, Treskavicu, Trebević, i
    nama zanimljivu Bjelašnicu.`,
  },
];
const texts2 = [
  {
    txt: `Nastavak transferzale je grebenom do vrha Drstva (1808m n/v). Osim što
    možemo da uživamo u pogledu na kanjon Rakitnice moramo biti i veoma
    oprezni u prelasku grebena. Sa Drstve silazimo u selo Bobovica i
    pratimo stazu do početka silaska u kanjon.`,
  },
  {
    txt: `Kanjon Rakitnice razdvaja Visočicu i Bjelašnicu i dom je za čak 32
    endemske biljne vrste. Dužina mu je 26km i počinje na visini 1120m n/v
    a završava na 320m n/v.Jedan je od najdubljih kanjona u Evropi. Strmom
    stazom silazimo u kanjon uz dosta opreza. Nakon prelaska mosta penjemo
    se, sad već na strani Bjelašnice. Nama je teško opisati tu prirodnu
    ljepotu tako da je morate doživjeti sami.`,
  },
  {
    txt: `Preko Donjeg Lukomira stižemo u selo na najvišoj nadmorskoj visini u
    Bosni i Hercegovini Lukomir (1 495m n/v). Tokom uspona možemo da se
    divimo pogledu na kanjon i na greben Visočice koji smo prešli u
    prijepodnevnim satima. Autentični izgled kamenih kuća uljepšava
    nekropola stećeka pored sela. U ovom idiličnom selu prespavat ćete
    prvu noć.`,
  },
  {
    txt: `Transferzala vas dalje vodi put drugog po visini Bjelašničkog vrha
    Krvavac (2062m n/v). Bjelašnica je planina u centralnom dijelu Bosne i
    Hercegovine. Prekrivena je snijegom od novembra do maja, a nekada i u
    ljetnim mjesecima i otud dolazi objašnjenje za njeno ime. Najviši vrh
    je Opservatorija (2 067m n/v) na kojem se nalaza najstarija
    meteorološka stanica u Bosni i Hercegovini, osnovana 1894 godine, tako
    da je vrh Bjelašnice najviša stalno naseljena tačka u Bosni i
    Hercegovini.`,
  },
  {
    txt: `Put vas vodi preko Dugog polja na Gredu i sam vrh Krvavac. Uživate u
    pogledu na planine od Zvijezde preko Lelije, Prenja, Veleža, Čvrsnice
    do Vlašića. Nastavljate dalje do Sitnika i dolazite do drugog
    konačišta Stanari (1 585m n/v). Treći dan vas transferzala vodi preko
    Karamustafinih čaira i Međeđe lokve put planine Igman`,
  },
  {
    txt: `Igman, sa najvišim vrhom Crni vrh(1 502m n/v), vas dočekuje sa svojom
    hladovinom guste crnogorične šume. Preko Javornika dolazite do Malog
    polja i naše planinske kuće na 1 246 m n/v.`,
  },
  {
    txt: `Tri dana provodite na tri potpuno različite planine i u impozantnom
    kanjonu. Potrebno je prepješačiti 45 km, polazna tačka na 1200m n/v,
    najniža tačka 1000m n/v, najviša tačka 2062m n/v i krajnja tačka 1246m
    n/v.`,
  },
  {
    txt: `Transferzala se ne preporučuje neikusnim, kondiciono nespremnim i
    osobama koje se plaše visine. Prelazak transferzale se preporučuje
    isključivo u ljetnim mjesecima iz sigurnosnih razloga.`,
  },
];

const title = `"Srebrna lija"`;
const sub = `Transferzala`;

function SrebrnaLija() {
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
        src="https://www.youtube.com/embed/4U_Ehg3kd_4?si=zzvkOhR-vQDzArpd"
      />
    </>
  );
}

export default SrebrnaLija;
