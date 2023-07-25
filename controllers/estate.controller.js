const Estate = require("../models/Estate.model");
module.exports.estateController = {
  getEstates: async (req, res) => {
    try {
      const estates = await Estate.find({});
      res.json(estates);
    } catch (error) {
      res.json(error + "Ошибка в получении всей продукции");
    }
  },

  getEstatesById: async (req, res) => {
    const { id } = req.params;
    try {
      const estate = await Estate.findById(id);
      res.json(estate);
    } catch (error) {
      res.json(error + "Ошибка в получении по ID");
    }
  },

  postEstate: async (req, res) => {
    // console.log(req);
    try {
      const estate = await Estate.create({
        image:req.files.path,
        address:req.body.address,
        rooms: req.body.rooms,
        area: req.body.area,
        price:req.body.type,
        type: req.body.type,
        ready: req.body.ready,
        rented:req.body.rented,
        desc:req.body.desc
      })
      res.json(estate);
    } catch (error) {
      res.json(error.message)
    }
  },

  patchEstate: async(req, res)=>{
    try {
        const estate = await Estate.findByIdAndUpdate(
            req.params.id,
            {
                image:req.files.path,
                address:req.body.address,
                rooms: req.body.rooms,
                area: req.body.area,
                price:req.body.type,
                type: req.body.type,
                ready: req.body.ready,
                rented:req.body.rented,
                desc:req.body.desc

            },
          {new:true}
        )
        res.json(estate)
    } catch (error) {
        res.json(error)
    }
  },

  deleteEstate: async (req, res)=>{
    const {id}= req.params
    try {
        Estate.findByIdAndDelete(id)
        res.json('Удалено')
    } catch (error) {
        res.json(error)
    }
  }
};
