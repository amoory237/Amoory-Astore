// Products Data with detailed information
const productsData = {
    bestSellers: [
        {
            id: 1,
            name: "شدات ببجي 660 UC",
            price: 35,
            originalPrice: 45,
            image: "images/pubg.png",
            images: ["images/pubg.png", "images/pubg.png", "images/pubg.png"],
            badge: "عرض خاص",
            category: "pubg",
            categoryName: "شدات ببجي",
            rating: 4.8,
            reviewsCount: 245,
            description: "احصل على 660 شدة ببجي موبايل فوراً! شحن سريع وآمن 100%. استمتع بتجربة لعب أفضل مع الشدات التي تمكنك من شراء أفضل الأسلحة والملابس الحصرية في ببجي موبايل.",
            features: [
                "شحن فوري خلال 1-5 دقائق",
                "ضمان استرجاع المال 100%",
                "دعم فني متاح 24/7",
                "آمن ومضمون بالكامل",
                "يعمل في جميع المناطق"
            ],
            usageInstructions: [
                "قم بتسجيل الدخول إلى حسابك في لعبة PUBG Mobile",
                "اذهب إلى متجر اللعبة",
                "اختر شراء UC",
                "أدخل كود الشحن المرسل إليك",
                "استمتع بشداتك الجديدة!"
            ]
        },
        {
            id: 2,
            name: "شدات ببجي 1800 UC",
            price: 90,
            originalPrice: 110,
            image: "images/pubg.png",
            images: ["images/pubg.png", "images/pubg.png", "images/pubg.png"],
            badge: "الأكثر مبيعاً",
            category: "pubg",
            categoryName: "شدات ببجي",
            rating: 4.9,
            reviewsCount: 523,
            description: "باقة 1800 شدة ببجي موبايل - الخيار الأمثل للاعبين المحترفين! احصل على كمية كبيرة من الشدات بسعر مخفض وتمتع بجميع مميزات اللعبة الحصرية.",
            features: [
                "أفضل قيمة مقابل السعر",
                "شحن فوري خلال دقائق",
                "ضمان استرجاع المال",
                "دعم فني على مدار الساعة",
                "صالح لجميع السيرفرات"
            ],
            usageInstructions: [
                "قم بتسجيل الدخول إلى حسابك في لعبة PUBG Mobile",
                "اذهب إلى متجر اللعبة",
                "اختر شراء UC",
                "أدخل كود الشحن المرسل إليك",
                "استمتع بشداتك الجديدة!"
            ]
        },
        {
            id: 3,
            name: "بطاقة iTunes 50$",
            price: 190,
            image: "images/itunes.png",
            images: ["images/itunes.png", "images/itunes.png", "images/itunes.png"],
            badge: "الأكثر مبيعاً",
            category: "itunes",
            categoryName: "بطاقات iTunes",
            rating: 4.7,
            reviewsCount: 389,
            description: "بطاقة iTunes بقيمة 50 دولار - استمتع بتحميل التطبيقات والألعاب والموسيقى والأفلام من متجر Apple. صالحة لجميع خدمات Apple بما في ذلك App Store و Apple Music.",
            features: [
                "صالحة لجميع خدمات Apple",
                "لا تتطلب بطاقة ائتمان",
                "شحن فوري بعد الدفع",
                "رمز رقمي آمن 100%",
                "صالحة للاستخدام الفوري"
            ],
            usageInstructions: [
                "افتح تطبيق App Store أو iTunes",
                "اضغط على أيقونة حسابك",
                "اختر 'Redeem Gift Card'",
                "أدخل الكود المرسل إليك",
                "استمتع برصيدك الجديد!"
            ]
        },
        {
            id: 4,
            name: "بطاقة PlayStation 25$",
            price: 95,
            image: "images/playstation.png",
            images: ["images/playstation.png", "images/playstation.png", "images/playstation.png"],
            category: "playstation",
            categoryName: "بطاقات PlayStation",
            rating: 4.6,
            reviewsCount: 156,
            description: "بطاقة PlayStation Store بقيمة 25 دولار - اشترِ أحدث الألعاب والإضافات والاشتراكات من متجر PlayStation. صالحة لـ PS4 و PS5.",
            features: [
                "صالحة لـ PS4 و PS5",
                "شراء الألعاب والإضافات",
                "الاشتراك في PlayStation Plus",
                "شحن فوري ومضمون",
                "دعم فني متواصل"
            ],
            usageInstructions: [
                "سجل الدخول إلى PlayStation Network",
                "اذهب إلى PlayStation Store",
                "اختر 'Redeem Codes'",
                "أدخل الكود المكون من 12 رقم",
                "تمتع برصيدك في المحفظة!"
            ]
        },
        {
            id: 5,
            name: "بطاقة Xbox 15$",
            price: 60,
            originalPrice: 70,
            image: "images/xbox.png",
            images: ["images/xbox.png", "images/xbox.png", "images/xbox.png"],
            category: "xbox",
            categoryName: "بطاقات Xbox",
            rating: 4.5,
            reviewsCount: 98,
            description: "بطاقة Xbox Gift Card بقيمة 15 دولار - استخدمها لشراء الألعاب والأفلام والتطبيقات من Microsoft Store. صالحة على Xbox One و Xbox Series X/S.",
            features: [
                "صالحة لجميع أجهزة Xbox",
                "شراء من Microsoft Store",
                "دعم Game Pass",
                "تسليم فوري",
                "آمنة ومضمونة"
            ],
            usageInstructions: [
                "سجل الدخول إلى حساب Microsoft",
                "افتح Microsoft Store",
                "اذهب إلى 'Redeem a code'",
                "أدخل الكود المكون من 25 حرف",
                "استمتع برصيدك!"
            ]
        },
        {
            id: 6,
            name: "بطاقة Google Play 10$",
            price: 38,
            image: "images/google-play.png",
            images: ["images/google-play.png", "images/google-play.png", "images/google-play.png"],
            category: "google",
            categoryName: "بطاقات Google Play",
            rating: 4.4,
            reviewsCount: 234,
            description: "بطاقة Google Play بقيمة 10 دولار - اشحن حسابك لشراء التطبيقات والألعاب والكتب والأفلام من متجر Google Play.",
            features: [
                "صالحة لجميع محتويات Google Play",
                "شحن فوري للحساب",
                "آمنة 100%",
                "لا حاجة لبطاقة ائتمان",
                "دعم فني مجاني"
            ],
            usageInstructions: [
                "افتح تطبيق Google Play Store",
                "اضغط على القائمة الجانبية",
                "اختر 'Redeem'",
                "أدخل الكود المرسل",
                "ابدأ بالشراء من المتجر!"
            ]
        },
        {
            id: 7,
            name: "شدات ببجي 3850 UC",
            price: 175,
            originalPrice: 200,
            image: "images/pubg.png",
            images: ["images/pubg.png", "images/pubg.png", "images/pubg.png"],
            badge: "عرض خاص",
            category: "pubg",
            categoryName: "شدات ببجي",
            rating: 4.9,
            reviewsCount: 412,
            description: "الباقة الضخمة! 3850 شدة ببجي موبايل مع خصم حصري. مثالية للاعبين الذين يريدون الحصول على جميع المحتويات الحصرية في اللعبة.",
            features: [
                "أفضل عرض - وفر 25 ريال",
                "شحن فوري ومضمون",
                "مثالية للرويال باس",
                "ضمان استرجاع المال",
                "دعم على مدار الساعة"
            ],
            usageInstructions: [
                "قم بتسجيل الدخول إلى حسابك في لعبة PUBG Mobile",
                "اذهب إلى متجر اللعبة",
                "اختر شراء UC",
                "أدخل كود الشحن المرسل إليك",
                "استمتع بشداتك الجديدة!"
            ]
        },
        {
            id: 8,
            name: "بطاقة iTunes 100$",
            price: 380,
            image: "images/itunes.png",
            images: ["images/itunes.png", "images/itunes.png", "images/itunes.png"],
            category: "itunes",
            categoryName: "بطاقات iTunes",
            rating: 4.8,
            reviewsCount: 267,
            description: "بطاقة iTunes بقيمة 100 دولار - القيمة الأفضل! استمتع بمكتبة ضخمة من التطبيقات والألعاب والموسيقى والأفلام على جميع أجهزة Apple.",
            features: [
                "قيمة كبيرة - 100 دولار",
                "صالحة لجميع خدمات Apple",
                "شحن فوري بعد الدفع",
                "آمنة ومضمونة 100%",
                "دعم فني متواصل"
            ],
            usageInstructions: [
                "افتح تطبيق App Store أو iTunes",
                "اضغط على أيقونة حسابك",
                "اختر 'Redeem Gift Card'",
                "أدخل الكود المرسل إليك",
                "استمتع برصيدك الجديد!"
            ]
        }
    ],
    giftCards: [
        {
            id: 9,
            name: "بطاقة iTunes 25$",
            price: 95,
            image: "images/itunes.png",
            images: ["images/itunes.png", "images/itunes.png", "images/itunes.png"],
            category: "itunes",
            categoryName: "بطاقات iTunes",
            rating: 4.6,
            reviewsCount: 178,
            description: "بطاقة iTunes بقيمة 25 دولار - هدية مثالية لمحبي Apple! اشحن حسابك للاستمتاع بالتطبيقات والموسيقى والأفلام.",
            features: [
                "قيمة متوسطة مثالية",
                "هدية رائعة",
                "شحن فوري",
                "آمنة 100%",
                "صالحة فوراً"
            ],
            usageInstructions: [
                "افتح تطبيق App Store أو iTunes",
                "اضغط على أيقونة حسابك",
                "اختر 'Redeem Gift Card'",
                "أدخل الكود المرسل إليك",
                "استمتع برصيدك الجديد!"
            ]
        },
        {
            id: 10,
            name: "بطاقة PlayStation 50$",
            price: 190,
            image: "images/playstation.png",
            images: ["images/playstation.png", "images/playstation.png", "images/playstation.png"],
            badge: "عرض خاص",
            category: "playstation",
            categoryName: "بطاقات PlayStation",
            rating: 4.7,
            reviewsCount: 298,
            description: "بطاقة PlayStation Store بقيمة 50 دولار - قيمة رائعة! اشترِ أحدث الألعاب والإضافات أو اشترك في PlayStation Plus.",
            features: [
                "قيمة ممتازة",
                "صالحة لـ PS4 و PS5",
                "شراء الألعاب والاشتراكات",
                "شحن فوري",
                "دعم فني 24/7"
            ],
            usageInstructions: [
                "سجل الدخول إلى PlayStation Network",
                "اذهب إلى PlayStation Store",
                "اختر 'Redeem Codes'",
                "أدخل الكود المكون من 12 رقم",
                "تمتع برصيدك في المحفظة!"
            ]
        },
        {
            id: 11,
            name: "بطاقة Xbox 25$",
            price: 95,
            image: "images/xbox.png",
            images: ["images/xbox.png", "images/xbox.png", "images/xbox.png"],
            category: "xbox",
            categoryName: "بطاقات Xbox",
            rating: 4.5,
            reviewsCount: 143,
            description: "بطاقة Xbox Gift Card بقيمة 25 دولار - القيمة المثالية للاعبين! استخدمها في شراء الألعاب والإضافات من Microsoft Store.",
            features: [
                "قيمة متوازنة",
                "صالحة لجميع أجهزة Xbox",
                "شراء من Microsoft Store",
                "تسليم فوري",
                "آمنة ومضمونة"
            ],
            usageInstructions: [
                "سجل الدخول إلى حساب Microsoft",
                "افتح Microsoft Store",
                "اذهب إلى 'Redeem a code'",
                "أدخل الكود المكون من 25 حرف",
                "استمتع برصيدك!"
            ]
        },
        {
            id: 12,
            name: "بطاقة Google Play 25$",
            price: 95,
            originalPrice: 105,
            image: "images/google-play.png",
            images: ["images/google-play.png", "images/google-play.png", "images/google-play.png"],
            category: "google",
            categoryName: "بطاقات Google Play",
            rating: 4.6,
            reviewsCount: 321,
            description: "بطاقة Google Play بقيمة 25 دولار - عرض خاص! اشحن حسابك بقيمة ممتازة لشراء التطبيقات والألعاب والمحتوى الرقمي.",
            features: [
                "عرض خاص - وفر 10 ريال",
                "قيمة ممتازة",
                "صالحة لجميع محتويات Google Play",
                "شحن فوري",
                "آمنة 100%"
            ],
            usageInstructions: [
                "افتح تطبيق Google Play Store",
                "اضغط على القائمة الجانبية",
                "اختر 'Redeem'",
                "أدخل الكود المرسل",
                "ابدأ بالشراء من المتجر!"
            ]
        }
    ]
};

