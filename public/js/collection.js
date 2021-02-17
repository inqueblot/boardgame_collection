window.onload = collection()


function collection() {
    $.get("/api/collection", function (data) {
        console.log(data)
    });
}

