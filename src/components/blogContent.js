export const blogContent = (content) => {
  const div = document.createElement("div");
  div.classList.add("blog-content");
  const para = document.createElement("p");
  para.innerHTML = content;
  div.appendChild(para);
  return div;
};

export const blogTitle = (title) => {
  const heading1 = document.createElement("h1");
  heading1.classList.add("heading");
  heading1.innerHTML = title;
  return heading1;
};
