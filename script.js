const menuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".close-button");
const linksContainer = document.querySelector(".links-container");

function openMenu(){
  linksContainer.style.display = "flex";
  menuButton.style.display = "none";
  closeButton.style.display = "block";
};

function closeMenu(){
  linksContainer.style.display = "none";
  closeButton.style.display = "none";
  menuButton.style.display = "block"
};

menuButton.addEventListener("click", ()=>{
  openMenu();
});

closeButton.addEventListener("click", ()=>{
  closeMenu();
});