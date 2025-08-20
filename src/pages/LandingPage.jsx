import NavBar from "../components/NavBar/NavBar";
import Section from "../components/Section";
import SectionContact from "../components/Sections/SectionContact";
import SectionHero from "../components/Sections/SectionHero";
import SectionWhat from "../components/Sections/SectionWhat";
import SectionWhoFor from "../components/Sections/SectionWhoFor";

const LandingPage = () => {
  return (
    <div>
      <NavBar />

      <Section className="h-dvh md:px-0">
        <SectionHero />
      </Section>
      <Section className=" md:px-0">
        <SectionWhat />
      </Section>
      <Section className="md:px-0 bg-brand-7">
        <SectionWhoFor />
      </Section>
      <Section className="md:px-0 bg-brand-5">
        <SectionContact/>
      </Section>
    </div>
  );
};

export default LandingPage;
