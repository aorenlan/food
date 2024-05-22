document.addEventListener('DOMContentLoaded', function() {
    // 示例：提交订单信息
    const form = document.getElementById('orderForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = {
                productionDate: document.getElementById('productionDate').value,
                ingredients: document.getElementById('ingredients').value,
                videoUrl: document.getElementById('videoUrl').value
            };
            fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Order created:', data);
                alert('Order created with ID: ' + data.id);
            })
            .catch(error => console.error('Error:', error));
        });
    }
});
