/**
 * Async Await
 */

// let getNombre = async() => {
//         // throw new Error('sadsa');
//         return 'Fernando';
//     }
// refrencia a lo de arriba
// let getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Fernando');
//     })
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000)

    });
}

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`
}

saludo().then(mensaje => {
    console.log(mensaje);
})