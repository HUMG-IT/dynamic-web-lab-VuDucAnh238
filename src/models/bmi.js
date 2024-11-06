exports.calculateBMI = (weight, height) => {

    const bmi = weight / (height / 100) ** 2;
    return parseFloat(bmi.toFixed(2));
  };

  exports.classifyBMI = (bmi) => {
    if (bmi < 18.5) {
      return "Gầy";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Bình thường";
    } else if (bmi >= 25 && bmi <= 29.9) {
      return "Thừa cân";
    } else {
      return "Béo phì";
    }
  };