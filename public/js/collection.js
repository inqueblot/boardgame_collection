

// // window.onload = collection()


$.get("/api/collection", function (data) {
    data.forEach(element => {
        let table = `<tr><td><a href="/game/${element.bg_id}"</a>${element.name}</td>`
        table += `<td>${element.minPlayers}</td>`
        table += `<td>${element.maxPlayers}</td>`
        table += `<td>${element.playTime}</td>`
        table += `<td>${element.yearPub}</td>`
        table += `<td>${element.publisher}</td>`
        table += `<td>${element.age}</td>`
        table += `<td>${element.msrp}</td>`
        table += `<td>${element.designer}</td>`
        table += `<td><div class="buttons"><a class="button is-primary" id=${element.bg_id}>delete</a></div></td></tr>`
        $("#table_results").append(table)
    });
});

// This function does an API call to delete posts
  $(document).on("click", ".button", deleteGame);

  // SENDING GAME OBJECT TO DB \\
  function deleteGame() {
    var bg_id = $(this).attr("id");
    console.log(bg_id);
    $.ajax("/api/collection/" + bg_id, {
      type: "DELETE",
    }).then(() =>{
      console.log("success");
      location.reload()
    });
  }

//   $(".delquote").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/quotes/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted id ", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });