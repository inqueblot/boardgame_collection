$(document).ready(function() {

$(document).on("click", "#sign-up", createUser);

function createUser(event) {
    event.preventDefault();
    var user = {
      email: $("#email").val().trim(),
      password: $("#pswrd").val().trim()
    };
    console.log(user);
    
  }

  

})