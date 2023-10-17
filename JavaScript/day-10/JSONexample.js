function Store(){
    var obj={TotalStudent:5,StudentName:["rahul","vinod","vedesh","vedant","gaurav"]}
    console.log(obj)

    localStorage.setItem("myData",JSON.stringify(obj))
    alert("Student Inserted successfully")
    return
}

function Delete(){
    localStorage.removeItem("myData")
    alert("Student data deleted successfully")
    return
}

function Display(){
    var display=JSON.parse(localStorage.getItem("myData"))
    console.log(display,"Student data displayed")
    alert("Student data displayed successfully")
    return
}