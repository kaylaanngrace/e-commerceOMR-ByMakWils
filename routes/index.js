const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

router.use('/apiRoutes', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;