// Cart State
let cart = [];

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('amoory_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('amoory_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartBadge();
        } catch (error) {
            console.error('Error loading cart:', error);
            cart = [];
        }
    }
}

// Calculate discount percentage
function calculateDiscount(price, originalPrice) {
    if (!originalPrice) return 0;
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Create product card HTML
function createProductCard(product) {
    const discount = calculateDiscount(product.price, product.originalPrice);
    const badgeClass = product.badge === 'عرض خاص' ? 'special' : '';
    
    return `
        <div class="product-card" data-product-id="${product.id}" onclick="goToProductDetails(${product.id})" style="cursor: pointer;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.src='https://via.placeholder.com/400x400/7c3aed/ffffff?text=${encodeURIComponent(product.name)}'">
                ${product.badge ? `<span class="product-badge ${badgeClass}">${product.badge}</span>` : ''}
                ${discount > 0 ? `<span class="discount-badge">-${discount}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="price">${product.price} ريال</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice} ريال</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    إضافة للسلة
                </button>
            </div>
        </div>
    `;
}

// Load products
function loadProducts() {
    const bestSellersContainer = document.getElementById('bestSellers');
    const giftCardsContainer = document.getElementById('giftCards');
    
    if (bestSellersContainer) {
        bestSellersContainer.innerHTML = productsData.bestSellers.map(createProductCard).join('');
    }
    
    if (giftCardsContainer) {
        giftCardsContainer.innerHTML = productsData.giftCards.map(createProductCard).join('');
    }
}

// Find product by ID
function findProduct(id) {
    return [...productsData.bestSellers, ...productsData.giftCards].find(p => p.id === id);
}

// Add to cart
function addToCart(productId) {
    const product = findProduct(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartBadge();
    saveCart();
    showNotification('تمت إضافة المنتج إلى السلة');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartBadge();
    saveCart();
    updateCartModal();
}

// Update quantity
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartBadge();
        saveCart();
        updateCartModal();
    }
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
}

// Update cart modal
function updateCartModal() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">السلة فارغة</p>';
        cartTotal.textContent = '0 ريال';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image"
                 onerror="this.src='https://via.placeholder.com/100x100/7c3aed/ffffff'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ريال</div>
                <div class="cart-item-quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    cartTotal.textContent = `${total} ريال`;
}

// Show notification
function showNotification(message) {
    // Simple alert for now - can be enhanced with custom notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 5rem;
        right: 1rem;
        background: var(--primary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Mobile menu toggle
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Cart modal toggle
function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    modal.classList.toggle('active');
    if (modal.classList.contains('active')) {
        updateCartModal();
    }
}

// Search functionality
function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    console.log('البحث عن:', query);
    // يمكن إضافة منطق البحث هنا
}

// Newsletter form submission
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    showNotification('تم الاشتراك بنجاح!');
    e.target.reset();
}

// Save product to localStorage
function saveProductToLocalStorage(product) {
    localStorage.setItem('amoory_selected_product', JSON.stringify(product));
}

// Load product from localStorage
function loadProductFromLocalStorage() {
    const savedProduct = localStorage.getItem('amoory_selected_product');
    if (savedProduct) {
        try {
            return JSON.parse(savedProduct);
        } catch (error) {
            console.error('Error loading product:', error);
            return null;
        }
    }
    return null;
}

// Navigate to product details page
function goToProductDetails(productId) {
    const product = findProduct(productId);
    if (product) {
        saveProductToLocalStorage(product);
        window.location.href = 'product-details.html';
    }
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    return starsHTML;
}

// Get similar products based on category
function getSimilarProducts(productId, category, limit = 4) {
    const allProducts = [...productsData.bestSellers, ...productsData.giftCards];
    return allProducts
        .filter(p => p.id !== productId && p.category === category)
        .slice(0, limit);
}

// Load product details on product-details.html page
function loadProductDetails() {
    const product = loadProductFromLocalStorage();
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    // Update page title
    document.getElementById('pageTitle').textContent = `${product.name} - AMOORY_STORE`;
    
    // Update breadcrumb
    document.getElementById('breadcrumbCategory').textContent = product.categoryName || 'المنتجات';
    document.getElementById('breadcrumbProduct').textContent = product.name;
    
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Update product badges
    const badgeContainer = document.getElementById('productBadgeContainer');
    if (product.badge || product.originalPrice) {
        const discount = calculateDiscount(product.price, product.originalPrice);
        const badgeClass = product.badge === 'عرض خاص' ? 'special' : '';
        badgeContainer.innerHTML = `
            ${product.badge ? `<span class="product-badge-detail ${badgeClass}">${product.badge}</span>` : ''}
            ${discount > 0 ? `<span class="discount-badge-detail">-${discount}%</span>` : ''}
        `;
    }
    
    // Update thumbnail images
    const thumbnailsContainer = document.getElementById('thumbnailImages');
    if (product.images && product.images.length > 0) {
        thumbnailsContainer.innerHTML = product.images.map((img, index) => `
            <img src="${img}" alt="${product.name} ${index + 1}" 
                 class="thumbnail-image ${index === 0 ? 'active' : ''}"
                 onclick="changeMainImage('${img}', this)">
        `).join('');
    }
    
    // Update product name
    document.getElementById('productName').textContent = product.name;
    
    // Update rating
    const starsContainer = document.getElementById('productStars');
    starsContainer.innerHTML = generateStars(product.rating || 4.5);
    const ratingText = document.getElementById('ratingText');
    ratingText.textContent = `(${product.rating || 4.5} من 5 - ${product.reviewsCount || 0} تقييم)`;
    
    // Update price
    document.getElementById('currentPrice').textContent = `${product.price} ريال`;
    const originalPriceEl = document.getElementById('originalPrice');
    if (product.originalPrice) {
        originalPriceEl.textContent = `${product.originalPrice} ريال`;
        originalPriceEl.style.display = 'inline';
    } else {
        originalPriceEl.style.display = 'none';
    }
    
    const discountBadge = document.getElementById('discountBadge');
    const discount = calculateDiscount(product.price, product.originalPrice);
    if (discount > 0) {
        discountBadge.textContent = `وفر ${discount}%`;
        discountBadge.style.display = 'inline-block';
    } else {
        discountBadge.style.display = 'none';
    }
    
    // Update description
    document.getElementById('productDescription').textContent = product.description || 'لا يوجد وصف متاح';
    
    // Update features
    const featuresContainer = document.getElementById('productFeatures');
    if (product.features && product.features.length > 0) {
        featuresContainer.innerHTML = product.features.map(feature => `
            <li><i class="fas fa-check-circle"></i> ${feature}</li>
        `).join('');
    }
    
    // Update usage instructions
    const usageContainer = document.getElementById('usageInstructions');
    if (product.usageInstructions && product.usageInstructions.length > 0) {
        usageContainer.innerHTML = product.usageInstructions.map(instruction => `
            <li><i class="fas fa-check-circle"></i> ${instruction}</li>
        `).join('');
    }
    
    // Load similar products
    const similarProducts = getSimilarProducts(product.id, product.category);
    const similarContainer = document.getElementById('similarProducts');
    if (similarProducts.length > 0) {
        similarContainer.innerHTML = similarProducts.map(createProductCard).join('');
    } else {
        similarContainer.innerHTML = '<p class="no-products">لا توجد منتجات مشابهة</p>';
    }
    
    // Add to cart button functionality
    const addToCartBtn = document.getElementById('addToCartDetail');
    const quantityInput = document.getElementById('productQuantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    
    decreaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        for (let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
        quantityInput.value = 1;
    });
}

// Change main product image
function changeMainImage(imageSrc, thumbnailElement) {
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail-image').forEach(thumb => {
        thumb.classList.remove('active');
    });
    thumbnailElement.classList.add('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    
    // Load products
    loadProducts();
    
    // Initialize filters and search system
    initializeFilters();
    
    // Initialize checkout page if exists
    initCheckout();
    
    // Menu button
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCartModal);
    }
    
    // Close cart modal
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', toggleCartModal);
    }
    
    // Close modal on outside click
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                toggleCartModal();
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Navigate to checkout page
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('السلة فارغة! الرجاء إضافة منتجات أولاً');
        return;
    }
    window.location.href = 'checkout.html';
}

// Load checkout page data
function loadCheckoutPage() {
    // Check if cart is empty
    if (cart.length === 0) {
        const container = document.querySelector('.checkout-section .container');
        container.innerHTML = `
            <div class="checkout-empty">
                <i class="fas fa-shopping-cart checkout-empty-icon"></i>
                <h2 class="checkout-empty-title">السلة فارغة</h2>
                <p class="checkout-empty-text">لا توجد منتجات في سلة التسوق</p>
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-shopping-bag"></i>
                    تسوق الآن
                </a>
            </div>
        `;
        return;
    }

    // Load order items
    const orderItemsContainer = document.getElementById('orderItems');
    if (orderItemsContainer) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        orderItemsContainer.innerHTML = cart.map(item => `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}" class="order-item-image"
                     onerror="this.src='https://via.placeholder.com/100x100/7c3aed/ffffff'">
                <div class="order-item-info">
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-details">
                        <span class="order-item-quantity">الكمية: ${item.quantity}</span>
                        <span class="order-item-price">${item.price * item.quantity} ريال</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('subtotal').textContent = `${total} ريال`;
        document.getElementById('totalPrice').textContent = `${total} ريال`;
    }
}

