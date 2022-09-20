const h1 = document.querySelector('h1');
const input1 = document.querySelector ('#calculo1'); 
const input2 = document.querySelector ('#calculo2');
const button = document.querySelector ('#btnCalcular') 
const pResult = document.querySelector('#result');
// const p = document.querySelector('p');
// const parrafo = document.querySelector('.parrafo');  
// const pid = document.getElementById('pid');

btnCalcular.addEventListener('click', btnOnclick);


function btnOnclick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;

}



