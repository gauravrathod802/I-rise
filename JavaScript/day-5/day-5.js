
// distinguishing between weekday and weekend

const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
for(var i=0; i<days.length;i++){
    if(i<=4){
        console.log(days[i],"is Weekday")
    }
    else{
        console.log(days[i],"is Weekend")
    }
}

//Even from given array

var nums=[1,2,3,4,5,6,7,8,9,10]
for(var i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        console.log(nums[i],"is Even")
    }
}