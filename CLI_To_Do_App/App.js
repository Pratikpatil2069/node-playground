import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

// Function to display menu
const showMenu = () => {
    console.log("\n1. Add a task");
    console.log("2. View tasks");
    console.log("3. Exit");

    // handleInput is safe to use because it is a function declaration
    rl.question("Choose an option: ", handleInput);
};

// ✅ FUNCTION DECLARATION (hoisted)
function handleInput(option) {
    if (option === "1") {
        rl.question("Enter a task: ", (task) => {
            todos.push(task);
            console.log("Task added:", task);
            showMenu();
        });

    } else if (option === "2") {
        console.log("\nYour todo list:");
        todos.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
        showMenu();

    } else if (option === "3") {
        console.log("Goodbye 👋");
        rl.close();

    } else {
        console.log("Choose correct option!");
        showMenu();
    }
}

// ✅ Start program AFTER everything is defined
showMenu();
