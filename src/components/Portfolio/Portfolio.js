import React, { useState } from "react";
import Styles from "./Portfolio.module.css";
import Section from "../UI/Section";
import FlipCard from "../UI/FlipCard";

//Import Image
import DeliveryaliesImg from "../../images/deliveryalies.png";
import WesellbuildingImg from "../../images/wesellbuilding.png";
import JelmediaImg from "../../images/jelmedia.png";
import AlphaImg from '../../images/alpha.png';
import ViableeImg from '../../images/viablee.png';
import SealYourMeal from '../../images/sealyourmeal.png';

const Portfolio = (props) => {
  const [portfolioState, setPortfolioState] = useState([
    {
      projectImage: ViableeImg,
      projectName: "Viablee",
      projectType: "Front-End Development",
      projectSummary:
        "In this project I worked on front-end side. This was developed by React.",
      clientName: "Hosay Lambda",
      projectDate: "Feb-2021",
      projectCategory: "Front-end, React",
      projectLink: "https://viablee.com/",
    },
    {
      projectImage: DeliveryaliesImg,
      projectName: "DeliveryAlies",
      projectType: "Front-End Development",
      projectSummary:
        "In this project client want a website for Parcel service. I designed this website using HTML5, CSS3, javascript, Bootstrap.",
      clientName: "Ahmed Sbeita",
      projectDate: "March-2021",
      projectCategory: "Front-end, Web Animation",
      projectLink: "https://deliveryallies.com/",
    },
    {
      projectImage: WesellbuildingImg,
      projectName: "WeSellBuilding",
      projectType: "Front-End Development",
      projectSummary:
        "In this project client want a website for Real Estate Business. I designed this website using HTML5, CSS3, javascript, Bootstrap.",
      clientName: "JelMedia",
      projectDate: "April-2021",
      projectCategory: "Front-end",
      projectLink: "http://wesellbuildings.com/",
    },
    {
      projectImage: AlphaImg,
      projectName: "Alpha Community Center",
      projectType: "Front-End Development",
      projectSummary:
        "In this project client want a website for Community Center. I designed this website using HTML5, CSS3, javascript, Bootstrap.",
      clientName: "Jordan Lester",
      projectDate: "March-2021",
      projectCategory: "Front-end",
      projectLink: "#",
    },
    {
      projectImage: JelmediaImg,
      projectName: "JelMedia",
      projectType: "Front-End Development",
      projectSummary:
        "In this project client want a website for her web and multimedia Business. I designed this website using HTML5, CSS3, javascript, Bootstrap and few animation.",
      clientName: "JelMedia",
      projectDate: "Dec-2021",
      projectCategory: "Front-end, Web Animation",
      projectLink: "http://jelmedia.com/",
    },
    {
      projectImage: SealYourMeal,
      projectName: "Seal Your Meal",
      projectType: "Front-End Development",
      projectSummary:
        "In this project client want a static page. I designed this page using HTML5, CSS3, javascript and SVG animation.",
      clientName: "Shireen Shaikh",
      projectDate: "Nov-209",
      projectCategory: "Front-end, Web Animation",
      projectLink: "#",
    },
  ]);

  return (
    <Section secTitle="What I've done." id='portfolio'>
      <div className={Styles.portfolioContainer}>
        {portfolioState.map((project, i)=>{
          return <FlipCard project={project}  key={i}/>;
        })}
      </div>
    </Section>
  );
};

export default Portfolio;
