
const temperatura = document.getElementById("temperatura");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");
const formulario = document.getElementById("formulario");

// Verificar que los tres campos estén completos
function verificarCampos() {
    if (temperatura.value !== "" &&
        origen.value !== "" &&
        destino.value !== "") {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }

    resultado.textContent = "";
}

temperatura.addEventListener("input", verificarCampos);
origen.addEventListener("change", verificarCampos);
destino.addEventListener("change", verificarCampos);

// Convertir temperatura
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let valor = Number(temperatura.value);
    let celsius;
    let conversion;

    // Convertir primero a Celsius
    if (origen.value === "celsius") {
        celsius = valor;
    } else if (origen.value === "fahrenheit") {
        celsius = (valor - 32) * 5 / 9;
    } else {
        celsius = valor - 273.15;
    }

    // Convertir a la unidad seleccionada
    if (destino.value === "celsius") {
        conversion = celsius;
    } else if (destino.value === "fahrenheit") {
        conversion = (celsius * 9 / 5) + 32;
    } else {
        conversion = celsius + 273.15;
    }

    resultado.textContent =
        valor + " " + origen.options[origen.selectedIndex].text +
        " equivalen a " + Number(conversion.toFixed(2)) +
        " " + destino.options[destino.selectedIndex].text;
});
