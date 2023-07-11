function inventory(input){
    let heroes = input.map(hero => {
        const [Hero, level, items] = hero.split(" / ")
        return {Hero, level, items}
    })

    heroes.sort((a,b) => {return a.level - b.level})
    .forEach(hero => {console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items}`)})

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );

