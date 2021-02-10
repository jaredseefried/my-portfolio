const router = require("express").Router();
const contactRoutes = require("./contacts");
const mailRoutes = require('./sendMail')
// const postingRoutes = require('./posting')

router.use("/contacts", contactRoutes);
router.use('/sendMail', mailRoutes)
// router.use('/posting', postingRoutes)

module.exports = router;
