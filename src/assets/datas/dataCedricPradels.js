const cedricPradelsData = {
  profil: {
    nom: "Cédric",
    prenom: "Pradels",
    adress: {
      line1: "12 rue du Compté",
      line2: "78 660 Ablis",
    },
    age: "29",
    email: "cedric.pradels@gmail.com",
    phone: "06 71 37 02 67",
    github: "https://github.com/CedricPradels",
    shortDescription:
      "Passionné de code, je désire intégrer une équipe dynamique et travailler sur des projets qui ont du sens. Je souhaite apporter mon sérieux et ma polyvalence à vos projets de développement.",
    title: "Développeur Web / Mobile",
    capacity: [
      "Organisé",
      "Sérieux",
      "Polyvalent",
      "Curieux",
      "Aime apprendre",
    ],
    hobbies: ["Badminton", "Course à pieds", "Coder"],
  },
  categories: {
    experiences: [
      {
        company: "Ako",
        title: "Développeur",
        description:
          "Développement front et back d'un MVP d'application mobile en React Native au sein d'une equipe agile de 4 développeurs",
        year: {
          start: "2020",
          end: "2020",
        },
      },
      {
        company: "Renault S.A.S.",
        title: "Chargé d'affaire innovation",
        description:
          "Développement de process robotisés et optiques innovants pour l'industrie automobile.",
        year: {
          start: "2016",
          end: "2019",
        },
      },
      {
        company: "Akka",
        title: "Chargé d'affaire process",
        description:
          "Déploiement de projets process pour l'industrie automobile.",
        year: {
          start: "2014",
          end: "2016",
        },
      },
      {
        company: "MTO",
        title: "Technicien de maintenance",
        description: "Maintenance et recherche de pannes.",
        year: {
          start: "2013",
          end: "2014",
        },
      },
      {
        company: "FTS",
        title: "Technicien bureau d'étude",
        description: "Modélisation, dessin industriel et simulation robotique.",
        year: {
          start: "2012",
          end: "2013",
        },
      },
    ],
    formations: [
      {
        title: "Formation",
        shortTitle: "Formation",
        entitled: "Développeur de site web et d'applications mobile",
        shortEntitled: "Développeur web et mobile",
        description:
          "Formation Javascript, Node, React et React Native. Realisation d'applications web et mobile, back et front.",
        year: "2020",
      },
      {
        title: "Licence professionnelle",
        shortTitle: "Licence pro.",
        entitled: "Robotique, conception et intégration des systèmes",
        shortEntitled: "RCIS",
        description: "",
        year: "2012",
      },
      {
        title: "Brevet de techicien supérieur",
        shortTitle: "BTS",
        entitled: "Mécanique et automatismes industriels",
        shortEntitled: "MAI",
        description: "",
        year: "2011",
      },
      {
        title: "Baccalauréat professionnel",
        shortTitle: "Bac pro.",
        entitled: "Électrotechnique, énergie et équipements communicants",
        shortEntitled: "Électrotechnique",
        description: "",
        year: "2009",
      },
    ],
    skills: [
      {
        categorie: "Langues",
        values: [
          {
            value: "Français",
            level: "Langue maternelle",
            thumbnail: require("../images/fr.png"),
          },
          {
            value: "Anglais",
            level: "Technique",
            thumbnail: require("../images/en.png"),
          },
        ],
      },
      {
        categorie: "Programmation",
        values: [
          { value: "Node.js", thumbnail: require("../images/node.png") },
          { value: "JavaScript", thumbnail: require("../images/js.png") },
          { value: "GIT", thumbnail: require("../images/git.png") },
          { value: "React", thumbnail: require("../images/react.png") },
          {
            value: "React Native",
            thumbnail: require("../images/reactNative.png"),
          },
          { value: "MongoDB", thumbnail: require("../images/mongo.png") },
          { value: "HTML", thumbnail: require("../images/html5.png") },
          { value: "CSS", thumbnail: require("../images/css3.png") },
          { value: "Typescript", thumbnail: require("../images/ts.png") },
          { value: "Storybook", thumbnail: require("../images/storybook.png") },
        ],
      },
    ],
  },
};

export default cedricPradelsData;
