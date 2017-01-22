export const addTodo = (text) =>
  new Promise(resolve => {
    resolve({
      id: 121,
      text: text,
      completed: false
    })
  })
