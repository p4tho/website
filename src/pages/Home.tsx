const Home = () => {
  return (
    <>
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">/home</h1>

      <ul>
        <h2 className="font-bold text-xl">about me:</h2>
        <li>
          <span className="font-bold">name:</span> patrick ho
        </li>

        <li>
          <span className="font-bold">education:</span> san diego state undergraduate
        </li>

        <li>
          <span className="font-bold">employment:</span> very unemployed
        </li>

        <li>
          <span className="font-bold">certifications:</span> security+, aws saa
        </li>
      </ul>
    </div>
    </>
  )
}

export default Home
