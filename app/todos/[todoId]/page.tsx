import { Todo } from "typings"
import { notFound } from "next/navigation"

// SSR (default is true)
export const dynamicParams = true

interface PageProps {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } } // ISR
  )
  const todo: Todo = await res.json()
  return todo // todo canbe Todo or {}
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId) // todo canbe Todo or {}

  console.log("todo", todo)
  if (!todo.id) return notFound()

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <h1 className="text-3xl">{todo.title}</h1>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By UserId: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

// like getStaticPath() at ver 12
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todos: Todo[] = await res.json()

  const trimmedTodos = todos.splice(0, 10)

  // [{ todoId: 1}, {todoId: 2}, ...]
  return trimmedTodos.map(todo => ({ todoId: todo.id.toString() }))
}