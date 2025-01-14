// Buscar polaroides
let polaroids = document.querySelectorAll(".polaroid");

// Mensaje de paranoia en la consola
console.log("Hay "+polaroids.length+" polaroids");

let retraso = 0;
for (let i=0; i<polaroids.length; i++) {
    polaroids[i].style.animationDelay = retraso+"s";

    // Cada polaroid se retrasa un poco mas
    retraso = retraso + 0.1;
}

