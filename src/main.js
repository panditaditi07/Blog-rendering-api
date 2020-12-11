import { data } from "./data.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent, blogTitle } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
import { display } from "./helper/display.js";

data.then((blogs) => {
  display(blogs[0]);
});
