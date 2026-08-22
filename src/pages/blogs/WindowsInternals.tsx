import { ArrowLeftOutlined } from "@ant-design/icons"

const WindowsInternals = () => {
  return (
    <>
      <a className="text-lg hover:border-b" href="/blogs">
        <ArrowLeftOutlined /> <span className="text-xl">back</span>
      </a>
      
      <h1 className="font-bold text-3xl mt-3">
        Windows Internals
      </h1>

      <p>
        so microsoft spies on you by doing this...
      </p>
    </>
  )
}

export default WindowsInternals
