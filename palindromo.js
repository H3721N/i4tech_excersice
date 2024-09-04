function esUnPalindromo(text) {

    let textoLimpio = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    //convierte el texto recivido en una cadena
    let array = textoLimpio.split('');

    //invierte el orden de la cadena
    let reverse = array.reverse();

    // compara la cadena normal con la invertida y returna una respuesta deacuerdo al resultado
    return textoLimpio === reverse.join('') ? "Es un polindromo" : "No es un polindromo"

}

console.log(esUnPalindromo('Hola mundo'));
console.log(esUnPalindromo('Anita lava la tina'));