import { ArrowLeftOutlined } from "@ant-design/icons"

const AndroidInternals = () => {
  return (
    <>
      <a className="text-lg hover:border-b" href="/blogs">
        <ArrowLeftOutlined /> <span className="text-xl">back</span>
      </a>
      
      <h1 className="font-bold text-3xl mt-3">
        Android Internals
      </h1>

      <p>
        so like android does this...
      </p>
    </>
  )
}

export default AndroidInternals
