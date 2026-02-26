document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector("#nav");

  if (!header || !burger || !nav) return;

  const toggle = () => {
    header.classList.toggle("is-open");
    document.body.classList.toggle("is-lock");

    const expanded = header.classList.contains("is-open");
    burger.setAttribute("aria-expanded", expanded ? "true" : "false");
  };

  burger.addEventListener("click", toggle);

  // メニュー内リンククリックで閉じる
  document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      document.body.classList.remove("is-lock");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  // 背景クリックで閉じたい場合（任意）
  // nav.addEventListener("click", (e) => {
  //   if (e.target === nav) toggle();
  // });
});