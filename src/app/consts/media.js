import proxy from "../proxies/media"

const media = {
    discord: {
        id: "914240860101681163",
        tag: "elliot.dev.",
    },
    stackOverflow: {
        id: "19758208",
        name: "elloit",
    },
    github: "Lilmeep21",
    figma: "design/5ykwbLOIGhpiNsMZMfhBpz/Facebook-Messenger-UI-Screens--Community-?node-id=0-11130&p=f&t=XnDCpI8797QnFXdI-0",
    replit: "ElliotDev",
    codewars: "ElliotDevis",
    devTo: "elliotdevis",
    cssBattle: "elliot_dev",
    codepen: "elliot_dev",
    dribble: "Elliot_dev",
    email: "mzuckerb@fas.harvard.edu"

}

export default new Proxy(media, proxy);

