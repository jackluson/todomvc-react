export const getCompletedCount = (todos) => {
  return todos.reduce((preVal,curTodo) =>{
    return curTodo.completed ? preVal + 1 : preVal
  },0)
}