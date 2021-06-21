const router = require('express').Router()

const ingredients = require('../services/cocktailDB').getIngredient

router.get('/ingredient/:ingredient', async (req, res) => {
  const result = await ingredients.byName(req.params.ingredient)
  console.log(result)
  res.send(result)
})
router.get('/id/:id', async (req, res) => {
  const result = await ingredients.byId(req.params.id)
  console.log(result)
  res.send(result)
})

module.exports = router