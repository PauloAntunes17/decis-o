var numero = parseInt(prompt('digite um numero numero'));
var soma = 0
var numdigitado = numero;

while (numero != 0) { 
    soma += numero % 10;
    numero = parseInt(numero / 10);
    alert(soma + " " + numero);
}

alert ('soma do numero' + numdigitado  + 'foi:' + soma);

