import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, spavanje, polu_pansion, pansion) {
  if (name === "Članovi planinarskih organizacija") {
    spavanje = "";
    polu_pansion = "";
    pansion = "";
  } else {
    spavanje += " KM";
    polu_pansion += " KM";
    pansion += " KM";
  }

  return { name, spavanje, polu_pansion, pansion };
}

const rows = [
  createData("Djeca do 14 godina(članovi društva)", 10, 20, 25),
  createData("Djeca do 14 godina", 12, 24, 29),
  createData("Donatori", 9, 23, 31),
  createData("Penzioneri (članovi društva)", 9, 23, 31),
  createData("Penzioneri", 13, 27, 35),
  createData(`Članovi PSK "Prijatelj prirode"`, 15, 29, 37),
  createData("Članovi planinarskih organizacija:", 9, 23, 31),
  createData("&nbsp;&nbsp;&nbsp;&nbsp;a. iz Bosne i Hercegovine", 18, 33, 40),
  createData("&nbsp;&nbsp;&nbsp;&nbsp;b. BMU, UIAA", 20, 35, 40),
  createData("Zaposlenici BH Telecoma i BH Pošte", 18, 33, 40),
  createData("Ostali domaći gosti", 25, 40, 45),
  createData("Inostrani gosti", 30, 45, 50),
];

function Info() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMobile = window.innerWidth <= 600;

  return (
    <Box>
      <Header />

      <Box display="flex" justifyContent="center">
        <Box
          width={isMobile ? "80%" : "70%"}
          margin={isMobile ? "20px" : "50px"}
        >
          <Typography variant="h5">Informacije </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            {" "}
            Planinarska kuća " IGMAN " Malo Polje se nalazi preko puta
            olimpijskih skakaonica okružena četinarom na nadmorskoj visini 1246m
            odakle se pruža predivan pogled na vrh Bjelašnice.
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Sjedište kluba se nalaze na Grbavici,Behdžeta Mutevelića 12.
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            {" "}
            Za više informacija i rezervacije kontaktirajte nas na 061/035-544,
            Nedžad Đuzel.{" "}
          </Typography>
          <Typography>Uprava kluba:</Typography>
          <Typography>Predsjednik: Jasmin Šaljić</Typography>
          <Typography>Predsjednik skupštine: Saša Dizdarević</Typography>
          <Typography>Sekretar kluba: Esmira Vasić</Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Box ml={2} width={"80%"}>
          <TableContainer component={Paper} sx={{ margin: "10px" }}>
            <Table aria-label="responsive table" width="100%">
              <caption>Za djecu do 2 godine spavanje se ne plaća</caption>
              <caption>
                Članovi planinarskih organizacija, zaposlenici BH Telecoma i BH
                Pošte su dužni prilikom plaćanja pokazati validnu člansku kartu
                ili akreditaciju
              </caption>
              <caption>
                Gosti koji dolaze u grupama na svakih 20 članova dobijaju jedno
                spavanje gratis
              </caption>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">Spavanje</TableCell>
                  <TableCell align="right">
                    Polupansion (doručak - večera)
                  </TableCell>
                  <TableCell align="right">Pansion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <span dangerouslySetInnerHTML={{ __html: row.name }} />
                    </TableCell>
                    <TableCell align="right">{row.spavanje}</TableCell>
                    <TableCell align="right">{row.polu_pansion}</TableCell>
                    <TableCell align="right">{row.pansion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{ margin: "10px", overflowX: "auto" }}
          >
            <Table aria-label="responsive table">
              <TableHead>
                <TableRow>
                  <TableCell>Roštilj - veliki</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Za grupu (više od 6 članova)</TableCell>
                  <TableCell align="right">15 KM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sać</TableCell>
                  <TableCell align="right">15 KM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Roštilj</TableCell>
                  <TableCell align="right">20 KM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{ margin: "10px", overflowX: "auto" }}
          >
            <Table aria-label="responsive table">
              <TableHead>
                <TableRow>
                  <TableCell>Roštilj - mali</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Za grupu do 6 članova sa ćumurom</TableCell>
                  <TableCell align="right">10 KM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{ margin: "10px", overflowX: "auto" }}
          >
            <Table aria-label="responsive table">
              <TableHead>
                <TableRow>
                  <TableCell>Upotreba prolazne kuhinje</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Za članove društva</TableCell>
                  <TableCell align="right">1 KM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ostali</TableCell>
                  <TableCell align="right">2 KM</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Info;
