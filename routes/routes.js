const Model = require('../model/model');

const express = require('express');

const router = express.Router()


//These methods fulfill the post, get, patch and delete requirements of REST APIs
//Req is the recieving requests from our client
//Res is the response to our client
//Client is our front end user

//Post Method
// router.post('/post', (req, res) => {
//     res.send('Post API')
// })

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

// post using the model
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        quantity: req.body.quantity
    })

    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router;