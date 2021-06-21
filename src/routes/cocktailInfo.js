const router = require('express').Router()

const cocktails = require('../services/cocktailDB').getCocktail
const sqlCocktails = require('../models/sqlCocktails')

const mapDrinkData = (data, isAPIResponse) => {
  let result
  if (isAPIResponse) {
    result = data.reduce((acc, cur) => {
      let ingredients = []
      for (let i = 1; i <= 15; i++) {
        ingredients.push(`${cur[`strIngredient${i}`]}:${cur[`strMeasure${i}`]}`)
      } 
      acc.push({
        name: cur.strDrink,
        alt: cur.strDrinkAlternate,
        tags: cur.strTags,
        category: cur.strCategory,
        alcoholic: cur.strAlcoholic,
        glass: cur.strGlass,
        instructions: cur.strInstructions,
        instructionsES: cur.strInstructionsES,
        instructionsDE: cur.strInstructionsDE,
        instructionsFR: cur.strInstructionsFR,
        instructionsIT: cur.strInstructionsIT,
        instructionsZH_HANS: cur['strInstructionsZH-HANS'],
        instructionsZH_HANT: cur['strInstructionsZH-HANT'],
        ingredients: ingredients
      })
      return acc
    }, [])
  } else {

    // result.concat()
  }
  return result
}

router.get('/name/:name', async (req, res) => {
  let result = await cocktails.byName(req.params.name)
  let drinkList
  if (result.drinks) {
    mapDrinkData(result, true)
    res.send(result.drinks)
  }
  result = sqlCocktails.getCocktailsLike(req.params.name)
  mapDrinkData(result, true)
  console.log(result)
  res.send(result)
})
router.get('/initial/:initial', async (req, res) => {
  const result = await cocktails.byInitial(req.params.initial)
  console.log(result)
  res.send(result)
})
router.get('/ingredient/:ingredient', async (req, res) => {
  const result = await cocktails.byIngredient(req.params.ingredient)
  console.log(result)
  res.send(result)
})
// router.get('/ingredients/:ingredient', async (req, res) => {
//   const result = await cocktails.byIngredient(req.params.ingredient)
//   console.log(result)
//   res.send(result)
// })
router.get('/alcoholic/:alcoholic', async (req, res) => {
  const result = await cocktails.byAlcoholic(req.params.alcoholic)
  console.log(result)
  res.send(result)
})
router.get('/category/:category', async (req, res) => {
  const result = await cocktails.byCategory(req.params.category)
  console.log(result)
  res.send(result)
})
router.get('/glass/:glass', async (req, res) => {
  const result = await cocktails.byGlass(req.params.glass)
  console.log(result)
  res.send(result)
})
router.get('/details/:id', async (req, res) => {
  const result = await cocktails.detailsById(req.params.id)
  console.log(result)
  res.send(result)
})
router.get('/random', async (req, res) => {
  const result = await cocktails.random()
  console.log(result)
  res.send(result)
})
router.get('/range', async (req, res) => {
  const result = await cocktails.randomSelection()
  console.log(result)
  res.send(result)
})
router.post('/addCocktail', async (req, res) => {
  const coctailName = req.body.name
  let duplicate = await cocktails.byName(coctailName)
  if (duplicate.drinks) {
    res.send('Cocktail already exists')
    return
  }
  duplicate = await sqlCocktails.getCocktailByName(coctailName)
  if (duplicate.length) {
    res.send('Custom cocktail already exists')
    return
  }
  sqlCocktails.insertCocktail(req.body)
  res.send('done')
})
// router.put('/addCocktail', async (req, res) => {
//   console.log(req.body)
//   sqlCocktails.insertCocktail(req.body)
//   res.send('done')
// })
// router.delete('/addCocktail', async (req, res) => {
//   console.log(req.body)
//   sqlCocktails.insertCocktail(req.body)
//   res.send('done')
// })

module.exports = router