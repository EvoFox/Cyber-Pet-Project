// Debug line, for having certain aspects logged to console durng development
const debug = true;

// Import third party modules
const inquirer = require("inquirer");

// Import local modules
const {
    Cat,
    Dog
} = require("./cyberPet");

// Array for typeOfPetInquirer, should be analogous
// to the imported pets from the cyberPet module above
potentialPets = [{
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


try {
    let myPet = "";
    let options = [];

    const start = async (callback) => {
        //Create first inquirer prompt, to set the type of pet
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "What kind of pet would you like?",
            choices: potentialPets
        });
        // Output of above:
        // { typeOfPet: 'cat' }
        // or
        // { typeOfPet: 'dog' }
        // Two ways to access this: typeOfPet["typeOfPet"] 
        // or
        // typeOfPet.typeOfPet

        if (debug) {
            console.log(typeOfPet)
        }

        // Create second inquirer prompt, to set the name of the pet
        const petName = await inquirer.prompt({
            type: "input",
            name: "nameOfPet",
            message: `What are you going to call your new ${typeOfPet.typeOfPet}?`,
        });

        // Check the type of pet and create new pet based on result
        if (typeOfPet.typeOfPet === "cat") {
            myPet = new Cat(petName.nameOfPet);
            options = [{
                    key: "A",
                    name: "Give Food",
                    value: "feed"
                },
                {
                    key: "B",
                    name: "Give Water",
                    value: "water",
                },
                {
                    key: "C",
                    name: "Play with Wool",
                    value: "playWool"
                },
                {
                    key: "D",
                    name: "Let Sleep",
                    value: "sleep",
                }
            ]
            // console.log(myPet);
        } else if (typeOfPet.typeOfPet === "dog") {
            myPet = new Dog(petName.nameOfPet);
            options = [{
                    key: "A",
                    name: "Give Food",
                    value: "feed"
                },
                {
                    key: "B",
                    name: "Give Water",
                    value: "water",
                },
                {
                    key: "C",
                    name: "Play Ball",
                    value: "playBall"
                },
                {
                    key: "D",
                    name: "Walk",
                    value: "walk",
                }
            ]
            // console.log(myPet);
        }
        timer()
        callback(game)
    }

    const timer = async () => {
        await setInterval(() => {
            myPet.decreaseStats();
        }, 15000);

        // This causes some graphical issues on the terminal, though prevents a memory leak
        // from calling the game function too many times.
        myPet.checkAlive();
        game(game);
    }

    const game = async (callback) => {
        const activity = await inquirer.prompt({
            type: "list",
            name: "whatActivity",
            message: `What do you want to do with ${myPet.name}?`,
            choices: options,
        });

        if (debug) {
            console.log(activity.whatActivity)
            console.log(options);
        }

        // Check what activity was chosen.
        switch (activity.whatActivity) {
            case "feed":
                myPet.eat();
                break;
            case "drink":
                myPet.drink();
                break;
            case "playWool":
                myPet.playWool();
                break;
            case "sleep":
                myPet.sleep();
                break;
            case "playBall":
                myPet.playBall();
                break;
            case "walk":
                myPet.walk();
                break;
        }
        

        callback(game)


    }

    // const mainGame = async () => {
    //     setInterval(() => {
    //         

    //         myPet.decreaseStats();
    //     }, 5000);




    // }

    start(game);


} catch (error) {
    console.log("Error fetching data! ", error)
}