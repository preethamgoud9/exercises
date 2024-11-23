todoList = [
  { name: "make dinner", duedate: "11-11-2024" },
  { name: "wash dishes", duedate: "12 - 11 - 2024" },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, duedate } = todoObject;
    const html = `
    <p>
    ${name} ${duedate}
    <button onclick="
       todoList.splice(${i}, 1);
       renderTodoList();
    ">delete</button> 
    </p>
    `;
    todoListHTML += html;
    document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  console.log(todoListHTML);
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  name = inputElement.value;
  inputElement.value = "";
  todoList.push(name);
}
renderTodoList();
