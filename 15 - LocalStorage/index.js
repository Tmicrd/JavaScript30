const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".todoList");

const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = { text, done: false };

  items.push(item);
  todoList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
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
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  todoList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

todoList(items.itemsList);
