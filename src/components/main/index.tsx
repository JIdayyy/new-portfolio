import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionBox = motion(Box);

export default function Main(): JSX.Element {
    return (
        <Flex
            maxWidth="7xl"
            w="full"
            pb={20}
            pt="130px"
            h="100vh"
            justifyContent="space-between"
            alignItems={["center", "flex-start"]}
        >
            <Flex
                direction="column"
                w={["70%", "50%", "35%"]}
                justifyContent="space-between"
                h="full"
            >
                <Flex
                    position="relative"
                    justifyContent="flex-start"
                    w="full"
                    h="full"
                    direction={"column"}
                >
                    <Text
                        top={-4}
                        left={[0, -5, -5, -5, -10]}
                        position="absolute"
                        transform="rotate(-45deg)"
                        color="secondary.100"
                    >
                        Hello !
                    </Text>
                    <Text
                        my={5}
                        lineHeight={["30px", "50px", "60px", "80px"]}
                        fontSize={[30, 40, 40, 70, 80]}
                    >
                        We have Web Experience
                    </Text>
                    <Text my={5} fontSize={[12, 12, 12, 12, 14]} w="full">
                        Hi! I’m a web developper creating beautifull and user
                        friendly websites and applications all across the world.
                    </Text>
                    <Button
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        my={2}
                        bg="action.100"
                        color="white"
                        variant="solid"
                        w="-webkit-fit-content"
                    >
                        <Text mx={2}>Let's Talk</Text>
                        <Image src="/icons/Email.svg" width={30} height={30} />
                    </Button>
                </Flex>
                <Box
                    mt={40}
                    w="full"
                    display="flex"
                    alignItems="center"
                    position="relative"
                    flexDirection="row"
                >
                    <Text color="black">Check Out my</Text>
                    <Image src="/icons/GitHub.svg" width={30} height={30} />
                    <Image src="/icons/Instagram.svg" width={30} height={30} />
                </Box>
            </Flex>
            <Box
                display="flex"
                flexDir={["column", "column", "row", "row"]}
                h="full"
                justifyContent="space-between"
            >
                <Box
                    mr={[0, 0, 0, 0, 20]}
                    right={0}
                    top={["50%", "0%", "0%", "0%", "0%"]}
                    position={["absolute", "relative", "relative", "relative"]}
                    width={[200, 250, 280, 350, 460]}
                    height={[200, 250, 280, 350, 460]}
                >
                    <Image src="/images/julien.jpg" layout="fill" />
                </Box>
                <Box
                    display={["none", "flex"]}
                    position="relative"
                    justifyContent={["flex-end", "flex-end", "flex-end"]}
                    alignItems="flex-end"
                    flexDirection="column"
                >
                    <MotionBox
                        display={["none", "none", "flex", "flex", "flex"]}
                        w="3px"
                        h="50%"
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        bg="black"
                    ></MotionBox>
                    <Text
                        my={[0, 0, 20, 20]}
                        pt={[0, 0, 20, 20]}
                        w="full"
                        transform={[
                            "rotate(0deg)",
                            "rotate(0deg)",
                            "rotate(-90deg)",
                        ]}
                        position={["relative"]}
                        whiteSpace="nowrap"
                        textAlign="right"
                    >
                        Scroll Down
                    </Text>
                </Box>
            </Box>
        </Flex>
    );
}
