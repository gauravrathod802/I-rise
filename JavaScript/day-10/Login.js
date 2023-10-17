function Login(event){
    event.preventDefault();

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    // console.log(username,password)
    if(username && password){
        const user={user:username,pass:password}
        localStorage.setItem("userData",JSON.stringify(user))
        document.getElementById("username").value="";
        document.getElementById("password").value="";
        return alert("Data added successfully!!! ")
    }else{
       return  alert("All fields are mandatory")
    }



}