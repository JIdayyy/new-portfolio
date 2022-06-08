import SectionWrapper from "@components/SectionWrapper";
import { NextPage } from "next";
import sectionsConfig from "src/config/sections";

const Home: NextPage = () => {
    return (
        <>
            {sectionsConfig.map((section) => (
                <SectionWrapper key={section.id} bg={section.bg}>
                    {section.component()}
                </SectionWrapper>
            ))}
        </>
    );
};

export default Home;
