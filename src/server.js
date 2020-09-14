//Dados
const proffys = [
    {name:"Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
    whatsapp: "119876543", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
},

    {name:"Mayk Brito", 
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
    whatsapp: "1190898765", 
    bio: "Instrutor focado em ajudar pessoas a iniciar em progração WEB", 
    subject: "Ciências", 
    cost: "20", 
    weekday: [1], 
    time_from: [720], 
    time_to: [1220]
}
]

const subjects = [
    
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Música"

]

const weekdays = [

    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

//Funcionalidades
function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects(position)
}


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses (req, res) {
    const data = req.query
    
    const isNotEmpty = Object.keys(data).length > 0
    
    if(isNotEmpty){
            data.subject = getSubject(data.subject)

            proffys.push(data)
            
                return res.redirect("/study")
        }
    
        return res.render("give-classes.html", {subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//Configurando Nunjucks(Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
//Configurar arquivos estáticos
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/give-classes",pageGiveClasses)
.get("/study", pageStudy)
//Start do servidor
.listen(5500)