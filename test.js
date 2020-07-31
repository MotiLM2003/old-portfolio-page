const sections = document.querySelectorAll("section");
const options = {
  root: null,
  threshold: 0,
  rootMargin: "-50px",
};
const obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const item = entry.target;
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      item.style.backgroundColor = "black";
    }

    console.log(entry);
  });
}, options);

sections.forEach((section) => {
  obs.observe(section);
});
