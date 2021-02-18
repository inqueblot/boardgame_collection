"strict";

$(document).ready(function () {
  // POPUP IF SEARCH RETURNED ZERO RESULTS \\
  const noResults = () => {
    const errMessage = $(
      `<h4 class="error-alert" style="color:white;">Invalid Entry, Please Try Again!</h4>`
    );
    $("#modal-result").append(errMessage);
    $("#modal-act").addClass("is-active");
    setTimeout(function () {
      $("#modal-act").removeClass("is-active");
      $(errMessage).detach();
      location.reload();
    }, 2000);
  };

  // SEARCH GAME NAME INPUT AND SUBMIT BUTTON \\
  $("#search").on("click", function (event) {
    event.preventDefault();

    var suggestions = $("#suggestions");
    suggestions.addClass("hide");

    gameName = $("#game-name-input").val().trim();
    getGames(gameName);
    $("#game-name-input").val("");
  });

  // API CALL TO GET GAMES SEARCHED BY NAME \\
  const getGames = (gameName) => {
    // MAXIMUM NUMBER OF RESPONSES \\
    const numberOfGameResponse = 5;

    // CLIENT ID'S \\
    const id1 = "8HkZo9bYEU";
    const id2 = "4Y7cLbbIhg";

    // API URL \\
    const gameSearch = `https://api.boardgameatlas.com/api/search?name=${gameName}&pretty=true&limit=${numberOfGameResponse}&client_id=${id1}`;
    // API CALL \\
    $.ajax({
      url: gameSearch,
      method: "GET",
    }).then(function (response) {
      clearTable(response);
      $(".nextView").click(function (event) {
        event.preventDefault();
        window.location.href = "/game/" + $(this).attr("value");
      });
    });
  };

  // CLEAR PREVIOUS SEARCH RESULT TABLES \\
  const clearTable = (response) => {
    response.games.length >= 1
      ? $(".search-table").detach() & responseList(response)
      : noResults();
  };

  // LOOP THROUGH RESPONSE AND CREATE EACH VARIABLE \\
  const responseList = (response) => {
    for (let i = 0; i < response.games.length; i++) {
      const {
        name,
        min_players,
        max_players,
        max_playtime: playTime,
        min_age: age,
        publisher,
        year_published: year,
        msrp,
        id,
        images: { small },
      } = response.games[i];

      // BUILD SEARCH RESPONSE TABLES FOR SEARCHED GAMES \\
      const beginTable = $('<table class="search-table" >');
      $("#game-search-result").append(beginTable);
      let newHeaderRow = $("<tr>");
      let headerData = $("<th>");
      headerData.text(name);
      beginTable.append(newHeaderRow);
      newHeaderRow.append(headerData);
      beginTable.append(`<img class="nextView" value=${id} src='${small}' />`);
      beginTable.append("</table>");
    }
  };
});
