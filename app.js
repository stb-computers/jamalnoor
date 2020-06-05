// var word = prompt("Enter your word:")
// var check=""
// for (var i = word.length -1; i >=0; i--) {
// check += word[i]
// }

// if (check === word) {
//     alert("Matched")
// }
// else {
//     alert("Not Matched")
// }


// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
// monthAbbrev = month.slice(0, 3); 
// console.log (monthAbbrev);
// }

var equ = prompt("Enter your equation:");
var num = equ.length;
for(var i=0; i<num; i++){
    if (equ.slice(i,i+1) === "+"||equ.slice(i,i+1) === "-"||equ.slice(i,i+1) === "*"||equ.slice(i,i+1) === "/") {
        if (equ.slice(i,i+1) === "+"){
            var val1 = equ.slice(0,i);
            var val2 = equ.slice(i+2,equ.length+1);
            alert(val1+val2);
        }
    }
}
