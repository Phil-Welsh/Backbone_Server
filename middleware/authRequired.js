// jwt middle ware for verification
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    if (req.headers["authorization"]) {
        const token = req.headers["authorization"];
        const payload = await jwt.verify(token, "supersecretwaffels");
        req.currentUser = payload._id;
    } else {
        res.sendStatus(403);
    }
};
