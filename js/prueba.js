
const url = "a";
fetch(url).then(function(respuesta){
    // Logica de exito
    console.log(respuesta)
}).catch(function(error){
    // Logica de error
    console.log(error)
})