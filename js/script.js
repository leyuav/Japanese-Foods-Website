import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

document.getElementById("order-now").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "hidden"; // Prevent scrolling
});

document.getElementById("overlay").addEventListener("click", function (event) {
  if (event.target === document.getElementById("overlay")) {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = ""; // Allow scrolling
  }
});

document.getElementById("how-to-order").addEventListener("click", function () {
  window.open("https://www.youtube.com/", "_blank");
});

document.getElementById("learn-more").addEventListener("click", function () {
  window.open("https://sushiuniversity.jp/basicknowledge", "_blank");
});

document.getElementById("payment-button").addEventListener("click", function () {
  window.location.href = "https://buy.stripe.com/5kAeXo4FE0E9gN26oo";
});
