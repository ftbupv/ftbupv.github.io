
// Javascript permite crear una lista de variables asi...
let gatos = [
    {  nombre: "Claudia",       foto: "./images/gat1.jpg"  },
    {  nombre: "Suki",          foto: "./images/gat8.jpg"  },
    {  nombre: "Pepito",        foto: "./images/gat9.jpg"  },
    {  nombre: "Lucia",         foto: "./images/gat3.jpg"  },
    {  nombre: "Freddy",        foto: "./images/gat5.jpg"  },
    {  nombre: "Milly",         foto: "./images/gat6.jpg"  },
    {  nombre: "Bam Bam",       foto: "./images/gat4.jpg"  },
    {  nombre: "Señor Bigotes", foto: "./images/gat7.jpg"  }
];

// Generar un angulo aleatorio
// La functión recibe un parametro que es al angulo máximo a generar
// La función también genera números negativos
function anguloAleatorio(rango)
{
    console.log("Generamos un numero con rango "+rango);
    return (Math.random()*2*rango)-rango;
}


// Destino para HTML generado
let gallery = document.querySelector("#gallery");

// Buscar la plantilla
let plantilla = document.querySelector("#polaroid");

// Genera los polaroids
for (let i=0; i<gatos.length; i++) {

    // Clonar el HTML de la plantilla
    let cloneOfPolaroid = plantilla.content.cloneNode(true);

    // Buscar los elementos de nuestro clon que necesitan datos
    // Este paso se tiene que hacer primero

    // Copiamos el archivo de la foto a la imagen dentro del div
    let img = cloneOfPolaroid.querySelector("img");
    img.src = gatos[i].foto;
    
    // Insertamos el nombre del gata en el div "texto"
    let text = cloneOfPolaroid.querySelector(".text");
    text.innerText = gatos[i].nombre;

    // Rotacion aleatorio
    let polaroid = cloneOfPolaroid.querySelector(".polaroid");
    let angle = anguloAleatorio(20);
    polaroid.style.transform = "rotate("+angle+"deg)";

    // Insertar el HTML clonado a la galeria
    // Este paso se hace despues de aplicar los datos
    gallery.appendChild(cloneOfPolaroid);
}

