
const callId = window.location.pathname.split("/").pop();
const id1 = "8HkZo9bYEU";


$.ajax({
    url: `https://api.boardgameatlas.com/api/search?ids=${callId}&client_id=${id1}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
    let game = response.games[0];
    console.log(game)
    $("#game-search-result").append(`<img src=${game.image_url}>`)
})