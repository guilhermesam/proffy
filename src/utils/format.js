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

function getSubject(subjectNumber) {
    return subjects[+subjectNumber -1];
}

function convertHoursToMinutes(time) {
   const [hours, minutes] = time.split(':');
   return Number((hours * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
