class character {
    constructor(name,hp,maxHp,stamina,mp,attackPower,magicPower) {
        this.name = name
        this.hp = hp
        this.maxHp = maxHp
        this.stamina = stamina
        this.mp = mp
        this.attackPower = attackPower
        this.magicPower = magicPower
    }

    attack(target){
        if(this.stamina >= this.attackPower) {
            target.hp = target.hp - this.attackPower
            this.stamina = this.stamina - this.attackPower
            console.log(`${this.name} inflige ${this.attackPower} dégats physique a ${target.name}`)
        } else {
            console.log(`${this.name} a échoué son attaque, stamina faible (${this.stamina})`)
        }
    }

    attackMagick(target){
        if(this.mp >= this.magicPower){
            target.hp = target.hp - this.magicPower
            this.mp = this.mp - this.magicPower
            console.log(`${this.name} inflige ${this.magicPower} dégats magique a ${target.name}`)
        } else {
            console.log(`${this.name} a échoué son attaque, mana trop faible (${this.mp})`)
        }
    }

    heal(amount){
        if(this.hp + amount <= this.maxHp){
            this.hp = this.hp + amount
            console.log(`${this.name} ce soigne de ${amount}: ${this.hp} HP`)
        } else {
            console.log(`${this.name} soin impossible`)
        }
    }

}

const hero = new character("Aragon",100,100,50,50,20,25)
const boss = new character('Gritch le Troll',500, 500, 100, 100, 50, 50)

hero.attack(boss)
hero.attackMagick(boss)
boss.attack(hero)

console.log('--- Le héros est mal en point ! ---')
hero.heal(15)
console.log('--- Tentative de sort ultime ---')
hero.attackMagick(boss)
hero.attackMagick(boss)

console.log("--- Tentative d'attaque épuisée ---")
hero.attack(boss)
hero.attack(boss)

console.log('---------------')
console.log('FIN DU COMBAT')
console.log(`${hero.name} Statut final -> HP: ${hero.hp}/${hero.maxHp} | Stamina: ${hero.stamina} | MP: ${hero.mp}`)
console.log(`${boss.name} Status final -> HP: ${boss.hp}/${boss.maxHp}`)