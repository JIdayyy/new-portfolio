import { Box, Flex, Text } from "@chakra-ui/react";
import LogoSvg from "@components/svgs/Logo";
import Link from "next/link";
import navlinks from "src/config/navlinks";
import { motion } from "framer-motion";

const MotionText = motion(Text);

export default function Navbar(): JSX.Element {
    return (
        <Flex
            zIndex="overlay"
            px={[10, 10, 10, 10, 200]}
            display={["none", "flex", "flex", "flex", "flex"]}
            w="100vw"
            h="80px"
            bg="white"
            position="fixed"
            py={10}
            alignItems="center"
            justifyContent="space-between"
            top={0}
        >
            <Box display="flex">
                <LogoSvg />
                <Text ml={5} lineHeight="25px" fontSize="xl" w="100px">
                    Julien. Abbadie
                </Text>
            </Box>

            <Flex w="xl" justifyContent="space-between">
                {navlinks.map((link) => (
                    <Link key={link.id} href={link.url}>
                        <MotionText
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ delay: 0.1 + link.id / 10 }}
                            fontSize="xl"
                            _hover={{ textDecor: "underline" }}
                            cursor="pointer"
                        >
                            {link.name}
                        </MotionText>
                    </Link>
                ))}
            </Flex>
        </Flex>
    );
}
