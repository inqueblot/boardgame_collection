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
    const gameSearch = `https://www.boardgameatlas.com/api/search?name=${gameName}&pretty=true&client_id=JLBr5npPhV`;
    $.ajax({
      url: gameSearch,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  };
});
