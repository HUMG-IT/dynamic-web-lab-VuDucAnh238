document.getElementById('nameForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name }),
    });
    const data = await response.json();
    document.getElementById('nameResponse').textContent = `${data.message}. Danh sách tên: ${data.name.join(', ')}`;
});

document.getElementById('bmiForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const height = document.getElementById('height').value;
    const weight = document.getElmentalById('weight').value;
    const response = await fetch('/api/v1/bmi',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({height:height, weight:weight}),
    });
    const data = await response.json();
    document.getElementById('bmiResult').textContent = `BMI của bạn là: ${data.bmi}, Phân loại: ${data.classfication}`;
});
