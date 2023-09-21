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
  let title = "How old are you?";
  let defaultValue = 33;

  //get input value
  let result = prompt(title, defaultValue);

  //display value
  alert(`You are ${result} years old`);

  //confirm - OK: true | Cancel: false
  result = confirm("Are you the boss?");

  alert(`You are the boss: ${result}`);
}

function conversions() {
  /*
    String
    */
  let value = true;
  alert(typeof value); // boolean

  value = String(value); // now value is a string "true"
  alert(typeof value); // string

  /*
    Numbers
  */
  alert("6" / "2"); // 3, strings are converted to numbers

  let str = "123";
  alert(typeof str); // string

  let num = Number(str); // becomes a number 123

  alert(typeof num); // number

  let age = Number("an arbitrary string instead of a number");

  alert(age); // NaN, conversion failed

  /*
  ___NUMERIC CONVERSION RULES___

  Value	            Becomes…
  undefined	        NaN
  null	            0
  true and false	1 and 0
  string	        Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. 
                    If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.  
  */
  alert(Number("   123   ")); // 123
  alert(Number("123z")); // NaN (error reading a number at "z")
  alert(Number(true)); // 1
  alert(Number(false)); // 0

  /*
    Boolean
   */
  /*
    ___BOOLEAN CONVERSION RULES___
    The conversion rule:

    Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
    Other values become true.
  */
  alert(Boolean(1)); // true
  alert(Boolean(0)); // false

  alert(Boolean("hello")); // true
  alert(Boolean("")); // false

  /*
  Please note: the string with zero "0" is true
  A non-empty string is always true.
  */
  alert(Boolean("0")); // true
  alert(Boolean(" ")); // spaces, also true (any non-empty string is true)
}

function basicOperationsMath() {
  /*
The following math operations are supported:
  Addition +,
  Subtraction -,
  Multiplication *,
  Division /,
  Remainder %,
  Exponentiation **.
*/
  alert(5 % 2); // 1, the remainder of 5 divided by 2
  alert(8 % 3); // 2, the remainder of 8 divided by 3
  alert(8 % 4); // 0, the remainder of 8 divided by 4

  alert(2 ** 2); // 2² = 4
  alert(2 ** 3); // 2³ = 8
  alert(2 ** 4); // 2⁴ = 16

  alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
  alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)

  let s = "my" + "string";
  alert(s); // mystring

  //Note that if any of the operands is a string, then the other one is converted to a string too.
  alert("1" + 2); // "12"
  alert(2 + "1"); // "21"
  alert(2 + 2 + "1"); // "41" and not "221"
  //Here, the first operand is a string, the compiler treats the other two operands as strings too.
  alert("1" + 2 + 2); // "122" and not "14"

  //The binary + is the only operator that supports strings in such a way.
  //Other arithmetic operators work only with numbers and always convert their operands to numbers.
  alert(6 - "2"); // 4, converts '2' to a number
  alert("6" / "2"); // 3, converts both operands to numbers

  /*
  Numeric conversion, unary +
  ---> It actually does the same thing as Number(...), but is shorter.
  */
  // No effect on numbers
  let x = 1;
  alert(+x); // 1

  let y = -2;
  alert(+y); // -2

  // Converts non-numbers
  alert(+true); // 1
  alert(+""); // 0

  // Common Usage
  let apples = "2";
  let oranges = "3";

  alert(apples + oranges); // "23", the binary plus concatenates strings

  let apples = "2";
  let oranges = "3";

  // both values converted to numbers before the binary plus
  alert(+apples + +oranges); // 5

  // the longer variant
  // alert( Number(apples) + Number(oranges) ); // 5

  /*
    Order of Precedence
    FULL TABLE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

    Precedence	          Name	            Sign
    14	                  unary plus	      +
    14	                  unary negation	  -
    13                    exponentiation	  **
    12	                  multiplication	  *
    12	                  division	        /
    11	                  addition	        +
    11	                  subtraction	      -
    2	                    assignment	      =
  */

  /*
    Bitwise operators
      Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
        The list of operators:
          AND ( & )
          OR ( | )
          XOR ( ^ )
          NOT ( ~ )
          LEFT SHIFT ( << )
          RIGHT SHIFT ( >> )
          ZERO-FILL RIGHT SHIFT ( >>> )

    SEE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators
  */

  /*
  Comma
    The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, 
    so we need to know it in order to understand what’s going on.

    The comma operator allows us to evaluate several expressions, dividing them with a comma ,. 
    Each of them is evaluated but only the result of the last one is returned.

    Comma has a very low precedence
      Please note that the comma operator has very low precedence, lower than =, so parentheses are important in the example above.
      Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers into a = 3, 7, then the assignment operator = assigns a = 3, and the rest is ignored. 
      It’s like (a = 1 + 2), 3 + 4.    
  */

  //Here, the first expression 1 + 2 is evaluated and its result is thrown away. Then, 3 + 4 is evaluated and returned as the result.
  let a = (1 + 2, 3 + 4);
  alert(a); // 7 (the result of 3 + 4)

  /*
    Why do we need an operator that throws away everything except the last expression?
    Sometimes, people use it in more complex constructs to put several actions in one line.
  */
  // three operations in one line
  for (a = 1, b = 3, c = a * b; a < 10; a++) {
    //...
  }
}
