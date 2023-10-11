const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i <= 100; i++) {
    let numero = '';
    let bgBox;
    
    if (i % 3 === 0 && i % 5 === 0 ){  
        numero = 'FizzBuzz'; 
        bgBox = 'my-bg-fizzbuzz';

     } else if (i % 3 === 0){  
        numero = 'Fizz'; 
        bgBox = 'my-bg-fizz';

     } else if (i % 5 === 0){ 
        numero = 'Buzz';
        bgBox = 'my-bg-buzz';
    }
    if (numero === '') {
        numero = i;
    }

    console.log(numero);

    const boxEl = document.createElement('div');
    boxEl.className = `box ${bgBox} col-2 p-3`;
    boxEl.innerHTML = numero;
    wrapperEl.append(boxEl);
}
