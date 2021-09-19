function crearResumenProyecto(proyectoACrear){
  const contenedor = document.createElement("div");
  const imagen = document.createElement("img");
  const nombre = document.createElement("h1");
  const resumen = document.createElement("p");
  const creador = document.createElement("p");
  const ingreso = document.createElement("a");
  
  
  imagen.src = proyectoACrear.imagen
  nombre.textContent = proyectoACrear.nombre;
  resumen.textContent = proyectoACrear.resumen;
  creador.textContent = proyectoACrear.creador;
  ingreso.href = proyectoACrear.ingreso;

  imagen.classList.add("imagen_proyecto");

  contenedor.appendChild(imagen);
  contenedor.appendChild(nombre);
  contenedor.appendChild(resumen);
  contenedor.appendChild(creador);
  contenedor.appendChild(ingreso);

  contenedor.classList.add("contenedor");

  const miBody = document.getElementsByTagName("main");
  miBody[0].appendChild(contenedor);
}

const Proyectos = [
  {
    id: 1,
    imagen: "C:/Users/Juanchi/Documents/Juan/Full Stack Developer/Senpai/Proyecto/Union/public/imagenes/viananda.jpg",
    nombre: "VIANANDA",
    resumen: "Un documental creativo cuyo centro es el ser humano y la búsqueda de un cambio consciente",
    creador: "Creador: Luminosafilm",
    ingreso: "pagina_construccion.html",
  },
  {
    id: 2,
    imagen: "C:/Users/Juanchi/Documents/Juan/Full Stack Developer/Senpai/Proyecto/Union/public/imagenes/mezcal.jpg",
    nombre: "Mezcal artesanal 100% agave",
    resumen: "Aguardiente de agave - Destilado en Oaxaca, en el corazón de México",
    creador: "Creador: Mezcal Devoción",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 3,
    imagen: "C:/Users/Juanchi/Documents/Juan/Full Stack Developer/Senpai/Proyecto/Union/public/imagenes/calle61.jpg",
    nombre: "Música Sin Barreras para Calle 61",
    resumen: "Grabación y Producción del Disco Musical 'Desde mi Azotea'",
    creador: "Creador: Calle 61",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 4,
    imagen: "C:/Users/Juanchi/Documents/Juan/Full Stack Developer/Senpai/Proyecto/Union/public/imagenes/tanmateix.jpg",
    nombre: "Tanmateix, la màgia",
    resumen: "Una novela gráfica",
    creador: "Creador: Cristina Llorente y Flavia Gargiulo",
    ingreso: "pagina_construccion.html",
    },
  {
    id: 5,
    imagen: "C:/Users/Juanchi/Documents/Juan/Full Stack Developer/Senpai/Proyecto/Union/public/imagenes/amelie.jpg",
    nombre: "AMELIE ANGEBAULT - NUEVO ALBUM",
    resumen: "Chansons Indie Pop Jazzy",
    creador: "Creador: Amelieangebault",
    ingreso: "pagina_construccion.html",
    },
];

Proyectos.map(function(proyecto) {
  crearResumenProyecto(proyecto);
});