console.log(req.params.id)

$.ajax({
    url: `https://api.boardgameatlas.com/api/search?ids=${callId}&client_id=${id1}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
    response.render()
    window.location.replace('/game');
})