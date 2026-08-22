import { GithubFilled } from "@ant-design/icons";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1>p4tho</h1>

      <ul className="flex flex-row gap-1">
        <li>
          <a href="/" className="nav-item">
            /home
          </a>
        </li>

        <li>
          <a href="/blogs" className="nav-item">
            /blogs
          </a>
        </li>
      </ul>

      <div>
        <a href="https://github.com/p4tho" target="_blank">
          <GithubFilled className="text-2xl" />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
