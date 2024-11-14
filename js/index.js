/*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos 
(Ej. estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada. */

let profesoresCategoria = (profesores, categoria) => {
    let nombre = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria == categoria) {
            nombre.push(profesores[i].nombre);
        }
    }
    return nombre;
}

let profesores = [
    {categoria: 1, nombre: 'Ana', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
    {categoria: 3, nombre: 'Diana', sexo: 'F'},
    {categoria: 4, nombre: 'Eduardo', sexo: 'M'},
    {categoria: 5, nombre: 'Fernanda', sexo: 'F'},
    {categoria: 1, nombre: 'Gabriel', sexo: 'M'},
    {categoria: 2, nombre: 'Hector', sexo: 'M'},
    {categoria: 1, nombre: 'Isabel', sexo: 'F'},
]



let salida = document.getElementById("salida");

salida.innerHTML = JSON.stringify(profesoresCategoria(profesores, 1));
salida.innerHTML += "<br>" + JSON.stringify(profesoresCategoria(profesores, 2));
salida.innerHTML += "<br>" + JSON.stringify(profesoresCategoria(profesores, 3));
salida.innerHTML += "<br>" + JSON.stringify(profesoresCategoria(profesores, 4));
salida.innerHTML += "<br>" + JSON.stringify(profesoresCategoria(profesores, 5));
