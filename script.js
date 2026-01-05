// Register
function register() {
    let username = document.getElementById("regUser").value;
    let password = document.getElementById("regPass").value;

    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    
    localStorage.setItem("password", password);

    alert("Registration successful!");
    window.location.href = "index.html";
}

// Login
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
        localStorage.setItem("loggedIn", true);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

// Check Authentication
function checkAuth() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
}

// Logout
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}