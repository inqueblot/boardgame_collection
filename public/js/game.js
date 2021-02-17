"strict";

$(document).ready(function () {
  // AJAX CALL WITH GAME ID SENT FROM SEARCH PAGE \\
  const callId = window.location.pathname.split("/").pop();
  const id1 = "8HkZo9bYEU";

  // ARRAY TO STORE GAME INFO FOR SAVE BUTTON \\
  const gameObjArr = [];

  $.ajax({
    url: `https://api.boardgameatlas.com/api/search?ids=${callId}&client_id=${id1}`,
    method: "GET",
  }).then(function (response) {
    // SEND RESPONSE TO BUILD DISPLAY TABLE \\
    buildTable(response);

    // let game = response.games[0];
    // console.log(game);
    // $("#game-search-result").append(`<img src=${game.image_url}>`);
  });

  // BUILDING GAME INFO TABLE AND IMAGE \\
  buildTable = (response) => {
    const {
      name,
      description,
      min_players,
      max_players,
      max_playtime: playTime,
      min_age: age,
      primary_designer: { name: designer },
      year_published: year,
      msrp,
      id,
      images: { large },
      url,
    } = response.games[0];

    // SEND RESPONSE TO BUILD OBJECT FOR SAVE \\
    buildObject(response);

    const tableHeader = $(`<tr><th colspan=2>${name}</th></tr>`);
    $(".new-table").append(tableHeader);
    const tableRow1 = $(`<tr class="table-row"></tr>`);
    const tableData1 = $(`<td class="td-title">Minimum Players</td>`);
    const tableData2 = $(`<td class="td-body">${min_players}</td>`);
    $(".new-table").append(tableRow1);
    tableRow1.append(tableData1, tableData2);
    const tableRow2 = $(`<tr class="table-row"></tr>`);
    const tableData1b = $(`<td class="td-title">Maximum Players</td>`);
    const tableData2b = $(`<td class="td-body">${max_players}</td>`);
    $(".new-table").append(tableRow2);
    tableRow2.append(tableData1b, tableData2b);
    const tableRow3 = $(`<tr class="table-row"></tr>`);
    const tableData1c = $(`<td class="td-title">Play Time</td>`);
    const tableData2c = $(`<td class="td-body">${playTime}</td>`);
    $(".new-table").append(tableRow3);
    tableRow3.append(tableData1c, tableData2c);
    const tableRow4 = $(`<tr class="table-row"></tr>`);
    const tableData1d = $(`<td class="td-title">Minimum Age</td>`);
    const tableData2d = $(`<td class="td-body">${age}</td>`);
    $(".new-table").append(tableRow4);
    tableRow4.append(tableData1d, tableData2d);
    const tableRow5 = $(`<tr class="table-row"></tr>`);
    const tableData1e = $(`<td class="td-title">Year Released</td>`);
    const tableData2e = $(`<td class="td-body">${year}</td>`);
    $(".new-table").append(tableRow5);
    tableRow5.append(tableData1e, tableData2e);
    const tableRow6 = $(`<tr class="table-row"></tr>`);
    const tableData1f = $(`<td class="td-title">MSRP</td>`);
    const tableData2f = $(`<td class="td-body">$${msrp}</td>`);
    $(".new-table").append(tableRow6);
    tableRow6.append(tableData1f, tableData2f);
    const addParagraph = $(`<p class="description-display">${description}</p>`);
    $(".description").append(addParagraph);
    const pageImage = $(`<img src="${large}" alt="">`);
    $(".current-pic").append(pageImage);
    const saveButton = $(
      `<button data-id=${id} class="button is-primary save-btn">Save</button>`
    );
    const buyButton = $(
      `<a href="${url}" target="_blank"><button class="button is-primary">Buy</button></a>`
    );
    $(".buttons-pic").append(saveButton, buyButton);
  };

  buildObject = (response) => {
    console.log(response);
    const gameObject = {
      //   id,
      //   name,
      //   min_players,
      //   max_players,
      //   playTime,
      //   age,
      //   publisher,
      //   designer,
      //   year,
      //   msrp,
      //   images: { small },
      // PUSH GAMEOBJECT TO EMPTY ARRAY AFTER EACH SEARCH \\
      // gameObjArr.push(gameObject);
    };
  };

  // ADDING LISTENER ON CLICK SEND SELECTION TO AJAX \\
  $(document).on("click", ".save-btn", saveGameAjax);

  // SENDING GAME OBJECT TO DB \\
  function saveGameAjax() {
    console.log(gameObjArr);
    console.log("hello");
    confirmAddModal();
  }

  // CONFIRMATION MODAL THAT GAME WAS ADDED TO COLLECTION \\
  confirmAddModal = () => {
    //need to get res.json from backend response for game name
    // console.log(results);
    const nameGameCon = $(
      `<h4 style="color:white;">You have added "NEW GAME" to your collection</h4>`
    );
    $("#modal-result").append(nameGameCon);
    $("#modal-act").addClass("is-active");
    setTimeout(function () {
      $("#modal-act").removeClass("is-active");
      $(nameGameCon).detach();
    }, 2000);
  };
});
