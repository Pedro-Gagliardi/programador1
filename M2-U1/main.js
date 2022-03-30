// punto 1

var cubo = document.getElementById('cubo1');
cubo.addEventListener('click' , cambiarColor);

function cambiarColor() {        
    document.getElementById('cubo1').style.background = 'black';                
}

var cubo2 = document.getElementById('cubo2');
cubo2.addEventListener('click' , cambiarColor2);

var cubo2
function cambiarColor2() {    
    document.getElementById('cubo2').style.background = 'pink';            
}

var cubo3 = document.getElementById('cubo3');
cubo3.addEventListener('click' , cambiarColor3);

var cubo3
function cambiarColor3() {    
    document.getElementById('cubo3').style.background = 'gray';                 
}


// punto 2


// function validar() {
//     var nombre = document.getElementById('nombre').value;

//     if (nombre == "") {
//         document.getElementById('area').value = "Campo en blanco";
//         document.getElementById('nombre').style.borderColor = 'red';
//     } else if (!isNaN(nombre)) {
//         document.getElementById('area').value = "No puedes intrudicir números";
//         document.getElementById('nombre').style.borderColor = 'yellow';

//     } else {
//         procesar(nombre)

        
//     }

// } 

    // var miBoton = document.getElementById('boton');
    // miBoton.addEventListener('click' , validar);

    // function validar(){
    //     var area = document.getElementById('area').value;
    //     contadorCaracteres(area);       
    // }
    
    // function contadorCaracteres(area) {        
    //     alert("Tiene " + area.length + " caracteres");
    // }
    
    
    
    

