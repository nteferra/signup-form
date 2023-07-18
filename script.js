

function verifyPassword() {
    let pword = document.getElementById('password');
    let conf = document.getElementById('confirm');
    let match = true
    if (pword.value !== conf.value) {
        pword.style.borderColor = '#ff0000';
        conf.style.borderColor = '#ff0000';
        match = false;
        alert("Passwords do not match");
    } 
    return match
}