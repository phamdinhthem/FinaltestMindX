// // // // document.addEventListener('DOMContentLoaded', function() {
// // // //     displayOrderSummary();

// // // //     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
// // // //     const transferRadio = document.getElementById('transfer');
// // // //     const transferInfo = document.getElementById('transfer-info');

// // // //     if (transferRadio && transferInfo) {
// // // //         transferRadio.addEventListener('change', function() {
// // // //             transferInfo.style.display = this.checked ? 'block' : 'none';
// // // //         });
// // // //     }
// // // // });

// // // // function getCartItems() {
// // // //     const selectedItems = localStorage.getItem('selectedCheckoutItems');
// // // //     return selectedItems ? JSON.parse(selectedItems) : [];
// // // //     // return getCart(); // Sử dụng hàm getCart() từ cart.js
// // // // }

// // // // function getCart() {
// // // //     const userId = getLoggedInUserId();
// // // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // // //     const cart = localStorage.getItem(cartKey);
// // // //     return cart ? JSON.parse(cart) : [];
// // // // }

// // // // function saveCart(cart) {
// // // //     const userId = getLoggedInUserId();
// // // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // // //     localStorage.setItem(cartKey, JSON.stringify(cart));
// // // //     // Lưu ý: Chúng ta có thể không cần gọi updateAllCartUIs() ở đây,
// // // //     // vì trang chủ có thể không hiển thị giỏ hàng ngay lập tức.
// // // //     // Việc cập nhật UI giỏ hàng sẽ diễn ra khi người dùng truy cập trang giỏ hàng.
// // // // }
// // // // function displayOrderSummary() {
// // // //     const cartItems = getCartItems();
// // // //     const orderItemsElement = document.getElementById('order-items');
// // // //     const orderTotalElement = document.getElementById('order-total');
// // // //     let total = 0;

// // // //     orderItemsElement.innerHTML = '';

// // // //     cartItems.forEach(item => {
// // // //         const listItem = document.createElement('li');
// // // //         const itemTotal = item.price * item.quantity;
// // // //         total += itemTotal;
// // // //         listItem.innerHTML = `
// // // //             <span>${item.name} (${item.quantity})</span>
// // // //             <span>$${itemTotal.toFixed(2)}</span>
// // // //         `;
// // // //         orderItemsElement.appendChild(listItem);
// // // //     });

// // // //     orderTotalElement.textContent = total.toFixed(2);
// // // // }

// // // // function placeOrder() {
// // // //     const shippingForm = document.getElementById('shipping-form');
// // // //     if (shippingForm.checkValidity()) {
// // // //         const name = document.getElementById('name').value;
// // // //         const address = document.getElementById('address').value;
// // // //         const phone = document.getElementById('phone').value;
// // // //         const email = document.getElementById('email').value;
// // // //         const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
// // // //         const cart = getCartItems();
// // // //         const total = document.getElementById('order-total').textContent;

// // // //         const orderData = {
// // // //             name: name,
// // // //             address: address,
// // // //             phone: phone,
// // // //             email: email,
// // // //             paymentMethod: paymentMethod,
// // // //             items: cart,
// // // //             total: total
// // // //         };

// // // //         console.log('Thông tin đơn hàng:', orderData);

// // // //            // Lọc giỏ hàng hiện tại để loại bỏ các sản phẩm đã mua
// // // //            const updatedCart = currentCart.filter(cartItem => {
// // // //             // Kiểm tra xem cartItem có ID nào KHÔNG nằm trong danh sách ID của các sản phẩm đã mua
// // // //             return !purchasedItems.some(purchasedItem => purchasedItem.id === cartItem.id);
// // // //         });

// // // //         // Cập nhật giỏ hàng trong localStorage với các sản phẩm còn lại
// // // //         saveCart(updatedCart);

// // // //         // Xóa danh sách các sản phẩm đã chọn để thanh toán (không còn cần thiết)
// // // //         localStorage.removeItem('selectedCheckoutItems');

