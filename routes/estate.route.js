const Router = require('express')
const {estateController} = require('../controllers/estate.controller')
const multerMW = require('../middleware/image.middleware')

const router = Router();

router.get('/estates', estateController.getEstates);
router.get('/estates/:id', estateController.getEstatesById);
router.post('/estates', multerMW.array('image',5), estateController.postEstate);
router.patch('/estates/edit/:id', estateController.patchEstate);
router.delete('/estateDel/:id',estateController.deleteEstate)

module.exports = router