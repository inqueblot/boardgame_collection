
const callId = window.location.pathname.split("/").pop();
const id1 = "8HkZo9bYEU";


$.ajax({
    url: `https://api.boardgameatlas.com/api/search?ids=${callId}&client_id=${id1}`,
    method: "GET"
}).then(function (response) {
    console.log(response)
})