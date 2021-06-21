const router = require('express').Router()

const filters = require('../services/cocktailDB').getFilterList


router.get('/type/:type', async (req, res) => {
  const result = await cocktails.getFilterList(req.params.type)
  console.log(result)
  res.send(result)
})

module.exports = router