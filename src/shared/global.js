import ReactPlayer from "react-player";
import Grid from "../demo/grid/Grid";

const BASE_ASSETS_URL = `${process.env.PUBLIC_URL}`;

const projectList = [
  {
    id: "leds",
    title: "Application de contrôle de LEDs",
    description: `Création d'une application dans un cadre personnel pour contrôler la couleur et l'intensité des LEDs présentent dans mon appartement en fonction de la musique jouée sur le téléphone.`,
    steps: [
      "Mise en place d'une communication bluetooth LE avec les LEDs",
      "Reverse engineering d'une application chinoise pour récupérer le format des instructions bluetooth",
      "Création de l'application avec Android Studio",
      "Récupération de l'audio courante du téléphone et affichage de celle-ci.",
      "Traitement du signal audio pour le transformer en quotient de luminosité sur les LEDs",
    ],
    skills: [
      "Rétroingénierie",
      "Android Studio",
      "Veille technologique",
      "Gestion de projet",
      "Traitement du son",
      "Java",
    ],
    template: "neon",
    demo: (
      <ReactPlayer
        className="react-player neon-border"
        url={`${BASE_ASSETS_URL}/assets/projects/leds/video.mp4`}
        width={"fit-content"}
        height={"fit-content"}
        controls={true}
      />
    ),
  },
  {
    id: "motsfleches",
    title: "Mots fléchés en multijoueur",
    description: `Création d'une application de mots fléchés multijoueur en ligne.`,
    steps: [
      "Récupération d'une application node.js existante sur Git ancienne de 5 ans.",
      "Mise à jour de l'application avec les derniers packages en React.js",
      "Ajout d'une communication réseau multijoueur pour modifier la grille simultanément.",
      "Récupération de nouvelles grilles via API publique",
      "Ajout d'une vue responsive",
    ],
    skills: [
      "React.js",
      "HTML/CSS/JS",
      "API",
      "Javascript",
      "Rétroingénierie",
      "Node.js",
    ],
    template: "geometric",
    demo: <Grid></Grid>,
  },
];

const gameList = [
  {
    id: "ac-origins",
    title: "Assassin's Creed Origins",
    desc: "Jeu de la célèbre franchise Assassin's Creed qui se déroule dans l'Egypte Antique, il mêle habilité, résolution de problèmes complèxes et adaptation à son environnement.",
  },
  {
    id: "wwh",
    title: "We Were Here",
    desc: "Gamme de jeux de coopération, les jeux We Were Here demandent une communication claire, un travail d'équipe, de la patience et une dose de reflexion.",
  },
  {
    id: "ffxiv",
    title: "Final Fantasy XIV",
    desc: "FFXIV est un jeu en ligne massivement multijoueur (MMORPG) nous entrainant dans une aventure remplie de stratégies, de narrations et de rebondissement pour sauver Eorzea.",
  },
  {
    id: "cos",
    title: "Chant of Sennaar",
    desc: "Jeu français où l'on explore la tour de Babel et ses mystères. Le hic ? A chaque étage son peuple et sa propre langue à déchiffrer et leur propre culture à comprendre..",
  },
];

const gridSettings = {
  GRID_PROVIDER: {
    PROVIDER_NAME: "RCI-Jeux",
    PROVIDER_ADDR:
      "https://www.rcijeux.fr/drupal_game/notretemps/minifleches/grids/", //minifleches_0_1556.mfj
    PROVIDER_EXTENSION: ".mfj",
  },
};

export { BASE_ASSETS_URL, projectList, gridSettings, gameList };
