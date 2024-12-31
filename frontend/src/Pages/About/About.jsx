import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";
// import MetaData from "../MetaData";

const About = () => {
  document.title = "About Us";
  return (
    <>
      <Header />

      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        {/* <MetaData title={'About Us'} /> */}
        <div className="about-section-box">
          <div>
            <div>
              <img
                style={{
                  width: "20rem",
                  height: "20rem",
                  margin: "2rem 0",
                  borderRadius: "100%",
                }}
                src="https://media.licdn.com/dms/image/v2/D5603AQFhba8qp2iT_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727930779311?e=1741219200&v=beta&t=Q8Ak_tkSzlCpP7wtdb0tSRQC_bhk65KWD-xPR66xOY4"
                alt="Founder"
              />
              <h1>Gaurav Singh</h1>
              <button
                onClick={() =>
                  window.open("https://gauravportfolioiiits.netlify.app/", "_blank")
                }
              >
                Visit Website
              </button>
              <br />
              <p>
                This is a sample wesbite made by @Gaurav Singh.
                <br />
                Final Year student at IIIT Sonepat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
