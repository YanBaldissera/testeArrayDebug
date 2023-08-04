

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

//saber tamanho da lista
console.log(notas.length); 
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    console.log(soma);

    if(i == notas.length - 1){
        console.log(`A media final é ${soma / notas.length}`);
    }
    
}


const nome = 'Yan';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
    
}