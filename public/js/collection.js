

// var slider = document.getElementById("player-slider")
// var output = document.getElementById('player-output');
// output.innerHTML = slider.value;
// slider.oninput = function () { output.innerHTML = this.value; }
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
        table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr>`
        $("#table_results").append(table)
    });
});

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
