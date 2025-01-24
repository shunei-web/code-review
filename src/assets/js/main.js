const drawerButton = document.querySelector("#js-drawer-icon");
const drawerIcon = document.querySelector("#drawerIcon");
const drawerContent = document.querySelector("#drawerContent");
const drawerLinks = document.querySelectorAll(".p-drawer__link");
const body = document.body;

drawerButton.addEventListener("click", function () {
  drawerIcon.classList.toggle("is-open");
  drawerContent.classList.toggle("is-open");
  body.classList.toggle("is-fixed");
});
drawerLinks.forEach(function(link) {
  link.addEventListener("click", function () {
    drawerIcon.classList.remove("is-open");
    drawerContent.classList.remove("is-open");
    body.classList.remove("is-fixed");
  });
});

jQuery(function () {
  jQuery(".p-qa__anser").show();
  jQuery(".p-qa__box").on("click", function (e) {
    e.preventDefault();

    const $content = jQuery(this).find(".p-qa__anser");
    if ($content.is(":visible")) {
      $content.slideUp();
    } else {
      $content.slideDown();
    }
  });
});

jQuery('a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  const speed = 700;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = target.offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});
