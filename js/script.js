const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i <= 100; i++) {
    let numero = '';
    let bgBox;
    
    if (i % 3 === 0 && i % 5 === 0 ){  
        numero = 'fizzbuzz'; 
        bgBox = 'my-bg-fizzbuzz';

     } else if (i % 3 === 0){  
        numero = 'fizz'; 
        bgBox = 'my-bg-fizz';

     } else if (i % 5 === 0){ 
        numero = 'buzz';
        bgBox = 'my-bg-buzz';
    }
    if (numero === '') {
        numero = i;
        bgBox = 'my-bg-box'
    }

    console.log(numero);

    const boxEl = document.createElement('div');
    boxEl.className = `box ${bgBox} my-box col-2 text-black fs-5 fw-bold d-flex justify-content-center align-items-center`;
    boxEl.innerHTML = numero;
    wrapperEl.append(boxEl);
}