// // // //         // Ở đây, trong một ứng dụng thực tế, bạn sẽ gửi orderData lên server
// // // //         // fetch('/api/orders', {
// // // //         //     method: 'POST',
// // // //         //     headers: {
// // // //         //         'Content-Type': 'application/json',
// // // //         //     },
// // // //         //     body: JSON.stringify(orderData),
// // // //         // })
// // // //         // .then(response => response.json())
// // // //         // .then(data => {
// // // //         //     if (data.success) {
// // // //         //         alert('Đặt hàng thành công! Mã đơn hàng của bạn là: ' + data.orderId);
// // // //         //         localStorage.removeItem(getCartKey()); // Xóa giỏ hàng sau khi đặt hàng
// // // //         //         window.location.href = 'order-success.html'; // Chuyển đến trang thành công
// // // //         //     } else {
// // // //         //         alert('Đặt hàng thất bại. Vui lòng thử lại sau.');
// // // //         //     }
// // // //         // })
// // // //         // .catch((error) => {
// // // //         //     console.error('Lỗi khi đặt hàng:', error);
// // // //         //     alert('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
// // // //         // });

// // // //         // Mô phỏng đặt hàng thành công (chỉ ở frontend)
// // // //         // alert('Đặt hàng thành công (mô phỏng)!');
// // // //         // localStorage.removeItem(getCartKey()); // Xóa giỏ hàng
// // // //         // window.location.href = 'order-success.html'; // Chuyển đến trang thông báo thành công

// // // //         alert('Đặt hàng thành công (mô phỏng)!');
// // // // // localStorage.removeItem(getCartKey()); // Xóa toàn bộ giỏ hàng
// // // // // localStorage.removeItem('selectedCheckoutItems'); // Xóa danh sách sản phẩm đã chọn
// // // // window.location.href = 'order-success.html';
// // // //     } else {
// // // //         alert('Vui lòng điền đầy đủ thông tin giao hàng.');
// // // //     }
// // // // }

// // // // // function getCartKey() {
// // // // //     const userId = getLoggedInUserId();
// // // // //     return userId ? `cart_${userId}` : 'cart_guest';
// // // // // }
// // // // function getCartKey() {
// // // //     const userId = getLoggedInUserId();
// // // //     return userId ? `cart_${userId}` : 'cart_guest';
// // // // }

// // // // function getLoggedInUserId() {
// // // //     return localStorage.getItem('loggedInUserId') || null;
// // // // }


// // // document.addEventListener('DOMContentLoaded', function() {
// // //     displayOrderSummary();

// // //     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
// // //     const transferRadio = document.getElementById('transfer');
// // //     const transferInfo = document.getElementById('transfer-info');

// // //     if (transferRadio && transferInfo) {
// // //         transferRadio.addEventListener('change', function() {
// // //             transferInfo.style.display = this.checked ? 'block' : 'none';
// // //         });
// // //     }
// // // });

// // // function getCartItems() {
// // //     const selectedItems = localStorage.getItem('selectedCheckoutItems');
// // //     return selectedItems ? JSON.parse(selectedItems) : [];
// // // }

// // // function getCart() {
// // //     const userId = getLoggedInUserId();
// // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // //     const cart = localStorage.getItem(cartKey);
// // //     return cart ? JSON.parse(cart) : [];
// // // }

// // // function saveCart(cart) {
// // //     const userId = getLoggedInUserId();
// // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // //     localStorage.setItem(cartKey, JSON.stringify(cart));
// // //     // Lưu ý: Chúng ta có thể không cần gọi updateAllCartUIs() ở đây,
// // //     // vì trang chủ có thể không hiển thị giỏ hàng ngay lập tức.
// // //     // Việc cập nhật UI giỏ hàng sẽ diễn ra khi người dùng truy cập trang giỏ hàng.
// // // }

// // // function getLoggedInUserId() {
// // //     return localStorage.getItem('loggedInUserId') || null;
// // // }

// // // function displayOrderSummary() {
// // //     const cartItems = getCartItems();
// // //     const orderItemsElement = document.getElementById('order-items');
// // //     const orderTotalElement = document.getElementById('order-total');
// // //     let total = 0;

// // //     orderItemsElement.innerHTML = '';

// // //     cartItems.forEach(item => {
// // //         const listItem = document.createElement('li');
// // //         const itemTotal = item.price * item.quantity;
// // //         total += itemTotal;
// // //         listItem.innerHTML = `
// // //             <span>${item.name} (${item.quantity})</span>
// // //             <span>$${itemTotal.toFixed(2)}</span>
// // //         `;
// // //         orderItemsElement.appendChild(listItem);
// // //     });

// // //     orderTotalElement.textContent = total.toFixed(2);
// // // }

