var x = 5;
    if (x < 5){
        console.log('sorry sir');
    }

var d = new Date();
var time = d.getHours();
    if (time < 20){
        console.log("hello nurse!");
    }
console.log(time);


function even (){
    var y = 7

    if (y % 2 === 0){
        console.log("even");
    } else {
        console.log ("odd");
    }
}

even();

for(var i =0; i < x; i++){
    if(i % 2 ===0){
        console.log(i);
    }
    else{
        console.log('odd');
    }
}

var sales = 'Toyota';

function carTypes(name){
    if (name === 'Honda'){
        console.log(name);
    } else {
        console.log("Sorry, we don't sell " + name + ".");
    }
}

carTypes('toyota');


for(var i = 0; i < 7; i++){
    console.log(i);
}

var str = " ";

for(var i = 0; i < 8; i++){
    str = str + i;
}

console.log(str);

var num = 5

for(var i = 0; i <9; i++){
    num = num + i;
}
console.log(num);

var phrase = ['Hello Nurse', 'Yes Maam', 'No Sir', 'Sorry', 'Please dont be that way', 'Oh God Help Me'];

for(var i = 0; i < phrase.length; i++){
    if(i < 3){
        console.log(phrase[i]);
    } else if (i < 5){
        console.log(phrase[i]);
    } else if (i > 5){
        console.log(phrase[i]);
    }
}
