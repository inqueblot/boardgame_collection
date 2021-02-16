module.exports = function (sequelize, DataTypes) {
    var Collection = sequelize.define("Collection", {
        name: DataTypes.STRING,
        bg_id: {
            type: DataTypes.STRING,
        },
        minPlayers: DataTypes.INTEGER,
        maxPlayers: DataTypes.INTEGER,
        playTime: DataTypes.INTEGER,
        yearPub: DataTypes.INTEGER,
        publisher: DataTypes.STRING,
        age: DataTypes.INTEGER,
        msrp: DataTypes.DECIMAL,
        image: DataTypes.STRING
    });
    return Collection;
}