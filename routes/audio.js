const router = require("express").Router()
const knex = require("../DB/config")

//create audio product order.....
router.post("/audio/post", async(req,res)=>{
    let{name,product_id,color,total_amount,description} = req.body;
    try{
        const product = await knex("audio")
        .insert({
            "name":name,
            "product_id":product_id,
            "description":description,
            "color":color,
            "total_amount":total_amount,
        })
        res.status(201).json("audio")
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "The Internal Server Error."
        })
    }
})

//get all list of data......
router.get("/audio/get", async(req,res)=>{
    try{
        const all_data = await knex("audio")
        res.json(all_data)

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//get data through id.....
router.get("/audio/get/:id", async(req,res)=>{
    const product_Id = req.params.id
    try{
        const all_data = await knex("audio")
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
router.put("/audio/update/:id", async(req,res)=>{
    const product_id = req.params.id
    try{
        const update_data = await knex("audio")
        .update({
            "name":  req.body.name,
            "color": req.body.color,
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
router.delete("/audio/delete/:id", async(req,res)=>{
    const del_id = req.params.id
    try{
        const del_data = await knex("audio")
        .where("id",del_id)
        .del()
        res.json(del_data)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "The Internal Server Error."
        })
    }
})

module.exports = router