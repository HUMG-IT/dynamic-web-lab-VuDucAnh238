const names = require('../models/names');

const submitName = (req, res) => {
    const name = req.body.name; // Lấy tên từ yêu cầu của client
    names.addName(name);        // Thêm tên vào danh sách trong model names
    res.json({ message: `Xin chào, ${name}!`, names: names.getNames() }); // Trả về JSON với lời chào và danh sách tên
};

module.exports = { submitName };