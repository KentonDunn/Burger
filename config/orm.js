var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    insertOne: function (tableName, burgerCol, devouredCol, valOfCol) {
        var queryString = "INSERT INTO ?? (??,??) VALUES (?, FALSE)";
        connection.query(queryString, [tableName, burgerCol, devouredCol, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (valOfCol) {
        var queryString = "Update burgers SET devoured = true WHERE ??, devoured = false";
        connection.query(queryString, valOfCol)
    }
};

module.exports = orm;