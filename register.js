//Registrar eñ service worker
if(navigator.serviceWorker){

    navigator.serviceWorker.register("./sw.js");

}


/* validar si la funcion esta en el navegador
if("serviceWorker" in navigator){
    console.log("Si existe");
}

otra forma de validarlo
if(navigator.serviceWorker){
    console.log("Si existe");
}
*/