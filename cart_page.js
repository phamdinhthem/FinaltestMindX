
// document.addEventListener('DOMContentLoaded', function () {
//     displayCartItems();
// });

// let selectedItems = [];

// function getCart() {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
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
//                     <button class="remove-btn" onclick="removeItem('${item.id}')">×</button>
//                 </div>
//             `;
//             cartItemList.appendChild(listItem);
//             const checkbox = listItem.querySelector(`#select-${item.id}`);
//             if (selectedItems.includes(item.id)) {
//                 checkbox.checked = true; // giữ trạng thái checkbox
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

// function changeQuantity(productId, change) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, item.quantity + change);
//         saveCart(cart);
//         displayCartItems();
//     }
// }

// function updateItemQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, parseInt(newQuantity, 10));
//         saveCart(cart);
//         displayCartItems();
//     }
// }

// function removeItem(productId) {
//     removeFromCart(productId);
//     selectedItems = selectedItems.filter(id => id !== productId);
//     displayCartItems();
// }

// function updateTotalQuantityHeader() {
//     const cart = getCart();
//     const totalQuantityElement = document.querySelector('.totalQuantity');
//     let totalQuantity = 0;
//     cart.forEach(item => {
//         totalQuantity += item.quantity;
//     });
//     if (totalQuantityElement) {
//         totalQuantityElement.textContent = totalQuantity;
//     }
// }

// function getSelectedCartItems() {
//     const cart = getCart();
//     return cart.filter(item => selectedItems.includes(item.id));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.addEventListener('click', function() {
//             const selectedItemsToCheckout = getSelectedCartItems();
//             if (selectedItemsToCheckout.length > 0) {
//                 localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedItemsToCheckout));
//                 window.location.href = 'checkout.html';
//             } else {
//                 alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
//             }
//         });
//     }
//     displayCartItems();
// });


// document.addEventListener('DOMContentLoaded', function () {
//     displayCartItems();
// });

// let selectedItems = [];

// function getCart() {
//     const userId = getLoggedInUserId();
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
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
//              const checkbox = listItem.querySelector(`#select-${item.id}`);
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
//      const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.disabled = selectedItems.length === 0;
//     }
// }

// function getSelectedCartItems() {
//     const cart = getCart();
//     return cart.filter(item => selectedItems.includes(item.id));
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const checkoutButton = document.querySelector('.checkout-button');
//     if (checkoutButton) {
//         checkoutButton.addEventListener('click', function() {
//             const selectedItemsToCheckout = getSelectedCartItems();
//             if (selectedItemsToCheckout.length > 0) {
//                 localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedItemsToCheckout));
//                 window.location.href = 'checkout.html';
//             } else {
//                 alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
//             }
//         });
//     }
//     displayCartItems();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     renderCart();
//     const cartForm = document.getElementById('cart-form'); // Get the form
//     if (cartForm) {
//         cartForm.addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent the default form submission

//             const selectedCheckboxes = document.querySelectorAll('input[name="selected"]:checked');
//             const selectedIds = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

//             if (selectedIds.length === 0) {
//                 alert('Vui lòng chọn sản phẩm để thanh toán.');
//                 return; // Stop if no products are selected
//             }

//             localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedIds));
//             window.location.href = 'checkout.html'; // Go to checkout
//         });
//     }
// });

// function getCart() {
//     const userId = localStorage.getItem('currentUser');
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     const cart = localStorage.getItem(cartKey);
//     return cart ? JSON.parse(cart) : [];
// }

// function saveCart(cart) {
//     const userId = localStorage.getItem('currentUser');
//     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateTotalQuantityHeader(); // Update header cart quantity
// }

// function removeFromCart(productId) {
//     const cart = getCart().filter(item => item.id !== productId);
//     saveCart(cart);
//     renderCart(); // Re-render the cart
// }

// function updateQuantity(productId, newQuantity) {
//     const cart = getCart();
//     const item = cart.find(item => item.id === productId);
//     if (item) {
//         item.quantity = Math.max(1, parseInt(newQuantity, 10));
//         saveCart(cart);
//         renderCart();
//     }
// }

// function renderCart() {
//     const cartItemsContainer = document.getElementById('cart-items-container');
//     const cartItemList = document.getElementById('cart-item-list');
//     const cartTotalElement = document.getElementById('cart-total');
//     const cart = getCart();

//     cartItemList.innerHTML = ''; // Clear the cart list

//     if (cart.length === 0) {
//         cartItemList.innerHTML = '<li class="empty-cart">Giỏ hàng của bạn đang trống.</li>';
//         cartTotalElement.textContent = '0.00';
//     } else {
//         let total = 0;
//         cart.forEach(item => {
//             const listItem = document.createElement('li');
//             listItem.classList.add('cart-item');
//             listItem.innerHTML = `
//                 <div class="cart-item-checkbox">
//                     <input type="checkbox" name="selected" value="${item.id}">
//                 </div>
//                 <div class="cart-item-image">
//                     <img src="${item.image}" alt="${item.name}">
//                 </div>
//                 <div class="cart-item-details">
//                     <h3 class="product-name">${item.name}</h3>
//                     <p class="product-price">$${item.price.toFixed(2)}</p>
//                     <div class="quantity-controls">
//                         <button class="quantity-button decrease" data-product-id="${item.id}">-</button>
//                         <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-product-id="${item.id}">
//                         <button class="quantity-button increase" data-product-id="${item.id}">+</button>
//                     </div>
//                     <button class="remove-button" data-product-id="${item.id}">Xóa</button>
//                 </div>
//                 <div class="cart-item-total">
//                     $${(item.price * item.quantity).toFixed(2)}
//                 </div>
//             `;
//             cartItemList.appendChild(listItem);
//             total += item.price * item.quantity;
//         });
//         cartTotalElement.textContent = total.toFixed(2);

