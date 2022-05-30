// Debug line, for having certain aspects logged to console durng development
const debug = true;

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

const inquirer = require('inquirer'); //Create inquirer prompt, to present end user questions
let animals = ["Dog", "Cat"]; // List contains animals that we have subclasses built for, can be extended later

inquirer
    .prompt(
        [{
                // First Question: Assigned to answer.animalType, dictates the class we need to create
                type: "list",
                name: "animalType",
                message: `What is your favourite animal from this list?`,
                choices: animals,
            },
            {
                // Second Question: Assigned to answer.animalName, dictates the value we pass as the animals name
                type: "input",
                name: "animalName",
                message: "What is your pets name?",
            }
        ]
    )
    .then((answer) => {
        // If Statement that only runs when debug is set to true
        if (debug) {
            console.info("animalType: ", answer.animalType);
            console.info("animalName: ", answer.animalName);
        }

        // Evaluate answer.animalType, create new cases when we add more animal classes
        switch (answer.animalType) {
            case "Dog":
                userPet = new Dog(answer.animalName);
                break;
            case "Cat":
                userPet = new Cat(answer.animalName);
                break;
            default:
                // Generally should not be accessible, here as a catch to give a soft exit to the code in the event of an error
                console.log("Pet info not found");
        }
        // Logs the animals information to a table.
        console.table(userPet);
    });