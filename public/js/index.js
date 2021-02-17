"strict";

$(document).ready(function () {

    $.ajax({
      url: "https://api.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=JLBr5npPhV",
      method: "GET",
    }).then(function (response) {
      console.log(response);
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
      // let title = $("<p>");
    
      // title.text("Search results")
      // suggestions.append(title);
      // suggestions.append("<br>")
  
      for (let i = 0; i < 5; i++) {
        const {
          name,
          min_players,
          max_players,
          max_playtime: playTime,
          min_age: age,
          primary_designer: { name: designer },
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
        suggestions.append(mainColumn)
  
        const gameObject = {
          id,
          name,
          min_players,
          max_players,
          playTime,
          age,
          publisher,
          designer,
          year,
          msrp,
          images: { small },
        };
        // PUSH GAMEOBJECT TO EMPTY ARRAY AFTER EACH SEARCH \\
        searchArr.push(gameObject);
        // console.log(searchArr);
      }
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
      // clearTable(response);
      clearResults()
      responseList(response);
      $(".nextView").click(function (event) {
        event.preventDefault();
        window.location.href = "/game/" + $(this).attr("value");
      });
    });
  };

  // ARRAY OF SEARCH RESULT OBJECTS \\
  let searchArr = [];

  // CLEAR PREVIOUS SEARCH RESULT TABLES \\
  function clearResults(){

    $("#game-search-result").children().remove();

  }

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
        primary_designer: { name: designer },
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
        min_players,
        max_players,
        playTime,
        age,
        publisher,
        designer,
        year,
        msrp,
        images: { small },
      };
      // PUSH GAMEOBJECT TO EMPTY ARRAY AFTER EACH SEARCH \\
      searchArr.push(gameObject);
      // console.log(searchArr);
    }
  };

  // ADDING LISTENER ON CLICK SEND SELECTION TO AJAX \\
  $(document).on("click", ".save-btn", newAjaxCall);

  // AJAX CALL TO BACK END WITH FILTERED GAME OBJECT \\
  function newAjaxCall() {
    let gameId = $(this).attr("data-number");
    // console.log(gameId);
    // console.log(searchArr);
    const result = searchArr.filter(({ id }) => gameId.includes(id));
    // console.log(result);
    const [resultOb] = result;
    // console.log(resultOb);
    // Send the POST request.
    $.ajax("/api/game", {
      type: "POST",
      data: resultOb,
    }).then(function (results) {
      console.log(results);
      // Reload the page to get the updated list
      // location.reload();
      confirmAddModal(results);
    });
  }
  // LOOP THROUGH RESPONSE AND CREATE EACH VARIABLE \\

  // CONFIRMATION MODAL THAT GAME WAS ADDED TO COLLECTION \\
  confirmAddModal = (results) => {
    console.log(results);
    const nameGameCon = $(
      `<h4 style="color:white;">You have added "${results}" to your collection</h4>`
    );
    $("#modal-result").append(nameGameCon);
    $("#modal-act").addClass("is-active");
    setTimeout(function () {
      $("#modal-act").removeClass("is-active");
      $(nameGameCon).detach();
    }, 2000);
  };
});


