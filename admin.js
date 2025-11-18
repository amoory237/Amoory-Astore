// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize admin panel
    initializeAdmin();

    // Load initial data
    loadDashboardData();
    loadProducts();
    loadOrders();
    loadUsers();
});

// Initialize admin panel
function initializeAdmin() {
    // Sidebar navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            switchSection(section);
        });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('adminMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleSidebar);
    }

    // User dropdown
    const userBtn = document.getElementById('adminUserBtn');
    const userDropdown = document.getElementById('adminUserDropdown');
    if (userBtn && userDropdown) {
        userBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });

        document.addEventListener('click', function() {
            userDropdown.classList.remove('active');
        });
    }

    // Notification dropdown
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', toggleNotifications);
    }

    // Filter tabs for orders
    const filterTabs = document.querySelectorAll('.tab-btn[data-filter]');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterOrders(filter);
            updateActiveTab(this);
        });
    });

    // Add product form
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', handleAddProduct);
    }

    // Edit product form
    const editProductForm = document.getElementById('editProductForm');
    if (editProductForm) {
        editProductForm.addEventListener('submit', handleEditProduct);
    }

    // Settings forms
    const settingsForms = document.querySelectorAll('.settings-form');
    settingsForms.forEach(form => {
        form.addEventListener('submit', handleSettingsSave);
    });
}

// Switch between sections
function switchSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.admin-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update active nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    const activeNav = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    // Load section data if needed
    switch (sectionName) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'products':
            loadProducts();
            break;
        case 'orders':
            loadOrders();
            break;
        case 'users':
            loadUsers();
            break;
    }
}

// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('adminSidebar');
    const main = document.querySelector('.admin-main');

    sidebar.classList.toggle('mobile-open');
    main.classList.toggle('mobile-expanded');
}

// Toggle notifications dropdown
function toggleNotifications() {
    // For now, just show a placeholder
    showNotification('لا توجد إشعارات جديدة');
}

// Load dashboard data
function loadDashboardData() {
    // Simulate loading data
    const stats = {
        totalOrders: 156,
        totalRevenue: '45,230 ريال',
        totalProducts: 48,
        totalCustomers: 89
    };

    // Update stats
    document.getElementById('totalOrders').textContent = stats.totalOrders;
    document.getElementById('totalRevenue').textContent = stats.totalRevenue;
    document.getElementById('totalProducts').textContent = stats.totalProducts;
    document.getElementById('totalCustomers').textContent = stats.totalCustomers;

    // Load recent orders
    loadRecentOrders();

    // Load top products
    loadTopProducts();
}

// Load recent orders for dashboard
function loadRecentOrders() {
    const recentOrdersContainer = document.getElementById('recentOrders');
    if (!recentOrdersContainer) return;

    const recentOrders = [
        { id: '#1234', customer: 'أحمد محمد', amount: '190 ريال', status: 'completed' },
        { id: '#1233', customer: 'فاطمة علي', amount: '95 ريال', status: 'pending' },
        { id: '#1232', customer: 'محمد أحمد', amount: '380 ريال', status: 'completed' },
        { id: '#1231', customer: 'سارة خالد', amount: '60 ريال', status: 'completed' }
    ];

    recentOrdersContainer.innerHTML = recentOrders.map(order => `
        <div class="order-item">
            <div class="order-avatar">${order.customer.charAt(0)}</div>
            <div class="order-info">
                <div class="order-customer">${order.customer}</div>
                <div class="order-details">${order.id} • ${order.amount}</div>
            </div>
            <div class="order-amount">${order.amount}</div>
        </div>
    `).join('');
}

// Load top products for dashboard
function loadTopProducts() {
    const topProductsContainer = document.getElementById('topProducts');
    if (!topProductsContainer) return;

    const topProducts = [
        { name: 'بطاقة iTunes 100$', sales: '45 مرة', image: 'images/itunes.png' },
        { name: 'شدات ببجي 1800 UC', sales: '38 مرة', image: 'images/pubg.png' },
        { name: 'بطاقة PlayStation 50$', sales: '32 مرة', image: 'images/playstation.png' },
        { name: 'بطاقة Google Play 25$', sales: '28 مرة', image: 'images/google-play.png' }
    ];

    topProductsContainer.innerHTML = topProducts.map(product => `
        <div class="product-item">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">المبيعات: ${product.sales}</div>
            </div>
        </div>
    `).join('');
}

