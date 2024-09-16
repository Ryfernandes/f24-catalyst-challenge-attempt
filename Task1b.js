// How do I run this script? 
// node Task1b.js    

todoList = []; 
/**
 * YOUR OBJECTIVE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the "__" in each of the "__todo" function definitions to create more logical 
 * function names and define some logic to accomplish these tasks inspired by 
 * what you did in Part A. Call both function in mainTask1b().
 * 
 * In addition to updating function names, only modify the file under 
 * the "// YOUR CODE HERE" comments.
 */

//My function from task1a
//Function to format and return a date string in the format "Month #/Day"
function dateString(today) {
    //I figured out how to use these formatted strings by looking on google because I know how to do them in Python and assumed there was something similar for js
    return `${today.getMonth() + 1}/${today.getDate()}`;
}

//Appends the specified todoString to the list array
function addTodo(todoString) {
    //Adds todoString to the list
    todoList.push(todoString);
}

//Prints the todoList in a formatted way with a header and numbered items
function printTodo() {
    //Prints header (I found info about the Java Date object here (I thought it would be cool): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    console.log(`\n-- To Do ${dateString(new Date())} --\n`);

    //Iterates through each task and prints it with the number before it
    for(let i = 0; i < todoList.length; i++) {
        console.log(`${i+1}. ${todoList[i]}`);
    }
    console.log();
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    //Adding the tasks (same as before)
    addTodo("Apply to y/cs!");
    addTodo("Pick out my classes");
    addTodo("Have dinner with my suite");

    //Printing the to-do list
    printTodo();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}