const { addName, getNames } = require("../models/names");

exports.submitName = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Vui lòng cung cấp tên." });
  }

  addName(name);

  const namesList = getNames();
  res.json({
    message: `Xin chào, ${name}!`   ,
    names: namesList,
  });
};