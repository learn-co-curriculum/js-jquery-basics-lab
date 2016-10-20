# jQuery Basics Lab

## Objectives

+ Use jQuery selectors
+ Use jQuery methods
+ Use jQuery event listeners

## Intro

Somehow, through a magic fortune cookie, you traveled back in time. You're back in high school and have a big math test to take. Your teacher told you you can do math on anything but an actual TI-83. Most of your classmates will just bring a pencil and paper, but you're smarter than that. You're going to build a calculator app which doesn't break your teacher's rule and still helps you get an A on that test.


## Instructions

You'll be coding your solution in `js/calc.js`. There are tests to make sure your code behaves as you expect it to. There is also a browser component, so you'll want to make sure that your calculator behaves as you expect in the browser as well.

We've provided the front-end code in `index.html` and `css/style.css`. Your job is to make a working calculator that handles addition, subtraction, multiplication, and division.

+ The calculator should take input for 2 separate numbers and 1 operation: '+', '-', '*', '/', and store them as variables.

+ When the user clicks the equals button, the calculator should do the proper mathematical operation and display the solution in the div with the id `result`.

+ If the user enters an invalid number or operator, the error message `"Sorry, one of those is not a valid number!"` should appear.

+ Define a `doMath` function that binds a click event to the equals sign so that, when a user clicks the button, the three input values are stored in variables. Remember, the `val` function always displays values as strings, even if they represent a number. `10` becomes `"10"`. You'll want to make the string a number before you do any math.

+ Define a `validate` function that accepts three arguments (the operator, the first number, and the second number). The function should validate that both numbers and the operator are valid entries. A number should only contain numerical values and the operator should only store `+`, `-`, `*`, or `/`. If the numbers aren't valid, it should display: `"Sorry, one of those is not a valid number!"`. The jQuery function `isNaN` will come in handy to determine whether a value is a number. If the operator isn't valid, the `validate` function should display: `"Sorry, that is not a valid operator"`. The click event should call `validate`, which, in turn, should call the `result` function.

+ Define a `result` function that accepts three arguments (the operator, the first number, and the second number). The function should do the appropriate math problem based on the operator. The function should return the solution and display it in the div with the ID `result`.

+ **NB**: In order for your tests to run properly, you'll need to define the functions outside of the document ready. Any variables you define in the global scope will need to be defined inside the document ready and outside as well. Inside the document ready you'll want to call the `doMath` function.

See a live, working example of the simple calculator [here](http://learn-co-curriculum.github.io/fe-jquery-user-input-calc/).

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-jquery-basics-lab' title='jQuery Basics Lab'>jQuery Basics Lab</a> on Learn.co and start learning to code for free.</p>

<p class='util--hide'>View <a href='https://learn.co/lessons/js-jquery-basics-lab'>jQuery Basics Lab</a> on Learn.co and start learning to code for free.</p>
