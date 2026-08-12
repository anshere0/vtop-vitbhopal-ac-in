function login(username, password) {
    if (username === "24BSA10213" && password === "ansh@vtop") {
        localStorage.setItem("vtop_auth", "true");
        window.location.href = "content.html";
        return true;
    }
    return false;
}

function logout() {
    localStorage.removeItem("vtop_auth");
    window.location.href = "login.html";
}

function isAuthenticated() {
    return localStorage.getItem("vtop_auth") === "true";
}

function checkAuth() {
    if (!isAuthenticated()) {
        window.location.href = "login.html";
    }
}
