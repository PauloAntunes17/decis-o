var num1 = parseInt(prompt('digite o primeiro numero'));
var maior = num1;
var num2 = parseInt(prompt('digite o segundo numero'));
if(num2 > maior){
    maior=num2;
}
var num3 = parseInt(prompt('digite o terceiro numero'));
if (num3 > maior) {
    maior= num3
}
alert('o maior numero digitado foi: ' + maior);