document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('两次密码不相同，请改正！');
        return;
    }

    fetch('register.jsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&email=${email}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            alert('注册成功！');
            window.location.href = 'login.html';
        } else {
            alert('注册失败，请重试！');
        }
    });
});