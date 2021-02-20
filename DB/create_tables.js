const knex = require('./config')

knex.schema.hasTable('audio')
    .then(exists=>{
        if (!exists){
            knex.schema.createTable("audio",(table)=>{
                table.increments('id').primary();;
                table.string('name').notNullable()
                table.string('color').notNullable()
                table.string('description').notNullable()
                table.integer('total_amount').notNullable()
                table.integer('product_id').notNullable()
                
            })
            .then(done=>{
                console.log("city table created")
            })
            .catch(err=>{
                console.log('check your schema')
            })
        }else{
            console.log("your table has created..");
        }
    })
    .catch(err=>{
        console.log("There is some error while creating table")
    })


knex.schema.hasTable('phone')
    .then(exists=>{
        if (!exists){
            knex.schema.createTable("phone",(table)=>{
                table.increments('id').primary();;
                table.string('name').notNullable()
                table.string('screen_size').notNullable()
                table.string('ram').notNullable()
                table.string('description').notNullable()
                table.integer('total_amount').notNullable()
                table.string('battery_power').notNullable()

                
            })
            .then(done=>{
                console.log("table created")
            })
            .catch(err=>{
                console.log('check your schema')
            })
        }else{
            console.log("your table  has created....");
        }
    })
    .catch(err=>{
        console.log("There is some error while creating table")
    })



knex.schema.hasTable("laptop")
    .then(exists=>{
        console.log("");
        if (!exists){
            knex.schema.createTable("laptop",(table)=>{
                table.increments('id').primary();;
                table.string('name').notNullable()
                table.string('processor_name').notNullable()
                table.string('description').notNullable()
                table.string('screen_size').notNullable()
                table.integer('total_amount').notNullable()
                table.string('os').notNullable()
                table.string('ram').notNullable()
                table.integer('product_id').notNullable()
                table.string('hard_disk_Technology').notNullable()
   
            })
            .then(done=>{
                console.log(done)
            })
            .catch(err=>{
                console.log('check your schema')
            })
        }else{
            console.log("your table has created.");
        }
    })
    .catch(err=>{
        console.log("There is some error while creating table")
    })



knex.schema.hasTable('shoes')
    .then(exists=>{
        console.log("");
        if (!exists){
            knex.schema.createTable("shoes",(table)=>{
                table.increments('id').primary();;
                table.string('name').notNullable()
                table.string('shoe_width').notNullable()
                table.string('description').notNullable()
                table.string('material').notNullable()
                table.integer('total_amount').notNullable()
                table.string('lifestyle').notNullable()
                table.string('product_type').notNullable()
                table.integer('product_id').notNullable()
            })
            .then(done=>{
                console.log(done)
            })
            .catch(err=>{
                console.log('check your schema')
            })
        }else{
            console.log("your table has created.......");
        }
    })
    .catch(err=>{
        console.log("There is some error while creating table")
    })

module.exports = knex