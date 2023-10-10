// Esta linha seleciona o elemento HTML com ID 'calculate' e adiciona um ouvinte de evento de clique (click)
document.getElementById('calculate').addEventListener('click', function(){

// Esta linha obtém o valor digitado no elemento HTML com ID 'value' e armazena na váriavel 'value'.
const value = document.getElementById('value').value;

// Esta linha obtém o valor digitado no elemento HTML com o ID 'fee' e o divide por 100 para obter uma taxa em decimal.
//O resultado é armaenado na váriavel 'fee'.
const fee = (document.getElementById('fee').value / 100);

// Esta linha obtém o valor digitado no elemento HTML com o ID 'time' e armazena na váriavel 'time'.
const time = document.getElementById('time').value;

// Esta linha calcula o total com base nos valores obtidos anteriormente. O cálculo é realizado usando a 
//f[omula de juros compostos.
const total = value * (1 + fee)**time;

//Esta linha atualiza o conteúdo do elemento HTML com o ID 'total' para mostrar o resultado formatado
//com uma string no formato "R$ x, xx".
document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace('.', ','));

});