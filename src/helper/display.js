import { blogImage } from "../components/blogImage.js";
import { blogContent, blogTitle } from "../components/blogContent.js";
import { relatedLinks } from "../components/relatedLinks.js";
import { renderNewBlog } from "./renderNewBlog.js";

export const display = (blogs) => {
  renderNewBlog(blogs.id);
};
