document
  .getElementById("nameForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;

    try {
      const response = await fetch("/api/v1/submit", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      document.getElementById("nameResponse").textContent = `${
        data.message
      }. Danh sách tên: ${data.names.join(", ")}`;
    } catch (error) {
      document.getElementById(
        "nameResponse"
      ).textContent = 'Lỗi: ${error.message}';
    }
  });

document
  .getElementById("bmiForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();


    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    try {
      const response = await fetch("/api/v1/bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ height, weight }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }


      const data = await response.json();

      document.getElementById(
        "bmiResult"
      ).textContent = `BMI của bạn là: ${data.bmi}, Phân loại: ${data.classification}`;
    } catch (error) {
      document.getElementById(
        "bmiResult"
      ).textContent = 'Lỗi: ${error.message}';
    }
  });