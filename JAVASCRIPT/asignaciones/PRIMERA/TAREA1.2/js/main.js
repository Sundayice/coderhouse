alert('Desafío uno:  Crear un algoritmo JS simple (Carlos Padilla)');

let nombreUsuario = prompt ('Ingrese su nombre para verlo en consola: ');
let apellidoUsuario = prompt('Ingrese su apellido para verlo en consola: ');
let edad = parseInt(prompt('¿Cuál es su edad?'))

if (!nombreUsuario){
    alert('El usuario no ha ingresado ningún nombre!!!')
} else{
    alert ('Hola'+' '+nombreUsuario+' '+apellidoUsuario+', '+'bienvenido!!')
}

console.log('Nombre del Usuario: '+nombreUsuario);
console.log('Apellido del Usuario: '+apellidoUsuario);
console.log('Nombre y Apellido: '+nombreUsuario+' '+apellidoUsuario);
console.log('Edad del Usuario: '+edad);