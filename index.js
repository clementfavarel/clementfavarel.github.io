// Define data for the sidebar
const questionsData = [
    {
        category: "A propos de moi",
        questions: [
            {
                id: "perso0",
                question: "Qui es-tu ?",
                imgSrc: "./img/fr3.png",
                response:
                    "Je m'appelle Clément FAVAREL, j'ai 19 ans et j'habite actuellement à Toulon.",
            },
            {
                id: "perso1",
                question: "As-tu tes passions ?",
                imgSrc: "./img/loisirs.jpg",
                response:
                    "J'ai pas mal de passions, notamment le sport, la musique, le monde associatif et la programmation.<br/><br/>J'ai pratiqué toute sorte de sports depuis tout petit: du foot, du judo, du badminton, de l'athlétisme, mais ces dernières années je pratique surtout de la musculation.<br/><br/>Pour ce qui est de la musique, elle m'accompagne au quotidien et je ne m'imagine pas vivre sans.<br/><br/>Le monde associatif et plus particulièrement les associations étudiantes ont une place importante dans ma vie. J'ai eu la chance de m'investir dans plusieurs associations et de voir les fruits de mon engagement.<br/><br/>Enfin, la programmation est une passion que j'ai découverte lors de mon BUT MMI. J'ai découvert un monde qui me permet de m'exprimer et de créer des choses qui me servent au quotidien. C'est un pouvoir que je trouve incroyable et qui me pousse à toujours en apprendre plus.",
            },
            {
                id: "perso2",
                question: "Quelles sont tes qualités ?",
                imgSrc: "./img/qualites.png",
                response:
                    "Si je devais me décrire en quelques mots, je dirais que je suis quelqu'un de déterminé, curieux, et à l'écoute. C'est les retours que j'ai pu avoir de mes proches et de mes collègues. Déterminé car je suis quelqu'un qui a beaucoup d'ambition et qui ne lâche rien. Curieux car j'aime apprendre et découvrir de nouvelles choses, j'ai besoin de comprendre ce qui m'entoure et ce depuis tout petit. Enfin, à l'écoute car j'aime comprendre les gens et les aider quand je le peux.",
            },
            {
                id: "perso3",
                question: "Quels sont tes défauts ?",
                imgSrc: "./img/defauts.jpg",
                response:
                    "Pour ce qui est de mes défauts, je dirais que je suis quelqu'un de très exigeant envers moi-même et envers les autres. C'est une qualité mais aussi un défaut car je peux parfois être trop dur avec moi-même autant qu'avec les autres. J'ai aussi tendance à être un peu trop perfectionniste, ce qui peut me ralentir dans mes projets. J'ai aussi tendance à me montrer hâtif dans mes décisions, ce qui peut parfois me jouer des tours.",
            },
        ],
    },
    {
        category: "Mon parcours scolaire",
        questions: [
            {
                id: "ecole0",
                question: "As-tu des diplômes ?",
                imgSrc: "./img/diplome.jpg",
                response:
                    "Oui, j'ai obtenu mon BAC STI2D option Systèmes d'Information et Numérique en 2021 au lycée militaire d'Aix-en-Provence. J'ai ensuite intégré le BUT MMI à l'Université de Toulon.",
            },
            {
                id: "ecole1",
                question: "Parle-moi un peu du BUT MMI",
                imgSrc: "./img/butmmi.jpg",
                response:
                    "Le Bachelor Universitaire de Technologie Métiers du Multimédia et de l'Internet est une formation qui m'a permis de découvrir le monde d'aujourd'hui grâce à des cours variés et des projets concrets.<br/><br/>Que ce soit en développement web, en communication, en design ou en audiovisuel, j'ai pu découvrir et apprendre des compétences qui me servent au quotidien.<br/><br/>Je trouve que l'aspect pluri-disciplinaire de cette formation est un vrai plus car il permet de se découvrir, de nous sensibiliser aux différents domaines du multimédia et ainsi, de se spécialiser dans un domaine qui nous plaît.",
            },
            {
                id: "ecole2",
                question: "Pourquoi avoir choisi l'option DWDI ?",
                imgSrc: "./img/coding.jpg",
                response:
                    "Et pourquoi pas ?<br/><br/>Je rigole bien évidemment. Plus sérieusement, j'ai choisi l'option DWDI (Développement Web et Dispositifs Interactifs) pour 3 raisons principales.<br/><br/>La première, j'ai toujours été attiré par le monde du numérique et plus spécifiquement les ordinateurs. J'ai toujours été curieux de comprendre comment fonctionnait un site internet, une application, etc.<br/><br/>La deuxième, je trouve que c'est la spécialité qui me correspond le plus étant donné que je suis quelqu'un de très logique et que j'apprécie les optimisations de la vie de tous les jours.<br/><br/>Enfin, la troisième, c'est que je trouve que c'est un domaine qui est en constante évolution et qui offre de nombreuses opportunités.",
            },
            // parler de mes projets professionnels futurs
        ],
    },
    {
        category: "Mes expériences professionnelles",
        questions: [
            {
                id: "pro0",
                question: "As-tu eu des emplois saisonniers ?",
                imgSrc: "./img/pro.jpg",
                response:
                    "Oui, j'ai travaillé l'été 2021 en tant qu'agent de production pour l'entreprise AXALYS (31). Ce travail consistait à assembler des pièces (comme des poignées ou des crémones) pour des portes et fenêtres.<br/>C'est un travail qui demande de la patience et de la précison. Cela m'a permis de mettre mon esprit hatif de côté et de me concentrer sur la tâche à accomplir sans me dépêcher.<br/><br/>J'ai aussi travaillé l'été 2022 en tant que webmaster pour la mairie de Miramas (13) dans la continuité de mon stage de première année d'MMI.<br/>J'ai eu la chance de travailler sur le site internet de la ville et d'administrer son contenu ainsi que celui des réseaux sociaux comme facebook, messenger et instagram.<br/>C'est un travail qui m'a permis de plonger un peu plus dans le monde du web et de découvrir les enjeux de la communication sur internet.",
            },
            {
                id: "pro1",
                question: "As-tu fait des stages lors de ton BUT ?",
                imgSrc: "./img/stage.jpg",
                response:
                    "Comme dit précédemment, j'ai effectué mon stage de première année à la mairie de Miramas en tant que webmaster/community manager.<br/>C'est à partir de ce moment que je me suis découvert une passion pour le développement web et la communication sur internet.<br/><br/>Pour ce qui est de mon stage de deuxième année, j'ai pu intégrer le FANLAB de la Marine Nationale de Toulon en tant que développeur.<br/>J'y ai développé une application mobile en React Native qui sert aux plongeurs-démineurs à calculer plusieurs distances de sécurité et autres informations qu'ils calculaient auparavant à la main. C'est un projet qui m'a permis de découvrir le monde de la défense et de travailler sur un projet concret qui a un impact direct sur le quotidien des plongeurs-démineurs.<br/>J'ai aussi travaillé sur un projet d'application web pour faire un inventaire des installations présentes dans les bateaux de la Marine Nationale.<br/>Elle à été réalisée en Laravel et déployée sur un conteneur Docker. C'est d'ailleurs la première fois que j'utilisais Docker et que je travaillais sur un projet de cette envergure.",
            },
        ],
    },
    {
        category: "Mon engagement associatif",
        questions: [
            {
                id: "asso0",
                question: "Pourquoi cet engagement ?",
                imgSrc: "./img/mmin.jpg",
                response:
                    "Haaa, le monde associatif étudiant...<br/>On en entend parler mais on ne sait pas toujours ce que c'est. Pour ma part, j'ai découvert ce monde lors de mon arrivée à Toulon.<br/>J'ai été très vite attiré par cet univers qui m'a permis de réaliser des projets concrets et de rencontrer des personnes formidables.<br/>Que ce soit pour l'organisation d'événements, la gestion de projets ou la communication, j'ai pu découvrir et apprendre des compétences qui me servent au quotidien. J'ai aussi pu découvrir des valeurs qui me tiennent à coeur comme la solidarité, l'entraide et le partage.",
            },
            {
                id: "asso1",
                question: "D'une association à une fédération",
                imgSrc: "./img/fedet.jpg",
                response:
                    "Mon engagement associatif a commencé avec l'association étudiante BDE MMI'N de Toulon où j'ai exercé la fonction de trésorier général. J'y ai appris les bases de la gestion d'une association et de ses finances.<br/><br/>J'ai ensuite intégré la Fédération des Etudiants Toulonnais (FEDET) en tant que vice-président en charge de l'innovation sociale.<br/>J'ai pu gérer une équipe d'une vingtaine de personnes et créer ou développer d'avantage des projets comme l'Epicerie Sociale et Solidaire de Toulon, le Foodtruck mis en place sur le campus de Draguignan pour palier au manque de restaurant universitaire ou encore le projet de collecte alimentaire piloté par la Banque Alimentaire du Var.<br/>C'est un engagement qui m'a permis de découvrir le monde de l'innovation sociale et de travailler sur des projets qui ont un impact direct sur la vie des étudiants.<br/>Beaucoup de contact humain, d'apprentissage des spécificités du domaine, de gestion de projet et de communication.",
            },
            {
                id: "asso2",
                question: "Les fruits de cet engagement",
                imgSrc: "./img/fruits.png",
                response:
                    "Que dire de ces engagements ? Que m'ont-ils apporté ?<br/><br/>Je dirais que ces engagements m'ont permis de découvrir des valeurs qui me tiennent à coeur, de rencontrer des personnes formidables et de réaliser des projets concrets. J'ai pu observer une réelle différence entre le moi d'il y a 3 ans et le moi d'aujourd'hui. J'ai appris à gérer des projets, des équipes, des budgets, à communiquer, à m'adapter, à être à l'écoute et tout cela se ressent dans ma vie de tous les jours. Que ce soit en cours avec une baisse du stress lors des présentations orales ou dans ma vie personnelle avec une meilleure vision long terme et une meilleure gestion de mon temps.<br/><br/>Je suis fier de ce que j'ai accompli et je suis convaincu que ces expériences m'ont permis de grandir et de mûrir.",
            },
        ],
    },
];

