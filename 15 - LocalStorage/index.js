const itemsList = document.querySelector(".todoList");
const addItems = document.querySelector(".add-items");
const checkAll = document.querySelector(".check-all");
const unCheckAll = document.querySelector(".uncheck-all");
const clearAll = document.querySelector(".clear-all");

const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

function addItem(e) {
  console.log("hi");
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const todoItem = { text, done: false };

  todoItems.push(todoItem);
  todoList(todoItems, itemsList);

  // set todoItems into localstorage
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  this.reset();
}

function todoList(lists = [], todoList) {
  todoList.innerHTML = lists
    .map((list, index) => {
      return `
      <li>
       <input type="checkbox" data-index=${index} id="item${index}" ${
        list.done ? "checked" : ""
      } />
        <label htmlFor="item${index}">${list.text}</label>
      </li>
    `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;

  todoItems[index].done = !todoItems[index].done;

  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  todoList(todoItems, itemsList);
}

function handleCheckAll() {
  todoItems.forEach((item) => {
    item.done = true;
  });

  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  todoList(todoItems, itemsList);
}

function handleUncheckAll() {
  todoItems.forEach((item) => {
    item.done = false;
  });

  localStorage.setItem("todoItems", JSON.stringify(todoItems));
  todoList(todoItems, itemsList);
}

function handleClearAll() {
  localStorage.clear("todoItems", JSON.stringify(todoItems));
  location.reload();
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
checkAll.addEventListener("click", handleCheckAll);
unCheckAll.addEventListener("click", handleUncheckAll);
clearAll.addEventListener("click", handleClearAll);

todoList(todoItems, itemsList);
