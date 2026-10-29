
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

// Mobile navigation menu
menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("open");

  menuBtn.textContent = navigation.classList.contains("open")
    ? "✕"
    : "☰";
});

// Close menu after clicking a navigation link
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form: prepare a WhatsApp message
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Pakistan WhatsApp number: country code + number, without + or spaces
const whatsappNumber = "923489628796";

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const destination =
    document.getElementById("destination").value.trim();
  const message =
    document.getElementById("message").value.trim();

  if (!name || !phone || !service) {
    formStatus.textContent =
      "Please fill in your name, phone number and service.";
    return;
  }

  const whatsappMessage =
    "Assalam-o-Alaikum NK Travel!\n\n" +
    "I would like to make a travel enquiry.\n\n" +
    "Name: " + name + "\n" +
    "Phone: " + phone + "\n" +
    "Service: " + service + "\n" +
    "Destination: " + (destination || "Not specified") + "\n" +
    "Message: " + (message || "No additional message");

  const whatsappURL =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(whatsappMessage);

  formStatus.textContent =
    "Opening WhatsApp. Please review your enquiry and press Send.";

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});