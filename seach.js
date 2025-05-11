document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input input");
  
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const keyword = searchInput.value.trim().toLowerCase();
        const products = document.querySelectorAll(".product-card");
  
        products.forEach(product => {
          const title = product.querySelector(".product-title").textContent.toLowerCase();
          if (title.includes(keyword)) {
            product.style.display = "block"; // Hiện nếu khớp
          } else {
            product.style.display = "none"; // Ẩn nếu không khớp
          }
        });
      });
    }
  });


  // active
  // Tự động đánh dấu mục active dựa vào URL
const currentPage = window.location.pathname.split("/").pop();
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

  