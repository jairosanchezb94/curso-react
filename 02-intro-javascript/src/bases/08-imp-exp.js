import heroes from '../bases/data/heroes';





export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id);
}

console.log(getHeroesById(2) );

// find?, filter
export const getHeroesByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

console.log(getHeroesByOwner('DC'));    