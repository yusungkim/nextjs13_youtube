import TodosList from "./TodosList"

const Todos = () => {
  return (
    <>
      <h1 className="text-green-500">Todos</h1>
      
      {/* @ts-expect-error Server Component */}
      <TodosList />
    </>
  )
}

export default Todos