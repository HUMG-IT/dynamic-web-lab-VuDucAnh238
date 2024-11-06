const { calculateBMI, classifyBMI } = require("../models/bmi");

exports.getBMI = (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res
      .status(400)
      .json({ error: "Vui lòng cung cấp đầy đủ cân nặng và chiều cao." });
  }

  const bmi = calculateBMI(weight, height);
  const classification = classifyBMI(bmi);

  res.json({
    bmi,
    classification,
  });
};