// Form validation functions
function validateFullName(name) {
    return name.trim().length >= 3;
}

function validatePhone(phone) {
    const phoneRegex = /^(05|5)[0-9]{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }
    const inputElement = document.getElementById(fieldId);
    if (inputElement) {
        inputElement.style.borderColor = '#ef4444';
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('active');
    }
    const inputElement = document.getElementById(fieldId);
    if (inputElement) {
        inputElement.style.borderColor = '';
    }
}

// Handle checkout form submission
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate full name
    const fullName = document.getElementById('fullName').value;
    if (!validateFullName(fullName)) {
        showError('fullName', 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل)');
        isValid = false;
    } else {
        clearError('fullName');
    }
    
    // Validate phone
    const phone = document.getElementById('phone').value;
    if (!validatePhone(phone)) {
        showError('phone', 'يرجى إدخال رقم جوال صحيح (مثال: 0512345678)');
        isValid = false;
    } else {
        clearError('phone');
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        showError('email', 'يرجى إدخال بريد إلكتروني صحيح');
        isValid = false;
    } else {
        clearError('email');
    }
    
    // Validate terms agreement
    const agreeTerms = document.getElementById('agreeTerms').checked;
    if (!agreeTerms) {
        showError('terms', 'يجب الموافقة على الشروط والأحكام');
        isValid = false;
    } else {
        clearError('terms');
    }
    
    if (!isValid) {
        showNotification('يرجى تصحيح الأخطاء في النموذج');
        return;
    }
    
    // Get form data
    const notes = document.getElementById('notes').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    const orderData = {
        customer: {
            fullName,
            phone,
            email,
            notes
        },
        paymentMethod,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderDate: new Date().toISOString()
    };
    
    // Save order to localStorage (temporary storage)
    localStorage.setItem('amoory_last_order', JSON.stringify(orderData));
    
    // Clear cart
    cart = [];
    saveCart();
    
    // Show success message
    showNotification('تم تأكيد الطلب بنجاح!');
    
    // Show WhatsApp confirmation option
    setTimeout(() => {
        showWhatsAppConfirmation(orderData);
        
        // Auto-redirect after 30 seconds if user doesn't interact
        setTimeout(() => {
            if (window.pendingWhatsAppOrder) {
                alert(`تم حفظ طلبك بنجاح!\n\nاسم العميل: ${fullName}\nرقم الجوال: ${phone}\nالبريد الإلكتروني: ${email}\nطريقة الدفع: ${paymentMethod}\nالمجموع: ${orderData.total} ريال\n\nسيتم التواصل معك قريباً`);
                window.location.href = 'index.html';
            }
        }, 30000);
    }, 500);
}

