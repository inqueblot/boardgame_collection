
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
        table += `<td><div class="buttons"><a class="button is-primary del" id=${element.bg_id}>delete</a></div></td></tr>`
        $("#table_results").append(table)
        let option = `<option>${element.designer}</option>`
        $("#designerList").append(option)
    });
});

// This function does an API call to delete posts
$(document).on("click", ".del", deleteGame);

function deleteGame() {
    var bg_id = $(this).attr("id");
    
    $.ajax("/api/collection/" + bg_id, {
        type: "DELETE",
    }).then(() => {
        
        location.reload()
    });
}


$("#playTime-submit").on("click", function (event) {
    event.preventDefault();
    let minutes = document.querySelector("#playTime-text").value
    $.get(`/api/collection/time/${minutes}`, function (data) {
        $("#table_results").children().remove()
        data.forEach(element => {
            let table = `<tr><td><a href="/game/${element.bg_id}"</a>${element.name}</td>`
            table += `<td>${element.minPlayers}</td >`
            table += `<td>${element.maxPlayers}</td >`
            table += `<td>${element.playTime}</td >`
            table += `<td>${element.yearPub}</td >`
            table += `<td>${element.publisher}</td>`
            table += `<td>${element.age}</td>`
            table += `<td>${element.msrp}</td>`
            table += `<td>${element.designer}</td>`
            table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr >`
            $("#table_results").append(table)
        })
    });

});

$("#numPlay-submit").on("click", function (event) {
    event.preventDefault();
    let count = document.querySelector("#numPlay-text").value
    
    $.get(`/api/collection/players/${count}`, function (data) {
        $("#table_results").children().remove()
        data.forEach(element => {
            let table = `<tr><td><a href="/game/${element.bg_id}"</a>${element.name}</td>`
            table += `<td>${element.minPlayers}</td> `
            table += `<td>${element.maxPlayers}</td>`
            table += `<td> ${element.playTime}</td> `
            table += `<td> ${element.yearPub}</td> `
            table += `<td> ${element.publisher}</td> `
            table += `<td> ${element.age}</td>`
            table += `<td> ${element.msrp}</td>`
            table += `<td> ${element.designer}</td>`
            table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr>`
            $("#table_results").append(table)
        })
    });

});

$("#designer-submit").on("click", function (event) {
    event.preventDefault();
    let designer = document.querySelector("#designerList").value
    $.get(`/api/collection/designer/${designer}`, function (data) {
        $("#table_results").children().remove()
        data.forEach(element => {
            let table = `<tr><td><a href="/game/${element.bg_id}"</a>${element.name}</td>`
            table += `<td>${element.minPlayers}</td>`
            table += `<td>${element.maxPlayers}</td>`
            table += `<td> ${element.playTime}</td> `
            table += `<td> ${element.yearPub}</td> `
            table += `<td> ${element.publisher}</td>`
            table += `<td> ${element.age}</td>`
            table += `<td> ${element.msrp}</td>`
            table += `<td> ${element.designer}</td>`
            table += `<td><div class="buttons"><a class="button is-primary">delete</a></div></td></tr>`
            $("#table_results").append(table)
        });
    });
});

