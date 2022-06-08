import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import content from "../../content/services.content.json";

export default function ServiceAndOffer(): JSX.Element {
    return (
        <Flex
            py={40}
            justifyContent="center"
            alignItems="center"
            direction="row"
            h="100vh"
            w="full"
            maxWidth="7xl"
        >
            <Flex
                position="relative"
                h="full"
                w="45%"
                direction="column"
                justifyContent="space-between"
            >
                <Flex w="full" direction="column">
                    <Text
                        top={-4}
                        left={[0, -5, -5, -5, -10]}
                        position="absolute"
                        transform="rotate(-45deg)"
                        color="white"
                    >
                        Service
                    </Text>
                    <Text
                        lineHeight={["30px", "50px", "60px", "80px"]}
                        fontSize={[30, 40, 40, 70, 80]}
                        textStyle="sectionTitle"
                    >
                        Services & Offers
                    </Text>
                    <Flex justifyContent="flex-start" alignItems="flex-start">
                        <Flex
                            marginTop="30px"
                            mr={4}
                            w="30px"
                            borderBottom="3px solid black"
                        />
                        <Text my={5} fontSize={[12, 12, 12, 12, 14]} w="70%">
                            {content.description}
                        </Text>
                    </Flex>
                </Flex>
                <Box position="relative" w="200px" h="200px">
                    <Image src="/images/serviceschip.png" layout="fill" />
                </Box>
            </Flex>
            <Flex
                alignItems="flex-start"
                justifyContent="space-between"
                h="full"
                w="50%"
                direction="column"
                borderTop="3px solid black"
            >
                {content.item.map((item) => (
                    <Flex
                        p={5}
                        w="full"
                        h="full"
                        borderBottom="3px solid black"
                        key={item.name}
                        justifyContent="space-between"
                    >
                        <Flex mr={4} fontWeight="bold" fontSize="27px">
                            {item.number}
                        </Flex>
                        <Flex
                            w="70%"
                            direction="column"
                            h="full"
                            justifyContent="space-between"
                        >
                            <Text fontWeight="bold" fontSize="27px">
                                {item.content}
                            </Text>
                            <Text
                                color="white"
                                fontWeight="bold"
                                fontSize="14px"
                            >
                                Explore
                            </Text>
                        </Flex>
                        <Flex
                            justifyContent="flex-end"
                            direction="column"
                            h="full"
                        >
                            <Button
                                w={50}
                                h={50}
                                rounded="full"
                                color="blue"
                                position="relative"
                            >
                                <Image
                                    src="/images/roundedarrow.png"
                                    layout="fill"
                                />
                            </Button>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
