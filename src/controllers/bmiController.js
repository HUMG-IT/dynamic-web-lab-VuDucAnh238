const {calculateBMI, classifyBMI} = require('../models/bmi');
function getBMI(req, res) {
    const {weight, height} = req.body;
    if (!weight || !height) {
        return res.status(400).json({error: 'Weight and height are required'});
    }

    const bmi = calculateBMI(weight,height);
    const classifyBMI = classifyBMI(bmi);
    res.json({bmi, classifyBMI});
}

module.exports = {getBMI};
