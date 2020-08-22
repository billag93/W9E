//Function 1
function compound(integer1, integer2) {
    var sumbyfive = (integer1 + integer2) * 5;
    return sumbyfive;
}
var result1 = compound(5, 2);
console.log(result1);

var result1 = compound(7, 8);
console.log(result1);

var result1 = compound(-1, 6);
console.log(result1);

//Function 2
function tenstring(characters) {
    if (characters.length > 10) {
        console.log(true);
    }
    else if (characters.length < 10) {
        console.log(false);
    }
    else {
        console.log('something is wrong');
    }
}
var result2 = "miachalangelo";
tenstring(result2);

var result2 = "richard";
tenstring(result2);

var result2 = "bigbossplaya";
tenstring(result2);

//Function 3
function stringit(stringvalue) {
    for (i = 0; i < stringvalue.length; i++) {
        if (stringvalue[i].startsWith('ph')) {
            return stringvalue[i]
        }
      
    }
  
}

var stringinput = ['commander', 'smalldog', 'phil', 'philosopher'];
var result3 = stringit(stringinput);
console.log(result3); 

var stringinput = ['Alex', 'phoria', 'dog', 'john'];
var result3 = stringit(stringinput);
console.log(result3); 

var stringinput = ['philanthropist', 'johnathon', 'phil', 'philosopher'];
var result3 = stringit(stringinput);
console.log(result3); 
