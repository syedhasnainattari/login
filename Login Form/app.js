const singUp = (e) =>{
    event.preventDefault();
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

   var user = {
    username: username,
    email: email,
    password: password
   }
   var json = JSON.stringify(user);
   console.log(username, json);
}
