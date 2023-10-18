function Register(event){
    event.preventDefault();
var uname = document.getElementById("name").value;
var uemail = document.getElementById("email").value;
var unumber = document.getElementById("number").value;
var upass = document.getElementById("password").value;

var userDetails={UName:uname, UEmail:uemail, UNumber:unumber, UPassword: upass};
console.log(userDetails)
localStorage.setItem("user" ,JSON.stringify(userDetails));

// console.log(uname,uemail,unumber,upass);
alert("Data Stored in Local Storage ");

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("number").value="";
document.getElementById("password").value="";
}