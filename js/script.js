const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i <= 100; i++) {
    let numero = '';
    
    if (i % 3 === 0){  
        numero += 'Fizz'; 
     } 
    if (i % 5 === 0){ 
        numero += 'Buzz';
    }
    if (numero === '') {
        numero = i;
    }

    console.log(numero);

    const boxEl = document.createElement('div');
    boxEl.className = `box col-2 p-3`;
    boxEl.innerHTML = numero;
    wrapperEl.append(boxEl);
}
