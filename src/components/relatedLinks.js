import { renderNewBlog } from "../helper/renderNewBlog.js";

export const relatedLinks = (links) => {
  const ul = document.createElement("ul");
  links.forEach((link) => {
    const linksList = document.createElement("li");
    linksList.classList.add("listed-links");
    linksList.innerHTML = link.title;
    linksList.id = link.id;
    linksList.addEventListener("click", () => {
      renderNewBlog(link.id);
    });
    ul.appendChild(linksList);
  });
  return ul;
};
