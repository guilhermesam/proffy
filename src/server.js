const proffys = [
    { name: "Guilherme Samuel",
        avatar: "https://avatars3.githubusercontent.com/u/45369782?s=460&u=5c874048bf4ad9cbbf99b72787f0d821ce683378&v=4", 
        whatsapp: 55999092157,
        bio: "Junior Developer, interested in Data Science, Databases and Machine Learning. I love Coca-Cola Coffee. 3/9 Software Engineering in UNIPAMPA.",
        subject: "Ciência de Dados",
        cost: 40,
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220]
    },

    { name: "Guilherme Samuel",
        avatar: "https://avatars3.githubusercontent.com/u/45369782?s=460&u=5c874048bf4ad9cbbf99b72787f0d821ce683378&v=4", 
        whatsapp: 55999092157,
        bio: "Junior Developer, interested in Data Science, Databases and Machine Learning. I love Coca-Cola Coffee. 3/9 Software Engineering in UNIPAMPA.",
        subject: "Ciência de Dados",
        cost: 40,
        weekday: [
            0
        ],
        time_from: [720],
        time_to: [1220]
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');


nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

function getSubject(subjectNumber) {
    return subjects[+subjectNumber -1];
}

function pageLanding(req, res){
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query;
    const isNotEmpty = Object.keys(data).length > 0;

    if (isNotEmpty) {
        data.subject = getSubject(data.subject);
        proffys.push(data);
        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays });
}

server.use(express.static("public"))

.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);