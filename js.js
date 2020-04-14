 var btn = document.getElementById('btn');
 var titulo = document.getElementById('titulo')
 var boton = document.getElementById('boton')
 
 btn.addEventListener('click' ,color)
 
 function color(){
    let numero = Math.floor(Math.random()*4);
    switch (numero){
        case 0: 
        console.log('gryffindor')
        gryffindor();
        break;
        case 1: 
        console.log('Slytherin')
        slytherin();
        break;
        case 2: 
        console.log('ravenclaw')
        ravenclaw();
        break;
        case 3: 
        console.log('hufflepuff')
        hufflepuff();
        break;
    }
}


function gryffindor(){
    document.body.style.background='#7f0909';
    titulo.innerHTML = 'Tu Casa Es Gryffindor!!';
    boton.removeChild(btn)
let logo = new Image();
    logo.src = "img/gryffindor.png"
    logo.className = 'escudo';
    boton.appendChild(logo);
}

function slytherin(){
    document.body.style.background='#0D6217';
    titulo.style.color= '#AAAAAA'
    titulo.innerHTML = 'Tu Casa Es Slytherin!!';

    boton.removeChild(btn)
let logo = new Image();
    logo.src = "img/slytherin.png"
    logo.className = 'escudo';
    boton.appendChild(logo);
}

function ravenclaw(){
    document.body.style.background='#0e1a40';
    titulo.style.color= '#946b2d'
    titulo.innerHTML = 'Tu Casa Es Ravenclaw!!';
    boton.removeChild(btn)
let logo = new Image();
    logo.src = "img/ravenclaw.png"
    logo.className = 'escudo';
    boton.appendChild(logo);
}

function hufflepuff(){
    document.body.style.background='#eee117';
    titulo.style.color= 'black'

    titulo.innerHTML = 'Tu Casa Es Hufflepuff!!';
    boton.removeChild(btn)
let logo = new Image();
    logo.src = "img/ufflepuff.png"
    logo.className = 'escudo';
    boton.appendChild(logo);
}


