// Parent class, has non-unique properties and methods for the virtual pet
class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
    }
    eat() {
        // TODO: add flavour text to this function
        this.hunger += 10;
    }
    drink() {
        // TODO: add flavour text to this function
        this.thirst += 10;
    }
    checkAlive() {
        // TODO: Work out the specifics of how we will check the stats and if a virtual pet is still alive
    }

}

// Specific pet class, contains unique properties and methods for the virtual pet
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    playBall() {
        this.health += 10;
        this.hunger -= 10;
    }
    walk() {

    }

}

// Specific pet class, contains unique properties and methods for the virtual pet
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

}

module.exports = {
    Cat,
    Dog
};