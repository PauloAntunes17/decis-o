var salario = prompt('digite o salario do funcionario');

if (salario % 4 == 0) {
    alert(salario * 0.08 - salario);
} else {
    alert(salario * 0.09- salario);
}