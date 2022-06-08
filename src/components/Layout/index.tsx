import { Flex } from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function Layout({ children }: IProps): JSX.Element {
    return (
        <Flex
            direction="column"
            bg="white"
            position="relative"
            minWidth="100vw"
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Navbar />
            {children}
        </Flex>
    );
}
