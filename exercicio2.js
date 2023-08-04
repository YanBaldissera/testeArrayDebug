


const valores = [];

valores.push(5);
valores.push(4);
valores.push(10);
valores.push(9);
valores.push(7);
valores.push(3);
valores.push(2);
valores.push(22);
valores.push(90);
valores.push(42);


for (let i = 0; i < valores.length; i++) {
    if(valores[i] % 2 == 0){
        console.log(valores[i]);
    }   
}