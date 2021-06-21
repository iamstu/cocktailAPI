const querystring = require('querystring')
const axios = require('axios')

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1'
axios.defaults.baseURL = cocktailUrl;
axios.defaults.headers.common['Authorization'] = 'Bearer 1';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const cocktails = {
  getCocktail: {
    byName: (name) => {
      // /search.php?s=margarita   Tommy's Margarita
      return axios({
        method: 'get',
        url: `/search.php?s=${name}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byInitial: (initial) => {
      // /search.php?f=a
      return axios({
        method: 'get',
        url: `/search.php?f=${initial}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byIngredient: (ingredient) => {
      // /filter.php?i=Gin
      // /filter.php?i=Vodka
      return axios({
        method: 'get',
        url: `/filter.php?i=${ingredient}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byAlcoholic: (isAlcoholic) => {
      // /filter.php?a=Alcoholic
      // /filter.php?a=Non_Alcoholic
      return axios({
        method: 'get',
        url: `/filter.php?a=${isAlcoholic}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byCategory: (category) => {
      // /filter.php?c=Ordinary_Drink
      // /filter.php?c=Cocktail
      return axios({
        method: 'get',
        url: `/filter.php?c=${category}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byGlass: (glass) => {
      // /filter.php?g=Cocktail_glass
      // /filter.php?g=Champagne_flute
      return axios({
        method: 'get',
        url: `/filter.php?g=${glass}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    detailsById: (cocktailId) => {
      // /lookup.php?i=11007
      return axios({
        method: 'get',
        url: `/lookup.php?i=${cocktailId}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    random: () => {
      // /random.php
      return axios({
        method: 'get',
        url: `/random.php`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    randomSelection: () => {
      // /randomselection.php
      return axios({
        method: 'get',
        url: `/randomselection.php`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
  },
  getIngredient: {
    byName: (ingredient) => {
      // /search.php?i=vodka
      return axios({
        method: 'get',
        url: `/search.php?i=${ingredient}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    },
    byId: (ingredientId) => {
      // /lookup.php?iid=552
      return axios({
        method: 'get',
        url: `/lookup.php?iid=${ingredientId}`,
        // responseType: 'json'
      }).then((response) => {
        return response.data
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  getFilterList : (filterType) => {
    const filterTypeMap = {
      category: 'c',
      glass: 'g',
      ingredient: 'i',
      alcoholic: 'a'
    }
    // /list.php?c=list category
    // /list.php?g=list glass
    // /list.php?i=list ingredient
    // /list.php?a=list alcoholic
    return axios({
      method: 'get',
      url: `/list.php?${filterTypeMap[filterType]}=list`,
      // responseType: 'json'
    }).then((response) => {
      return response.data
    }).catch((err) => {
      console.log(err)
    });
  }
}

module.exports = cocktails

// Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)

// List Popular cocktails (only available to $2+ Patreon supporters)
// /popular.php

// List most latest cocktails (only available to $2+ Patreon supporters)
// /latest.php

// Filter by multi-ingredient (only available to $2+ Patreon supporters)
// /filter.php?i=Dry_Vermouth,Gin,Anis

//  Images
// Drink thumbnails
// Add /preview to the end of the cocktail image URL
// /images/media/drink/vrwquq1478252802.jpg/preview (100x100 pixels)


// Ingredient Thumbnails
// www.thecocktaildb.com/images/ingredients/gin-Small.png
// (100x100 pixels)
// www.thecocktaildb.com/images/ingredients/gin-Medium.png
// (350x350 pixels)
// www.thecocktaildb.com/images/ingredients/gin.png
// (700x700 pixels)