// // // function placeOrder() {
// // //     const shippingForm = document.getElementById('shipping-form');
// // //     if (shippingForm.checkValidity()) {
// // //         const name = document.getElementById('name').value;
// // //         const address = document.getElementById('address').value;
// // //         const phone = document.getElementById('phone').value;
// // //         const email = document.getElementById('email').value;
// // //         const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
// // //         const purchasedItems = getCartItems(); // Sản phẩm đã mua
// // //         const total = document.getElementById('order-total').textContent;
// // //         const currentCart = getCart(); // Giỏ hàng hiện tại

// // //         const orderData = {
// // //             name: name,
// // //             address: address,
// // //             phone: phone,
// // //             email: email,
// // //             paymentMethod: paymentMethod,
// // //             items: purchasedItems,
// // //             total: total
// // //         };

// // //         console.log('Thông tin đơn hàng:', orderData);

// // //         // Lọc ra các sản phẩm còn lại trong giỏ hàng
// // //         const updatedCart = currentCart.filter(item => {
// // //             return !purchasedItems.some(purchasedItem => purchasedItem.id === item.id);
// // //         });

// // //         // Cập nhật giỏ hàng
// // //         saveCart(updatedCart);

// // //         // Xóa các sản phẩm đã chọn (không cần thiết, nhưng nên làm để tránh nhầm lẫn)
// // //         localStorage.removeItem('selectedCheckoutItems');

// // //         // Mô phỏng đặt hàng thành công
// // //         alert('Đặt hàng thành công (mô phỏng)!');
// // //         window.location.href = 'order-success.html'; // Chuyển đến trang thành công
// // //     } else {
// // //         alert('Vui lòng điền đầy đủ thông tin giao hàng.');
// // //     }
// // // }

// // // document.addEventListener('DOMContentLoaded', function() {
// // //     displayOrderSummary();
  
// // //     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
// // //     const transferRadio = document.getElementById('transfer');
// // //     const transferInfo = document.getElementById('transfer-info');
  
// // //     if (transferRadio && transferInfo) {
// // //       transferRadio.addEventListener('change', function() {
// // //         transferInfo.style.display = this.checked ? 'block' : 'none';
// // //       });
// // //     }
// // //   });
  
// // //   function getCartItems() {
// // //     const selectedItems = localStorage.getItem('selectedCheckoutItems');
// // //     return selectedItems ? JSON.parse(selectedItems) : [];
// // //   }
  
// // //   function getLoggedInUserId() {
// // //     return localStorage.getItem('loggedInUserId') || null;
// // //   }
  
// // //   function getCart() {
// // //     const userId = getLoggedInUserId();
// // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // //     const cart = localStorage.getItem(cartKey);
// // //     return cart ? JSON.parse(cart) : [];
// // //   }
  
// // //   function saveCart(cart) {
// // //     const userId = getLoggedInUserId();
// // //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// // //     localStorage.setItem(cartKey, JSON.stringify(cart));
// // //   }
  
// // //   function displayOrderSummary() {
// // //     const cartItems = getCartItems();
// // //     const orderItemsElement = document.getElementById('order-items');
// // //     const orderTotalElement = document.getElementById('order-total');
// // //     let total = 0;
  
// // //     orderItemsElement.innerHTML = '';
  
// // //     if (cartItems && cartItems.length > 0) {
// // //       cartItems.forEach(item => {
// // //         const listItem = document.createElement('li');
// // //         const itemTotal = item.price * item.quantity;
// // //         total += itemTotal;
// // //         listItem.innerHTML = `
// // //           <span>${item.name} (${item.quantity})</span>
// // //           <span>$${itemTotal.toFixed(2)}</span>
// // //         `;
// // //         orderItemsElement.appendChild(listItem);
// // //       });
// // //       orderTotalElement.textContent = total.toFixed(2);
// // //     } else {
// // //       orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong đơn hàng.</li>';
// // //       orderTotalElement.textContent = '0.00';
// // //     }
// // //   }
  
// // //   function placeOrder() {
// // //     const shippingForm = document.getElementById('shipping-form');
// // //     if (shippingForm.checkValidity()) {
// // //       const name = document.getElementById('name').value;
// // //       const address = document.getElementById('address').value;
// // //       const phone = document.getElementById('phone').value;
// // //       const email = document.getElementById('email').value;
// // //       const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
// // //       const purchasedItems = getCartItems();
// // //       const total = document.getElementById('order-total').textContent;
// // //       const currentCart = getCart();
  
