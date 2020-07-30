var Comprobar = function(){

    var validar = document.getElementById('nombre').value;
    var validar1 = document.getElementById('apellido').value;
    var validar2 = document.getElementById('cedula').value;
    var validar3 = document.getElementById('correoE').value;
    var Alerta = document.getElementById('Alerta');
    
//Bordes Rojos
if(validar.length ==0){
document.getElementById('nombre').style.borderColor = "red";

}

else{
document.getElementById('nombre').style.borderColor = "black";
}

if(validar1.length ==0){
document.getElementById('apellido').style.borderColor = "red";
   
}
        
else{
document.getElementById('apellido').style.borderColor = "black";
}

if(validar2.length ==0){
document.getElementById('cedula').style.borderColor = "red";
             
}

                
else{
document.getElementById('cedula').style.borderColor = "black";
       
}


if(validar3.length ==0){
document.getElementById('correoE').style.borderColor = "red";
}
                        
else{
document.getElementById('correoE').style.borderColor = "black";
}

//Alertas
if(validar === "" || validar1 ==="" || validar2 ==="" || validar3 ===""){
    Alerta.innerHTML =("<p style = 'color: red'>¡CAMPOS OBLIGATORIOS!</p>")
}
else{
    Alerta.innerHTML ="";
}

}


function MascaraCedula(){
    var CDL = document.getElementById('cedula')
    if(CDL.value.length == 3 || CDL.value.length ==11){
     CDL.value += '-';
    }
}

function validarEmail( email ) {

    var validacion= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    var VD = validacion.test(email)

    if(VD==true){

    }
    else{
        Alerta.innerHTML +=("<p style = 'color: red'>¡INGRESE UN CORREO VALIDO!</p>")
        document.getElementById('correoE').style.borderColor = "red";
        
    }
}

function numerosValid(e){
key = e.keyCode || e.which;
tecl = String.fromCharCode(key);
num = "0123456789"
if(num.indexOf(tecl)== -1){
return false;
}
}

function limitarCaracteres(e, contenido, caracteres)
{
  
var unc=e.keyCode? e.keyCode : e.charCode;

if(unc==8 || unc==46 || unc==13 || unc==9 || unc==37 || unc==39 || unc==38 || unc==40)
return true;
 
if(contenido.length>=caracteres)
return false;
 
}