// Initialize checkout page
function initCheckout() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        loadCheckoutPage();
        
        // Add real-time validation
        const fullNameInput = document.getElementById('fullName');
        if (fullNameInput) {
            fullNameInput.addEventListener('blur', () => {
                if (fullNameInput.value && !validateFullName(fullNameInput.value)) {
                    showError('fullName', 'يرجى إدخال الاسم الكامل (3 أحرف على الأقل)');
                } else if (fullNameInput.value) {
                    clearError('fullName');
                }
            });
        }
        
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('blur', () => {
                if (phoneInput.value && !validatePhone(phoneInput.value)) {
                    showError('phone', 'يرجى إدخال رقم جوال صحيح (مثال: 0512345678)');
                } else if (phoneInput.value) {
                    clearError('phone');
                }
            });
        }
        
        const emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', () => {
                if (emailInput.value && !validateEmail(emailInput.value)) {
                    showError('email', 'يرجى إدخال بريد إلكتروني صحيح');
                } else if (emailInput.value) {
                    clearError('email');
                }
            });
        }
        
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
}

// ========================================
// WhatsApp Integration Functions
// ========================================

// WhatsApp phone number (can be customized)
const WHATSAPP_NUMBER = '966501234567';

/**
 * Open WhatsApp for general support/communication
 */
