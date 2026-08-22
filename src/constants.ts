import type { Blog } from './types';
import WindowsInternals from './pages/blogs/WindowsInternals';
import AndroidInternals from './pages/blogs/AndroidInternals';

export const blogs: Blog[] = [
  {
    title: "Windows Internals",
    href: "/blogs/windowsinternals",
    desc: "how windows works",
    date: "TBD",
    page: WindowsInternals,
  },
  {
    title: "Android Internals",
    href: "/blogs/androidinternals",
    desc: "how android works",
    date: "TBD",
    page: AndroidInternals,
  },
];
