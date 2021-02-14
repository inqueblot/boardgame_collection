
// const util = require('util');
// const parser = require('xml2json');
// const { sequelize } = require('./models');

// console.log(parser)

//match to search form on main html
// $(".create-form").on("submit", function (event) {
//     event.preventDefault();

//     var search = $("#search").val()

$.ajax({
    method: "GET",
    url: `https://www.boardgamegeek.com/xmlapi2/search?query=pandemic`

}).then(function (response) {
    console.log(response);
})
// })
// parseString(xml, function (err, result) {
//     if (err) { console.log(err) };
//     // console.log(util.inspect(result, false, null))
//     console.log(result)

//     // var res = result
//     // console.log(res.$)
// });
var options = {
    object: true
}
var jsonObj = parser.toJson(xml, options)
console.log(util.inspect(jsonObj, false, null))
console.log(jsonObj.items.item.yearpublished)