function openWhatsAppSupport() {
    const message = `مرحباً 👋\nأحتاج إلى مساعدة بخصوص المنتجات في متجر AMOORY_STORE`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

/**
 * Format order details as professional WhatsApp message
 * @param {Object} orderData - Order data object containing customer, items, payment info
 * @returns {string} Formatted message
 */
function formatOrderMessage(orderData) {
    const { customer, items, total, paymentMethod, orderDate } = orderData;
    
    // Format order date
    const date = new Date(orderDate);
    const formattedDate = date.toLocaleDateString('ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Build message
    let message = `🛍️ *طلب جديد من متجر AMOORY_STORE*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    // Customer information
    message += `👤 *بيانات العميل:*\n`;
    message += `الاسم: ${customer.fullName}\n`;
    message += `الجوال: ${customer.phone}\n`;
    message += `البريد: ${customer.email}\n`;
    if (customer.notes) {
        message += `ملاحظات: ${customer.notes}\n`;
    }
    message += `\n`;
    
    // Order items
    message += `📦 *تفاصيل الطلب:*\n`;
    items.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   الكمية: ${item.quantity}\n`;
        message += `   السعر: ${item.price} ريال\n`;
        message += `   المجموع: ${item.price * item.quantity} ريال\n`;
        if (index < items.length - 1) {
            message += `\n`;
        }
    });
    message += `\n`;
    
    // Payment information
    message += `💳 *معلومات الدفع:*\n`;
    message += `طريقة الدفع: ${paymentMethod}\n`;
    message += `المجموع الكلي: *${total} ريال*\n`;
    message += `\n`;
    
    // Order metadata
    message += `📅 *تاريخ الطلب:*\n`;
    message += `${formattedDate}\n`;
    message += `\n`;
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `شكراً لثقتكم بنا 🙏`;
    
    return message;
}

