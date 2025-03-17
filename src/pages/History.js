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
    txt: `Planinarski sportski klub „Prijatelj prirode“ Sarajevo je osnovan daleke 1905. godine,
tačnije 4.4.1905.`,
  },
  {
    txt: `Prvobitni naziv kluba je bio Turističko društvo Prijatelj prirode. Društvo je osnovano
na inicijativu nekolicine radnika u željezničkoj radionici u Sarajevu. Ovo je prvo
planinarsko udruženje u Austro-Ugarskoj monarhiji koje su osnovali i čiji su članovi
bili radnici. Bili smo ogranak velike planinarske organizacije „Naturfreunde“ koja je
imala sjedište u Beču. Prilikom osnivanja društva naznačena je želja za izvođenjem
radnika u prirodu, pokušaj sprječavanja alkoholizma kod radnika i sprječavanje
omladine da boravi i provodi vrijeme u zadimljenim prostorima. Članovi društva su
izuzetno aktivni u izgradnji planinarske infrastrukture, markiranje planinarskih staza, a
imali smo i kulturnoprosvjetni oblik rada. Prostorije društva su se nalazile u
Radničkom domu.`,
  },
  {
    txt: `Zahvaljujući svojoj radničkoj strukturi i svom djelovanju Društvo je bilo u nemilosti
kod tadašnji vlasti koja im je ometala i zabranjivala rad 1913. godine. U tom periodu
većina članova je raspoređena na frontove širom Evrope. Poslije rata Društvo
obnavlja svoj rad 1919. godine zahvaljujući preživjelim veteranima i postaje
središnjica za prostor Jugoslavije gdje djeluju brojne podružnice. Nakon kraljeve
obznane 1921. godine Društvu se ponovo zabranjuje rad i nastavljamo djelovanje u
ilegali. Društvo zvanično nastavlja svoj rad 1923. godine i osnivamo svoje podružnice
širom Jugoslavije Nastavljeno je razvijanje planinarske infrastrukture, u periodu od
1927. do 1933. izgradili smo pet domova.
1. Boračko jezero 1927.
2. Kadin greb - Boračko jezero 1931/32.
3. Jezerce - Prenj 1933.
4. Babin smet kod Zenice
5. Crepoljsko 1932.
- Namjeru da izgradimo dom pod Lupoglavom na Prenju nije se uspjela
realizovati.
- Na Papratnima smo imali planinarsku kuću pod zakupom.`,
  },
  {
    txt: `Prvi alpinistički uspon izveden je na Romaniji u novembru 1929. godine i jedan od
dvojice pionira bio je naš istaknuti član. Alpinistički odsjek, prvi u tadašnjoj državi, je u
okviru društva osnovan 1935. godine. U časopisu Snaga od 1936. objavljuju se prvi
ozbiljni članci o alpinizmu iz pera našeg istaknutog člana i pionira alpinizma.`,
  },
  {
    txt: `Prvi zvanični speleološki izlet organizovali smo 12. 9. 1921. „istraživanje špilje kod
Suhog mlina (Gornji Bakići)“.`,
  },
  {
    txt: `Zabilježeno je da 1927. godine Prijatelj prirode imao podružnice širom države:
Zagreb, Osijek , Požaga, Zenica, Makarska, Ljubljana, Koprivnica, Sušak, Leskovac,
Maribor, Hrastik, Trbovlje, Tuzla, Subotica, Novi Sad, Banja Luka, Drvar, Karlovac,
Beograd i Kranj.`,
  },
  {
    txt: `Prva izložba planinarske fotografije održana je 1928. godine u organizaciji naše
fotoamaterske sekcije.`,
  },
  {
    txt: `1930. središte Prijatelja prirode iz Sarajeva premješta se u Zagreb.`,
  },
  {
    txt: `U oktobru 1931. zabranjuje se rad središnjici u Zagrebu i svim podružnicama širom
Jugoslavije. Policija je zaplijenila svu našu pokretnu i nepokretnu imovinu.`,
  },
  {
    txt: `Početkom 1932. dozvoljen je rad sarajevskom djelu Prijatelja prirode i ponovo se
uspostavlja središnjica u Sarajevu. Na skupštini iste godine 27. 3. djelimično se
mijenja naziv i nosimo ime Radničko turističko društvo „Prijatelj prirode“.`,
  },
  {
    txt: `Vanredni kongres je održan 30.10.1933. od tada društvo i zvanično djeluje na
teritoriji cijele države, opet pod imenom „Turističko društvo Prijatelj prirode“`,
  },
  {
    txt: `Drugi redovni kongres je održan u Sarajevu 6. 9.1936.`,
  },
  {
    txt: `Novi razlog vlastima za zabranu rada je aktivnost spašavanja i udomljavanja Jevreja
protjeranih iz Ausrije 1939. godine. Banska uprava u Sarajevu donijela је 13. 9.1939.
godine odluku da se zabrani i raspusti TD “Prijatelj Prirode“ u kojoj se kaže: “Društvo
je prekoračilo statutarni djelokrug rada i umjesto da se bavi samo planinarstvom, ono
se bavi politikom i destruktivnim radom“. Na ovu odluku uprava Društva podnijela је žalbu ali je Ministaгstvo unutarnjih poslova nije uvažilo i konačno 10. 4. 1940. godine
potvrdilo je prvostepenu odluku Banske uprave u Sarajevu о raspuštanju.`,
  },
  {
    txt: `U ljeto 1941. tadašnja vlast u Sarajevu sve naše planinarske domove daje na
upravljanje HPD-u Bjelašnica.`,
  },
  {
    txt: `Radnička populacija trpi najveće gubitke u ratovima tako da je i Duštvo bilo
neaktivno do početka 50-tih godina.`,
  },
  {
    txt: `U Sarajevu 29. 7. 1953. godine u okviru PTT-a se osniva-obnavlja rad Društva pod
nazivom Planinarsko smučarsko društvo PTT „Prijatelj prirode“ Sarajevo.`,
  },
  {
    txt: `Članovi Društva daju značajan doprinosu razvoju planinarstva jačajući infrastrukturu
i učestvujući u svim značajnim planinarskim akcijama širom Jugoslavije.`,
  },
  {
    txt: `1955. godine na Igmanu je izgrađen planinarski dom na čijem mjestu se nalazi jedan
od najboljih domova na ovim prostorima. Na Romaniji lokalitet Crvene stijene 1970.
godine stavljamo u funkciju dom skromnijeg kapaciteta.`,
  },
  {
    txt: `Krajem 70-tih uvodi se novina koja se ogleda u organizovanju posebnih izleta za
najmlađe članove - pionire.`,
  },
  {
    txt: `Potrebno je naglasiti da 1976. članovi Društva čine većinu u skupini planinara koja
markira i osigurava novu stazu za uspon na vrh Bosne i Hercegovine - Maglić. Od
tada do danas ta staza se zove „Poštarska“.`,
  },
  {
    txt: `Naše Društvo je 1977. godine „izgradilo“ transferzalu pod nazivom Krajiški partizan
od Bihaća do Bosanskog Petrovca preko Grmeča u dužini 123 km.`,
  },
  {
    txt: `Osim u razvoju i afirmaciji planinarstva Društvo je veoma aktivno i u organizaciji
škola skijanja koje pohađa veliki broj djece i mladih ljudi. Od samog osnivanja 1905.
članovi udruženja učestvuju na takmičenjima i daju doprinos u razvoju skijanja kao
sporta. U periodu 1919 - 1939. taj doprinos je još značajniji. U ovom periodu se
organizuju i zimski planinarski pohodi na skijama. Krajem 50-tih godina Društvo
zahvaljujući vlastitim ulaganjima u ski opremu počinje sa održavanjem kurseva
skijanja. Od 60-tih ti kursevi prerastaju u škole skijanja koje se održavaju u prvo
vrijeme na Romaniji pa Trebeviću i na kraju na Igmanu.`,
  },
  {
    txt: `Članovi Društva daju značajan doprinosu razvoju planinarstva jačajući infrastrukturu
i učestvujući u svim značajnim planinarskim akcijama širom Jugoslavije.`,
  },
  {
    txt: `U novijoj istoriji Društvo se može pohvaliti da je 2002. godine završilo obnovu doma
na Igmanu koji služi za okupljanje planinara i organizovanje škola skijanja. Istaknuti
član Društva je bio predsjednik Planinarskog saveza Bosne i Hercegovine. Od 2011.
godine pored svih uobičajenih planinarskih aktivnosti u Društvu se počinje poklanjati
posebna pažnja u radu sa djecom. Počinje sa radom škola planinarstva i pohodi za
„malu raju“. U 2012. godini se osniva Orijentiring tim koji djeluje u okviru Društva i
takmičari postižu dobre rezultate na domaćem prvenstvu i takmiče se kao
reprezentativci na međunarodnim takmičenjima. Na Mediteranskom prvenstvu 2016.
naš takmičar je osvojio bronzanu medalju, prva osvojena medalja na zvaničnim
takmičenjima za orijentirce iz Bosne i Hercegovine. Od 2016. godine Društvo je
organizator manifestacije „Susret planinara osnovaca Sarajeva“. To je jednodnevna
manifestacija promocije planinarstva i sportova koji su u vezi sa planinarstvom. Na
manifestaciji je zabilježeno prisustvo više stotina osnovaca.`,
  },
  {
    txt: `Trasirali smo novu transferzalu 2018. od Visočice preko Bjelašnice do Igmana i
nazvali je Srebrna lija.`,
  },
  {
    txt: `Društvo je 2018. djelimično promjenilo svoje ime u Planinarski sportski klub Prijatelj
prirode Sarajevo u cilju stvaranja uslova za razvoj sportova vezanih za planinarstvo.`,
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