// // //       const orderData = {
// // //         name: name,
// // //         address: address,
// // //         phone: phone,
// // //         email: email,
// // //         paymentMethod: paymentMethod,
// // //         items: purchasedItems,
// // //         total: total
// // //       };
  
// // //       console.log('Thông tin đơn hàng:', orderData);
  
// // //       const updatedCart = currentCart.filter(item => {
// // //         return !purchasedItems.some(purchasedItem => purchasedItem.id === item.id);
// // //       });
  
// // //       saveCart(updatedCart);
  
// // //       localStorage.removeItem('selectedCheckoutItems');
  
// // //       alert('Đặt hàng thành công (mô phỏng)!');
// // //       window.location.href = 'order-success.html';
// // //     } else {
// // //       alert('Vui lòng điền đầy đủ thông tin giao hàng.');
// // //     }
// // //   }


// // document.addEventListener('DOMContentLoaded', function() {
// //     displayOrderSummary();

// //     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
// //     const transferRadio = document.getElementById('transfer');
// //     const transferInfo = document.getElementById('transfer-info');

// //     if (transferRadio && transferInfo) {
// //         transferRadio.addEventListener('change', function() {
// //             transferInfo.style.display = this.checked ? 'block' : 'none';
// //         });
// //     }
// // });

// // function getLoggedInUserId() {
// //     return localStorage.getItem('loggedInUserId') || null;
// // }

// // function getCartKey() {
// //     const userId = getLoggedInUserId();
// //     return userId ? `cart_${userId}` : 'cart_guest';
// // }

// // function getCart() {
// //     const userId = getLoggedInUserId();
// //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// //     const cart = localStorage.getItem(cartKey);
// //     return cart ? JSON.parse(cart) : [];
// // }

// // function saveCart(cart) {
// //     const userId = getLoggedInUserId();
// //     const cartKey = userId ? `cart_${userId}` : 'cart_guest';
// //     localStorage.setItem(cartKey, JSON.stringify(cart));
// // }

// // function displayOrderSummary() {
// //     const cartItems = getCart(); // Lấy giỏ hàng từ hàm getCart()
// //     const orderItemsElement = document.getElementById('order-items');
// //     const orderTotalElement = document.getElementById('order-total');
// //     let total = 0;

// //     orderItemsElement.innerHTML = '';

// //     if (cartItems && cartItems.length > 0) {
// //         cartItems.forEach(item => {
// //             const listItem = document.createElement('li');
// //             const itemTotal = item.price * item.quantity;
// //             total += itemTotal;
// //             listItem.innerHTML = `
// //                 <span>${item.name} (${item.quantity})</span>
// //                 <span>$${itemTotal.toFixed(2)}</span>
// //             `;
// //             orderItemsElement.appendChild(listItem);
// //         });
// //         orderTotalElement.textContent = total.toFixed(2);
// //     } else {
// //         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong đơn hàng.</li>';
// //         orderTotalElement.textContent = '0.00';
// //     }
// // }

// // function placeOrder() {
// //     const shippingForm = document.getElementById('shipping-form');
// //     if (shippingForm.checkValidity()) {
// //         const name = document.getElementById('name').value;
// //         const address = document.getElementById('address').value;
// //         const phone = document.getElementById('phone').value;
// //         const email = document.getElementById('email').value;
// //         const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
// //         const purchasedItems = getCart();  // Lấy dữ liệu từ giỏ hàng
// //         const total = document.getElementById('order-total').textContent;
// //         const currentCart = getCart();

// //         const orderData = {
// //             name: name,
// //             address: address,
// //             phone: phone,
// //             email: email,
// //             paymentMethod: paymentMethod,
// //             items: purchasedItems, // Đưa sản phẩm từ giỏ hàng vào orderData
// //             total: total
// //         };

// //         console.log('Thông tin đơn hàng:', orderData);

// //         const updatedCart = currentCart.filter(item => {
// //             return !purchasedItems.some(purchasedItem => purchasedItem.id === item.id);
// //         });

// //         saveCart(updatedCart);

// //         localStorage.removeItem('selectedCheckoutItems');

// //         alert('Đặt hàng thành công (mô phỏng)!');
// //         window.location.href = 'order-success.html';
// //     } else {
// //         alert('Vui lòng điền đầy đủ thông tin giao hàng.');
// //     }
// // }
// // document.addEventListener('DOMContentLoaded', function() {
// //     displayOrderSummary();

