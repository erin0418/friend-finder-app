var friends = require("../data/friends.js");


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        friendsResponse = req.body;
        tableData.push(friendsResponse);
        res.json(true);
    });
}

