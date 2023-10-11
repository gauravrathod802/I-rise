function ArrayElementSearch(){
    var oddCount=0,evenCount=0;
    var arr=[10,20,4,50,5,20,7,40,39]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evenCount++;
        }
        else{
            oddCount++;
        }
    }
    console.log("Even in Array:",evenCount,"Odd in Array:",oddCount)
}
ArrayElementSearch();

function FindSum(){
    var arr=[10,20,4,50,5,20,7,40,39];
    var target=24
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;i<arr.length;i++){
            if(arr[i]+arr[j] ==target ){
                console.log(`${arr[i]} + ${arr[j]} = ${target}`)
            }
        }
    }
}
FindSum()