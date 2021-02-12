var parseString = require('xml2js').parseString;
var parser = require('fast-xml-parser')
const util = require('util');

// console.log(parseString)

const xml = `<items termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
<item type="boardgame" id="30549">
<thumbnail>https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__thumb/img/oqViRj6nVxK3m36NluTxU1PZkrk=/fit-in/200x150/filters:strip_icc()/pic1534148.jpg</thumbnail>
<image>https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__original/img/IsrvRLpUV1TEyZsO5rC-btXaPz0=/0x0/filters:format(jpeg)/pic1534148.jpg</image>
<name type="primary" sortindex="1" value="Pandemic"/>
<name type="alternate" sortindex="1" value="EPIZOotic"/>
<name type="alternate" sortindex="1" value="Pandemia"/>
<name type="alternate" sortindex="1" value="Pandemia 10 Aniversario"/>
<name type="alternate" sortindex="1" value="Pandemia: Una Nuova Sfida"/>
<name type="alternate" sortindex="1" value="Pandemic, 10 Jahre Jubiläumsedition"/>
<name type="alternate" sortindex="1" value="Pandemic, Edición 10º Aniversario"/>
<name type="alternate" sortindex="1" value="Pandemic: 10th Anniversary Edition"/>
<name type="alternate" sortindex="1" value="Pandemic: 10° Anniversario"/>
<name type="alternate" sortindex="1" value="Pandemic: Edition 10ème anniversaire"/>
<name type="alternate" sortindex="1" value="Pandemic: Una nuova sfida"/>
<name type="alternate" sortindex="1" value="Pandémie"/>
<name type="alternate" sortindex="1" value="Pandemie"/>
<name type="alternate" sortindex="1" value="Πανδημία"/>
<name type="alternate" sortindex="1" value="Пандемія"/>
<name type="alternate" sortindex="1" value="Пандемия"/>
<name type="alternate" sortindex="1" value="פנדמיק"/>
<name type="alternate" sortindex="1" value="เกมโรคระบาด"/>
<name type="alternate" sortindex="1" value="パンデミック"/>
<name type="alternate" sortindex="1" value="パンデミック：新たなる試練"/>
<name type="alternate" sortindex="1" value="瘟疫危機 (瘟疫危机)"/>
<name type="alternate" sortindex="1" value="팬데믹"/>
<description>In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.&#10;&#10;The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are Epidemic! cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the &quot;normal&quot; spread of the infections.&#10;&#10;Taking a unique role within the team, players must plan their strategy to mesh with their specialists' strengths in order to conquer the diseases. For example, the Operations Expert can build research stations which are needed to find cures for the diseases and which allow for greater mobility between cities; the Scientist needs only four cards of a particular disease to cure it instead of the normal five&mdash;but the diseases are spreading quickly and time is running out. If one or more diseases spreads beyond recovery or if too much time elapses, the players all lose. If they cure the four diseases, they all win!&#10;&#10;The 2013 edition of Pandemic includes two new characters&mdash;the Contingency Planner and the Quarantine Specialist&mdash;not available in earlier editions of the game.&#10;&#10;Pandemic is the first game in the Pandemic series.&#10;&#10;</description>
<yearpublished value="2008"/>
<minplayers value="2"/>
<maxplayers value="4"/>
<poll name="suggested_numplayers" title="User Suggested Number of Players" totalvotes="1702">
...
</poll>
<playingtime value="45"/>
<minplaytime value="45"/>
<maxplaytime value="45"/>
<minage value="8"/>
<poll name="suggested_playerage" title="User Suggested Player Age" totalvotes="495">
...
</poll>
<poll name="language_dependence" title="Language Dependence" totalvotes="321">
...
</poll>
<link type="boardgamecategory" id="2145" value="Medical"/>
<link type="boardgamemechanic" id="2001" value="Action Points"/>
<link type="boardgamemechanic" id="2023" value="Cooperative Game"/>
<link type="boardgamemechanic" id="2040" value="Hand Management"/>
<link type="boardgamemechanic" id="2078" value="Point to Point Movement"/>
<link type="boardgamemechanic" id="2004" value="Set Collection"/>
<link type="boardgamemechanic" id="2008" value="Trading"/>
<link type="boardgamemechanic" id="2015" value="Variable Player Powers"/>
<link type="boardgamefamily" id="64952" value="Components: Map (Global Scale)"/>
<link type="boardgamefamily" id="65191" value="Components: Multi-Use Cards"/>
<link type="boardgamefamily" id="3430" value="Game: Pandemic"/>
<link type="boardgamefamily" id="61854" value="Medical: Diseases"/>
<link type="boardgamefamily" id="63526" value="Occupation: Dispatcher"/>
<link type="boardgamefamily" id="63524" value="Occupation: Medic / Doctor / Nurses"/>
<link type="boardgamefamily" id="63525" value="Occupation: Researcher / Scientist"/>
<link type="boardgamefamily" id="62881" value="Region: The World"/>
<link type="boardgameexpansion" id="205666" value="Pandemic: Gen Con 2016 Promos – Z-Force Team Member/Game Convention"/>
<link type="boardgameexpansion" id="137136" value="Pandemic: In the Lab"/>
<link type="boardgameexpansion" id="40849" value="Pandemic: On the Brink"/>
<link type="boardgameexpansion" id="185403" value="Pandemic: Promo Roles"/>
<link type="boardgameexpansion" id="168703" value="Pandemic: State of Emergency"/>
<link type="boardgameexpansion" id="221935" value="Pandemic: Survival Promos – Crisis Mitigator/Relocation Specialist"/>
<link type="boardgameexpansion" id="48791" value="Pandemie: Uitbreiding "De Generalist""/>
<link type="boardgameimplementation" id="314040" value="Pandemic Legacy: Season 0"/>
<link type="boardgameimplementation" id="161936" value="Pandemic Legacy: Season 1"/>
<link type="boardgameimplementation" id="221107" value="Pandemic Legacy: Season 2"/>
<link type="boardgameimplementation" id="260428" value="Pandemic: Fall of Rome"/>
<link type="boardgameimplementation" id="329670" value="Pandemic: Hot Zone – Europe"/>
<link type="boardgameimplementation" id="301919" value="Pandemic: Hot Zone – North America"/>
<link type="boardgameimplementation" id="198928" value="Pandemic: Iberia"/>
<link type="boardgameimplementation" id="192153" value="Pandemic: Reign of Cthulhu"/>
<link type="boardgameimplementation" id="234671" value="Pandemic: Rising Tide"/>
<link type="boardgameimplementation" id="150658" value="Pandemic: The Cure"/>
<link type="boardgamedesigner" id="378" value="Matt Leacock"/>
<link type="boardgameartist" id="9731" value="Josh Cappel"/>
<link type="boardgameartist" id="33088" value="Christian Hanisch"/>
<link type="boardgameartist" id="11935" value="Régis Moulun"/>
<link type="boardgameartist" id="14057" value="Chris Quilliams"/>
<link type="boardgameartist" id="16910" value="Tom Thiel"/>
<link type="boardgamepublisher" id="538" value="Z-Man Games, Inc."/>
<link type="boardgamepublisher" id="3320" value="(Unknown)"/>
<link type="boardgamepublisher" id="4304" value="Albi"/>
<link type="boardgamepublisher" id="157" value="Asmodee"/>
<link type="boardgamepublisher" id="47848" value="Asmodee China"/>
<link type="boardgamepublisher" id="42032" value="Asmodee Italia"/>
<link type="boardgamepublisher" id="15889" value="Asterion Press"/>
<link type="boardgamepublisher" id="6784" value="Bergsala Enigma (Enigma)"/>
<link type="boardgamepublisher" id="7162" value="Brain Games"/>
<link type="boardgamepublisher" id="2366" value="Devir"/>
<link type="boardgamepublisher" id="5657" value="Filosofia Éditions"/>
<link type="boardgamepublisher" id="15605" value="Galápagos Jogos"/>
<link type="boardgamepublisher" id="8820" value="Gém Klub Kft."/>
<link type="boardgamepublisher" id="23382" value="HaKubia"/>
<link type="boardgamepublisher" id="1391" value="Hobby Japan"/>
<link type="boardgamepublisher" id="6275" value="HomoLudicus"/>
<link type="boardgamepublisher" id="15983" value="Jolly Thinkers"/>
<link type="boardgamepublisher" id="6214" value="Kaissa Chess & Games"/>
<link type="boardgamepublisher" id="8291" value="Korea Boardgames Co., Ltd."/>
<link type="boardgamepublisher" id="5812" value="Lacerta"/>
<link type="boardgamepublisher" id="3218" value="Lautapelit.fi"/>
<link type="boardgamepublisher" id="9325" value="Lifestyle Boardgames Ltd"/>
<link type="boardgamepublisher" id="7992" value="MINDOK"/>
<link type="boardgamepublisher" id="11107" value="Nordic Games GmbH"/>
<link type="boardgamepublisher" id="29085" value="Paladium Games"/>
<link type="boardgamepublisher" id="39" value="Pegasus Spiele"/>
<link type="boardgamepublisher" id="4696" value="Quined White Goblin Games"/>
<link type="boardgamepublisher" id="7466" value="Rebel Sp. z o.o."/>
<link type="boardgamepublisher" id="33998" value="Siam Board Games"/>
<link type="boardgamepublisher" id="3888" value="Stratelibri"/>
<link type="boardgamepublisher" id="8759" value="Wargames Club Publishing"/>
<link type="boardgamepublisher" id="4932" value="White Goblin Games"/>
<link type="boardgamepublisher" id="35809" value="Zhiyanjia"/>
<link type="boardgamepublisher" id="44209" value="Ігромаг"/>
<link type="boardgamepublisher" id="10739" value="Взрослые дети"/>
</item>
</items>`

// parseString(xml, function (err, result) {
//     if (err) { console.log(err) };
//     // console.log(util.inspect(result, false, null))
//     console.log(result)

//     // var res = result
//     // console.log(res.$)
// });
var options = {
    ignoreNameSpace: true,
    parseAttributeValue: true,
}
var jsonObj = parser.parse(xml, options);
console.log(util.inspect(jsonObj, false, null))
console.log(jsonObj.items.item.yearpublished)




