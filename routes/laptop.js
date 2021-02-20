const router = require("express").Router()
const knex = require("../DB/config")

//create laptop order.....
router.post("/laptop/post", async(req,res)=>{
    let{name, description, screen_size,processor_name,total_amount,ram,hard_disk_Technology,os,product_id} = req.body;
    try{
        const product = await knex("laptop")
        .insert({
            "name":name,
            "description":description,
            "screen_size":screen_size,
            "processor_name":processor_name,
            "total_amount":total_amount,
            "ram":ram,
            "hard_disk_Technology":hard_disk_Technology,
            "os": os,
            "product_id": product_id
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
router.get("/laptop/get", async(req,res)=>{
    try{
        const all_data = await knex("laptop")
        res.json(all_data)

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//get data through id.....
router.get("/laptop/get/:id", async(req,res)=>{
    const product_Id = req.params.id
    try{
        const all_data = await knex("laptop")
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
            message: "The Internal Server Error."
        })
    }
})

//update data through id.....
router.put("/laptop/update/:id", async(req,res)=>{
    const product_id = req.params.id
    try{
        const update_data = await knex("laptop")
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
router.delete("/laptop/delete/:id", async(req,res)=>{
    const del_id = req.params.id
    try{
        const del_data = await knex("laptop")
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