const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();

app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, "public")));

const usuarios = [];

const usuariosregistro = [];

const proyectos = [
  {
    id: 1,
    imagen: "/imagenes/viananda.jpg",
    nombre: "VIANANDA",
    resumen: "Un documental creativo cuyo centro es el ser humano y la búsqueda de un cambio consciente",
    creador: "Creador: Luminosafilm",
    ingreso: "pagina_construccion.html",
  },
  {
    id: 2,
    imagen: "/imagenes/mezcal.jpg",
    nombre: "Mezcal artesanal 100% agave",
    resumen: "Aguardiente de agave - Destilado en Oaxaca, en el corazón de México",
    creador: "Creador: Mezcal Devoción",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 3,
    imagen: "/imagenes/calle61.jpg",
    nombre: "Música Sin Barreras para Calle 61",
    resumen: "Grabación y Producción del Disco Musical 'Desde mi Azotea'",
    creador: "Creador: Calle 61",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 4,
    imagen: "/imagenes/tanmateix.jpg",
    nombre: "Tanmateix, la màgia",
    resumen: "Una novela gráfica",
    creador: "Creador: Cristina Llorente y Flavia Gargiulo",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 5,
    imagen: "/imagenes/amelie.jpg",
    nombre: "AMELIE ANGEBAULT - NUEVO ALBUM",
    resumen: "Chansons Indie Pop Jazzy",
    creador: "Creador: Amelieangebault",
    ingreso: "pagina_construccion.html",
    },
];

app.get("/proyectos_actuales", function(req, res){
    res.render("proyectos_actuales", {
        proyectos_actuales: proyectos
    });
});

app.get("/proyectos_actuales/:id", function(req, res){
    const id = req.params.id;
    let elproyecto = {};

    proyectos.forEach(function(proyecto){
        if(proyecto.id === parseInt(id)){
            elproyecto = proyecto;
        }
    });

    res.render("proyectos", {
        proyecto: elproyecto
    });
});

app.get("/login", function(req, res){
    res.render("signup_login");
});

app.post("/login", async function (req, res) {
    const usuariosregistro = req.body;
    usuariosregistro.contraseña = await bcrypt.hash(req.body.contraseña, 12);
    usuarios.push(usuariosregistro);

    res.render("signup_login");
});

app.get("/login", function(req, res){
    res.render("signup_login");
});

app.post("/login", async function (req, res) {
    const { email1, contraseña } = req.body;
    let usuarioObj = null;
    let resultado = false;
    
    usuarios.forEach(function(usr){
        if(usr.email === email1) {
            usuarioObj = usr;
        }
    });
    
    if (usuarioObj !== null) {
        resultado = await bcrypt.compare(contraseña, usuarioObj.contraseña);
    }
    
    if (resultado) {
        res.redirect("/");
        return;
    }
    
    res.render("signup_login");
});

app.post("/index", function (req, res) {
    const id = usuarios.length + 1;
    const email = req.body.email;
    const nuevoUsuario = {
        id: id,
        email: email
    };
    usuarios.push(nuevoUsuario);

    res.render("nuevoUsuario", nuevoUsuario);
});

app.get("/", function(req, res){
    res.sendFile(path.join(
        __dirname, "views", "index.html"
    ));
});

const port = 4000;
const server = app.listen(port, () => {
  console.log(`Express corriendo → PORT ${server.address().port}`);
});