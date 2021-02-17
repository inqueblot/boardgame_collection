function getTodos() {
    $.get("/api/collection", function (data) {
        console.log(data)
    });
}