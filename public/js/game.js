console.log(req.params.id)
var callId = "OIXt3DmJU0";
const id1 = "8HkZo9bYEU";

$.ajax({
    url: `https://api.boardgameatlas.com/api/search?ids=${callId}&client_id=${id1}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
    response.render()
    window.location.replace('/game');
})