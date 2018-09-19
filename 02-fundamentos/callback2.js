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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe un empleado con el ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

// getEmpleado(1, (err, empleado) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(empleado);
// });

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No se encontro un salario para ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });

    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };
        console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);
    })
});