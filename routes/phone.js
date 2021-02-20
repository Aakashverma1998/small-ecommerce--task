const router = require("express").Router()
const knex = require("../DB/config")

//create phone order.....
router.post("/phone/post", async(req,res)=>{
    try{
        let{name,description,screen_size,battery_power,total_amount,ram} = req.body;
        const product = await knex("phone")
        .insert({
            "name":name,
            "description":description,
            "screen_size":screen_size,
            "battery_power":battery_power,
            "total_amount":total_amount,
            "ram":ram,
        })
        res.status(201).json(product)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//get all list of data......
router.get("/phone/get", async(req,res)=>{
    try{
        const all_data = await knex("phone")
        res.json(all_data)

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//get data through id.....
router.get("/phone/get/:id", async(req,res)=>{
    const product_Id = req.params.id
    try{
        const all_data = await knex("phone")
        .where("id",product_Id)
        if(!all_data[0]){
            res.status(400).json({
                message : "this id does not exist...! "
            })
        }else{
            res.json(all_data)
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//update data through id.....
router.put("/phone/update/:id", async(req,res)=>{
    const product_id = req.params.id
    try{
        const update_data = await knex("phone")
        .update({
            "name":  req.body.name,
            "ram": req.body.ram,
            "description":req.body.description
        })
        .where("id",product_id)
        res.json(update_data)

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "The Internal Server Error."
        })
    }
})

//delete data by id........
router.delete("/phone/delete/:id", async(req,res)=>{
    const del_id = req.params.id
    try{
        const del_data = await knex("phone")
        .where("id",del_id)
        .del()
        res.json(del_data)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

module.exports = router