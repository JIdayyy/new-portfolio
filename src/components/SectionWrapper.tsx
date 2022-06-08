import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    bg: string;
};

export default function SectionWrapper({ children, bg }: Props): JSX.Element {
    return (
        <Flex px={[10, 10, 10, 10, 0]} bg={bg} justifyContent="center" w="full">
            {children}
        </Flex>
    );
}
