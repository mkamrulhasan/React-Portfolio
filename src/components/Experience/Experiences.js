import React, { useState, useEffect, useCallback } from "react";
import Section from "../UI/Section";
import Timeline from "../UI/Timeline/Timeline";

const Experiences = () => {
  const [experiencesState, setExperiencesState] = useState([]);

  const fetchExprencesHandler = useCallback(async () => {
    const response = await fetch(
      "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/experiences.json"
    );
    const data = await response.json();
    setExperiencesState(data);
  }, []);

  useEffect(() => {
    fetchExprencesHandler();
  }, [fetchExprencesHandler]);  

  return (
    <Section secTitle="What I have." id='experiences'>
      <Timeline experiences={experiencesState} />
    </Section>
  );
};

export default Experiences;
