document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const specification = document.getElementById('specification').value;
    const model = document.getElementById('model').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (specification && model && address && phone) {
        // 模拟提交成功
        document.getElementById('orderSuccessMessage').style.display = 'block';

        // 跳转到提交成功页面
        window.location.href = 'success.html'; // 确保路径正确
    } else {
        alert('请填写所有必填字段！');
    }
});