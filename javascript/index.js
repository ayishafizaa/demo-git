        //to comment - not executed
        // strings are a sequence of charachters
        console.log('Hello World');
        // Variables to store data in cpu memory temporarily
        let name = 'fiza';
        console.log(name);

        /* Rules for setting variable:
        it cannot be a reserved variable
        should be meaningful names
        cannot start with a number
        Cannot contain space or hypher(-)
        Are caseSensitive */

        // Constants
        const interestRate =0.3;
        // interestRate =1; we cannot re assign a constant
        console.log(interestRate);

        // Primitive Type
        // strings, numbers, booleans, null, undefined
        let myName = 'fiza'; //String Literal
        let age = 22; //Number Literal
        let isApproved = true; //Boolean Literal
        let firstName; // if we don't set value it will be undefined or you can give value as 'undefined'
        let lastName = null; //Used when we want to clear the value of a variable

        // Dynamic Typing
        // Js is a dynamic language
        // Static variable cant be changed and Dynamic
        // typeof myName;  Returns the type of the variable data

        // Reference Types
        // Object, Array and function
        // when we are dealing with multiple related variables we can put them together in js
        
        // OBJECT
        let person = { //object literal is used by curly braces
            name: 'fiza',
            age: 22
        }
        // Dot Notation to access change the values
        person.name = 'Ayisha';
        console.log(person.name);
        // Bracket Notation to change the propeties or datas of the variables.
        person['name']='Jane';
        console.log(person['name']);
        // Dot notation is better and default, also bracket notation has its own use

        // ARRAY
        // It is a data structure that we use to present a list of items
        let selectedColors = ['red', 'blue']; //Array literal []
        selectedColors[2] = 1;
        console.log(selectedColors.length); // To specify the index of the array use varname[indexnumb]

        // FUNCTION
        // Declare a function with function keyword

        // Performing a task
        function greet(name, lastName){ // Name is a parameter()
            // Body of the function
            console.log('Hello ' + name + ' ' + lastName);
        }

        // Calculating a value
        function square(number){
            return number*number;
        }
        greet('Fiza', 'Ayisha'); // Fiza is the argument
        let number = square(4);
        console.log(number);
        // or just 
        console.log(square(6)); //In this there is are 2 function calls


