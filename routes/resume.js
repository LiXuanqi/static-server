let express = require("express");
let router = express.Router();
let path = require("path");

router.use(express.static(path.join(__dirname, '../public/resume')))

router.get('/', (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, '../public/resume')});
})

module.exports = router;