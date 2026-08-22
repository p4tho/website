import type { Blog } from '../types';

interface BlogWidgetProps {
  blog: Blog,
}

const BlogWidget = ({ blog }: BlogWidgetProps) => {
  return (
    <a className="flex justify-between transform duration-100 hover:scale-[102%] hover:bg-black hover:text-white px-3 py-1" href={blog.href}>
      <span>
        <span className="font-bold">{blog.title}</span>: {blog.desc}
      </span>

      {blog.date}
    </a>
  );
};

export default BlogWidget;