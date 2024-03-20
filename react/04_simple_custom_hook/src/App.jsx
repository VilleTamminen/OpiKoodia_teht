import useCount from "./hooks/useCount"

//Lisää ja vähentää numeroa
function App() {

  const [count,increment,decrement] = useCount(10);

  return (
    <>
      <h2>Current count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
