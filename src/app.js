let $ = document
const loginBtn = $.querySelector('#loginBtn')
const email = $.querySelector('#floating_email')
const password = $.querySelector('#floating_password')
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
const formValidation = () => {
    if (!email.value || !password.value) {
        Toast.fire({
            icon: 'warning',
            title: 'Please fill in the fields correctly'
        })
    } else if (email.value === "admin@gmail.com" || password.value === "123") {  /// user Test
        Toast.fire({
            icon: 'success',
            title: 'Welcome to Panel'
        })
    } else {
        Toast.fire({
            icon: 'error',
            title: 'User not found'
        })
    }
    password.value = ""
    email.value = ""
}

loginBtn.addEventListener("click", formValidation)
password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        formValidation()
    }
})
email.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        formValidation()
    }
})

setTimeout(() => {
    alert("User Test : \n  Email : admin@gmail.com \n  Password : 123")
}, 3000);