/**
 * Send order details via WhatsApp
 * @param {Object} orderData - Order data object
 */
function sendOrderViaWhatsApp(orderData) {
    const message = formatOrderMessage(orderData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
}

/**
 * Show WhatsApp confirmation option after order placement
 * @param {Object} orderData - Order data object
 */
function showWhatsAppConfirmation(orderData) {
    // Create confirmation element if it doesn't exist
    let confirmationEl = document.getElementById('whatsappConfirmation');
    
    if (!confirmationEl) {
        confirmationEl = document.createElement('div');
        confirmationEl.id = 'whatsappConfirmation';
        confirmationEl.className = 'whatsapp-confirmation';
        
        confirmationEl.innerHTML = `
            <div class="whatsapp-confirmation-header">
                <div class="whatsapp-confirmation-icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <h3 class="whatsapp-confirmation-title">إرسال الطلب عبر واتساب</h3>
            </div>
            <p class="whatsapp-confirmation-text">
                هل ترغب في إرسال تفاصيل طلبك عبر واتساب للحصول على خدمة أسرع وأفضل؟
            </p>
            <div class="whatsapp-buttons">
                <button class="btn btn-whatsapp" onclick="confirmSendToWhatsApp()">
                    <i class="fab fa-whatsapp"></i>
                    إرسال عبر واتساب
                </button>
                <button class="btn btn-outline" onclick="closeWhatsAppConfirmation()">
                    لاحقاً
                </button>
            </div>
        `;
        
        // Insert after checkout form or at the beginning of checkout section
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.parentElement.insertBefore(confirmationEl, checkoutForm.nextSibling);
        }
    }
    
    // Store order data for later use
    window.pendingWhatsAppOrder = orderData;
    
    // Show confirmation
    setTimeout(() => {
        confirmationEl.classList.add('show');
    }, 100);
}

