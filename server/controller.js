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
        console.log(req.body)
        let {propertyName, address,city,state,zip,img,mortgage,rent} = req.body
        let db = req.app.get('db');
        let houses = await db.add_house([propertyName, address,city,state,zip,img,mortgage,rent])
        res.sendStatus(200)
    },
    deleteHouse: async (req,res) => {
        let {id} = req.params
        console.log(id)
        let db = req.app.get('db');
        let houses = await db.delete_house([id])
        if(houses){
            res.status(200).send(houses)
        }else{
            res.sendStatus(500)
        }
    }
}