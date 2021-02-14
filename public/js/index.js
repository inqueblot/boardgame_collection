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
    numberOfGameResponse = 5;
    // ADD URL BELOW \\
    const gameSearch = `https://api.boardgameatlas.com/api/search?name=${gameName}&pretty=true&limit=${numberOfGameResponse}&client_id=JLBr5npPhV`;
    $.ajax({
      url: gameSearch,
      method: "GET",
    }).then(function (response) {
      responseList(response);
    });
  };
  const responseList = (response) => {
    for (let i = 0; i < response.games.length; i++) {
      console.log(response.games[i].name);
      console.log(response.games[i].min_players);
      console.log(response.games[i].max_players);
      console.log(response.games[i].max_playtime);
      console.log(response.games[i].min_age);
      console.log(response.games[i].publisher);
      console.log(response.games[i].year_published);
      console.log(response.games[i].msrp);
      console.log(response.games[i].images.small);
    }
  };
});
