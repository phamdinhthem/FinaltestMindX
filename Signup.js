
const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("userName");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

formRegister.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!userNameElement.value || !emailElement.value || !passwordElement.value) {
        alert("Please fill in all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra email đã tồn tại chưa
    const existed = users.find(user => user.email === emailElement.value);
    if (existed) {
        alert("Email already registered.");
        return;
    }

    const user = {
        id: Date.now(),
        userName: userNameElement.value,
        email: emailElement.value,
        password: passwordElement.value
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Register successful!");
    window.location.href = "login.html";
});

const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});