// CART
function addToCart() {
    alert("Product added to cart!");
}

// CONTACT FORM VALIDATION (IMPROVED)
function validateContactForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    if (name.length < 2) {
        document.getElementById("nameError").innerText = "Name too short";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message too short";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
    }

    return valid;
}

// NEWSLETTER
function subscribeNews() {
    let email = document.getElementById("newsletter-email").value;

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }

    alert("Subscribed successfully!");
    return false;
}

// ACCORDION
function toggleAccordion(id) {
    let panel = document.getElementById(id);

    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// PRODUCT DATA (DYNAMIC CONTENT)
const products = [
    { name: "Shift Knob", price: 150, img: "Images/shift.png" },
    { name: "LED Ambient Lights", price: 150, img: "Images/lights.png" },
    { name: "Phone Mount", price: 199, img: "Images/mount.png" }
];

// RENDER PRODUCTS
function renderProducts(list, containerId) {

    let container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    list.forEach(p => {

        container.innerHTML += `
        <div class="product-card">
            <img src="${p.img}" onclick="openLightbox('${p.img}')">
            <h3>${p.name}</h3>
            <p>R${p.price}</p>
            <button onclick="addToCart()">Add To Cart</button>
        </div>`;
    });
}

// SEARCH FILTER
function filterProducts(query) {
    return products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );
}

// LIGHTBOX
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightboxImg").src = img;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// INIT
document.addEventListener("DOMContentLoaded", () => {

    renderProducts(products, "productContainer");
    renderProducts(products, "shopContainer");

    let search = document.getElementById("shopSearch");
    if (search) {
        search.addEventListener("input", (e) => {
            renderProducts(filterProducts(e.target.value), "shopContainer");
        });
    }
});