// //     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
// //     const transferRadio = document.getElementById('transfer');
// //     const transferInfo = document.getElementById('transfer-info');

// //     if (transferRadio && transferInfo) {
// //         transferRadio.addEventListener('change', function() {
// //             transferInfo.style.display = this.checked ? 'block' : 'none';
// //         });
// //     }
// // });

// // // Các hàm getLoggedInUserId(), getCartKey(), getCart(), saveCart()
// // // được cho là đã được định nghĩa trong cart.js (KHÔNG định nghĩa lại ở đây)

// // function displayOrderSummary() {
// //     const cartItems = getCart(); // Sử dụng hàm getCart() để lấy dữ liệu giỏ hàng
// //     const orderItemsElement = document.getElementById('order-items');
// //     const orderTotalElement = document.getElementById('order-total');
// //     let total = 0;

// //     orderItemsElement.innerHTML = '';

// //     if (cartItems && cartItems.length > 0) {
// //         cartItems.forEach(item => {
// //             const listItem = document.createElement('li');
// //             const itemTotal = item.price * item.quantity;
// //             total += itemTotal;
// //             listItem.innerHTML = `
// //                 <span>${item.name} (${item.quantity})</span>
// //                 <span>$${itemTotal.toFixed(2)}</span>
// //             `;
// //             orderItemsElement.appendChild(listItem);
// //         });
// //         orderTotalElement.textContent = total.toFixed(2);
// //     } else {
// //         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong đơn hàng.</li>';
// //         orderTotalElement.textContent = '0.00';
// //     }
// // }

// // function placeOrder() {
// //     const shippingForm = document.getElementById('shipping-form');
// //     if (shippingForm.checkValidity()) {
// //         const name = document.getElementById('name').value;
// //         const address = document.getElementById('address').value;
// //         const phone = document.getElementById('phone').value;
// //         const email = document.getElementById('email').value;
// //         const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
// //         const cart = getCart(); // Lấy giỏ hàng hiện tại
// //         const total = document.getElementById('order-total').textContent;

// //         const orderData = {
// //             name: name,
// //             address: address,
// //             phone: phone,
// //             email: email,
// //             paymentMethod: paymentMethod,
// //             items: cart, // Đưa thông tin giỏ hàng vào orderData
// //             total: total
// //         };

// //         console.log('Thông tin đơn hàng:', orderData);

// //         // Xóa giỏ hàng sau khi đặt hàng thành công
// //         saveCart([]); // Lưu giỏ hàng rỗng
        
// //         alert('Đặt hàng thành công (mô phỏng)!');
// //         window.location.href = 'order-success.html';
// //     } else {
// //         alert('Vui lòng điền đầy đủ thông tin giao hàng.');
// //     }
// // }


document.addEventListener('DOMContentLoaded', function() {
    displayOrderSummary();
  
    // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
    const transferRadio = document.getElementById('transfer');
    const transferInfo = document.getElementById('transfer-info');
  
    if (transferRadio && transferInfo) {
      transferRadio.addEventListener('change', function() {
        transferInfo.style.display = this.checked ? 'block' : 'none';
      });
    }
  });
  
  function getCartItems() {
    const selectedItems = localStorage.getItem('selectedCheckoutItems');
    return selectedItems ? JSON.parse(selectedItems) : [];
  }
  
  function getLoggedInUserId() {
    return localStorage.getItem('loggedInUserId') || null;
  }
  
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
  }
  
  function displayOrderSummary() {
    const cartItems = getCartItems();
    const orderItemsElement = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    let total = 0;
  
    orderItemsElement.innerHTML = '';
  
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach(item => {
        const listItem = document.createElement('li');
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        listItem.innerHTML = `
          <span>${item.name} (${item.quantity})</span>
          <span>$${itemTotal.toFixed(2)}</span>
        `;
        orderItemsElement.appendChild(listItem);
      });
      orderTotalElement.textContent = total.toFixed(2);
    } else {
      orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong đơn hàng.</li>';
      orderTotalElement.textContent = '0.00';
    }
  }
  
  function placeOrder() {
    const shippingForm = document.getElementById('shipping-form');
    if (shippingForm.checkValidity()) {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
      const purchasedItems = getCartItems();
      const total = document.getElementById('order-total').textContent;
      const currentCart = getCart();
  
      const orderData = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        paymentMethod: paymentMethod,
        items: purchasedItems,
        total: total
      };
  
      console.log('Thông tin đơn hàng:', orderData);
  
      const updatedCart = currentCart.filter(item => {
        return !purchasedItems.some(purchasedItem => purchasedItem.id === item.id);
      });
  
      saveCart(updatedCart);
  
      localStorage.removeItem('selectedCheckoutItems');
  
      alert('Đặt hàng thành công (mô phỏng)!');
      window.location.href = 'order-success.html';
    } else {
      alert('Vui lòng điền đầy đủ thông tin giao hàng.');
    }
  }


