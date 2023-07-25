const { Router } = require('express')
const { buldingObjectController } = require('../controllers/buldingObject.controller')
const multerMiddleware = require('../middleware/multer.middleware.js')

const router = Router()

// Роутинг для CRUD операций над строительными объектами
// Использование Middleware для добавления картинок 
// Middleware создан на Multer

router.post('/buldingObject', multerMiddleware.array('image', 5 ), buldingObjectController.addBuldingObject)
router.get('/buldingObject', buldingObjectController.getBuldingObject)
router.get('/buldingObject/:id', buldingObjectController.getOneBuldingObject)
router.patch('/buldingObject/:id', multerMiddleware.array('image', 5), buldingObjectController.upddateBuldingObject)
router.delete('/buldingObject/:id', buldingObjectController.deleteBuldingObject)

module.exports = router
