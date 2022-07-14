// Game Info

let gameInfo = {
    name: "Animator's Grindcraft Game",                         // The name of your game!
    icon: "https://media.discordapp.net/attachments/991091615605088266/997204468502380544/Time_Overseer.png?width=702&height=702",                    // Link or path to an icon image for your game!
    ID: "AnimatorsGrindcraftGame",                             // Your game's ID! Should be unique for every game!
};

// Resources

addResources(                                           // Function for adding all the resources (items/tools/buildings) that are used in your game!
    {
    Quark: {
        image: "https://th.bing.com/th/id/OIP.mziBek7Xrvvscl6--qwOuQHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7",
    },
    AntiQuark: {
        image: "https://th.bing.com/th/id/OIP.Ost7sfuf6n2v4CTZGKNZIgHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
}
);

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "Universe",
    image: "https://th.bing.com/th?id=OIF.pZUSY%2fVfpD8xX4%2fooMPnLg&w=161&h=180&c=7&r=0&o=5&pid=1.7",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "Empty Space",
            unlocked: true,
            auto: ["Quantum Fluctuations"],                         // List of items that will auto-grind this grind
            background: "https://th.bing.com/th/id/OIP.MncEv6RZ5QG60CW10_fckAHaEK?w=305&h=180&c=7&r=0&o=5&pid=1.7",
            resources: [
                {
                    id: "Quark",
                    time: [["", 0,5]],
                    image: "https://th.bing.com/th/id/OIP.mziBek7Xrvvscl6--qwOuQHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7",
                    probability: 50,
                },
                {
                    id: "AntiQuark",
                    image: "https://th.bing.com/th/id/OIP.Ost7sfuf6n2v4CTZGKNZIgHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7",
                    time: [["", 0,5]],
                    probability: 50,
                },
                {
                    id: "Electron",
                    image: "https://th.bing.com/th/id/OIP.R6zNVixl9r2PPZzOc4CD6wHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7",
                    time: [["", 0,5]],
                    probability: 50,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "Quark",
            desc: "Used to make Protons and Neutrons",
            type: "display",
            cost: [["Quark", 0]],
        },
        {
            name: "AntiQuark",
            desc: "Used to make Energy",
            type: "display",
            cost: [["AntiQuark", 0]],
        },
        {
            name: "Electron",
            desc: "Used to make Atoms",
            type: "display",
            cost: [["Electron", 0]],
        },
        {
            name: "planks",
            desc: "Used to make a crafting table",
            type: "craft",
            cost: [["stick", 2]],
        },
        {
            name: "crafting table",
            desc: "Required to build a dirt hut",
            type: "craft",
            cost: [["planks", 4]],
        },
        {
            name: "door",
            desc: "Required to build a dirt hut",
            type: "craft",
            amount: 3,
            cost: [["planks", 6]],
        },
        {
            name: "dirt hut",
            desc: "Required to beat the game!",
            type: "craft",
            cost: [["dirt", 23], ["crafting table", 1], ["door", 1]],
            message: "You have beaten the game!",
        },
    ],

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was run
        
    },
}
);