/**
 * Confirm sending order to WhatsApp
 */
function confirmSendToWhatsApp() {
    if (window.pendingWhatsAppOrder) {
        sendOrderViaWhatsApp(window.pendingWhatsAppOrder);
        closeWhatsAppConfirmation();
        
        // Show success notification
        showNotification('جاري فتح واتساب...');
    }
}

/**
 * Close WhatsApp confirmation
 */
function closeWhatsAppConfirmation() {
    const confirmationEl = document.getElementById('whatsappConfirmation');
    if (confirmationEl) {
        confirmationEl.classList.remove('show');
    }
    
    // Clear pending order and redirect to home
    window.pendingWhatsAppOrder = null;
    
    // Show thank you message and redirect
    setTimeout(() => {
        const lastOrder = JSON.parse(localStorage.getItem('amoory_last_order') || '{}');
        if (lastOrder.customer) {
            alert(`شكراً لطلبك من متجر AMOORY_STORE!\n\nاسم العميل: ${lastOrder.customer.fullName}\nالمجموع: ${lastOrder.total} ريال\n\nسيتم التواصل معك قريباً`);
        }
        window.location.href = 'index.html';
    }, 300);
}

// ========================================
// Advanced Filtering & Search System
// ========================================

// Filter state
let currentFilters = {
    category: 'all',
    sort: 'bestseller',
    priceRange: 'all',
    searchQuery: ''
};

// Get all products from both arrays
function getAllProducts() {
    return [...productsData.bestSellers, ...productsData.giftCards];
}

// Filter products based on current filters
function filterProducts(products) {
    let filtered = [...products];
    
    // Filter by category
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilters.category);
    }
    
    // Filter by price range
    if (currentFilters.priceRange !== 'all') {
        const [min, max] = currentFilters.priceRange.split('-').map(v => {
            if (v === '200+') return [200, Infinity];
            return parseInt(v);
        });
        
        if (currentFilters.priceRange === '200+') {
            filtered = filtered.filter(p => p.price >= 200);
        } else if (currentFilters.priceRange === '0-50') {
            filtered = filtered.filter(p => p.price < 50);
        } else {
            const [rangeMin, rangeMax] = currentFilters.priceRange.split('-').map(Number);
            filtered = filtered.filter(p => p.price >= rangeMin && p.price <= rangeMax);
        }
    }
    
    // Filter by search query
    if (currentFilters.searchQuery) {
        const query = currentFilters.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.categoryName.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

// Sort products based on sort option
function sortProducts(products) {
    const sorted = [...products];
    
    switch (currentFilters.sort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'bestseller':
        default:
            return sorted.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
    }
}

// Search products
function searchProducts(query) {
    currentFilters.searchQuery = query;
    applyFilters();
}

// Apply all filters and render results
function applyFilters() {
    const allProducts = getAllProducts();
    let filtered = filterProducts(allProducts);
    filtered = sortProducts(filtered);
    
    renderFilteredProducts(filtered);
    updateResultsCount(filtered.length);
    updateURL();
    
    // Show/hide filtered section
    const hasActiveFilters = 
        currentFilters.category !== 'all' ||
        currentFilters.sort !== 'bestseller' ||
        currentFilters.priceRange !== 'all' ||
        currentFilters.searchQuery !== '';
    
    const filteredSection = document.getElementById('filteredProductsSection');
    const categoriesSection = document.getElementById('categories');
    const bestSellersSection = categoriesSection?.nextElementSibling;
    
    if (hasActiveFilters) {
        if (filteredSection) filteredSection.style.display = 'block';
        if (categoriesSection) categoriesSection.style.display = 'none';
        if (bestSellersSection && bestSellersSection.querySelector('#bestSellers')) {
            bestSellersSection.style.display = 'none';
        }
        // Hide gift cards section too
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            if (section.querySelector('#giftCards')) {
                section.style.display = 'none';
            }
        });
    } else {
        if (filteredSection) filteredSection.style.display = 'none';
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (bestSellersSection && bestSellersSection.querySelector('#bestSellers')) {
            bestSellersSection.style.display = 'block';
        }
        // Show gift cards section
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            if (section.querySelector('#giftCards')) {
                section.style.display = 'block';
            }
        });
    }
}

