import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "https://drive.google.com/thumbnail?id=1ukoAmbY3KnAoGPPVsC14dHI7ZxI9_H-D&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=18VsaZmxl0PK5UrMeLyOeor_SFGxjBNTP&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1M4CtUSye7x9t2SsTnzYxNQhVaam_IjBM&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1R388q_XYRVkPE9GWp_QTxBs0Tqm2oP4N&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1XVRG9xYRQkMBKoCOZXfSKXCBFh0n7rTT&sz=w4000",
    caption: "",
  },
];

const slides2 = [
  {
    url: "https://drive.google.com/thumbnail?id=1l5oq3G_ZixnLkz6qWlkbI5kTxjAZWcPc&sz=w4000",
    caption: "Kamin sala u prizemlju",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1axxKHlkVJzBJPaaSi62Z6QV3u6mnfClz&sz=w4000",
    caption: "Kamin sala u prizemlju",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1PB1eFMXhvuH0j_uzr0eTYjpE6jyal4yT&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=11buihTDj88CAoq-tdSe271ws9X9gUoIv&sz=w4000",
    caption: "Soba broj 1",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1LFHPDOtzQWPtg5ND_EBNTlzDSy2xG7VD&sz=w4000",
    caption: "Soba broj 2",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1l1uUjNh9e-z0RZVvr5MaQybwC7ZdNFah&sz=w4000",
    caption: "Prostor na prvom spratu",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1CgYeceJ81th0OOmyvtF1x3C1GyqXGUvx&sz=w4000",
    caption: "",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1ejaF-Q6zky0PhSJXCKOCLHGT_f_R4C9p&sz=w4000",
    caption: "Soba broj 4",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1Jc30_HwYTIOvpB7tWqcEhT1GHW57lMsX&sz=w4000",
    caption: "Soba broj 5",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1h3IBMcd1olzniFCMWijdrxLfUaZXnWTo&sz=w4000",
    caption: "Soba broj 6",
  },
];

const title = `Naš dom`;
const sub = ``;
const texts1 = [
  {
    txt: `Planinarska kuća " IGMAN " Malo Polje se nalazi preko puta olimpijskih skakaonica okružena četinarom na nadmorskoj visini 1246m odakle se pruža predivan pogled na vrh Bjelašnice. Sagrađena je dobrovoljnim radom članova i od prirodnih materijala, a otvorena je 2002. godine.
Raspolaže sa dnevnim boravkom, kaminom, kuhinjom, malom prolaznom kuhinjom, 6 soba za spavanje sa ukupno 50 lezajeva, 5 WC-a i 2 kupatila.
Hrana i piće po propisanim cijenama mogu se naručiti i dogovoriti sa domarom kuće. Kuća je priključena na vodovodnu, kanalizacionu i elektorenergetsku mrežu. Objekat se grije etažnim grijanjem na čvrsto gorivo. Kuća je otvorena preko cijele godine i domar boravi u objektu.`,
  },
];

const texts2 = [
  {
    txt: `U prizemlju se nalazi prolazna kuhinja koju mogu koristiti svi koji
    borave u domu uz prihvatljivu cijenu, muški i ženski WC, kamin sala sa
    50 mjesta, velika kuhinja koju koristi isključivo domaćin objekta. U
    objekat se ulazi u papučama koje su obezbjeđene u domu. Na prvom sprat
    se nalaze 3 sobe ( soba 1 - 10 kreveta, soba 2 - 12 kreveta, soba 3
    koju koristi domaćin - 4 kreveta ), zatim tu su dva kupaila, dva WC-a
    i ostava.`,
  },
  {
    txt: `Na drugom spratu su 3 sobe ( soba 4 - 4 kreveta koju koristi dežurni u
      domu, soba 5 - 6 kreveta i soba 6 - 8 kreveta), još se na drugom
      spratu nalazi ženski WC i ostava.`,
  },
  {
    txt: `Potkrovlje je opremljeno sa 10 kreveta.`,
  },
  {
    txt: `Objekat je vrlo prijatan za boravak a terasa ispred omogućava Vam
    uživanje i predivan pogled. 2007 godine Planinska kuća "Igman" Malo
    polje u organizaciji magazina Start proglašena je za najbolji
    planinarski objekat u BiH.`,
  },
];

function Dom() {
  return (
    <>
      <InfoPage
        title={title}
        sub={sub}
        texts1={texts1}
        texts2={texts2}
        slides1={slides1}
        slides2={slides2}
        src="https://www.youtube.com/embed/dCIq3twX-8g"
      />
    </>
  );
}

export default Dom;
