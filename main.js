const form = document.getElementById('deposito');
const resultadoElemento = document.getElementById('resultado');

function deposito(campoA, campoB) {
    if (campoB > campoA) {
        return `Formulário válido, Campo B (${campoB}) é maior que Campo A (${campoA}).`;
    } else {
        return `Atenção! - O campo B (${campoB})  deve ser maior que o campo A. (${campoA})`;
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const resultado = deposito(campoA, campoB);
    
    resultadoElemento.innerHTML = resultado;
    alert(resultado);

});