// Create a function to generate sidebar content
function generateQuestions() {
    const questionsContainer = document.querySelector(".questionsContainer");

    // Reusable typewriter effect function
    function applyTypewriterEffect(element, text, typingSpeed) {
        let index = 0;

        function typeWriter() {
            if (index < text.length) {
                const char = text.charAt(index);
                if (char === "<") {
                    // Find the end of the HTML tag
                    const endIndex = text.indexOf(">", index);
                    if (endIndex !== -1) {
                        element.insertAdjacentHTML(
                            "beforeend",
                            text.substring(index, endIndex + 1)
                        );
                        index = endIndex + 1;
                    }
                } else {
                    element.insertAdjacentHTML("beforeend", char);
                    index++;
                }
                setTimeout(typeWriter, typingSpeed);
            }
        }

        setTimeout(typeWriter, 500); // Start after a brief delay
    }

    // Display welcome message
    const welcomeMessage = document.createElement("div");
    welcomeMessage.classList.add("welcome");
    welcomeMessage.innerHTML = `
    <img class="welcomePic" src="./img/plkode.png" alt="plkode" />
    <h1 class="typewriter"></h1> <!-- Typewriter effect will be applied here -->
    <p class="typewriter"></p> <!-- Typewriter effect will be applied here -->
`;
    document.querySelector(".chat").appendChild(welcomeMessage);

    // Apply typewriter effect to the welcome message title
    const welcomeTitleElement = welcomeMessage.querySelector("h1.typewriter");
    const welcomeTitle = "Bienvenue sur ChatCV !";
    applyTypewriterEffect(welcomeTitleElement, welcomeTitle, 15);

    // Apply typewriter effect to the welcome message text
    const welcomeTextElement = welcomeMessage.querySelector("p.typewriter");
    const welcomeText = `Je suis là pour répondre à tes questions et t'aider à en apprendre plus sur moi.<br /><br />Tu peux commencer par me poser une question en cliquant sur l'une des questions présentes dans la barre à gauche.`;
    applyTypewriterEffect(welcomeTextElement, welcomeText, 15);

    questionsData.forEach((section) => {
        const questionList = document.createElement("div");
        questionList.classList.add("questionList");

        const categoryHeader = document.createElement("h3");
        categoryHeader.classList.add("categoryName");
        categoryHeader.textContent = section.category;
        questionList.appendChild(categoryHeader);

        section.questions.forEach((question) => {
            const questionItem = document.createElement("div");
            questionItem.classList.add("question");
            questionItem.id = question.id;
            questionItem.textContent = question.question;

            questionItem.addEventListener("click", () => {
                // check if there is a container ".welcome" in the chat container and remove it if it exists
                const welcome = document.querySelector(".welcome");
                if (welcome) {
                    welcome.remove();
                }

                const clickedQuestion = displayQuestion(question.id);
                if (clickedQuestion) {
                    displayResponse(
                        clickedQuestion,
                        clickedQuestion.imgSrc,
                        clickedQuestion.response
                    );
                }
            });

            questionList.appendChild(questionItem);
        });

        questionsContainer.appendChild(questionList);
    });
}

