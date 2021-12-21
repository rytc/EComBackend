const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let categories = await Category.findAll({include: [Product]})
  res.json(categories)
})

router.get('/categories/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let category = await Category.findOne({where: {id:req.params.id}, include: [Product]}) 
  res.json(category)
})

router.post('/categories', async (req, res) => {
  try {
    let newCategory = await Category.create(req.body)
    res.sendStatus(200);
  } catch(err) {
    console.log(err)
    res.sendStatus(500);
  }
})

router.put('/categories/:id', async (req, res) => {
  try {
    let update = await Category.update(req.body, {where: {id:req.params.id}})
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/categories/:id', async (req, res) => {
  try {
    let del = await Category.destroy({where: {id: req.params.id}}) 
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router
