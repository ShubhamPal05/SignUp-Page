
const signup = document.querySelector("#signup");
const inputs = document.getElementsByClassName("input");

const longinMessage = document.getElementById("loginmsg");

const profileField = document.getElementsByClassName("pro");

console.log(profileField);

const currentUser ={};


if(localStorage.getItem("currentUser") !=null && profileField.length == 0 ){
    signup.style.display = "none";
}

if(signup != null && profileField.length == 0){
signup.addEventListener('click', ()=>{

    if( inputs[0].value =="" || inputs[1].value =="" || inputs[2].value =="" || inputs[3].value ==""){
        longinMessage.style.color = "red";
        longinMessage.innerText = "Error: all fields are required !";
    }

    else if(inputs[2].value != inputs[3].value){
        longinMessage.innerText = "password didn't match !";
    }

    else if(inputs[2].value == inputs[3].value){
        currentUser.name = inputs[0].value;
        currentUser.email = inputs[1].value;
        currentUser.password = inputs[2].value;
        currentUser.token = Math.random()*1000000;

        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        longinMessage.innerText = "Successfully Signed Up !";
        longinMessage.style.color = "green";
        signup.style.display="none";
        window.location.href = "profile.html";
    };

});
}

if(localStorage.getItem("currentUser") !=null && profileField.length > 0){
    const data = JSON.parse( localStorage.getItem("currentUser") );
    profileField[0].innerText = data.name;
    profileField[1].innerText = data.email;
    profileField[2].innerText = data.password;

    const singout = document.getElementById("Signout");
    singout.addEventListener("click", ()=>{
        localStorage.clear();
        window.location.href = "index.html";
    });
}