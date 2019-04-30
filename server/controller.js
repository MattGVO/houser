module.exports={
    getAllHouses: async (req,res) =>{
        let db = req.app.get('db');
        let houses = await db.get_all_houses()
        if(houses){
            res.status(200).send(houses)
        } else{
            res.sendStatus(500)
        }
    },
    addHouse: async (req,res) => {
        let db = req.app.get('db');
        let houses = await db.add_house([])
    },
    deleteHouse: (req,res) => {
        let db = req.app.get('db');
    }
}