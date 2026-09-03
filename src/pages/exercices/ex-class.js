class Imc {
    constructor(name,weight,size) {
        this.name = name
        this.weight = weight
        this.size = size
    }

    calcImc(){
        return (this.weight / (this.size**2)).toFixed(2)
    }
    display(){
        console.log(`${this.name} (${this.weight} kg, ${this.size} M) a un IMC de: ${this.calcImc()}`)
    }

}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55)
]

list.forEach( (Imc)=>{
    Imc.display()
})