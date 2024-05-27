// index.js
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach(button => {
    button.addEventListener('click', e => {
        const buttonText = e.target.innerText;
        switch (buttonText) {
            case 'C':
                display.innerHTML = '';
                break;
            case '<':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Estamos locos o que!!';
                }
                break;
            default:
                display.innerHTML += buttonText;
        }
    });
});


//
//Este código es un script de JavaScript que se utiliza para manipular una calculadora simple en una página web. Aquí te explico las partes clave:

// Se selecciona el elemento con el ID ‘display’ y se almacena en la variable display.
// Se seleccionan todos los elementos con la clase ‘button’ y se almacenan en un array llamado buttons.
// Para cada botón en el array buttons, se añade un evento de clic que desencadena una función.
// Dentro de esta función, hay un switch que maneja diferentes casos basados en el texto interno del botón que fue clickeado:
// Si es ‘C’, borra el display.
// Si es ‘<’, elimina el último carácter del display.
// Si es ‘=’, evalúa la expresión matemática actual en el display y muestra el resultado, o muestra un mensaje de error si la expresión no puede ser evaluada.
// Para cualquier otro caso, añade el texto del botón clickeado al display.