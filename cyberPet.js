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
        console.table(this)
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

module.exports = {
    Cat,
    Dog
};