// Load products
function loadProducts() {
    const productsTableBody = document.getElementById('productsTableBody');
    if (!productsTableBody) return;

    // Get products from main script
    const allProducts = getAllProducts();

    productsTableBody.innerHTML = allProducts.map(product => `
        <tr>
            <td>
                <img src="${product.image}" alt="${product.name}">
            </td>
            <td>${product.name}</td>
            <td>${getCategoryName(product.category)}</td>
            <td>${product.price} ريال</td>
            <td>100</td>
            <td><span class="status-badge active">نشط</span></td>
            <td>
                <button class="action-btn view" onclick="viewProduct(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Get category name
function getCategoryName(category) {
    const categories = {
        pubg: 'شدات ببجي',
        itunes: 'بطاقات iTunes',
        playstation: 'بطاقات PlayStation',
        xbox: 'بطاقات Xbox',
        google: 'بطاقات Google Play'
    };
    return categories[category] || category;
}

// Load orders
function loadOrders() {
    const ordersTableBody = document.getElementById('ordersTableBody');
    if (!ordersTableBody) return;

    const orders = [
        {
            id: '#1234',
            customer: 'أحمد محمد',
            date: '2024-01-15',
            amount: '190 ريال',
            status: 'completed'
        },
        {
            id: '#1233',
            customer: 'فاطمة علي',
            date: '2024-01-15',
            amount: '95 ريال',
            status: 'pending'
        },
        {
            id: '#1232',
            customer: 'محمد أحمد',
            date: '2024-01-14',
            amount: '380 ريال',
            status: 'completed'
        },
        {
            id: '#1231',
            customer: 'سارة خالد',
            date: '2024-01-14',
            amount: '60 ريال',
            status: 'cancelled'
        }
    ];

    ordersTableBody.innerHTML = orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${formatDate(order.date)}</td>
            <td>${order.amount}</td>
            <td><span class="status-badge ${order.status}">${getStatusName(order.status)}</span></td>
            <td>
                <button class="action-btn view" onclick="viewOrder('${order.id}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn edit" onclick="editOrder('${order.id}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Get status name
function getStatusName(status) {
    const statuses = {
        pending: 'في الانتظار',
        completed: 'مكتملة',
        cancelled: 'ملغية'
    };
    return statuses[status] || status;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Load users
function loadUsers() {
    const usersTableBody = document.getElementById('usersTableBody');
    if (!usersTableBody) return;

    const users = [
        {
            name: 'أحمد محمد',
            email: 'ahmed@example.com',
            phone: '0512345678',
            ordersCount: 5,
            totalSpent: '950 ريال',
            joinDate: '2023-12-01'
        },
        {
            name: 'فاطمة علي',
            email: 'fatima@example.com',
            phone: '0512345679',
            ordersCount: 3,
            totalSpent: '475 ريال',
            joinDate: '2024-01-01'
        },
        {
            name: 'محمد أحمد',
            email: 'mohamed@example.com',
            phone: '0512345680',
            ordersCount: 8,
            totalSpent: '1520 ريال',
            joinDate: '2023-11-15'
        }
    ];

    usersTableBody.innerHTML = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.ordersCount}</td>
            <td>${user.totalSpent}</td>
            <td>${formatDate(user.joinDate)}</td>
            <td>
                <button class="action-btn view" onclick="viewUser('${user.email}')">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn edit" onclick="editUser('${user.email}')">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Filter orders
function filterOrders(filter) {
    const rows = document.querySelectorAll('#ordersTableBody tr');
    rows.forEach(row => {
        const statusBadge = row.querySelector('.status-badge');
        if (!statusBadge) return;

        if (filter === 'all' || statusBadge.classList.contains(filter)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Update active tab
function updateActiveTab(activeTab) {
    const tabs = document.querySelectorAll('.tab-btn[data-filter]');
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// Product management functions
function showAddProductModal() {
    const modal = document.getElementById('addProductModal');
    modal.classList.add('active');
}

function closeAddProductModal() {
    const modal = document.getElementById('addProductModal');
    modal.classList.remove('active');
    document.getElementById('addProductForm').reset();
}

function handleAddProduct(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData);

    // Add to products data (in a real app, this would be an API call)
    const newProduct = {
        id: Date.now(),
        name: productData.name,
        category: productData.category,
        price: parseFloat(productData.price),
        originalPrice: productData.originalPrice ? parseFloat(productData.originalPrice) : null,
        image: productData.image || 'images/placeholder.png',
        description: productData.description,
        stock: parseInt(productData.stock) || 100
    };

    // Add to productsData (this would normally be handled by the backend)
    if (!productsData[newProduct.category]) {
        productsData[newProduct.category] = [];
    }
    productsData[newProduct.category].push(newProduct);

    // Close modal and refresh
    closeAddProductModal();
    loadProducts();
    showNotification('تمت إضافة المنتج بنجاح');
}

function editProduct(productId) {
    const product = findProduct(productId);
    if (!product) return;

    // Populate edit form
    const form = document.getElementById('editProductForm');
    form.productId.value = product.id;
    form.name.value = product.name;
    form.category.value = product.category;
    form.price.value = product.price;
    form.originalPrice.value = product.originalPrice || '';
    form.description.value = product.description || '';
    form.image.value = product.image;
    form.stock.value = product.stock || 100;

    // Show modal
    const modal = document.getElementById('editProductModal');
    modal.classList.add('active');
}

function closeEditProductModal() {
    const modal = document.getElementById('editProductModal');
    modal.classList.remove('active');
    document.getElementById('editProductForm').reset();
}

function handleEditProduct(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const productData = Object.fromEntries(formData);
    const productId = parseInt(productData.productId);

    // Find and update product
    const product = findProduct(productId);
    if (product) {
        product.name = productData.name;
        product.category = productData.category;
        product.price = parseFloat(productData.price);
        product.originalPrice = productData.originalPrice ? parseFloat(productData.originalPrice) : null;
        product.description = productData.description;
        product.image = productData.image;
        product.stock = parseInt(productData.stock) || 100;

        // Close modal and refresh
        closeEditProductModal();
        loadProducts();
        showNotification('تم تحديث المنتج بنجاح');
    }
}

function deleteProduct(productId) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        // Remove from productsData (this would normally be handled by the backend)
        const product = findProduct(productId);
        if (product) {
            const categoryArray = productsData[product.category];
            const index = categoryArray.findIndex(p => p.id === productId);
            if (index > -1) {
                categoryArray.splice(index, 1);
            }

            loadProducts();
            showNotification('تم حذف المنتج بنجاح');
        }
    }
}

function viewProduct(productId) {
    // Redirect to product details page
    window.open(`product-details.html?id=${productId}`, '_blank');
}

// Order management functions
function viewOrder(orderId) {
    // Show order details modal
    const modal = document.getElementById('orderDetailsModal');
    const content = document.getElementById('orderDetailsContent');

    // Mock order details
    content.innerHTML = `
        <div class="order-details">
            <div class="order-header">
                <h3>تفاصيل الطلب ${orderId}</h3>
                <span class="status-badge completed">مكتملة</span>
            </div>
            <div class="order-info">
                <div class="info-section">
                    <h4>معلومات العميل</h4>
                    <p><strong>الاسم:</strong> أحمد محمد</p>
                    <p><strong>البريد الإلكتروني:</strong> ahmed@example.com</p>
                    <p><strong>رقم الجوال:</strong> 0512345678</p>
                </div>
                <div class="info-section">
                    <h4>تفاصيل الطلب</h4>
                    <p><strong>تاريخ الطلب:</strong> 2024-01-15</p>
                    <p><strong>طريقة الدفع:</strong> تحويل بنكي</p>
                    <p><strong>المجموع:</strong> 190 ريال</p>
                </div>
            </div>
            <div class="order-items">
                <h4>المنتجات</h4>
                <div class="order-item">
                    <img src="images/itunes.png" alt="بطاقة iTunes 50$" class="order-item-image">
                    <div class="order-item-info">
                        <div class="order-item-name">بطاقة iTunes 50$</div>
                        <div class="order-item-details">الكمية: 1 • السعر: 190 ريال</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeOrderDetailsModal() {
    const modal = document.getElementById('orderDetailsModal');
    modal.classList.remove('active');
}

function editOrder(orderId) {
    // For now, just show a notification
    showNotification('ميزة تعديل الطلبات قيد التطوير');
}

// User management functions
function viewUser(email) {
    showNotification(`عرض تفاصيل المستخدم: ${email}`);
}

function editUser(email) {
    showNotification(`تعديل المستخدم: ${email}`);
}

function exportUsers() {
    showNotification('جاري تصدير بيانات العملاء...');
}

// Settings functions
function handleSettingsSave(e) {
    e.preventDefault();
    showNotification('تم حفظ الإعدادات بنجاح');
}

// Refresh dashboard
function refreshDashboard() {
    loadDashboardData();
    showNotification('تم تحديث لوحة المعلومات');
}

// Utility functions
function showNotification(message) {
    // Use the existing notification system from script.js
    if (typeof showNotification === 'function') {
        showNotification(message);
    } else {
        alert(message);
    }
}

// Get all products (from script.js)
function getAllProducts() {
    if (typeof productsData !== 'undefined') {
        return [...(productsData.bestSellers || []), ...(productsData.giftCards || [])];
    }
    return [];
}

// Find product by ID (from script.js)
function findProduct(id) {
    if (typeof findProduct === 'function') {
        return findProduct(id);
    }
    const allProducts = getAllProducts();
    return allProducts.find(p => p.id === id);
}
