const ohai = function () {
  console.log('ohai!');
};

const formSubmit = function (event) {
  pictureWidths.push(form.add_picture.value);
  console.log(pictureWidths);
  addToPictureList(form.add_picture.value);
  form.reset();
  event.preventDefault();
};

function addToPictureList(value) {
  const newListItem = document.createElement('li');
  const newListItemContent = document.createTextNode(value);
  newListItem.appendChild(newListItemContent);
  output.append(newListItem);
}

const form = document.getElementById('form');
const output = document.getElementById('output');
form.addEventListener('submit', formSubmit);

const pictureWidths = [];
