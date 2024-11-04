// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');

// Hàm getBMI xử lý yêu cầu từ client
const getBMI = (req, res) => {
    const weight = req.body.weight;
    const height = req.body.height;
    const bmi = calculateBMI(weight, height);
    const classification = classifyBMI(bmi);
// Trả về JSON chứa bmi và classification
    res.json({ bmi, classification });
};
// Xuất hàm getBMI
module.exports = { getBMI };

// Lưu ý: Tham khảo mã trong tệp nameController.js
