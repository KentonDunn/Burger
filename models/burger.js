var orm = require("./config/orm.js")

orm.selectAll("burgers");

orm.insertOne("burgers", "burger_name", "devoured", "newBurgerName")

orm.updateOne("burger_name")