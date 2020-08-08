const database = require('./db');
const createProffy = require('./createProffy')

database.then(async (db) => {
    proffyValue = {
        name: "Guilherme Samuel",
        avatar: "https://avatars3.githubusercontent.com/u/45369782?s=460&u=5c874048bf4ad9cbbf99b72787f0d821ce683378&v=4", 
        whatsapp: 55999092157,
        bio: "Junior Developer, interested in Data Science, Databases and Machine Learning. I love Coca-Cola Coffee. 3/9 Software Engineering in UNIPAMPA."
    };

    classValue = {
        subject: 1,
        cost: 40
    };

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }, 

        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        }
    ];

    // await createProffy(db, { proffyValue, classValue, classScheduleValues });

    const selectedProffys = await db.all("SELECT * FROM proffy");
});
