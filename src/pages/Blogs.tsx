import BlogWidget from '../components/BlogWidget';
import { blogs } from '../constants';

const Blogs = () => {
  return (
    <>
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">/blogs</h1>

      <div className="flex flex-col gap-1">
        {blogs.map((blog) => {
          return (
            <BlogWidget blog={blog} />
          );
        })}
      </div>
    </div>
    </>
  )
}

export default Blogs
