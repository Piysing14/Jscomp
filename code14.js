//Can Left and Right Shifts Yield the Same Result?
//L("abcd") results in "bcda".
//R("abcd") results in "dabc".

// Do not remove nor make any changes in  main() function
function main() {
    var s = readLine();
    console.log((lShift(s) === rShift(s)) ? 'YES' : 'NO');
}
function lShift(s) {

    return s.substr(1) + s.charAt(0);
}

function rShift(s) {
    return s.charAt(s.length - 1) + s.substr(0, s.length - 1);
}

