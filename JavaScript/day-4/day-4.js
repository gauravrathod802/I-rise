// Funnctions and loops


// print 0-10 numbers
for(var i=0; i <= 10; i++){
    console.log(i);
}

// even and odd number from 1-20
for(var i=1; i<= 20;i++){
    if(i%2==0){
        console.log(i,"is Even number")
    }
    else{
        console.log(i,"is Odd number")
    }
}

function Cal(a, b){
    console.log("Addition",a+b)
    console.log("Substraction",a-b)
    console.log("Multiplication",a*b)
    console.log("Division",Math.ceil(a/b))
    console.log("Modulus",Math.floor(a%b))
}
Cal(10,4)