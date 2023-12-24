// function switchTab(tabIndex) {
//   const tabs = document.querySelectorAll(".tabs-title");
//   tabs.forEach((tab) => tab.classList.remove("active"));

//   const tabContents = document.querySelectorAll(".tabs-text");
//   tabContents.forEach((content) => content.classList.remove("active"));

//   tabs[tabIndex].classList.add("active");
//   tabContents[tabIndex].classList.add("active");
// }

function switchTab(tabIndex) {
  $(".tabs-title").removeClass("active");
  $(".tabs-text").removeClass("active");

  $(".tabs-title").eq(tabIndex).addClass("active");
  $(".tabs-text").eq(tabIndex).addClass("active");
}