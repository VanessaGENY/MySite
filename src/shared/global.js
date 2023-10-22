const projectList= [
    {
        id:"leds",
        title: "Application de contrôle de LEDs",
        description: `Création d'une application dans un cadre personnel pour contrôler la couleur et l'intensité des LEDs présentent dans mon appartement en fonction de la musique jouée sur le téléphone.`,
        steps: [
            "Mise en place d'une communication bluetooth LE avec les LEDs",
            "Reverse engineering d'une application chinoise pour récupérer le format des instructions bluetooth",
            "Création de l'application avec Android Studio",
            "Récupération de l'audio courante du téléphone et affichage de celle-ci.",
            "Traitement du signal audio pour le transformer en quotient de luminosité sur les LEDs"
        ],
        skills: [ "Rétroingénierie", "Android Studio", "Veille technologique", "Gestion de projet", "Traitement du son", "Java"]
    },
    {
        id:"motsfleches",
        title: "Mots fléchés en multijoueur",
        description: `Création d'une application de mots fléchés multijoueur en ligne.`,
        steps: [
            "Récupération d'une application node.js existante sur Git ancienne de 5 ans.",
            "Mise à jour de l'application avec les derniers packages en React.js",
            "Ajout d'une communication réseau multijoueur pour modifier la grille en même temps.",
            "Récupération de nouvelles grilles via API publique"
        ],
        skills: [ "React.js", "HTML/CSS", "API", "", "", ""]
    }
]


export {projectList}