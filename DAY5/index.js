const panel = document.querySelectorAll(".panel");

function toggleOpen() {
  panel.forEach((item) => item.classList.remove("open"));
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panel.forEach((panel) => panel.addEventListener("click", toggleOpen));
panel.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
