const formLogin = document.getElementById("formLogin");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
        user => user.email === emailElement.value && user.password === passwordElement.value
    );

//     if (matchedUser) {
//         localStorage.setItem("currentUser", JSON.stringify(matchedUser));
//         alert("Login successful!");
//         window.location.href = "home.html";
//     } else {
//         alert("Invalid email or password.");
//     }
// });
if (matchedUser) {
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    // Lưu loggedInUserId vào localStorage sau khi đăng nhập thành công
    localStorage.setItem("loggedInUserId", matchedUser.id || matchedUser.email);
    localStorage.removeItem("cart_guest");
    // alert("Login successful!");
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password.");
  }
});


// // Lấy nút đăng xuất sau khi DOM được tải
// document.addEventListener('DOMContentLoaded', function() {
//     const logoutButton = document.getElementById('logoutBtn');
//     if (logoutButton) {
//       logoutButton.addEventListener('click', logout);
//     }
//   });
  
//   // Hàm logout (đặt trong login.js hoặc file bạn chứa)
//   function logout() {
//     localStorage.removeItem("currentUser");
//     localStorage.removeItem("loggedInUserId");
//     saveCart([]); // Xóa giỏ hàng khi đăng xuất (tùy chọn)
//     window.location.href = "index.html"; // Chuyển về trang chủ hoặc trang đăng nhập
//   }
// Giả sử bạn có hàm xử lý đăng nhập thành công
// function handleLoginSuccess(userData) {
//     window.loggedInUserId = userData.id; // Lưu ID người dùng
  
//     // Lấy giỏ hàng guest (nếu có)
//     const guestCart = localStorage.getItem('cart_guest');
//     const loggedInCartKey = `cart_${userData.id}`;
//     const loggedInCart = localStorage.getItem(loggedInCartKey);
  
//     let finalCart = [];
  
//     if (guestCart) {
//       finalCart = mergeCarts(JSON.parse(loggedInCart || '[]'), JSON.parse(guestCart));
//       localStorage.removeItem('cart_guest');
//     } else if (loggedInCart) {
//       finalCart = JSON.parse(loggedInCart);
//     }
  
//     localStorage.setItem(loggedInCartKey, JSON.stringify(finalCart));
//     updateCartUI(); // Cập nhật giao diện giỏ hàng
  
//     // Chuyển hướng người dùng hoặc thực hiện các hành động khác sau đăng nhập
//   }
  
//   // Giả sử bạn có hàm xử lý đăng xuất
//   function handleLogout() {
//     window.loggedInUserId = null;
//     localStorage.removeItem(`cart_${getLoggedInUserId()}`); // Xóa giỏ hàng người dùng đã đăng nhập
//     saveCart([]); // Cập nhật giao diện giỏ hàng về trạng thái trống
//     // Hoặc bạn có thể giữ lại giỏ hàng guest (nếu có)
//   }