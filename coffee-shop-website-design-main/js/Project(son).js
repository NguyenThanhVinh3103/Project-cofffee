function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    localStorage.setItem( "username2", username);
    localStorage.setItem("password", password)
    alert("dang ky thanh cong");
    window.location = "Project(son).html"
}   
function login(){
    let loggedUser

    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameForlogIn = localStorage.getItem("username2");
    var passwordForlogIn = localStorage.getItem("password");
    if( username == null || password == null  )
    {
        alert("Vui long nhap name and pass")
    }
    else if(username == usernameForlogIn && password == passwordForlogIn){
        localStorage.setItem("username", username)
        alert("Login successfully")
        window.location = "index.html"
    }
    else{
        alert("dang nhap that bai")
    }
}


