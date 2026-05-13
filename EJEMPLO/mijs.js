function calcular(operacion) {
    const val1 = document.getElementById('op1').value;
    const val2 = document.getElementById('op2').value;
    const cajaResultado = document.getElementById('resultado');

    // Validación de campos vacíos o no numéricos
    if (val1 === "" || val2 === "" || isNaN(val1) || isNaN(val2)) {
        cajaResultado.innerHTML = "Por favor, introduce ambos números.";
        return;
    }

    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            // Control de división por cero
            if (n2 === 0) {
                alert("Error: División entre cero");
                return;
            }
            resultado = n1 / n2;
            break;
    }

    cajaResultado.innerHTML = "Resultado: " + resultado;
}