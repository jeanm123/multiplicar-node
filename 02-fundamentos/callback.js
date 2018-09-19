// setTimeout(() => {
//     console.log('Hola mundo');
// }, 3000);
let getusuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Jean',
        id
    }
    if (id === 20) {
        callback(`el usuario con ${id}, no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }

}

getusuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});