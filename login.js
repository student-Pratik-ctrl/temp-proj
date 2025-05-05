let login = document.querySelector("#login_form");
let res = document.querySelector("#login_response");

login.addEventListener("submit",(evt)=>{
    evt.preventDefault();

    let email = evt.target.email.value;
    let pass = evt.target.pass.value;

    let users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];
    console.log(users);
    let userFound = users.some((user)=>{
        return user.email === email && user.password === pass;
    })
    if(userFound){
        res.innerText = "Login Successfull, Redirecting to Dashboard";
        let currentUser = users.filter((user)=>{
            return user.email === email && user.password === pass;
        })
        localStorage.setItem("name",currentUser[0].name);
        localStorage.setItem("email",currentUser[0].email);
        setTimeout(()=>{
            window.location.href = "dashboard.html";
        },2000)
    }else{
        res.innerText = "Invalid Credentials";
    }
})      