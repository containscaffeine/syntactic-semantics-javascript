'use strict'
/* use strict above: 
    When it is located at the top of a script, the whole script works the “modern” way 
    - since most ECMAScript 5 (ES5)+ modifications are off by default
*/
function showAlert() {
    alert( "I'm JavaScript!" );
}

function showName(name) {
    //let is kind of like the old var - i.e. a variable declaration
    let localName = name;
    let th1$_isAvalidNam3 = localName;

    //capital-named constants: aliases for "Hard-Code" values
    const COLOR_ORANGE = "#FF7F00";
    //"normally" named consts - only known at run-0time
    const myBirthday = '18.04.1982';

    alert(th1$_isAvalidNam3);
}