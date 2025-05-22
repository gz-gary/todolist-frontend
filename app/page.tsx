export default function Page() {
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <ul>
        {Array.from({length: 5}, (_, i) => (
          <li key={i}>{i*2}</li>
        ))}
      </ul>
    </>
  )
}