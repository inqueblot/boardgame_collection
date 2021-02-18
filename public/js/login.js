$(document).ready(function() {

    $(document).on("click", "#login", loginUser);
    
    function loginUser(event) {
        event.preventDefault();
        var user = {
          email: $("#eml").val().trim(),
          password: $("#password").val().trim()
        };
        $.ajax("api/login", {
          type: "POST",
          data: user,
        }).then(function () {
            window.location.replace("/");
            console.log(user);
        })
        .catch(err => {
            console.log(err);
        });
        
      }
    
      
    
    })
    
    