// Render filtered products
function renderFilteredProducts(products) {
    const container = document.getElementById('filteredProducts');
    const noResults = document.getElementById('noResults');
    
    if (!container) return;
    
    if (products.length === 0) {
        container.style.display = 'none';
        if (noResults) noResults.style.display = 'flex';
    } else {
        container.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        container.innerHTML = products.map(createProductCard).join('');
    }
}

// Update results count
function updateResultsCount(count) {
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        if (count === 0) {
            resultsCount.textContent = 'لا توجد منتجات';
        } else if (count === 1) {
            resultsCount.textContent = 'تم العثور على منتج واحد';
        } else if (count === 2) {
            resultsCount.textContent = 'تم العثور على منتجين';
        } else if (count <= 10) {
            resultsCount.textContent = `تم العثور على ${count} منتجات`;
        } else {
            resultsCount.textContent = `تم العثور على ${count} منتج`;
        }
    }
}

// Update URL with current filters
function updateURL() {
    const params = new URLSearchParams();
    
    if (currentFilters.category !== 'all') {
        params.set('category', currentFilters.category);
    }
    if (currentFilters.sort !== 'bestseller') {
        params.set('sort', currentFilters.sort);
    }
    if (currentFilters.priceRange !== 'all') {
        params.set('price', currentFilters.priceRange);
    }
    if (currentFilters.searchQuery) {
        params.set('q', currentFilters.searchQuery);
    }
    
    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

// Load filters from URL
function loadFiltersFromURL() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('category')) {
        currentFilters.category = params.get('category');
    }
    if (params.has('sort')) {
        currentFilters.sort = params.get('sort');
    }
    if (params.has('price')) {
        currentFilters.priceRange = params.get('price');
    }
    if (params.has('q')) {
        currentFilters.searchQuery = params.get('q');
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = currentFilters.searchQuery;
        }
    }
    
    // Update UI to reflect loaded filters
    updateFilterButtonStates();
}

// Update filter button states
function updateFilterButtonStates() {
    // Category buttons
    document.querySelectorAll('[data-category]').forEach(btn => {
        if (btn.dataset.category === currentFilters.category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Sort buttons
    document.querySelectorAll('[data-sort]').forEach(btn => {
        if (btn.dataset.sort === currentFilters.sort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Price buttons
    document.querySelectorAll('[data-price]').forEach(btn => {
        if (btn.dataset.price === currentFilters.priceRange) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Clear all filters
function clearAllFilters() {
    currentFilters = {
        category: 'all',
        sort: 'bestseller',
        priceRange: 'all',
        searchQuery: ''
    };
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    updateFilterButtonStates();
    applyFilters();
}

// Initialize filter event listeners
function initializeFilters() {
    // Category filter buttons
    document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilters.category = btn.dataset.category;
            updateFilterButtonStates();
            applyFilters();
        });
    });
    
    // Sort filter buttons
    document.querySelectorAll('[data-sort]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilters.sort = btn.dataset.sort;
            updateFilterButtonStates();
            applyFilters();
        });
    });
    
    // Price filter buttons
    document.querySelectorAll('[data-price]').forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilters.priceRange = btn.dataset.price;
            updateFilterButtonStates();
            applyFilters();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Real-time search with debounce
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchProducts(e.target.value);
            }, 300);
        });
    }
    
    // Clear filters button
    const clearFiltersBtn = document.getElementById('clearFiltersBtn');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // Category cards click - filter by category
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            if (category) {
                currentFilters.category = category;
                updateFilterButtonStates();
                applyFilters();
                
                // Scroll to filtered products section
                const filteredSection = document.getElementById('filteredProductsSection');
                if (filteredSection) {
                    filteredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Load filters from URL on page load
    loadFiltersFromURL();
    
    // Apply initial filters if any
    if (currentFilters.category !== 'all' || 
        currentFilters.sort !== 'bestseller' || 
        currentFilters.priceRange !== 'all' || 
        currentFilters.searchQuery) {
        applyFilters();
    } else {
        // Just update the counter with all products
        updateResultsCount(getAllProducts().length);
    }
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
