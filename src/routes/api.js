
 //TODO Module định nghĩa các route của ứng dụng
 //TODO Module này định nghĩa các route liên quan đến:
 //TODO -Lưu tên của người dùng.
 //TODO -Tính và phân loại chỉ số BMI từ dữ liệu người dùng.

const express = require('express');
const router = express.Router();
const { submitName } = require('../controllers/nameController');
const { getBMI } = require('../controllers/bmiController');


//TODO Route cho endpoint `/submit`
//TODO Route này nhận yêu cầu POST từ client với tên người dùng và
//TODO gọi hàm `submitName` từ `nameController` để thêm tên vào danh sách.
//TODO @route POST /api/v1/submit
//TODO @access Public
//TODO @returns {Object}
router.post('/spi/v1/submit', (req, res) => {
    const {name} = req.body;
    const result = submitName(name);
    res.json(result);
});

//TODO Route cho endpoint `/bmi`
//TODO Route này nhận yêu cầu POST từ client với thông tin chiều cao và cân nặng,
//TODO   gọi hàm `getBMI` từ `bmiController` để tính và phân loại chỉ số BMI.
//TODO @route POST /api/v1/bmi
//TODO @access Public
//TODO @returns {Object} JSON - Trả về chỉ số BMI và phân loại.
router.post('/api/v1/bmi', (res, req) => {
    const {height, weight} = req.body;
    const result = getBMI(height, weight);
    res.json(bmiResult);
});

module.exports = router;
