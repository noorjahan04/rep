let currentUser = null;

function login() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Enter a valid username!");
        return;
    }
    currentUser = username;
    document.getElementById("cartSection").style.display = "block";
    loadCart();
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem(currentUser)) || [];
    displayCart(cart);
}

function saveCart(cart) {
    localStorage.setItem(currentUser, JSON.stringify(cart));
}

function addItem() {
    if (!currentUser) {
        alert("Log in first!");
        return;
    }

    let itemName = document.getElementById("itemName").value.trim();
    let price = parseFloat(document.getElementById("itemPrice").value);
    let quantity = parseInt(document.getElementById("itemQuantity").value);

    if (!itemName || isNaN(price) || isNaN(quantity) || price <= 0 || quantity <= 0) {
        alert("Enter valid item details!");
        return;
    }

    let cart = JSON.parse(localStorage.getItem(currentUser)) || [];
    let existingItem = cart.find(item => item.itemName === itemName);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ itemName, price, quantity });
    }

    saveCart(cart);
    displayCart(cart);
}

function removeItem(itemName) {
    let cart = JSON.parse(localStorage.getItem(currentUser)) || [];
    cart = cart.filter(item => item.itemName !== itemName);
    saveCart(cart);
    displayCart(cart);
}

function updateQuantity(itemName, newQuantity) {
    if (newQuantity <= 0) return removeItem(itemName);

    let cart = JSON.parse(localStorage.getItem(currentUser)) || [];
    let item = cart.find(item => item.itemName === itemName);
    if (item) {
        item.quantity = newQuantity;
    }
    saveCart(cart);
    displayCart(cart);
}

function displayCart(cart) {
    let cartList = document.getElementById("cartList");
    let totalCost = 0;
    cartList.innerHTML = "";

    cart.forEach(item => {
        let listItem = document.createElement("li");
        let itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        listItem.innerHTML = `
            ${item.itemName} - $${item.price} x 
            <input type="number" min="1" value="${item.quantity}" 
                onchange="updateQuantity('${item.itemName}', this.value)">
            = $${itemTotal} 
            <button onclick="removeItem('${item.itemName}')">Remove</button>
        `;

        cartList.appendChild(listItem);
    });

    document.getElementById("totalCost").textContent = totalCost.toFixed(2);
}