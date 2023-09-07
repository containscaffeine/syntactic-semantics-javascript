"use strict";
/* use strict above: 
    When it is located at the top of a script, the whole script works the “modern” way 
    - since most ECMAScript 5 (ES5)+ modifications are off by default
*/
function showAlert() {
  //alert( "I'm JavaScript!" );
}

function showName(name) {
  //let is kind of like the old var - i.e. a variable declaration
  let localName = name;
  let th1$_isAValidVar1ableNam3 = localName;

  //capital-named constants: aliases for "Hard-Code" values
  const COLOR_ORANGE = "#FF7F00";
  //"normally" named consts - only known at run-0time
  const myBirthday = "18.04.1982";

  console.log(th1$_isAValidVar1ableNam3);
}

function dataTypes() {
  // dynamically typed
  // no error
  let message = "howdi";
  message = 1234;

  /*
        Numbers
        Values between (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.
    */
  let numbers = 123;
  numbers = 123.45;
  //Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
  numbers = 1 / 0;
  numbers = Infinity;
  numbers = -Infinity;
  //NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation
  //NaN is sticky. Any further mathematical operation on NaN returns NaN
  numbers = "abc" / 100;
  numbers = NaN;
  //If there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
  console.log(numbers ** 0);

  /*
        BigInt
        e.g. for cryptography or microsecond-precision timestamps
   */

  //create by appending n
  const bigInt = 1234567890123456789012345678901234567890n;

  /*
        Strings
        Can use 3 types of quotes: single, double, backticks
        Simple quotees: single & double
        Extended functionality quotes: backtick
        - allow us to embed variables and expressions into a string by wrapping them in ${…}
    */
  //double quotes
  let str = "Hello";
  //note: silly plugin rewrites single as doulbe - can't be bothered to find fix :/
  let str2 = "Single quotes are ok too";
  let phrase = `can embed another ${str}`;

  /*
    Booleans
    */
  let nameFieldChecked = true;

  /*
    Null
    */
  let nullValue = null;

  /*
    undefined
    meaning of undefined is “value is not assigned”
    */
  let age;
  console.log(age);
  age = 10;
  age = undefined;

  /*
    Objects
    store collections of data and more complex entities
    */

  /*
    Symbols
    create unique identifiers for objects
    */
  let symbol = Symbol("id");
}

/*
    typeof x returns a string with the type name
*/
function typeOfInfo() {
  typeof undefined; // "undefined"

  typeof 0; // "number"

  typeof 10n; // "bigint"

  typeof true; // "boolean"

  typeof "foo"; // "string"

  typeof Symbol("id"); // "symbol"

  typeof Math; // "object"  (1)

  /*
        The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. 
        Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.
    */
  typeof null; // "object"  (2)

  /*
        The result of typeof alert is "function", because alert is a function. 
        There’s no special “function” type in JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function". 
        That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.
    */
  typeof alert; // "function"  (3)

  /*
        The typeof(x) syntax
        Another syntax: typeof(x). It’s the same as typeof x.

        To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

        Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). 
        Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

        Some people prefer typeof(x), although the typeof x syntax is much more common.    
    */
  console.log(typeof 1);
}

function interaction() {
  let title = "How old are you?"
  let defaultValue = 33;

  //get input value
  let result = prompt(title, defaultValue);

  //display value
  alert(`You are ${result} years old`);

  //confirm - OK: true | Cancel: false
  result = confirm("Are you the boss?");

  alert(`You are the boss: ${result}`);
}
