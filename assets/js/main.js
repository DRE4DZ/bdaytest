async function loadComponent(path) {
  const app = document.getElementById("app");
  const res = await fetch(path);
  const html = await res.text();
  app.innerHTML += html;
}

// muat semua komponen
(async () => {
  await loadComponent("components/loader/loader.html");
  await loadComponent("components/sidebar/sidebar.html");
  await loadComponent("components/home/home.html");
  await loadComponent("components/about/about.html");
  await loadComponent("components/letter/letter.html");
  await loadComponent("components/media/media.html");
  await loadComponent("components/promise/promise.html");
})();
