import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoPage from "./InfoPage";
import { Box, Typography, Button } from "@mui/material";

const slides1 = [
  {
    url: "/Dom/blizu.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Dom/maloPolje.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Dom/odozgo.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Dom/suma.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Dom/daleko.jpg",
    caption: "Slide 3",
  },
];

const slides2 = [
  {
    url: "/Dom/sala1.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Dom/sala2.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Dom/sprat0.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Dom/soba1.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Dom/soba2.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Dom/sprat1.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Dom/stepenice.jpg",
    caption: "Slide 1",
  },
  {
    url: "/Dom/soba4.jpg",
    caption: "Slide 2",
  },
  {
    url: "/Dom/soba5.jpg",
    caption: "Slide 3",
  },
  {
    url: "/Dom/soba6.jpg",
    caption: "Slide 1",
  },
];

const title = `Naš dom`;
const sub = ``;
const text = `Planinarska kuća " IGMAN " Malo Polje se nalazi preko puta olimpijskih skakaonica okružena četinarom na nadmorskoj visini 1246m odakle se pruža predivan pogled na vrh Bjelašnice. Sagrađena je dobrovoljnim radom članova i od prirodnih materijala, a otvorena je 2002. godine.
Raspolaže sa dnevnim boravkom, kaminom, kuhinjom, malom prolaznom kuhinjom, 6 soba za spavanje sa ukupno 50 lezajeva, 5 WC-a i 2 kupatila.
Hrana i piće po propisanim cijenama mogu se naručiti i dogovoriti sa domarom kuće. Kuća je priključena na vodovodnu, kanalizacionu i elektorenergetsku mrežu. Objekat se grije etažnim grijanjem na čvrsto gorivo. Kuća je otvorena preko cijele godine i domar boravi u objektu.`;

function Dom() {
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
          U prizemlju se nalazi prolazna kuhinja koju mogu koristiti svi koji
          borave u domu uz prihvatljivu cijenu, muški i ženski WC, kamin sala sa
          50 mjesta, velika kuhinja koju koristi isključivo domaćin objekta. U
          objekat se ulazi u papučama koje su obezbjeđene u domu. Na prvom sprat
          se nalaze 3 sobe ( soba 1 - 10 kreveta, soba 2 - 12 kreveta, soba 3
          koju koristi domaćin - 4 kreveta ), zatim tu su dva kupaila, dva WC-a
          i ostava.
        </Typography>
        <Typography>
          Na drugom spratu su 3 sobe ( soba 4 - 4 kreveta koju koristi dežurni u
          domu, soba 5 - 6 kreveta i soba 6 - 8 kreveta), još se na drugom
          spratu nalazi ženski WC i ostava.
        </Typography>
        <Typography>Potkrovlje je opremljeno sa 10 kreveta.</Typography>
        <Typography>
          Objekat je vrlo prijatan za boravak a terasa ispred omogućava Vam
          uživanje i predivan pogled. 2007 godine Planinska kuća "Igman" Malo
          polje u organizaciji magazina Start proglašena je za najbolji
          planinarski objekat u BiH.
        </Typography>
      </Box>
      <Box m={2} display="flex" justifyContent="center" alignItems="center">
        {/* Embedding YouTube video using iframe */}
        <iframe
          height="315"
          src="https://www.youtube.com/embed/dCIq3twX-8g"
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

export default Dom;
