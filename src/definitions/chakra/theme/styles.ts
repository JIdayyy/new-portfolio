import { ThemeOverride } from "@chakra-ui/react";

type GlobalStyles = Pick<ThemeOverride, "styles">;

export default {
    styles: {
        global: {
            h1: {
                fontWeight: 500,
            },
        },
    },
    textStyles: {
        sectionTitle: {
            color: "black",
            fontSize: 70,
        },
    },
} as GlobalStyles;