// document.addEventListener('DOMContentLoaded', function () {
//     displayOrderSummary();
  
//     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
//     const transferRadio = document.getElementById('transfer');
//     const transferInfo = document.getElementById('transfer-info');
  
//     if (transferRadio && transferInfo) {
//       transferRadio.addEventListener('change', function () {
//         transferInfo.style.display = this.checked ? 'block' : 'none';
//       });
//     }
//   });
  
//   function getLoggedInUserId() {
//     return localStorage.getItem('loggedInUserId') || null;
//   }
  
//   function getCartKey() {
//     const userId = getLoggedInUserId();
//     return userId ? `cart_${userId}` : 'cart_guest';
//   }
  
//   function getCart(filter = null) {
//     const cartKey = getCartKey();
//     const cart = localStorage.getItem(cartKey);
//     let cartItems = cart ? JSON.parse(cart) : [];
  
//     if (filter === 'selected') {
//       const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//       cartItems = cartItems.filter(item => selectedIds.includes(item.id));
//     }
//     return cartItems;
//   }
  
//   function saveCart(cart) {
//     const cartKey = getCartKey();
//     localStorage.setItem(cartKey, JSON.stringify(cart));
//     updateAllCartUIs();
//   }
  
//   function displayOrderSummary() {
//     const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//     const cartItems = getCart();
//     const orderItemsElement = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//     let total = 0;
  
//     orderItemsElement.innerHTML = '';
  
//     if (cartItems && cartItems.length > 0) {
//       const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Get selected items
//       if(selectedItems.length === 0){
//         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
//         orderTotalElement.textContent = '0.00';
//       }
//       else{
//         selectedItems.forEach(item => {
//           const listItem = document.createElement('li');
//           const itemTotal = item.price * item.quantity;
//           total += itemTotal;
//           listItem.innerHTML = `
//               <span>${item.name} (${item.quantity})</span>
//               <span>$${itemTotal.toFixed(2)}</span>
//             `;
//           orderItemsElement.appendChild(listItem);
//         });
//         orderTotalElement.textContent = total.toFixed(2);
//       }
      
//     } else {
//       orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
//       orderTotalElement.textContent = '0.00';
//     }
//   }
  
//   function placeOrder() {
//     const shippingForm = document.getElementById('shipping-form');
//     if (shippingForm.checkValidity()) {
//       const name = document.getElementById('name').value;
//       const address = document.getElementById('address').value;
//       const phone = document.getElementById('phone').value;
//       const email = document.getElementById('email').value;
//       const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
//       const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//       const cart = getCart();
//       const total = document.getElementById('order-total').textContent;
  
  
//       const purchasedItems = cart.filter(item => selectedIds.includes(item.id));
  
//       const orderData = {
//         name: name,
//         address: address,
//         phone: phone,
//         email: email,
//         paymentMethod: paymentMethod,
//         items: purchasedItems,
//         total: total
//       };
  
//       console.log('Thông tin đơn hàng:', orderData);
  
//       const updatedCart = cart.filter(item => !selectedIds.includes(item.id));
//       saveCart(updatedCart);
  
//       localStorage.removeItem('selectedCheckoutItems');
  
//       alert('Đặt hàng thành công (mô phỏng)!');
//       window.location.href = 'order-success.html';
//     } else {
//       alert('Vui lòng điền đầy đủ thông tin giao hàng.');
//     }
//   }


// document.addEventListener('DOMContentLoaded', function () {
//     displayOrderSummary();

//     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
//     const transferRadio = document.getElementById('transfer');
//     const transferInfo = document.getElementById('transfer-info');

//     if (transferRadio && transferInfo) {
//         transferRadio.addEventListener('change', function () {
//             transferInfo.style.display = this.checked ? 'block' : 'none';
//         });
//     }
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

// function displayOrderSummary() {
//     const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//     const cartItems = getCart(); // Lấy tất cả các mặt hàng từ giỏ hàng
//     const orderItemsElement = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//     let total = 0;

