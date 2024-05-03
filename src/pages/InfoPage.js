import Footer from "../components/Footer";
import Header from "../components/Header";
import { Box, Typography, Button } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useMediaQuery } from "@mui/material";
import "./home.css";

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

function InfoPage({
  title,
  sub,
  texts1,
  texts2 = [],
  slides1,
  slides2 = [],
  src = "",
}) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const width = isLaptop ? "60%" : "80%";

  return (
    <>
      <Header />
      <Box>
        <div className="slide-container">
          <Slide>
            {slides1.map((slideImage, index) => (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                    position: "relative", // Ensure the parent div has a relative position
                  }}
                >
                  {/* Caption */}
                  {slideImage.caption !== "" && ( // Check if the caption is not an empty string
                    <div className="caption-container">
                      <Typography variant="caption" className="caption">
                        {slideImage.caption}
                      </Typography>
                    </div>
                  )}
                </div>
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
          {texts1.map((txt, index) => {
            return (
              <Typography key={index} style={{ width }}>
                {txt.txt}
              </Typography>
            );
          })}
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
                      position: "relative", // Ensure the parent div has a relative position
                    }}
                  >
                    {/* Caption */}
                    {slideImage.caption !== "" && ( // Check if the caption is not an empty string
                      <div className="caption-container">
                        <Typography variant="caption" className="caption">
                          {slideImage.caption}
                        </Typography>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        )}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
        >
          {texts2.length > 0 &&
            texts2.map((txt, index) => {
              return (
                <Typography key={index} style={{ width }}>
                  {txt.txt}
                </Typography>
              );
            })}
        </Box>
        {src !== "" && (
          <Box m={2} display="flex" justifyContent="center" alignItems="center">
            <iframe
              height="315"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                width: "100%", // Default width for all screen sizes
                maxWidth: "560px", // Max width to prevent iframe from being too wide
                margin: "0 auto", // Center the iframe horizontally
              }}
            ></iframe>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
}

export default InfoPage;
