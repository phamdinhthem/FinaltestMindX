document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    const sidebarLinks = document.querySelectorAll('.sidebar a[data-category], .sidebar .menu-item[data-category]');
    const productsData = [ // Giả sử bạn có một mảng dữ liệu sản phẩm
        { id: 'p1', name: 'Máy ảnh CANON EOS 250D', price: 100, image: 'https://s3-alpha-sig.figma.com/img/e608/92a4/f0a3d5d144dce622c7338ec5be12908f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TlVb-fvwB~q2mM9nYZMZB73au600Z5fsTqPFxTlbI2ln4mMKKz~Ye67N7-5KbMGzY2GgGUsEXa2Fc96c~chG7LkEuxgk0SJY9FmigpxfLAPKszP71MD0yF-RJ8pBR1ICgVtoMqDVOTU0hnbGGXGARiSA9zloJK53f6odg1xsso~6d9gScipmkX7Ve5QyvfGPHipgWEAa~BHRgfqZGMp~XJ5yc-493P2~a~Nl9Jqz32KMktFBdNHjMpT3UxSXNfS3v6PHogJ2YvLu-xiMBMfBwZNudR6Y53ptqwqQh0dNorq0pYQCuPzrLqubusqyRXCslXywITsCuCxyy~dnaBHDFg__', category: 'electronics' },
        { id: 'p2', name: 'Laptop Kids Electric', price: 300, image: 'https://s3-alpha-sig.figma.com/img/203b/e522/b7b02d10672f6f6147762cf52bfcfc54?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UdkLzQurUmJApWVIvyTrpu~EHhOjvVPD-5GIJaapRWVELGMDubortx~cmyl8IPJEk0faxQro-UPgnFkYtZNRa3izWujtzBLAHMwSTYBtoF5HfZPhWRS8wIP0S4~NsolBkWworfq~W1rTetZpOpVxh8mMKi-DSjmvwoNgLmt-3457IWDKKmZiZnBXXv79Ji-xKecec1ozWUvreSMyhv1wx7pBdsMYQrSFq5SsRcHaaAT46~s3uK891~~g5CdiZIGOxFWkV-WrvGVy0cpGwEsUwY5xDQSF~mQTjBCS-wF7qXr9c1ksPGMYlQwStzsBpxZPxmIUo930szFiGhZB~dfMLA__', category: 'electronics' },
        { id: 'p3', name: 'Gucci duffle bag', price: 960, image: 'asset/4f3ca1d12722dbdf98f25179d3c0b785988c513d.png', category: 'woman' },
        { id: 'p4', name: 'Giày Bóng Đá Xanh', price: 960, image: 'asset/d0b7bb25884f6fdfc1357634d7d7b09e05755c2f.png', category: 'men' },

        {
            id: 'rgb-loa',
            name: 'RGB Loa',
            price: 1960,
            image: 'asset/6739d39dc218c97b645d616c8188a4f2e6aaf84b.png',
            category: 'electronics' // Bạn có thể thay đổi category này
        },
        {
            id: 'gamepad',
            name: 'Tay Cầm Gamepad',
            price: 550,
            image: 'asset/288e013365fe639fccc1fe4168fca740ef1f85e7.png',
            category: 'toys' // Hoặc 'men's fashion' tùy thuộc vào sản phẩm
        },
        {
            id: 'giay-bong-da',
            name: 'Giày Bóng Đá Xanh',
            price: 960,
            image: 'asset/d0b7bb25884f6fdfc1357634d7d7b09e05755c2f.png',
            category: 'men' // Hoặc 'sports' nếu bạn có category này
        },
        {
            id: 'mercedes-car',
            name: 'Mercedes Car',
            price: 960,
            image: 'asset/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.svg',
            category: 'toys' // Hoặc 'toys'
        },
        {
            id: 'ban-phim',
            name: 'Bàn Phím',
            price: 960,
            image: 'asset/e59d9f348cc24eeff489863523b63971c3ff8e4a.png',
            category: 'electronics'
        },
        {
            id: 'man-hinh',
            name: 'Màn Hình',
            price: 960,
            image: 'asset/g27cq4-500x500 1.svg',
            category: 'electronics'
        },
        {
            id: 'kids-electric-car-2', // Để phân biệt với sản phẩm tương tự trước đó
            name: 'Kids Electric Car',
            price: 960,
            image: 'asset/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.svg',
            category: 'toys' 
        }
        // Thêm dữ liệu cho các sản phẩm khác và đảm bảo có thuộc tính 'category'
    ];

    function renderProducts(products) {
        productGrid.innerHTML = ''; // Xóa các sản phẩm hiện tại
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.onclick = function() { viewProduct(product.id, product.name, product.price, product.image); };

            productCard.innerHTML = `
                <span class="badge-new">NEW</span>
                <img src="${product.image}" alt="Product">
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price}</div>
                <div class="product-rating">★★★★☆ (35)</div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                    Add To Cart
                </button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            const category = this.dataset.category;
            filterProducts(category);
        });
    });

    function filterProducts(category) {
        if (category === 'all') {
            renderProducts(productsData);
        } else {
            const filteredProducts = productsData.filter(product => product.category === category);
            renderProducts(filteredProducts);
        }
    }

    // Hiển thị tất cả sản phẩm khi trang tải lần đầu
    renderProducts(productsData);
});