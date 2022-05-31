// Debug line, for having certain aspects logged to console durng development
const debug = true;

// Import third party modules
const inquirer = require("inquirer");

// Import local modules
const {
    Cat,
    Dog
} = require("./cyberPet");

// 
let myPet = "";

try {
    const start = async () => {
        //Create first inquirer prompt, to set the type of pet
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "What kind of pet would you like?",
            choices: [{
                    key: "A",
                    name: "Cat",
                    value: "cat",
                },
                {
                    key: "B",
                    name: "Dog",
                    value: "dog",
                }
            ]
        });
        // Output of above:
        // { typeOfPet: 'cat' }
        // or
        // { typeOfPet: 'dog' }
        // Two ways to access this



        console.log(typeOfPet)
        // Create second inquirer prompt, to set the name of the pet
        const petName = await inquirer.prompt({
            type: "input",
            name: "nameOfPet",
            message: `What are you going to call your new ${typeOfPet.typeOfPet}?`,
        });

        // Check the type of pet and create new pet based on result
        if (typeOfPet.typeOfPet === "cat") {
            myPet = new Cat(petName.nameOfPet);
            console.log(myPet);
        } else if (typeOfPet["typeOfPet"] === "dog") {
            myPet = new Dog(petName.nameOfPet);
            console.log(myPet);
        }
    }


    start()
    console.log(myPet)

} catch (error) {
    console.log("Error fetching data! ", error)
}