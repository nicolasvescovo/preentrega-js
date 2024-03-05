let usuario = prompt ("Ingresá tu usuario:");
let contrasena = prompt("Ingresa tu contraseña:")
let contrasena2 = prompt("Ingresa nuevamente tu contraseña:");
if (contrasena==contrasena2){
    console.log ("Contraseña correcta. Bienvenido " + usuario);   
}else{
    Alert("Contraseña incorrecta, acceso denegado.");
}

let dia = Number (prompt("Indique con número del 1 al 5 el día de la semana para ver la actividad que tiene pendiente."))
switch (dia){
    case 1:
        console.log (usuario +" hoy tiene reunión a las 15hs")
        break
    case 2:
        console.log (usuario +" hoy tiene turno en el médico.")
        break
    case 3:
        console.log (usuario +" hoy tiene turno con el psicólogo a las 19hs.")
        break
    case 4:
        console.log(usuario +" hoy tiene el día libre.")
        break
    case 5:
        console.log(usuario +" hoy tiene partido de futbol a las 20hs y después asado con amigos")
        break
    default:
        console.log ("Ingreso un dato incorrecto.")
}