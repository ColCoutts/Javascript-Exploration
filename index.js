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
        console.log("Sorry, we don't sell" + name + ".");
    }
}

carTypes('toyota');