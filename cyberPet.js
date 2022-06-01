// Parent class, has non-unique properties and methods for the virtual pet
class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
    }
    eat() {
        this.hunger += 10;
        console.log(`\n\n${this.name} takes a moment to eat, recovering its thirst to ${this.thirst}.`);
    }
    drink() {
        this.thirst += 10;
        console.log(`\n\n${this.name} takes a drink of water, recovering its thirst to ${this.thirst}.`);
    }
    checkAlive() {
        if (this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }
    decreaseStats() {
        if (this.hunger < 100) {
            this.health -= 5;
            console.log(`\n\nIt's been a while since ${this.name} ate, its health has gone down by 5!`);
        } else {
            this.health += 5
            console.log(`\n\nYou're taking great care of ${this.name}, its health has gone up by 5!`);
        }
        if (this.thirst < 100) {
            this.health -= 5;
            console.log(`\n\nIt's been a while since ${this.name} ate, its health has gone down by 5!`);
        } else {
            this.health += 5
            console.log(`\n\nYou're taking great care of ${this.name}, its health has gone up by 5!`);
        }

        let decreaseThirst = Math.random() * (15 - 5) + 15;
        let decreaseHunger = Math.random() * (15 - 5) + 15;

        this.thirst -= decreaseThirst;
        this.hunger -= decreaseHunger;
        this.checkStats();

        //Returns true or false, depending on stats
        return this.checkAlive();

    }
    checkStats() {
        console.log(`\n\n${this.name}'s stats are now: `);
        console.table(this);
    }
}

// Specific pet class, contains unique properties and methods for the virtual pet
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    playBall() {
        this.health += 10;
        this.thirst -= 20;
        console.log(`\n\nYou spend some time playing fetch with ${this.name}, increasing its health by 10, but reducing its thirst by 20!`);
        this.checkStats();
    }
    walk() {
        this.health += 10;
        this.hunger -= 20;
        console.log(`\n\nYou spend some time taking ${this.name} on a walk, increasing its health by 10, but reducing its hunger by 20!`);
        this.checkStats();
    }

}

// Specific pet class, contains unique properties and methods for the virtual pet
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    playWool() {
        this.health += 10;
        this.hunger -= 20;
        console.log(`\n\nYou spend some time teasing ${this.name} with a ball of wool, increasing its health by 10, but reducing its hunger by 20!`);
        this.checkStats();
    }
    sleep() {
        this.health += 20;
        this.thirst -= 10;
        console.log(`\n\nYou spend some time playing fetch with ${this.name}, increasing its health by 20, but reducing its thirst by 10!`);
        this.checkStats();
    }
}

// Specific pet class, contains unique properties and methods for the virtual pet
class Parrot extends Animal {
    constructor(name) {
        super(name);
    }
    fly() {
        this.health += 10;
        this.thirst -= 20;
        // this.fun += 15;
        console.log(`\n\nYou spend some time with ${this.name} letting them fly around the room, increasing its health by 10, but reducing its thirst by 20!`);
        this.checkStats();
    }
    puzzle() {
        this.health += 20;
        this.hunger -= 5;
        console.log(`\n\nYou spend some time giving puzzles to ${this.name}, time flies by and they seem happier, increasing its health by 20, but reducing its hunger by 5.`);
        // this.fun += 25;
        this.checkStats();
    }
}

// Specific pet class, contains unique properties and methods for the virtual pet
class Dragon extends Animal {
    constructor(name) {
        super(name);
    }
    ride() {
        this.health += 15;
        this.hunger -= 20;
        // this.fun += 15;
        console.log(`\n\nYou take ${this.name} out on a flight, soaring through the skies increasing it's health by 15, but reducing its hunger by 20.`);
        this.checkStats();

    }
    gold() {
        this.health -= 25;
        // this.fun += 50;
        console.log(`\n\nYou give ${this.name} a big pile of gold, they seem very pleased by your donation, sweeping it into their ever growing hoard. Its health has increased by 25`);
        this.checkStats();
    }
}

// Specific pet class, contains unique properties and methods for the virtual pet
class Dolphin extends Animal {
    constructor(name) {
        super(name);
    }
    swim() {
        this.health += 10;
        this.hunger -= 20;
        // this.fun += 15;
        console.log(`You take some time to swim with ${this.name}, playing in the water. Increasing its health by 10 but reducing its health by 20.`);
        this.checkStats();
    }
    tricks() {
        this.health += 15;
        // this.fun += 30;
        this.hunger -= 25;
        console.log(`You spend some time with ${this.name}, encouraging them to perform tricks. Increasing its health by 15, but reducing its hunger by 25`);
        this.checkStats();
    }
}

module.exports = {
    Cat,
    Dog,
    Parrot,
    Dragon,
    Dolphin,
};