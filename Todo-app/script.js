const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Load saved todos
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Render todos
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";

    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="delete-btn">X</button>
      </div>
    `;

    // Toggle complete
    li.querySelector("span").addEventListener("click", () => {
      todo.completed = !todo.completed;
      saveTodos();
      renderTodos();
    });

    // Delete
    li.querySelector(".delete-btn").addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    list.appendChild(li);
  });
}

// Save to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add todo
addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  todos.push({ text, completed: false });
  input.value = "";
  saveTodos();
  renderTodos();
});

// Initial render
renderTodos();
