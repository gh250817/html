function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        // 模拟登录成功
        document.getElementById('loginSuccessMessage').style.display = 'block';

        // 跳转到货到付款页面
        window.location.href = 'cod.html'; // 确保路径正确
    } else {
        alert('请输入用户名和密码！');
    }
}

function resetLoginForm() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginSuccessMessage').style.display = 'none';
}