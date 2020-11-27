
const restbylocation= require('../models/restbylocation.json');

 exports.getrestbylocation = (req, res) => {
    const city = req.params.city;
    const response = restbylocation.filter(item => item.city == city);
    res.json(response);

}
const locations = require('../models/locations.json');

exports.getlocations = (req,res)=>{
    res.status(200).json({message: 'location has been fatched succesfully', location:locations})

}
