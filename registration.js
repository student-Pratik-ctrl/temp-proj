let form = document.querySelector("#registration_form");
let res = document.querySelector("#registration_response");

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();

    let user;
    let users;

    user = {
        name : evt.target.name.value,
        email : evt.target.email.value,
        password : evt.target.pass.value
    }

    users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    
    if(users.some((singleUser)=>{
        return singleUser.email == user.email;
    })){
        res.innerText = "User already exist";
    }else{
        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        res.innerText="User successfully registrated, redirecting to login page";
        setTimeout(()=>{
            window.location.href = "login.html";
        },5000);
    }
})