//     orderItemsElement.innerHTML = '';

//     if (cartItems && cartItems.length > 0) {
//         const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Lọc các mặt hàng đã chọn
//         if (selectedItems.length === 0) {
//             orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
//             orderTotalElement.textContent = '0.00';
//         } else {
//             selectedItems.forEach(item => {
//                 const listItem = document.createElement('li');
//                 const itemTotal = item.price * item.quantity;
//                 total += itemTotal;
//                 listItem.innerHTML = `
//                     <span>${item.name} (${item.quantity})</span>
//                     <span>$${itemTotal.toFixed(2)}</span>
//                 `;
//                 orderItemsElement.appendChild(listItem);
//             });
//             orderTotalElement.textContent = total.toFixed(2);
//         }
//     } else {
//         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
//         orderTotalElement.textContent = '0.00';
//     }
// }

// function placeOrder() {
//     const shippingForm = document.getElementById('shipping-form');
//     if (shippingForm.checkValidity()) {
//         const name = document.getElementById('name').value;
//         const address = document.getElementById('address').value;
//         const phone = document.getElementById('phone').value;
//         const email = document.getElementById('email').value;
//         const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
//         const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//         const cart = getCart();
//         const total = document.getElementById('order-total').textContent;

//         const purchasedItems = cart.filter(item => selectedIds.includes(item.id));

//         const orderData = {
//             name: name,
//             address: address,
//             phone: phone,
//             email: email,
//             paymentMethod: paymentMethod,
//             items: purchasedItems,
//             total: total
//         };

//         console.log('Thông tin đơn hàng:', orderData);

//         const updatedCart = cart.filter(item => !selectedIds.includes(item.id));
//         saveCart(updatedCart);

//         localStorage.removeItem('selectedCheckoutItems');

//         alert('Đặt hàng thành công (mô phỏng)!');
//         window.location.href = 'order-success.html';
//     } else {
//         alert('Vui lòng điền đầy đủ thông tin giao hàng.');
//     }
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


// document.addEventListener('DOMContentLoaded', function () {
//     displayOrderSummary();

//     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
//     const transferRadio = document.getElementById('transfer');
//     const transferInfo = document.getElementById('transfer-info');

//     if (transferRadio && transferInfo) {
//         transferRadio.addEventListener('change', function () {
//             transferInfo.style.display = this.checked ? 'block' : 'none';
//         });
//     }
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

// function displayOrderSummary() {
//     const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//     const cartItems = getCart(); // Lấy tất cả các mặt hàng từ giỏ hàng
//     const orderItemsElement = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//     let total = 0;

//     orderItemsElement.innerHTML = '';

//     if (cartItems && cartItems.length > 0) {
//         const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Lọc các mặt hàng đã chọn
//         if (selectedItems.length === 0) {
//             orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
//             orderTotalElement.textContent = '0.00';
//         } else {
//             selectedItems.forEach(item => {
//                 const listItem = document.createElement('li');
//                 const itemTotal = item.price * item.quantity;
//                 total += itemTotal;
//                 listItem.innerHTML = `
//                     <span>${item.name} (${item.quantity})</span>
//                     <span>$${itemTotal.toFixed(2)}</span>
//                 `;
//                 orderItemsElement.appendChild(listItem);
//             });
//             orderTotalElement.textContent = total.toFixed(2);
//         }
//     } else {
//         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
//         orderTotalElement.textContent = '0.00';
//     }
// }


// document.addEventListener('DOMContentLoaded', function () {
//     displayOrderSummary();

//     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
//     const transferRadio = document.getElementById('transfer');
//     const transferInfo = document.getElementById('transfer-info');

//     if (transferRadio && transferInfo) {
//         transferRadio.addEventListener('change', function () {
//             transferInfo.style.display = this.checked ? 'block' : 'none';
//         });
//     }
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

// function displayOrderSummary() {
//     const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//     const cartItems = getCart(); // Lấy tất cả các mặt hàng từ giỏ hàng
//     const orderItemsElement = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//     let total = 0;

//     orderItemsElement.innerHTML = '';

