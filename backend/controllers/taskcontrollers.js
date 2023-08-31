const db = require('../models/db')

const getAllData = async (req, res) => {
    try {
        const [result] = await db.query("select * from tabledatas");
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json("error", err)
    }
}

module.exports = {getAllData}