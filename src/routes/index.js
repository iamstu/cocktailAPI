const router = require('express').Router()

const cocktailInfo = require('./cocktailInfo')
const ingredientInfo = require('./ingredientInfo')
const filters = require('./filters')

router.use('/cocktail', cocktailInfo)
router.use('/ingrdient', ingredientInfo)
router.use('/filter', filters)

module.exports = router