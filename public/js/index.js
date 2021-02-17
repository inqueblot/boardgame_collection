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
    // CLEAR SEARCH ARRAY FOR NEW SEARCH \\
    searchArr = [];

    gameName = $("#game-name-input").val().trim();
    getGames(gameName);
    $("#game-name-input").val("");
  });

  // API CALL TO RETRIEVE GAMES BY NAME \\
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
      // responseList(response);
      $(".nextView").click(function (event) {
        event.preventDefault();
        window.location.href = "/game/" + $(this).attr("value");
      });
    });
  };

  // ARRAY OF SEARCH RESULT OBJECTS \\
  let searchArr = [];

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
        // primary_designer: { name: designer },
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
      let newRow1 = $("<tr>");
      let row1data = $("<td>");
      row1data.text(`Min Players = ${min_players || "NA"}`);
      beginTable.append(newRow1);
      newRow1.append(row1data);
      let newRow2 = $("<tr>");
      let row2data = $("<td>");
      row2data.text(`Max Players = ${max_players || "NA"}`);
      beginTable.append(newRow2);
      newRow2.append(row2data);
      let newRow3 = $("<tr>");
      let row3data = $("<td>");
      row3data.text(`Play Time = ${playTime || "NA"} min`);
      beginTable.append(newRow3);
      newRow3.append(row3data);
      let newRow4 = $("<tr>");
      let row4data = $("<td>");
      row4data.text(`Age = ${age || "NA"}`);
      beginTable.append(newRow4);
      newRow4.append(row4data);
      let newRow5 = $("<tr>");
      let row5data = $("<td>");
      row5data.text(`Publisher = ${publisher || "NA"}`);
      beginTable.append(newRow5);
      newRow5.append(row5data);
      let newRow6 = $("<tr>");
      let row6data = $("<td>");
      row6data.text(`Released = ${year || "NA"}`);
      beginTable.append(newRow6);
      newRow6.append(row6data);
      let newRow7 = $("<tr>");
      let row7data = $("<td>");
      row7data.text(`Cost = $${msrp || "NA"}`);
      beginTable.append(newRow7);
      newRow7.append(row7data);
      beginTable.append(`<img class="nextView" value=${id} src='${small}' />`);
      beginTable.append("</table>");
      const gameObject = {
        id,
        name,
        min_players,
        max_players,
        playTime,
        age,
        publisher,
        // primary_designer: { name: designer },
        year,
        msrp,
        images: { small },
      };
      // PUSH GAMEOBJECT TO EMPTY ARRAY AFTER EACH SEARCH \\
      searchArr.push(gameObject);
    }
  };

  // ADDING LISTENER ON CLICK SEND SELECTION TO AJAX \\
  $(document).on("click", ".save-btn", newAjaxCall);

  // AJAX CALL TO BACK END WITH FILTERED GAME OBJECT \\
  function newAjaxCall() {
    let gameId = $(this).attr("data-number");
    const result = searchArr.filter(({ id }) => gameId.includes(id));
    const [resultOb] = result;
    // Send the POST request.
    $.ajax("/api/game", {
      type: "POST",
      data: resultOb,
    }).then(function (results) {
      console.log(results);
      confirmAddModal(results);
    });
  }
});
