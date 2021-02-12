module.exports = function (sequelize, DataTypes) {
    var Collection = sequelize.define("Collection", {
        title: DataTypes.STRING,
        bg_id: {
            type: DataTypes.INTEGER,
        },
        avg: DataTypes.DECIMAL,
        weighted_avg: DataTypes.DECIMAL,
        weight: DataTypes.DECIMAL,
        rank: DataTypes.INTEGER,
        minPlayers: DataTypes.INTEGER,
        maxPlayers: DataTypes.INTEGER,
        playTime: DataTypes.INTEGER,
        yearPub: DataTypes.INTEGER,
        recPlayers: DataTypes.STRING,
        recBest: DataTypes.INTEGER,
        expansion: DataTypes.STRING,
    });
    return Collection;
}