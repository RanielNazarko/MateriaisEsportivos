// ===== CARRINHO (localStorage) =====
const CART_KEY = "arena_fc_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  saveCart(cart);
  showToast("Produto adicionado ao carrinho! 🛒");
}

function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
  if (typeof renderCartPage === "function") renderCartPage();
}

function updateQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCart(cart);
    if (typeof renderCartPage === "function") renderCartPage();
  }
}

function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = getProductById(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

// ===== TOAST =====
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== RENDER PRODUTO =====
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  const imgHtml = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : product.emoji;
  card.innerHTML = `
    <div class="product-img">
      ${imgHtml}
      ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">
        ${formatPrice(product.price)}
        ${product.oldPrice ? `<small>${formatPrice(product.oldPrice)}</small>` : ""}
      </div>
      <button class="btn-add" data-id="${product.id}">
        🛒 Adicionar
      </button>
    </div>
  `;
  card.querySelector(".btn-add").addEventListener("click", () => {
    addToCart(product.id);
  });
  return card;
}

function renderProducts(container, list) {
  if (!container) return;
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">😕</div>
        <p>Nenhum produto encontrado.</p>
      </div>
    `;
    return;
  }
  list.forEach(p => container.appendChild(createProductCard(p)));
}

// ===== BUSCA =====
function setupSearch() {
  const inputs = document.querySelectorAll(".search-input");
  inputs.forEach(input => {
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        const q = input.value.trim();
        if (q) {
          window.location.href = `busca.html?q=${encodeURIComponent(q)}`;
        }
      }
    });
  });

  // Botão de lupa (se existir)
  document.querySelectorAll(".search-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = btn.closest(".search-box")?.querySelector(".search-input");
      if (input && input.value.trim()) {
        window.location.href = `busca.html?q=${encodeURIComponent(input.value.trim())}`;
      }
    });
  });
}

// ===== FILTROS EM PÁGINAS DE CATEGORIA =====
function setupFilters(gender) {
  const filterContainer = document.getElementById("filters");
  const productsContainer = document.getElementById("products-container");
  if (!filterContainer || !productsContainer) return;

  const cats = categories[gender] || [];
  filterContainer.innerHTML = "";
  cats.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (c.id === "todos" ? " active" : "");
    btn.textContent = c.label;
    btn.dataset.cat = c.id;
    btn.addEventListener("click", () => {
      filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filtered = filterProducts({ gender, category: c.id });
      renderProducts(productsContainer, filtered);
    });
    filterContainer.appendChild(btn);
  });

  // Inicial
  renderProducts(productsContainer, filterProducts({ gender }));
}

// ===== PÁGINA DO CARRINHO =====
function renderCartPage() {
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("cart-summary");
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="icon">🛒</div>
        <h3>Seu carrinho está vazio</h3>
        <p>Adicione produtos para continuar comprando.</p>
        <br>
        <a href="index.html" class="btn-primary" style="display:inline-flex;">Ver produtos</a>
      </div>
    `;
    if (summary) summary.style.display = "none";
    return;
  }

  if (summary) summary.style.display = "block";
  container.innerHTML = "";

  cart.forEach(item => {
    const p = getProductById(item.id);
    if (!p) return;
    const div = document.createElement("div");
    div.className = "cart-item";
    const cartImg = p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : p.emoji;
    div.innerHTML = `
      <div class="cart-item-img">${cartImg}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${formatPrice(p.price)}</div>
        <div class="cart-qty">
          <button class="qty-btn" data-action="minus">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-action="plus">+</button>
        </div>
        <button class="cart-remove">Remover</button>
      </div>
      <div style="font-weight:700; min-width:90px; text-align:right;">
        ${formatPrice(p.price * item.qty)}
      </div>
    `;
    div.querySelector('[data-action="minus"]').addEventListener("click", () => updateQty(item.id, -1));
    div.querySelector('[data-action="plus"]').addEventListener("click", () => updateQty(item.id, 1));
    div.querySelector(".cart-remove").addEventListener("click", () => removeFromCart(item.id));
    container.appendChild(div);
  });

  // Resumo
  const subtotal = getCartTotal();
  const frete = subtotal >= 300 ? 0 : 29.90;
  const total = subtotal + frete;

  document.getElementById("subtotal-value").textContent = formatPrice(subtotal);
  document.getElementById("frete-value").textContent = frete === 0 ? "Grátis" : formatPrice(frete);
  document.getElementById("total-value").textContent = formatPrice(total);
}

// ===== SUPORTE FORM =====
function setupSupportForm() {
  const form = document.getElementById("support-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    showToast("Mensagem enviada com sucesso! Em breve entraremos em contato. ✅");
    form.reset();
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  setupSearch();
  setupSupportForm();

  // Página específica
  const page = document.body.dataset.page;

  if (page === "home") {
    const featured = document.getElementById("featured-products");
    if (featured) {
      // Mais vendidos / destaques
      const highlights = products.filter(p => p.badge === "Mais vendido" || p.badge === "Promoção" || p.badge === "Novo").slice(0, 8);
      renderProducts(featured, highlights.length ? highlights : products.slice(0, 8));
    }
  }

  if (page === "masculino") {
    setupFilters("masculino");
  }

  if (page === "feminino") {
    setupFilters("feminino");
  }

  if (page === "carrinho") {
    renderCartPage();
    document.getElementById("checkout-btn")?.addEventListener("click", () => {
      if (getCart().length === 0) return;
      showToast("Pedido finalizado com sucesso! Obrigado pela compra. 🎉");
      saveCart([]);
      setTimeout(() => {
        renderCartPage();
      }, 1500);
    });
  }

  if (page === "busca") {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    const input = document.querySelector(".search-input");
    if (input) input.value = q;
    const title = document.getElementById("search-title");
    if (title) title.textContent = q ? `Resultados para "${q}"` : "Busca";
    const container = document.getElementById("products-container");
    renderProducts(container, filterProducts({ search: q }));
  }
});