"strict";

$(document).ready(function () {
  // SEARCH GAME NAME INPUT AND SUBMIT BUTTON \\
  $("#search").on("click", function (event) {
    event.preventDefault();
    gameName = $("#game-name-input").val().trim();
    getGameId(gameName);
    // gameName.val("");
  });

  // FIRST 3RD PARTY API CALL TO RETRIEVE ID \\
  const getGameId = (gameName) => {
    // ADD URL BELOW \\
    const gameSearch = `https://api.boardgameatlas.com/api/search?fuzzy_match=true&name=${gameName}&limit=5&pretty=true&client_id=JLBr5npPhV`;
    $.ajax({
      url: gameSearch,
      method: "GET",
    }).then(function (response) {
      response.games.forEach(element => {
        console.log(element);
        let html = `<p id=${element.id}><img src=${element.images.small}>`;
        html += `${element.name}`;
        html += `</p>`;
        $("#searchResults").append(html);

        $(`#${element.id}`).on("click", function (event) {
          event.preventDefault();
          console.log(this.id);
        });

        //create event listener for image
        //maybe add button to add to collection
        //maybe build in pagination
      });

    });
  };
});
