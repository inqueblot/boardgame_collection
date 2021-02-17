

// // window.onload = collection()


$.get("/api/collection", function (data) {
    data.forEach(element => {
        console.log(element.name)
        let table = `<tr><td>${element.name}</td>`
        table += `<td>${element.minPlayers}</td>`
        table += `<td>${element.maxPlayers}</td>`
        table += `<td>${element.playTime}</td>`
        table += `<td>${element.yearPub}</td>`
        table += `<td>${element.publisher}</td>`
        table += `<td>${element.age}</td>`
        table += `<td>${element.msrp}</td>`
        table += `<td>${element.designer}</td></tr>`
        $("#table_results").append(table)
    });
});


