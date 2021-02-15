"strict";

$(document).ready(function () {
  // SEARCH GAME NAME INPUT AND SUBMIT BUTTON \\
  $("#search").on("click", function (event) {
    event.preventDefault();
    gameName = $("#game-name-input").val().trim();
    getGames(gameName);
    $("#game-name-input").val("");
  });

  // FIRST 3RD PARTY API CALL TO RETRIEVE ID \\
  const getGames = (gameName) => {
    const numberOfGameResponse = 5;
    const id1 = "8HkZo9bYEU";
    const id2 = "4Y7cLbbIhg";

    // ADD URL BELOW \\
    const gameSearch = `https://api.boardgameatlas.com/api/search?name=${gameName}&pretty=true&limit=${numberOfGameResponse}&client_id=${id1}`;
    $.ajax({
      url: gameSearch,
      method: "GET",
    }).then(function (response) {
      responseList(response);
    });
  };
  const responseList = (response) => {
    for (let i = 0; i < response.games.length; i++) {
      gameMSRP = response.games[i].msrp || "NA";
      gamePublisher = response.games[i].publisher || "NA";
      console.log(response.games[i].name);
      console.log(response.games[i].min_players);
      console.log(response.games[i].max_players);
      console.log(response.games[i].max_playtime);
      console.log(response.games[i].min_age);
      console.log(response.games[i].publisher);
      console.log(response.games[i].year_published);
      console.log(response.games[i].msrp);
      console.log(response.games[i].images.small);
      console.log(gameMSRP);
      console.log(gamePublisher);
    }
  };
});
