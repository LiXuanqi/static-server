let express = require("express");
let router = express.Router();
let path = require("path");

router.use(express.static(path.join(__dirname, '../public/gobang')))

router.get('/', (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, '../public/gobang')});
})

module.exports = router;