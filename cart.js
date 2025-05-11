
// function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
// }

// function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
// }

// function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     let cartItems = cart ? JSON.parse(cart) : [];

//     if (filter === 'selected') {
//         const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//         cartItems = cartItems.filter(item => selectedIds.includes(item.id));
//     }
//     return cartItems;
// }

// function saveCart(cart) {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
// }

// function addToCart(productId, productName, price, image) {
//     const cart = getCart();
//     const existingItem = cart.find(item => item.id === productId);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ id: productId, name: productName, price: price, image: image, quantity: 1 });
//     }
//     saveCart(cart);
// }

// function removeFromCart(productId) {
//     const cart = getCart().filter(item => item.id !== productId);
//     saveCart(cart);
// }

// function updateQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, parseInt(newQuantity, 10));
//         saveCart(cart);
//     }
// }

// function mergeCarts(cart1, cart2) {
//     const merged = [...cart1];
//     cart2.forEach(item2 => {
//         const existingItem = merged.find(item1 => item1.id === item2.id);
//         if (existingItem) {
//             existingItem.quantity += item2.quantity;
//         } else {
//             merged.push(item2);
//         }
//     });
//     return merged;
// }

// function clearCart(filter = null) {
//     let cart = getCart();
//     if (filter === 'selected') {
//         const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//         cart = cart.filter(item => !selectedIds.includes(item.id));
//         localStorage.removeItem('selectedCheckoutItems'); // Xóa key này sau khi đã dùng
//     }
//     saveCart(cart);
// }

// // Hàm cập nhật UI chung
// let updateAllCartUIs = () => {
//     // Cập nhật số lượng trên biểu tượng giỏ hàng
//     const totalQuantityElement = document.querySelector('.totalQuantity');
//     if (totalQuantityElement) {
//         const cart = getCart();
//         let totalQuantity = 0;
//         cart.forEach(item => {
//             totalQuantity += item.quantity;
//         });
//         totalQuantityElement.textContent = totalQuantity;
//     }

//     // Cập nhật trang giỏ hàng (nếu đang ở trang đó)
//     if (window.location.pathname.includes('cart.html')) {
//         displayCartItems();
//     }
//     // Cập nhật trang checkout (nếu đang ở trang checkout)
//     if (window.location.pathname.includes('checkout.html')) {
//         displayOrderSummary();
//     }
// };

// document.addEventListener('DOMContentLoaded', function () {
//     displayCartItems();
// });

// let selectedItems = [];

// function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
// }

// function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
// }

// function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
// }

// function displayCartItems() {
//     const cart = getCart();
//     const cartItemList = document.getElementById('cart-item-list');
//     const cartTotalAmount = document.getElementById('cart-total-amount');
//     const checkoutButton = document.querySelector('.checkout-button');

//     cartItemList.innerHTML = '';
//     let total = 0;

//     if (cart.length === 0) {
//         cartItemList.innerHTML = '<li class="empty-cart">Giỏ hàng của bạn đang trống.</li>';
//         cartTotalAmount.textContent = '0.00';
//         if (checkoutButton) {
//             checkoutButton.disabled = true;
//         }
//     } else {
//         cart.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.className = 'cart-item';
//             const itemTotal = item.price * item.quantity;
//             total += itemTotal;

//             listItem.innerHTML = `
//                 <div class="item-selection">
//                     <input type="checkbox" id="select-${item.id}" data-product-id="${item.id}" onchange="toggleSelectItem('${item.id}', this.checked)">
//                 </div>
//                 <div class="item-info">
//                     <img src="${item.image}" alt="${item.name}" width="80">
//                     <span>${item.name}</span>
//                 </div>
//                 <div class="item-details">
//                     <span class="price">$${item.price.toFixed(2)}</span>
//                     <div class="quantity-controls">
//                         <button class="quantity-btn minus" onclick="changeQuantity('${item.id}', -1)">-</button>
//                         <input type="number" min="1" value="${item.quantity}" onchange="updateItemQuantity('${item.id}', this.value)">
//                         <button class="quantity-btn plus" onclick="changeQuantity('${item.id}', 1)">+</button>
//                     </div>
//                     <span class="item-total">$${itemTotal.toFixed(2)}</span>
//                     <button class="remove-btn" onclick="removeItem('${item.id}')">×</span>
//                 </div>
//             `;
//             cartItemList.appendChild(listItem);
//             const checkbox = listItem.querySelector(`#select-${item.id}`);
//             if (selectedItems.includes(item.id)) {
//                 checkbox.checked = true;
//             }
//         });
//         cartTotalAmount.textContent = total.toFixed(2);
//         if (checkoutButton) {
//             checkoutButton.disabled = selectedItems.length === 0;
//         }
//     }
//     updateTotalQuantityHeader();
// }

// function toggleSelectItem(productId, isChecked) {
//     if (isChecked) {
//         if (!selectedItems.includes(productId)) {
//             selectedItems.push(productId);
//         }
//     } else {
//         selectedItems = selectedItems.filter(id => id !== productId);
//     }
//     console.log('Sản phẩm đã chọn:', selectedItems);
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.disabled = selectedItems.length === 0;
//     }
// }

