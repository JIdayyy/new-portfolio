import Main from "../components/Main";
import ServiceAndOffer from "../components/Services&Offers";

const sectionsConfig = [
    {
        id: 1,
        name: "Main",
        title: "We have Web Experience",
        bg: "white",
        component: Main,
    },
    {
        id: 2,
        name: "Services",
        title: "Service & Offer",
        bg: "main.orange",
        component: ServiceAndOffer,
    },
    // {
    //     id: 3,
    //     name: "Skills",
    //     title: "Skills & experiences",
    //     bg: "white",
    //     component: Main,
    // },
    // {
    //     id: 4,
    //     name: "Projects",
    //     title: "Latest Projects",
    //     bg: "main.orange",
    //     component: Main,
    // },
    // {
    //     id: 5,
    //     name: "Contact",
    //     title: "Let’Discuss Your Project",
    //     bg: "white",
    //     component: Main,
    // },
];

export default sectionsConfig;
