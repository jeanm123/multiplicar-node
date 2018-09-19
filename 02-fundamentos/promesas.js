let empleados = [{
    id: 1,
    nombre: 'Jean'
}, {
    id: 2,
    nombre: 'Juan'
}, {
    id: 3,
    nombre: 'Luis'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`no existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });

}
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No se encontro un salario para ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });

        }
    });
}

// getEmpleado(3).then(empleado => {
//     getSalario(empleado).then(resp => {
//         console.log(`el Salario de ${resp.nombre} es de ${resp.salario}`);
//     }, (err) => {
//         console.log(err);
//     });
// }, (err) => {
//     console.log(err);
// });

// PROMESAS EN CADENA
getEmpleado(5).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`EL salario de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
})