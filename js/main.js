let navBar = document.querySelector(".navbar");
let scrollSpan = document.querySelectorAll(
  ".progress-content .single-progress .t span:last-child"
);
let scrollProgress = document.querySelectorAll(
  ".progress-content .p > div .animate-prog"
);
let btn = document.querySelector(".back-to-top");
let navbarLIS = document.querySelectorAll(".navbar ul li");
window.onscroll = () => {
  if (scrollY >= 50) {
    navBar.style.height = "95px";
  } else if (scrollY < 50) {
    navBar.style.height = "120px";
  }
  if (scrollY >= 320) {
    scrollProgress.forEach((e) => {
      e.style.width = e.getAttribute("data-wd");
      let num = 0;
      setInterval(() => {
        num += 5;
        scrollSpan.forEach((el) => {
          if (el.textContent < el.getAttribute("data-co")) {
            el.textContent = `${num}%`;
          }
        });
      }, 100);
    });
  }
  navbarLIS.forEach((e) => {
    e.classList.remove("activ");
    if (scrollY >= 0 && scrollY < 875) {
      navbarLIS[0].classList.add("activ");
    } else if (scrollY > 875 && scrollY < 1475) {
      navbarLIS[1].classList.add("activ");
    } else if (scrollY > 1475 && scrollY < 2625) {
      navbarLIS[2].classList.add("activ");
    } else if (scrollY > 2625 && scrollY < 5200) {
      navbarLIS[3].classList.add("activ");
    } else if (scrollY > 5200) {
      navbarLIS[4].classList.add("activ");
    }
  });
  if (scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
window.onload = () => {
  if (scrollY >= 50) {
    navBar.style.height = "95px";
  } else if (scrollY < 50) {
    navBar.style.height = "120px";
  }
  if (scrollY >= 320) {
    scrollProgress.forEach((e) => {
      e.style.width = e.getAttribute("data-wd");
      let num = 0;
      setInterval(() => {
        num += 5;
        scrollSpan.forEach((el) => {
          if (el.textContent < el.getAttribute("data-co")) {
            el.textContent = `${num}%`;
          }
        });
      }, 100);
    });
  }
  navbarLIS.forEach((e) => {
    e.classList.remove("activ");
    if (scrollY >= 0 && scrollY < 875) {
      navbarLIS[0].classList.add("activ");
    } else if (scrollY > 875 && scrollY < 1475) {
      navbarLIS[1].classList.add("activ");
    } else if (scrollY > 1475 && scrollY < 2625) {
      navbarLIS[2].classList.add("activ");
    } else if (scrollY > 2625 && scrollY < 5200) {
      navbarLIS[3].classList.add("activ");
    } else if (scrollY > 5200) {
      navbarLIS[4].classList.add("activ");
    }
  });
  if (scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

navbarLIS[0].addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 0);
});
navbarLIS[1].addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 875);
});
navbarLIS[2].addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 1475);
});
navbarLIS[3].addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 2625);
});
navbarLIS[4].addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo(0, 5201);
});

btn.onclick = () => {
  scrollTo(0,0)
}