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
      primary_designer,
      year_published: year,
      msrp,
      id,
      images: { large },
      images: { small },
      url,
      primary_publisher,
    } = response.games[0];

    // SEND RESPONSE TO BUILD OBJECT FOR SAVE \\
    const gameObject = {
      name,
      description,
      min_players,
      max_players,
      playTime,
      age,
      primary_designer,
      year,
      msrp,
      id,
      images: { small },
      primary_publisher,
      url,
    };

    // AMAZON SEARCH URL \\
    amazonSearchURL = `https://www.amazon.com/s?k=${name}+board+game&i=toys-and-games&crid=OW7Q3H9U8YAU&sprefix=${name}+%2Ctoys-and-games%2C208&ref=nb_sb_ss_ts-doa-p_1_6`;

    // PUSH GAME OBJECT TO ARR FOR SAVE BUTTON \\
    gameObjArr.push(gameObject);

    const tableHeader = $(`<tr><th colspan=2>${name}</th></tr>`);
    $(".new-table").append(tableHeader);
    const tableRow1 = $(`<tr class="table-row"></tr>`);
    const tableData1 = $(`<td class="td-title">Minimum Players</td>`);
    const tableData2 = $(`<td class="td-body">${min_players || "NA"}</td>`);
    $(".new-table").append(tableRow1);
    tableRow1.append(tableData1, tableData2);
    const tableRow2 = $(`<tr class="table-row"></tr>`);
    const tableData1b = $(`<td class="td-title">Maximum Players</td>`);
    const tableData2b = $(`<td class="td-body">${max_players || "NA"}</td>`);
    $(".new-table").append(tableRow2);
    tableRow2.append(tableData1b, tableData2b);
    const tableRow3 = $(`<tr class="table-row"></tr>`);
    const tableData1c = $(`<td class="td-title">Play Time</td>`);
    const tableData2c = $(`<td class="td-body">${playTime || "NA"} </td>`);
    $(".new-table").append(tableRow3);
    tableRow3.append(tableData1c, tableData2c);
    const tableRow4 = $(`<tr class="table-row"></tr>`);
    const tableData1d = $(`<td class="td-title">Minimum Age</td>`);
    const tableData2d = $(`<td class="td-body">${age || "NA"}</td>`);
    $(".new-table").append(tableRow4);
    tableRow4.append(tableData1d, tableData2d);
    const tableRow5 = $(`<tr class="table-row"></tr>`);
    const tableData1e = $(`<td class="td-title">Year Released</td>`);
    const tableData2e = $(`<td class="td-body">${year || "NA"}</td>`);
    $(".new-table").append(tableRow5);
    const tableRow6 = $(`<tr class="table-row"></tr>`);
    const tableData1f = $(`<td class="td-title">Designer</td>`);
    const tableData2f = $(`<td class="td-body">${primary_designer.name || "NA"}</td>`);
    $(".new-table").append(tableRow6);
    tableRow5.append(tableData1f, tableData2f);
    const tableRow7 = $(`<tr class="table-row"></tr>`);
    const tableData1g = $(`<td class="td-title">MSRP</td>`);
    const tableData2g = $(`<td class="td-body">$${msrp}</td>`);
    $(".new-table").append(tableRow7);
    tableRow6.append(tableData1g, tableData2g);
    const addParagraph = $(`<p class="description-display">${description}</p>`);
    $(".description").append(addParagraph);
    const pageImage = $(`<img src="${large}" alt="">`);
    $(".current-pic").append(pageImage);
    const saveButton = $(
      `<button data-id=${id} class="button is-primary save-btn">Save</button>`
    );
    const buyButton = $(
      `<a href="${amazonSearchURL}" target="_blank"><button class="button is-primary">Buy On Amazon</button></a>`
    );
    $(".buttons-pic").append(saveButton, buyButton);
  };

  // ADDING LISTENER ON CLICK SEND SELECTION TO AJAX \\
  $(document).on("click", ".save-btn", saveGameAjax);

  // SENDING GAME OBJECT TO DB \\
  function saveGameAjax() {
    const [resultOb] = gameObjArr;
    $.ajax("/api/game", {
      type: "POST",
      data: resultOb,
    }).then(function (results) {
      
      confirmAddModal(results);
    });
  }

  // CONFIRMATION MODAL THAT GAME WAS ADDED TO COLLECTION \\
  confirmAddModal = (results) => {
    if (results.name !== "SequelizeUniqueConstraintError") {
      const nameGameCon = $(
        `<h4 style="color:white;">You have added "${results}" to your collection</h4>`
      );
      $("#modal-result").append(nameGameCon);
      $("#modal-act").addClass("is-active");
      setTimeout(function () {
        $("#modal-act").removeClass("is-active");
        $(nameGameCon).detach();
      }, 3000);
    } else {
      const nameGameCon = $(
        `<h4 style="color:white;">You have already added this game to your collection</h4>`
      );
      $("#modal-result").append(nameGameCon);
      $("#modal-act").addClass("is-active");
      setTimeout(function () {
        $("#modal-act").removeClass("is-active");
        $(nameGameCon).detach();
      }, 3000);
    }
  };
});