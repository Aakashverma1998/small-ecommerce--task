const router = require("express").Router()
const knex = require("../DB/config")

//create  shoes  order.....
router.post("/shoes/post", async(req,res)=>{
    try{
        let{name,description,shoe_width,material,total_amount,lifestyle,product_type,product_id} = req.body;
        const product = await knex("shoes")
        .insert({
            "name":name,
            "description":description,
            "shoe_width":shoe_width,
            "material":material,
            "total_amount":total_amount,
            "lifestyle":lifestyle,
            "product_type": product_type,
            "product_id": product_id
        })
        res.send(product)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message:"The Internal Server Error."
        })
    }
})

//get all list of data......
router.get("/shoes/get", async(req,res)=>{
    try{
        const all_data = await knex("shoes")
        res.json(all_data)

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "The Internal Server Error."
        })
    }
})

//get data through id.....
router.get("/shoes/get/:id", async(req,res)=>{
    const product_Id = req.params.id
    try{
        const all_data = await knex("shoes")
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
router.put("/shoes/update/:id", async(req,res)=>{
    const product_id = req.params.id
    try{
        const update_data = await knex("shoes")
        .update({
            "name":  req.body.name,
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
router.delete("/shoes/delete/:id", async(req,res)=>{
    const del_id = req.params.id
    try{
        const del_data = await knex("shoes")
        .where("id",del_id)
        .del()
        if(!del_data[0]){
            res.status(400).json({
                message: "this product id does't exists...!"
            })
        }
        res.json(del_data)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "The Internal Server Error."
        })
    }
})

module.exports = router