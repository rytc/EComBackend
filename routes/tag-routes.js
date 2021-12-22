const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../models')

// The `/api/tags` endpoint

router.get('/tags', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try { 
    let tags = await Tag.findAll({include: [Product]})
    res.json(tags)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }

})

router.get('/tags/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try { 
    let tags = await Tag.findAll({where: {id: req.params.id}, include: [Product]})
    res.json(tags)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/tags', async (req, res) => {
  // create a new tag
  try { 
    let tags = await Tag.create(req.body)
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.put('/tags/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    let up = Tag.update(req.body, {where: {id: req.params.id}})
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/tags/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    let del = Tag.destroy({where: {id: req.params.id}})
    res.sendStatus(200)
  } catch(err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router
