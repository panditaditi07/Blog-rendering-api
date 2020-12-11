import { data } from "../data.js";
import { renderNewBlog } from "./renderNewBlog.js";

export const findBlogById = (blogId) => {
  const blogObject = data.then((blogs) => {
    return blogs.find((blog) => {
      return blog.id == blogId;
    });
  });
  return blogObject;
};
