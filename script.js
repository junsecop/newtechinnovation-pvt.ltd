// Sample product data - replace with your own products
const products = [
  {
    id: 1,
    title: "KYOCERA TASKalfa 2020 ",
    description:
      "A3 B/W Multifunctionals speed 18/22-minute Double side printing   ",
    // price: "$199.99",
    image:
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-2201/assets/images/taskalfa-2201.jpg",

    specs: [
      { name: "Drum life", value: " 1 lakh " },
      { name: "memory", value: "256mb" },
      { name: "paper tray", value: " 300x1" },
      { name: "Bypass Tray", value: "100 sheet" },
      { name: "Color Options", value: "Black and white" },
    ],
  },
  {
    id: 2,
    title: "KYOCERA TASKalfa 3200",
    description:
      "Advanced smartwatch with health monitoring, GPS, and long battery life. Track your fitness goals and stay connected on the go.",
    // price: "$249.99",
    image:
      "https://www.kyoceradocumentsolutions.com/in/en/products/mfp/taskalfa-4012i/assets/images/taskalfa-3212i.jpg",
    specs: [
      { name: "Drum life", value: " 1 lakh " },
      { name: "memory", value: "256mb" },
      { name: "paper tray", value: " 300x1" },
      { name: "Bypass Tray", value: "100 sheet" },
      { name: "Color Options", value: "Black and white" },
    ],
  },
  {
    id: 4,
    title: "Konica Minolta 205i ",
    description: "konica minolta printer",
    // price: "$49.99",
    image:
      "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/products/Office-Monochrome-PrintSystem/bizhub225i/Product-Overview/1-1.jpg",
    specs: [
      { name: "memory", value: "256mb" },
      { name: "paper tray", value: " 300x1" },
      { name: "speed-per minute", value: " 18x2" },
      { name: "Network print", value: " Scan" },
      { name: "Drum life", value: " " },

      { name: "Bypass Tray", value: "100 sheet" },
      { name: "Color Options", value: "Black and white" },
    ],
  },
  {
    id: 5,
    title: " KYOCERA TASKalfa 2553ci",
    description:
      "KYOCERA TASKalfa 2553ci color printer multifunctional , with trolly duplex banner printing",
    image:
      "https://www.kyoceradocumentsolutions.com/in/en/products/mfp/taskalfa-6053ci/assets/images/taskalfa-2553ci.jpg",
    specs: [
      { name: "memory", value: "8gb ssd 4gb ram" },
      { name: "paper tray", value: " 250x2" },
      { name: "speed-per minute", value: " 25 per minute" },
      {
        name: "Network ",
        value: " Prnfo@productbrochure.com for purchase information.int / Scan",
      },
      { name: "Colour-Multifunctionals", value: " 12/18" },
      { name: "Bypass Tray", value: "100 sheet" },
      { name: "Color Options", value: "Black and white" },
    ],
  },
  {
    id: 6,
    title: "KYOCERA TASKalfa ma4000",
    description:
      " ECOSYS MA4000x Print, copy and colour scan with double-sided capability. Up to 2 optional paper feeders for a total of 850 sheets",
    image:
      "https://www.kyoceradocumentsolutions.com/asia/en/products/mfp/ecosys-ma4000wifx/assets/images/product/MFP_MA4000x_comb01_front_01.jpg",
    specs: [
      { name: "memory", value: "8gb ssd 4gb ram" },
      { name: "paper tray", value: " 250x2" },
      { name: "speed-per minute", value: " 25 per minute" },
      { name: "Network ", value: " Print / Scan" },
      {
        name: "Colour-Multifunctionalnfo@productbrochure.com for purchase information.s",
        value: " 12/18",
      },
      { name: "Bypass Tray", value: "100 sheet" },
      { name: "Color Options", value: "Black and white" },
    ],
  },
];

// Function to display products
function displayProducts() {
  const productGrid = document.getElementById("productGrid");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.setAttribute("data-product-id", product.id);

    productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${
      product.title
    }" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description.substring(
                  0,
                  100
                )}...</p>
                <div class="product-price">${product.price}</div>
                <button class="view-btn">View Details</button>
            </div>
        `;

    productGrid.appendChild(productCard);
  });

  // Add event listeners to product cards and view buttons
  document.querySelectorAll(".product-card, .view-btn").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.stopPropagation();
      let productId;

      if (this.classList.contains("product-card")) {
        productId = this.getAttribute("data-product-id");
      } else {
        productId =
          this.closest(".product-card").getAttribute("data-product-id");
      }

      const product = products.find((p) => p.id == productId);
      if (product) {
        openModal(product);
      }
    });
  });
}

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(product) {
  modal.style.display = "flex";
  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalPrice.textContent = product.price;

  // Clear previous specs
  modalSpecs.innerHTML = "<h3>Specifications</h3><ul></ul>";
  const specsList = modalSpecs.querySelector("ul");

  // Add specs
  product.specs.forEach((spec) => {
    const specItem = document.createElement("li");
    specItem.innerHTML = `<span class="spec-name">${spec.name}:</span> <span>${spec.value}</span>`;
    specsList.appendChild(specItem);
  });

  // Add contact button event
  document.querySelector(".contact-btn").onclick = function () {
    alert(
      `Thank you for your interest in ${product.title}! Please contact us at newtech@gmail.com for purchase information.`
    );
  };
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.onclick = closeModal;

// Close modal when clicking outside the content
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", function () {
    mainNav.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  displayProducts();

  // Add animation to product cards when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply initial styles for animation
  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });
});
