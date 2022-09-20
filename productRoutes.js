const express = require('express')
const product = require("./products")
const router = express.Router()
router.get("/filter/?prix", (req, res) => {
    const { prix } = req.query
    console.log(req.query)
})
module.exports = router