"use strict";

const headerContainerEl = document.querySelector(".header > .container");
const tabsHeaderThs = document.getElementsByClassName("tabs-header__th");

window.addEventListener("scroll", function () {
  let yAxis = window.scrollY;
  if (yAxis >= 70) {
    headerEl.classList.add("header-clearfix");
    headerContainerEl.style.background = "var(--bg-color)";
  } else {
    headerEl.classList.remove("header-clearfix");
    headerContainerEl.style.background = "transparent";
  }
});

for (const [i, item] of Object.entries(tabsHeaderThs)) {
  tabsHeaderThs[i].addEventListener("click", function () {
    for (const x of tabsHeaderThs) {
      x.classList.remove("tabs-header__th--active");
    }
    document
      .querySelector(".item-tabs__item.active-x")
      .classList.remove("active-x");
    this.classList.add("tabs-header__th--active");
    const tempClassName =
      this.textContent.toLowerCase() === "bid history"
        ? "history"
        : this.textContent.toLowerCase();
    document
      .querySelector(`.item-tabs__${tempClassName}`)
      .classList.add("active-x");
  });
}
