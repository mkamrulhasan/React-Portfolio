import React, { useState } from "react";
import Section from "../UI/Section";
import Timeline from "../UI/Timeline/Timeline";

const Experiences = () => {
  const [experiencesState, setExperiencesState] = useState([
    {
      start: "Feb-2021",
      end: "Present",
      company: "JelMedia",
      summary:
        "I'm a front-end developer at JelMedia. I designed many site for JelMedia.",
    },
    {
      start: "Apr-2021",
      end: "Present",
      company: "Treasure Works Team",
      summary:
        "I'm a front-end developer at Treasure Works Team. My journey began with the Treasure Works Team by an Angular based Chat application.",
    },
    {
      start: "2018",
      end: "Present",
      company: "Upwork",
      summary:
        "I've been working on upwork since march 2018. I have been working at Upwork since March 2018. During this time I have completed 4 projects with five star rating and got to know many clients. It's really great for me.",
    },
    {
      start: "Feb-2019",
      end: "Present",
      company: "Hightech Web Design Team",
      summary:
        "I'm a developer at Hightech Web Desing. Here my goal is to build modern web aplications whether it is SPAs, MVC or MPAs.",
    },
    {
      start: "Oct-2019",
      end: "Sep-2021",
      company: "DvrUnlimited",
      summary:
        "A marketpalce base on USA. Where I worked as a remote web developer. My primary job was to build modern and nice looking front-end that are responsive and very interactive.",
    },
  ]);

  return (
    <Section secTitle="What I have." id='experiences'>
      <Timeline experiences={experiencesState} />
    </Section>
  );
};

export default Experiences;