function displayQuestion(questionId) {
    const question = questionsData
        .flatMap((section) => section.questions)
        .find((question) => question.id === questionId);
    if (question) {
        // Create chat container if it doesn't exist
        let chatContainer = document.querySelector(".chatContainer");
        if (!chatContainer) {
            chatContainer = document.createElement("div");
            chatContainer.classList.add("chatContainer");
            document.querySelector(".chat").appendChild(chatContainer);
        }

        // Add question
        const askedText = document.createElement("div");
        askedText.classList.add("text", "asked");
        askedText.innerHTML = `
            <div class="gpt">
                <img src="./img/gpt.svg" alt="gpt" />
            </div>
            <p class="response">
                <span class="name">ChatCV</span><br />
                <span class="typewriter">${question.question}</span>
            </p>
        `;
        chatContainer.appendChild(askedText);

        // Return the question object for further processing
        return question;
    } else {
        console.error(`Question with ID ${questionId} not found`);
        return null;
    }
}

function scrollToBottom() {
    const chat = document.querySelector(".chat");
    const lastMessage = chat.lastElementChild;
    if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth", block: "end" });
    }
}

function displayResponse(question, imgSrc, response) {
    if (question) {
        // Add response container
        const answeredText = document.createElement("div");
        answeredText.classList.add("text", "answered");
        answeredText.innerHTML = `
            <img class="profile" src="./img/plkode.png" alt="plkode" />
            <p class="response">
                <span class="name">plkode</span><br />
                <span class="typewriter">
                    <img class="image" src="${imgSrc}" alt="img" />
                </span> <!-- Typewriter effect will be applied here -->
            </p>
        `;
        document.querySelector(".chatContainer").appendChild(answeredText);

        // Implement typewriter effect
        const responseElement = answeredText.querySelector(
            ".response .typewriter"
        );
        let index = 0;
        const typingSpeed = 15;

        function typeWriter() {
            if (index < response.length) {
                const char = response.charAt(index);
                if (char === "<") {
                    // Find the end of the HTML tag
                    const endIndex = response.indexOf(">", index);
                    if (endIndex !== -1) {
                        responseElement.insertAdjacentHTML(
                            "beforeend",
                            response.substring(index, endIndex + 1)
                        );
                        index = endIndex + 1;
                    }
                } else {
                    responseElement.insertAdjacentHTML("beforeend", char);
                    index++;
                }
                setTimeout(typeWriter, typingSpeed);
                scrollToBottom();
            }
        }

        // Start typewriter effect after a brief delay
        setTimeout(typeWriter, 500); // Delay before starting typewriter effect
    } else {
        console.error("Question not found, cannot display response");
    }
}

// Call the function to generate sidebar content when the page loads
window.addEventListener("DOMContentLoaded", generateQuestions);
