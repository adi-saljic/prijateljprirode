import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  margin: "10px",
};
if (window.innerWidth <= 600) {
  divStyle.height = "200px";
}

function InfoPage({ title, sub, txt, slides1, slides2 }) {
  return (
    <Box>
      <div className="slide-container">
        <Slide>
          {slides1.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <Typography
          variant="h4"
          style={{ textAlign: "center", margin: "0px 5px 5px 5px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          {sub}
        </Typography>
        <Typography sx={{ padding: "5px 5px 0 5px" }}>{txt}</Typography>
      </Box>

      {slides2.length > 0 && (
        <div className="slide-container">
          <Slide>
            {slides2.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      )}
    </Box>
  );
}

export default InfoPage;