//         // Event listeners for quantity changes and remove buttons
//         const quantityInputs = document.querySelectorAll('.quantity-input');
//         const increaseButtons = document.querySelectorAll('.quantity-button.increase');
//         const decreaseButtons = document.querySelectorAll('.quantity-button.decrease');
//         const removeButtons = document.querySelectorAll('.remove-button');

//         quantityInputs.forEach(input => {
//             input.addEventListener('change', function() {
//                 const productId = this.dataset.productId;
//                 const newQuantity = this.value;
//                 updateQuantity(productId, newQuantity);
//             });
//         });

//         increaseButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 const productId = this.dataset.productId;
//                 const input = this.parentNode.querySelector('.quantity-input');
//                 const newQuantity = parseInt(input.value) + 1;
//                 input.value = newQuantity;
//                 updateQuantity(productId, newQuantity);
//             });
//         });

//         decreaseButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 const productId = this.dataset.productId;
//                 const input = this.parentNode.querySelector('.quantity-input');
//                 const newQuantity = Math.max(1, parseInt(input.value) - 1);
//                 input.value = newQuantity;
//                 updateQuantity(productId, newQuantity);
//             });
//         });

//         removeButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 const productId = this.dataset.productId;
//                 removeFromCart(productId);
//             });
//         });
//     }
// }
document.addEventListener('DOMContentLoaded', function () {
    renderCart();
  });
  
  let selectedItems = [];
  
  function getCart() {
    const userId = getLoggedInUserId();
    const cartKey = userId ? `cart_${userId}` : 'cart_guest';
    const cart = localStorage.getItem(cartKey);
    return cart ? JSON.parse(cart) : [];
  }
  
  function saveCart(cart) {
    const userId = getLoggedInUserId();
    const cartKey = userId ? `cart_${userId}` : 'cart_guest';
    localStorage.setItem(cartKey, JSON.stringify(cart));
    updateAllCartUIs();
  }
  
  function displayCartItems() {
    const cart = getCart();
    const cartItemList = document.getElementById('cart-item-list');
    const cartTotalAmount = document.getElementById('cart-total-amount');
    const checkoutButton = document.querySelector('.checkout-button');
  
    cartItemList.innerHTML = '';
    let total = 0;
  
    if (cart.length === 0) {
      cartItemList.innerHTML = '<li class="empty-cart">Giỏ hàng của bạn đang trống.</li>';
      cartTotalAmount.textContent = '0.00';
      if (checkoutButton) {
        checkoutButton.disabled = true;
      }
    } else {
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
  
        listItem.innerHTML = `
          <div class="item-selection">
            <input type="checkbox" id="select-${item.id}" data-product-id="${item.id}" onchange="toggleSelectItem('${item.id}', this.checked)">
          </div>
          <div class="item-info">
            <img src="${item.image}" alt="${item.name}" width="80">
            <span>${item.name}</span>
          </div>
          <div class="item-details">
            <span class="price">$${item.price.toFixed(2)}</span>
            <div class="quantity-controls">
              <button class="quantity-btn minus" onclick="changeQuantity('${item.id}', -1)">-</button>
              <input type="number" min="1" value="${item.quantity}" onchange="updateItemQuantity('${item.id}', this.value)">
              <button class="quantity-btn plus" onclick="changeQuantity('${item.id}', 1)">+</button>
            </div>
            <span class="item-total">$${itemTotal.toFixed(2)}</span>
            <button class="remove-btn" onclick="removeItem('${item.id}')">×</button>
          </div>
        `;
        cartItemList.appendChild(listItem);
        const checkbox = listItem.querySelector(`#select-${item.id}`);
        if (selectedItems.includes(item.id)) {
          checkbox.checked = true;
        }
      });
      cartTotalAmount.textContent = total.toFixed(2);
      if (checkoutButton) {
        checkoutButton.disabled = selectedItems.length === 0;
      }
    }
    updateTotalQuantityHeader();
  }
  
  function toggleSelectItem(productId, isChecked) {
    if (isChecked) {
      if (!selectedItems.includes(productId)) {
        selectedItems.push(productId);
      }
    } else {
      selectedItems = selectedItems.filter(id => id !== productId);
    }
    console.log('Sản phẩm đã chọn:', selectedItems);
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
      checkoutButton.disabled = selectedItems.length === 0;
    }
  }
  
  function changeQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + change);
      saveCart(cart);
      displayCartItems();
    }
  }
  
  function updateItemQuantity(productId, newQuantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, parseInt(newQuantity, 10));
      saveCart(cart);
      displayCartItems();
    }
  }
  
  function removeItem(productId) {
    removeFromCart(productId);
    selectedItems = selectedItems.filter(id => id !== productId);
    displayCartItems();
  }
  
  function updateTotalQuantityHeader() {
    const cart = getCart();
    const totalQuantityElement = document.querySelector('.totalQuantity');
    let totalQuantity = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
    });
    if (totalQuantityElement) {
      totalQuantityElement.textContent = totalQuantity;
    }
  }
  
  function getSelectedCartItems() {
    const cart = getCart();
    return cart.filter(item => selectedItems.includes(item.id));
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const checkoutButton = document.querySelector('.checkout-button');
    if (checkoutButton) {
      checkoutButton.addEventListener('click', function() {
        const selectedItemsToCheckout = getSelectedCartItems();
        if (selectedItemsToCheckout.length > 0) {
          localStorage.setItem('selectedCheckoutItems', JSON.stringify(selectedItemsToCheckout));
          window.location.href = 'checkout.html';
        } else {
          alert('Vui lòng chọn ít nhất một sản phẩm để thanh toán.');
        }
      });
    }
    displayCartItems();
  });

