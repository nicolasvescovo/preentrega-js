let usuario = prompt ("Ingresá tu usuario:");
let contrasena = prompt("Ingresa tu contraseña:")
let contrasena2 = prompt("Ingresa nuevamente tu contraseña:");
if (contrasena==contrasena2){
    console.log ("Contraseña correcta. Bienvenido " + usuario);   
}else{
    prompt("Contraseña incorrecta. Ingresa tu contraseña nuevamente");
}
