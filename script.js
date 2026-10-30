const mediaQuery = window.matchMedia('(max-width: 1030px)');

function handleTabletChange(e) {
    let nav = document.querySelector(".nav")
    let conMenuBtn = document.querySelector(".container-menu-btn")
    let header = document.querySelector(".header")

  if (e.matches) {
    nav.classList.add("hidden-menu")
    conMenuBtn.classList.remove("hidden-menu")
    header.classList.add("header-after-hidden")
    
} else {
    nav.classList.remove("hidden-menu")
    conMenuBtn.classList.add("hidden-menu")
    header.classList.remove("header-after-hidden")
  }
}

mediaQuery.addEventListener('change', handleTabletChange);

handleTabletChange(mediaQuery);
