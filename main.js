const form = document.getElementById('deposito');
const resultadoElemento = document.getElementById('resultado');

function deposito(campoA, campoB) {
    if (campoB > campoA) {
        return campoB;
    } else {
        return "Atenção! - O campo B deve ser maior que o campo A.";
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const resultado = deposito(campoA, campoB);
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = resultado;
    

    if (resultado === campoB) {
        alert(`Formulário válido, Campo B (${campoB}) é maior que Campo A! (${campoA}).`);
    } else {
        alert(resultado);
    }
});