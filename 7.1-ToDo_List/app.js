;(function() {

function completedItem() {
  var cbId = this.id.replace("checkbox_", "");
  var itemText = document.getElementById("item_" + cbId);
  if (this.checked) {
    itemText.className = "checked";
  } else {
    itemText.className = "";
  };
}

function renameItem() {
  var newText = prompt("Edit ToDo");
  if (!newText || newText == "" || newText == " ") {
    return false;
  }
    this.innerTest = newText;
};

function removeItem() {
  var spanId = this.id.replace("item_", "");
  document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {
  var id = "" + Math.random().toString(16).slice(2)

  var listItem = document.createElement('li');
  listItem.id = "li_" + id;

  var checkBox = document.createElement('input');
  checkBox.type ="checkbox";
  checkBox.id = "checkbox_" + id;
  checkBox.onclick = completedItem;

  var span = document.createElement('span');
  span.id = "item_" + id;
  span.innerText = itemText;
  span.ondblclick = renameItem;
  // span.onclick = removeItem;


  listItem.appendChild(checkBox);
  listItem.appendChild(span);

  list.appendChild(listItem);

};

var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) {
  // var itemText = event.which; <---NIFTY
  if(event.which == 13) {
    var itemText = inItemText.value;
    if(!itemText || itemText == "") {
    return false;
  };
  addNewItem(document.getElementById('todoList'), itemText);
  inItemText.focus();
  inItemText.value = '';
}};

var btnNew = document.getElementById('btnAdd');
btnNew.onclick = function() {
  var itemText = inItemText.value;
  if(!itemText || itemText == "") {
    return false;
  }
  addNewItem(document.getElementById('todoList'), itemText);
};





//<li class="todo__item">
//  <input type="checkbox" id="c1" />
//  <label for="c1">Curse Rebel Scum</label>
//  <button class="todo__itemRemove">&#x2717;</button>
//</li>


// <li><input type="checkbox" /> <span>Made a check box</span></li>



})();
