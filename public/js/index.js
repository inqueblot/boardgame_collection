"strict";
$(document).ready(function () {
  // SEARCH GAME NAME INPUT AND SUBMIT BUTTON \\
  $("#search").on("click", function (event) {
    event.preventDefault();
    gameName = $("#game-name-input").val().trim();
    getGameId(gameName);
    gameName.val("");
  });

  // FIRST 3RD PARTY API CALL TO RETRIEVE ID \\
  const getGameId = (gameName) => {
    // ADD URL BELOW \\
    const retrieveIdURL = `url ${gameName} here`;
    $.ajax({
      url: retrieveIdURL,
      method: "GET",
    }).then(function (response) {
      const id = response.id;
      // ADD URL BELOW \\
      const retrieveGameInfo = `url ${id} here`;
      // SECOND 3RD PARTY API CALL WITH ID TO RETRIEVE GAME INFO \\
      $.ajax({
        url: retrieveGameInfo,
        method: "GET",
      })
        .then(function (response) {
          // CREATE OUR RESPONSE OBJECT \\
          const newGame = {
            numberOfPlayers: 6,
            gameCategory: fun,
          };
          sendNewGameDb(newGame);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  };

  const sendNewGameDb = (newGame) => {
    $.ajax("/api/game", {
      method: "POST",
      data: newGame,
    })
      .then(function () {
        console.log("created new game");
        location.reload();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
});
