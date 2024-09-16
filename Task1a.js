// How do I run this script?

// In the terminal folder with Task1a.ts
// node Task1a.js   

// type: string[]
const todoList = []; 

/**
 * YOUR OBJECTIVE: 
 * Suppose there are some tasks you want to work on during your first week at Yale.
 * Write a procedure that adds the 3 below TODOS on line 18, represented as strings, 
 * to the TodoList array defined on line 7. Then, print the TodoList in a 
 * nice, readable way.
 * 
 * Only modify the file under the "// YOUR CODE HERE" comments.
 * 
 * TODOS:
 * 1. Apply to y/cs!
 * 2. Pick out my classes
 * 3. Have dinner with my suite
 * 
 */

//Function to format and return a date string in the format "Month #/Day"
function dateString(today) {
    //I figured out how to use these formatted strings by looking on google because I know how to do them in Python and assumed there was something similar for js
    return `${today.getMonth() + 1}/${today.getDate()}`;
}

function addAndPrintTodos() {
    //Adds tasks to to-do list
    todoList.push("Apply to y/cs!", "Pick out my classes", "Have dinner with my suite");

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
function mainTask1a() {
    addAndPrintTodos()
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1a();
}