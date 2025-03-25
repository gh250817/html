function submitOrder() {
    const specification = document.getElementById('specification').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (specification && quantity && address && phone) {
        document.getElementById('orderSuccessMessage').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 1000);
    } else {
        alert('请填写所有必填字段！');
    }
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (username && password) {
        document.getElementById('loginSuccessMessage').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'cod.html';
        }, 1000);
    } else {
        alert('请输入用户名和密码！');
    }
}

function resetLoginForm() {
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginSuccessMessage').style.display = 'none';
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (username && password && confirmPassword) {
        if (password === confirmPassword) {
            document.getElementById('registerSuccessMessage').style.display = 'block';
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1000);
        } else {
            alert('两次输入的密码不一致！');
        }
    } else {
        alert('请填写所有字段！');
    }
}

function resetRegisterForm() {
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    document.getElementById('registerSuccessMessage').style.display = 'none';
}