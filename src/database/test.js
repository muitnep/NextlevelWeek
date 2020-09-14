const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados
    proffyValue = {
        nome: "Rodrigo Rodrigues",
        avatar:"https://avatars2.githubusercontent.com/u/46485600?s=460&u=bf76142e8b4bd6be3d10963eb5f46ffc2ac90b62&v=4",
        whatsapp: "6198765432",
        bio: "Professor de música e iniciante em programação web"    
    }

    classValue = {
        subject: "Português",
        cost: "20"        
        //O proffy_id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    await createProffy(db,{proffyValue, classValue, classScheduleValues})


    //Consultar dados inseridos
})
