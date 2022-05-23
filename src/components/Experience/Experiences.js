import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import Timeline from "../UI/Timeline/Timeline";

const Experiences = () => {
  const fetchExperiences = useHttp();
  useEffect(() => {
    fetchExperiences.requestHttp(
      "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/experiences.json"
    );
  }, [fetchExperiences]);

  return (
    <Section secTitle="What I have." id="experiences">
      <Timeline experiences={fetchExperiences.data} />
    </Section>
  );
};

export default Experiences;
