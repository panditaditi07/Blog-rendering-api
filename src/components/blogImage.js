//This file renders images
export const blogImage = (imageUrl) => {
  //generate markup for blog image
  const div = document.createElement("div");
  div.classList.add("blog-image");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "some alternate description";
  div.appendChild(img);
  return div;
};
