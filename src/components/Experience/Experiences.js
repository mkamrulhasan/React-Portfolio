import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import Timeline from "../UI/Timeline/Timeline";

const Experiences = () => {
  const { data, requestHttp: fetchHttpHandler } = useHttp();
  useEffect(() => {
    fetchHttpHandler(
      "https://mkhemel-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/experiences.json"
    );
  }, [fetchHttpHandler]);

  return (
    <Section secTitle="What I have." id="experiences">
      <Timeline experiences={data} />
    </Section>
  );
};

export default Experiences;
