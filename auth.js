// auth.js
function initAuth() {
    if (!localStorage.getItem('ecommerceData')) {
      localStorage.setItem('ecommerceData', JSON.stringify({
        users: [],
        currentUser: null
      }));
    }
  }
  
  function getAppData() {
    return JSON.parse(localStorage.getItem('ecommerceData'));
  }
  
  function updateAppData(data) {
    localStorage.setItem('ecommerceData', JSON.stringify(data));
  }
  
  // Hàm hash password đơn giản (trong thực tế nên dùng thư viện như bcrypt)
  function simpleHash(password) {
    return btoa(password); // Chỉ dùng cho demo
  }
  
  // Đăng ký tài khoản
  function register(username, password) {
    const data = getAppData();
    
    if (data.users.some(u => u.username === username)) {
      throw new Error("Tên đăng nhập đã tồn tại");
    }
  
    const newUser = {
      id: Date.now(),
      username,
      password: simpleHash(password),
      cart: []
    };
  
    data.users.push(newUser);
    updateAppData(data);
    return newUser;
  }
  
  // Đăng nhập
  function login(username, password) {
    const data = getAppData();
    const user = data.users.find(u => 
      u.username === username && 
      u.password === simpleHash(password)
    );
    
    if (!user) throw new Error("Sai tên đăng nhập hoặc mật khẩu");
  
    data.currentUser = { id: user.id, username: user.username };
    updateAppData(data);
    return user;
  }
  
  // Đăng xuất
  function logout() {
    const data = getAppData();
    data.currentUser = null;
    updateAppData(data);
  }
  
  // Lấy thông tin user hiện tại
  function getCurrentUser() {
    return getAppData().currentUser;
  }
  
  // Lấy giỏ hàng của user
  function getUserCart() {
    const data = getAppData();
    const user = data.users.find(u => u.id === data.currentUser?.id);
    return user ? user.cart : [];
  }
  
  // Thêm vào giỏ hàng
  function addToUserCart(product) {
    const data = getAppData();
    const user = data.users.find(u => u.id === data.currentUser?.id);
    
    if (!user) throw new Error("Vui lòng đăng nhập");
  
    const existingItem = user.cart.find(item => item.productId === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
  
    updateAppData(data);
    return user.cart;
  }
  
  // Khởi tạo khi load trang
  initAuth();