//     if (cartItems && cartItems.length > 0) {
//         const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Lọc các mặt hàng đã chọn
//         if (selectedItems.length === 0) {
//             orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
//             orderTotalElement.textContent = '0.00';
//         } else {
//             selectedItems.forEach(item => {
//                 const listItem = document.createElement('li');
//                 const itemTotal = item.price * item.quantity;
//                 total += itemTotal;
//                 listItem.innerHTML = `
//                     <span>${item.name} (${item.quantity})</span>
//                     <span>$${itemTotal.toFixed(2)}</span>
//                 `;
//                 orderItemsElement.appendChild(listItem);
//             });
//             orderTotalElement.textContent = total.toFixed(2);
//         }
//     } else {
//         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
//         orderTotalElement.textContent = '0.00';
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     displayOrderSummary();

//     // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
//     const transferRadio = document.getElementById('transfer');
//     const transferInfo = document.getElementById('transfer-info');

//     if (transferRadio && transferInfo) {
//         transferRadio.addEventListener('change', function () {
//             transferInfo.style.display = this.checked ? 'block' : 'none';
//         });
//     }
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

// function displayOrderSummary() {
//     const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
//     const cartItems = getCart(); // Lấy tất cả các mặt hàng từ giỏ hàng
//     const orderItemsElement = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//     let total = 0;

//     orderItemsElement.innerHTML = '';

//     if (cartItems && cartItems.length > 0) {
//         const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Lọc các mặt hàng đã chọn
//         if (selectedItems.length === 0) {
//             orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
//             orderTotalElement.textContent = '0.00';
//         } else {
//             selectedItems.forEach(item => {
//                 const listItem = document.createElement('li');
//                 const itemTotal = item.price * item.quantity;
//                 total += itemTotal;
//                 listItem.innerHTML = `
//                     <span>${item.name} (${item.quantity})</span>
//                     <span>$${itemTotal.toFixed(2)}</span>
//                 `;
//                 orderItemsElement.appendChild(listItem);
//             });
//             orderTotalElement.textContent = total.toFixed(2);
//         }
//     } else {
//         orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
//         orderTotalElement.textContent = '0.00';
//     }
// }
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
    displayOrderSummary();
  
    // Hiển thị/ẩn thông tin chuyển khoản khi chọn phương thức
    const transferRadio = document.getElementById('transfer');
    const transferInfo = document.getElementById('transfer-info');
  
    if (transferRadio && transferInfo) {
      transferRadio.addEventListener('change', function () {
        transferInfo.style.display = this.checked ? 'block' : 'none';
      });
    }
  });
  
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
    updateAllCartUIs();
  }
  
  function displayOrderSummary() {
    const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
    const cartItems = getCart();
    const orderItemsElement = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');
    let total = 0;
  
    orderItemsElement.innerHTML = '';
  
    if (cartItems && cartItems.length > 0) {
      const selectedItems = cartItems.filter(item => selectedIds.includes(item.id)); // Get selected items
      if(selectedItems.length === 0){
        orderItemsElement.innerHTML = '<li>Không có sản phẩm nào được chọn để thanh toán.</li>';
        orderTotalElement.textContent = '0.00';
      }
      else{
        selectedItems.forEach(item => {
          const listItem = document.createElement('li');
          const itemTotal = item.price * item.quantity;
          total += itemTotal;
          listItem.innerHTML = `
              <span>${item.name} (${item.quantity})</span>
              <span>$${itemTotal.toFixed(2)}</span>
            `;
          orderItemsElement.appendChild(listItem);
        });
        orderTotalElement.textContent = total.toFixed(2);
      }
      
    } else {
      orderItemsElement.innerHTML = '<li>Không có sản phẩm nào trong giỏ hàng.</li>';
      orderTotalElement.textContent = '0.00';
    }
  }
  
  function placeOrder() {
    const shippingForm = document.getElementById('shipping-form');
    if (shippingForm.checkValidity()) {
      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
      const selectedIds = JSON.parse(localStorage.getItem('selectedCheckoutItems') || '[]');
      const cart = getCart();
      const total = document.getElementById('order-total').textContent;
  
  
      const purchasedItems = cart.filter(item => selectedIds.includes(item.id));
  
      const orderData = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        paymentMethod: paymentMethod,
        items: purchasedItems,
        total: total
      };
  
      console.log('Thông tin đơn hàng:', orderData);
  
      const updatedCart = cart.filter(item => !selectedIds.includes(item.id));
      saveCart(updatedCart);
  
      localStorage.removeItem('selectedCheckoutItems');
  
      alert('Đặt hàng thành công (mô phỏng)!');
      window.location.href = 'order-success.html';
    } else {
      alert('Vui lòng điền đầy đủ thông tin giao hàng.');
    }
  }

