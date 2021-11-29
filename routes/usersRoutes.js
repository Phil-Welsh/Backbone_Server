// imports
const router = require("express").Router();
const ctrl = require("../controllers");

const authRequired = require("../middleware/authRequired");

// routes
router.post("/register", ctrl.users.register);
router.post("/login", ctrl.users.login);
router.get("/profile", authRequired, ctrl.users.profile);

// exports
module.exports = router;
