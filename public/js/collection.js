
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
        let option = `<option>${element.designer}</option>`
        $("#designerList").append(option)
    });
});

// This function does an API call to delete posts
  $(document).on("click", ".button", deleteGame);

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

let playerCount = function () {
    $("#numPlay").on("keypress", function (event) {
        // event.preventDefault();
        if (event.which == 13) {
            // console.log("hello world")
            $.get(`/api/collection/players/${this.value}`, function (data) {
                $("#table_results").children().remove()
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
                    table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr>`
                    $("#table_results").append(table)
                }).then(function (results) {
                    playerCount();
                });
            });
        }
    })
}
playerCount()

// let playerCount = function () {
//     $("#numPlay").on("keypress", function (event) {
//         // event.preventDefault();
//         if (event.which == 13) {
//             // console.log("hello world")
//             $.get(`/api/collection/players/${this.value}`, function (data) {
//                 $("#table_results").children().remove()
//                 data.forEach(element => {
//                     let table = `<tr><td><a href="/game/${element.bg_id}"</a>${element.name}</td>`
//                     table += `<td>${element.minPlayers}</td>`
//                     table += `<td>${element.maxPlayers}</td>`
//                     table += `<td>${element.playTime}</td>`
//                     table += `<td>${element.yearPub}</td>`
//                     table += `<td>${element.publisher}</td>`
//                     table += `<td>${element.age}</td>`
//                     table += `<td>${element.msrp}</td>`
//                     table += `<td>${element.designer}</td>`
//                     table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr>`
//                     $("#table_results").append(table)
//                 }).then(function (results) {
//                     playerCount();
//                 });
//             });
//         }
//     })
// }
