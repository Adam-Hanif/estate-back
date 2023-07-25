const BuldingObject = require("../models/BuldingObgect.model")

//создание контроллера для стоительного объекта 
module.exports.buldingObjectController = {
	// добавление объекта 
	addBuldingObject: async (req, res) => {
		try {
			const buldingObject = await BuldingObject.create({
				name: req.body.name,
				final: req.body.final,
				geo: req.body.geo,
				image: req.files.map(item => item.path)
			})
			res.json(buldingObject)
		} catch (error) {
			res.json(error)
		}
	},
	// вывод всех строительных объектов 
	getBuldingObject: async (_ , res) => {
		try {
			const buldingObjects = await BuldingObject.find()
			res.json(buldingObjects)
		} catch (error) {
			res.json(error)
		}
	},
// вывод нужного строительного объекта
	getOneBuldingObject: async (req, res) => {
		try {
			const buldingObject = await BuldingObject.findById(req.params.id)
			res.json(buldingObject)
		} catch (error) {
			res.json(error)
		}
	},
	// удаление строительного объекта 
	deleteBuldingObject : async ( req, res ) =>{
		try {
			await BuldingObject.findByIdAndDelete(req.params.id)
			res.json('Строительный объект удалён')
		} catch (error) {
			res.json(error)
		}
	},
		// изменение строительного объекта 
	upddateBuldingObject: async (req , res )=>{
		try {
			const buldingObject = await BuldingObject.findByIdAndUpdate(req.params.id,{
				name: req.body.name,
				final: req.body.final,
				geo: req.body.geo,
				image: req.files.map(item => item.path)
			})
			res.json(buldingObject)
		} catch (error) {
			res.json(error)
		}
	}
}