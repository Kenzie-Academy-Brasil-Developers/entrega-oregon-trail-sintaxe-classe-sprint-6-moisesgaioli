class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt() {
        this.food += 2;
    }

    eat() {
        if(this.food > 0) {
           this.food -= 1;
        } else {
           this.isHealthy = false;
        }
    }
}


class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passageiros = [];
    }

    getAvailableSeatCount() {

        let newArray = [];
        for(let i = 0; i < this.capacity; i++) {
            newArray.push(i);
        }

        return newArray.length - this.passageiros.length;
    }

    join(pessoa) {
        
        if(this.getAvailableSeatCount() > 0) {
            this.passageiros.push(pessoa);
        }
    }

    shouldQuarantine() {

        this.passageiros.forEach(pessoa => {
            if(pessoa.isHealthy === false){
                return true;
            }
        })

        return false;
        
    }

    totalFood() {
        return this.passageiros.reduce((acc, item) => item.food + acc, 0);
    }
}




// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);