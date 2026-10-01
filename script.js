```javascript
let cart = [];


// Add product to cart
function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    document.getElementById("cartCount").textContent = cart.length;

    alert(productName + " added to cart!");
}


// Show cart
function showCart() {

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let total = 0;
    let message = "Your Cart:\n\n";

    cart.forEach((item, index) => {

        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;

        total += item.price;
    });

    message += `\nTotal: ₹${total}`;

    alert(message);
}


// Search products
function searchProducts() {

    const searchValue =
        document.getElementById("searchInput").value
        .toLowerCase()
        .trim();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const productName =
            product.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}


// Search when pressing Enter
document
    .getElementById("searchInput")
    .addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }
    });


// Contact form
document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        this.reset();
    });
```
