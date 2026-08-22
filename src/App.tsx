import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Layout from "./Layout";
import './App.css';
import { blogs } from './constants';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* Blogs */}
          {blogs.map((blog) => {
            return (
              <Route
                key={blog.href}
                path={blog.href}
                element=<blog.page />
              />
            );
          })}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
