import webLink from "../../assets/images/links/globe2.svg";
// import dribbbleLink from "../../assets/images/links/dribbble.svg";
import gitLink from "../../assets/images/links/github.svg";
// import ytLink from "../../assets/images/links/youtube.svg";

import portfolio from "../../assets/images/projects/portfolio.png";
import bswhealth from "../../assets/images/projects/bswhealth.png";
import pandora from "../../assets/images/projects/pandora.png";
import ohiohealth from "../../assets/images/projects/ohiohealth.png";
import cryptocurrency from "../../assets/images/projects/cc.png";
import azurecloudexams from "../../assets/images/projects/azurecloudexams.png";

import inmoldapp from "../../assets/images/projects/inmoldapp.png";
import ohioapp from "../../assets/images/projects/ohioapp.png";

import smarthome from "../../assets/images/projects/smarthome.png";
import godofwar from "../../assets/images/projects/godofwar.png";
import vclp from "../../assets/images/projects/vclp.png";
import vibenow from "../../assets/images/projects/vibenow.png";

export const web = [
  {
    name: "Portfolio",
    date: "2024-08-08",
    cover: portfolio,
    links: [
      { icon: gitLink, link: "https://github.com/la0092/luis-portfolio" },
      { icon: webLink, link: "https://la0092.github.io" },
    ],
  },
  {
    name: "Pandora",
    date: "2016-11-16",
    cover: pandora,
    links: [{ icon: webLink, link: "https://pandora.com/" }],
  },
  {
    name: "Inmold",
    date: "2022-04-30",
    cover: bswhealth,
    links: [
      { icon: webLink, link: "https://www.bswhealth.com/" },
    ],
  },
  {
    name: "Ohio Health",
    date: "2023-02-16",
    cover: ohiohealth,
    links: [{ icon: webLink, link: "https://www.ohiohealth.com/" }],
  },
  {
    name: "Web3 Crypto",
    date: "2021-10-21",
    cover: cryptocurrency,
    links: [
      { icon: gitLink, link: "https://github.com/la0092/web3-crypto" },
    ],
  },
  {
    name: "Azure Cloud Exams",
    date: "2024-04-15",
    cover: azurecloudexams,
    links: [
      { icon: webLink, link: "https://nice-sky-0509a9903.2.azurestaticapps.net" },
    ],
  }
];

export const design = [
  {
    name: "Smart Home Dashboard UI",
    date: "2022-04-03",
    cover: smarthome,
    links: [
      // { icon: dribbbleLink, link: "https://dribbble.com/shots/17912071-Smart-Home-Dashboard-UI" }
    ],
  },
  {
    name: "God of War Concept UI",
    date: "2022-03-13",
    cover: godofwar,
    links: [
      // { icon: dribbbleLink, link: "https://dribbble.com/shots/17710279-God-of-War-Website-design" }
    ],
  },
  {
    name: "Vice City Conceput UI",
    date: "2022-08-14",
    cover: vclp,
    links: [
      // { icon: dribbbleLink, link: "https://dribbble.com/shots/19100552-Welcome-back-to-Vice-City-Landing-page" },
      // { icon: ytLink, link: "https://www.youtube.com/watch?v=ysBkWUQMLHQ" },
    ],
  },
  {
    name: "Vibe Now UI",
    date: "2022-10-28",
    cover: vibenow,
    links: [
      // { icon: dribbbleLink, link: "https://dribbble.com/shots/20106594-Vibe-Now-Mobile-app-for-events" }
    ],
  },
];

export const mobile = [
  {
    name: "Internal Mobile Apps in Inmold",
    date: "2020-05-01",
    cover: inmoldapp,
    links: [{ icon: webLink, link: "https://inmold-ltd.com/en/iml-system/" }],
  },
  {
    name: "OhioHealth",
    date: "2023-11-23",
    cover: ohioapp,
    links: [
      { icon: webLink, link: "https://play.google.com/store/apps/details?id=com.ohiohealth.mychart&hl=en" },
      { icon: webLink, link: "https://apps.apple.com/us/app/ohiohealth/id1064224526" }
    ],
  },
];
