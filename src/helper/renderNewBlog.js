import { findBlogById } from "./findBlogById.js";
import { blogTitle, blogContent } from "../components/blogContent.js";
import { blogImage } from "../components/blogImage.js";
import { relatedLinks } from "../components/relatedLinks.js";
import { data } from "../data.js";

export const renderNewBlog = async (blogId) => {
  const blogObject = await findBlogById(blogId);

  const blogSec = document.getElementById("blog-section");
  blogSec.innerHTML = "";

  const TitleSec = blogTitle(blogObject.title);
  blogSec.appendChild(TitleSec);

  const blogImageDiv = blogImage(blogObject.imageUrl);
  blogSec.appendChild(blogImageDiv);

  const blogContentDiv = blogContent(blogObject.content);

  blogSec.appendChild(blogContentDiv);

  const LinkDiv = document.getElementById("related-links");
  LinkDiv.innerHTML = "";
  const heading2 = document.createElement("h1");
  heading2.innerHTML = "Related Links";
  LinkDiv.appendChild(heading2);
  const blogLinkDiv = relatedLinks(blogObject.links);

  LinkDiv.appendChild(blogLinkDiv);
};
