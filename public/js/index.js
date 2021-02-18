"strict";

$(document).ready(function () {

  $.ajax({
    url: "https://api.boardgameatlas.com/api/search?limit=5&client_id=JLBr5npPhV",
    method: "GET",
  }).then(function (response) {

    // clearResults()
    suggestionList(response);
    $(".nextView").click(function (event) {
      event.preventDefault();
      window.location.href = "/game/" + $(this).attr("value");
    });
  });

  const suggestionList = (response) => {
    let suggestions = $("#suggestions");
    let mainColumn = $("<div class='columns'>");
    for (let i = 0; i < 5; i++) {
      const {
        name,
        id,
        images: { small },
      } = response.games[i];

      // BUILD SEARCH RESPONSE TABLES FOR SEARCHED GAMES \\

      let col = $("<div class='column'>")
      let nametag = $("<strong>");
      let image = $("<img>")
      let cardColor = $("<div class='card cardcolor'>");
      let cardContent = $("<div class='card-content'>");
      let content = $("<div class='content has-text-centered'>")


      nametag.text(name);
      image.attr("src", `${small}`)
      image.attr("value", `${id}`)
      image.addClass("nextView")
      col.append(cardColor);
      cardColor.append(cardContent);
      cardContent.append(content);
      content.append(nametag);
      content.append("<br>");
      content.append("<br>");
      content.append(image);

      mainColumn.append(col);
      suggestions.append(mainColumn)

      const gameObject = {
        id,
        name,
        images: { small },
      };
      // PUSH GAMEOBJECT TO EMPTY ARRAY AFTER EACH SEARCH \\
      // searchArr.push(gameObject);
      // console.log(searchArr);
    }
  };


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
      ? $("#game-search-result").children().remove() & responseList(response)
      : noResults();
  };

  const responseList = (response) => {
    let gameinfo = $("#game-search-result");
    let mainColumn = $("<div class='columns'>");
    let title = $("<p>");

    title.text("Search results")
    gameinfo.append(title);
    gameinfo.append("<br>")

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

      let col = $("<div class='column'>")
      let nametag = $("<strong>");
      let image = $("<img>")
      let cardColor = $("<div class='card cardcolor'>");
      let cardContent = $("<div class='card-content'>");
      let content = $("<div class='content has-text-centered'>")



      nametag.text(name);
      image.attr("src", `${small}`)
      image.attr("value", `${id}`)
      image.addClass("nextView")
      col.append(cardColor);
      cardColor.append(cardContent);
      cardContent.append(content);
      content.append(nametag);
      content.append("<br>");
      content.append("<br>");
      content.append(image);

      mainColumn.append(col);
      gameinfo.append(mainColumn)

      const gameObject = {
        id,
        name,
        images: { small },
      };

      function clearResults() {
        $("#game-search-result").children().remove();
      }
    }
  };

});