// function getSelectedCartItems() {
//     return selectedItems; // Trả về mảng ID các sản phẩm đã chọn
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.addEventListener('click', function() {
//             const selectedItemIds = getSelectedCartItems(); // Lấy mảng ID
//             if (selectedItemIds.length > 0) {
//                 localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedItemIds)); // Lưu mảng ID
//                 window.location.href = 'checkout.html';
//             } else {
//                 alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
//             }
//         });
//     }
//     displayCartItems();
// });

// function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
// }

// function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
// }

// function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
// }

// function addToCart(productId, productName, price, image) {
//     const cart = getCart();
//     const existingItem = cart.find(item => item.id === productId);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ id: productId, name: productName, price: price, image: image, quantity: 1 });
//     }
//     saveCart(cart);
// }

// function removeFromCart(productId) {
//     const cart = getCart().filter(item => item.id !== productId);
//     saveCart(cart);
// }

// function updateQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, parseInt(newQuantity, 10));
//         saveCart(cart);
//     }
// }

// function mergeCarts(cart1, cart2) {
//     const merged = [...cart1];
//     cart2.forEach(item2 => {
//         const existingItem = merged.find(item1 => item1.id === item2.id);
//         if (existingItem) {
//             existingItem.quantity += item2.quantity;
//         } else {
//             merged.push(item2);
//         }
//     });
//     return merged;
// }

// function clearCart(filter = null) {
//     let cart = getCart();
//     if (filter === 'selected') {
//         const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//         cart = cart.filter(item => !selectedIds.includes(item.id));
//         localStorage.removeItem('selectedCheckoutItems'); // Xóa key này sau khi đã dùng
//     }
//     saveCart(cart);
// }

// // Hàm cập nhật UI chung
// let updateAllCartUIs = () => {
//     // Cập nhật số lượng trên biểu tượng giỏ hàng
//     const totalQuantityElement = document.querySelector('.totalQuantity');
//     if (totalQuantityElement) {
//         const cart = getCart();
//         let totalQuantity = 0;
//         cart.forEach(item => {
//             totalQuantity += item.quantity;
//         });
//         totalQuantityElement.textContent = totalQuantity;
//     }

//     // Cập nhật trang giỏ hàng (nếu đang ở trang đó)
//     if (window.location.pathname.includes('cart.html')) {
//         displayCartItems();
//     }
//     // Cập nhật trang checkout (nếu đang ở trang checkout)
//     if (window.location.pathname.includes('checkout.html')) {
//         displayOrderSummary();
//     }
// };

// document.addEventListener('DOMContentLoaded', function () {
//     displayCartItems();
// });

// let selectedItems = [];

// function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
// }

// function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
// }

// function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
// }

// function displayCartItems() {
//     const cart = getCart();
//     const cartItemList = document.getElementById('cart-item-list');
//     const cartTotalAmount = document.getElementById('cart-total-amount');
//     const checkoutButton = document.querySelector('.checkout-button');

//     cartItemList.innerHTML = '';
//     let total = 0;

//     if (cart.length === 0) {
//         cartItemList.innerHTML = '<li class="empty-cart">Giỏ hàng của bạn đang trống.</li>';
//         cartTotalAmount.textContent = '0.00';
//         if (checkoutButton) {
//             checkoutButton.disabled = true;
//         }
//     } else {
//         cart.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.className = 'cart-item';
//             const itemTotal = item.price * item.quantity;
//             total += itemTotal;

//             listItem.innerHTML = `
//                 <div class="item-selection">
//                     <input type="checkbox" id="select-${item.id}" data-product-id="${item.id}" onchange="toggleSelectItem('${item.id}', this.checked)">
//                 </div>
//                 <div class="item-info">
//                     <img src="${item.image}" alt="${item.name}" width="80">
//                     <span>${item.name}</span>
//                 </div>
//                 <div class="item-details">
//                     <span class="price">$${item.price.toFixed(2)}</span>
//                     <div class="quantity-controls">
//                         <button class="quantity-btn minus" onclick="changeQuantity('${item.id}', -1)">-</button>
//                         <input type="number" min="1" value="${item.quantity}" onchange="updateItemQuantity('${item.id}', this.value)">
//                         <button class="quantity-btn plus" onclick="changeQuantity('${item.id}', 1)">+</button>
//                     </div>
//                     <span class="item-total">$${itemTotal.toFixed(2)}</span>
//                     <button class="remove-btn" onclick="removeItem('${item.id}')">×</span>
//                 </div>
//             `;
//             cartItemList.appendChild(listItem);
//             const checkbox = listItem.querySelector(`#select-${item.id}`);
//             if (selectedItems.includes(item.id)) {
//                 checkbox.checked = true;
//             }
//         });
//         cartTotalAmount.textContent = total.toFixed(2);
//         if (checkoutButton) {
//             checkoutButton.disabled = selectedItems.length === 0;
//         }
//     }
//     updateTotalQuantityHeader();
// }

// function toggleSelectItem(productId, isChecked) {
//     if (isChecked) {
//         if (!selectedItems.includes(productId)) {
//             selectedItems.push(productId);
//         }
//     } else {
//         selectedItems = selectedItems.filter(id => id !== productId);
//     }
//     console.log('Sản phẩm đã chọn:', selectedItems);
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.disabled = selectedItems.length === 0;
//     }
// }

// function getSelectedCartItems() {
//     return selectedItems; // Trả về mảng ID các sản phẩm đã chọn
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.addEventListener('click', function() {
//             const selectedItemIds = getSelectedCartItems(); // Lấy mảng ID
//             if (selectedItemIds.length > 0) {
//                 localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedItemIds)); // Lưu mảng ID
//                 window.location.href = 'checkout.html';
//             } else {
//                 alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
//             }
//         });
//     }
//     displayCartItems();
// });

// function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
// }

// function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
// }

// function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
// }

// function addToCart(productId, productName, price, image) {
//     const cart = getCart();
//     const existingItem = cart.find(item => item.id === productId);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({ id: productId, name: productName, price: price, image: image, quantity: 1 });
//     }
//     saveCart(cart);
// }

// function removeFromCart(productId) {
//     const cart = getCart().filter(item => item.id !== productId);
//     saveCart(cart);
// }

// function updateQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, parseInt(newQuantity, 10));
//         saveCart(cart);
//     }
// }

// function mergeCarts(cart1, cart2) {
//     const merged = [...cart1];
//     cart2.forEach(item2 => {
//         const existingItem = merged.find(item1 => item1.id === item2.id);
//         if (existingItem) {
//             existingItem.quantity += item2.quantity;
//         } else {
//             merged.push(item2);
//         }
//     });
//     return merged;
// }

// function clearCart(filter = null) {
//     let cart = getCart();
//     if (filter === 'selected') {
//         const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//         cart = cart.filter(item => !selectedIds.includes(item.id));
//         localStorage.removeItem('selectedCheckoutItems'); // Xóa key này sau khi đã dùng
//     }
//     saveCart(cart);
// }

// // Hàm cập nhật UI chung
// let updateAllCartUIs = () => {
//     // Cập nhật số lượng trên biểu tượng giỏ hàng
//     const totalQuantityElement = document.querySelector('.totalQuantity');
//     if (totalQuantityElement) {
//         const cart = getCart();
//         let totalQuantity = 0;
//         cart.forEach(item => {
//             totalQuantity += item.quantity;
//         });
//         totalQuantityElement.textContent = totalQuantity;
//     }

//     // Cập nhật trang giỏ hàng (nếu đang ở trang đó)
//     if (window.location.pathname.includes('cart.html')) {
//         displayCartItems();
//     }
//     // Cập nhật trang checkout (nếu đang ở trang checkout)
//     if (window.location.pathname.includes('checkout.html')) {
//         displayOrderSummary();
//     }
// };

function getLoggedInUserId() {
    return localStorage.getItem('loggedInUserId') || null;
  }
  
  function getCartKey() {
    const userId = getLoggedInUserId();
    return userId ? `cart_${userId}` : 'cart_guest';
  }
  
  function getCart(filter = null) {
    const cartKey = getCartKey();
    const cart = localStorage.getItem(cartKey);
    let cartItems = cart ? JSON.parse(cart) : [];
  
    if (filter === 'selected') {
      const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
      cartItems = cartItems.filter(item => selectedIds.includes(item.id));
    }
    return cartItems;
  }
  
  function saveCart(cart) {
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(cart));
    updateAllCartUIs(); // Gọi hàm này mỗi khi giỏ hàng thay đổi
  }
  
  function addToCart(productId, productName, price, image) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id: productId, name: productName, price: price, image: image, quantity: 1 });
    }
    saveCart(cart);
  }
  
  function removeFromCart(productId) {
    const cart = getCart().filter(item => item.id !== productId);
    saveCart(cart);
  }
  
  function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(newQuantity, 10));
      saveCart(cart);
    }
  }
  
  function mergeCarts(cart1, cart2) {
    const merged = [...cart1];
    cart2.forEach(item2 => {
      const existingItem = merged.find(item1 => item1.id === item2.id);
      if (existingItem) {
        existingItem.quantity += item2.quantity;
      } else {
        merged.push(item2);
      }
    });
    return merged;
  }
  
  // Hàm cập nhật UI chung (Ví dụ - bạn cần điều chỉnh cho phù hợp với ứng dụng của bạn)
  let updateAllCartUIs = () => {
    // Ví dụ: Cập nhật hiển thị giỏ hàng trên trang chủ
    const cartElement = document.getElementById('cart-items'); // ID này có thể khác
    if (cartElement) {
      const cart = getCart();
      let total = 0;
      let cartContent = '';
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartContent += `<li>${item.name} (${item.quantity}) - $${itemTotal.toFixed(2)}</li>`;
      });
      cartElement.innerHTML = cartContent;
      const totalElement = document.getElementById('cart-total');
      if (totalElement) {
        totalElement.textContent = total.toFixed(2);
      }
    }
    displayOrderSummary(); // Cập nhật lại order summary trên trang checkout
  };
