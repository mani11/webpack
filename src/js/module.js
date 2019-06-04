let welcome = () => {
    console.log("Welcome to js module");
}

let greeting = (greeting = "Namaste") => {
    console.log(`${greeting} Welcome to js module!`);
}

export{welcome,greeting};