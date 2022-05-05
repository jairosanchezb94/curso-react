// Promesas

import { getHeroesById } from "./bases/08-imp-exp";

/*const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('3 segundos despues');
        //resolve();
        const heroe = getHeroesById(2);
        resolve(heroe);
        //reject('Error');

    }, 3000);
    
});


promises.then((heroe) => {
    console.log('heroe', heroe);    
})
.catch(err => console.warn(err));*/

/*promises.catch(err => {
    console.log(err);
});*/


// Promesas con async/await

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('3 segundos despues');
            //resolve();
            const heroe = getHeroesById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No existe un heroe con ese id');
            }
            //resolve(heroe);
            //reject('Error');
    
        }, 3000);
        
    });

}


getHeroesByIdAsync(10)
    .then(console.log)
    .catch(console.warn);