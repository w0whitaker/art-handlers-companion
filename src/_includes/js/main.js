const pictureWidths = [];

function formSubmit(event) {
  const val = Number.parseInt(form.add_picture.value);
  pictureWidths.push(val);
  addToPictureList(val);
  displayTotal(sumOfPictureWidths(pictureWidths));
  form.reset();
  event.preventDefault();
}

function addToPictureList(value) {
  const newListItem = document.createElement('li');
  const newListItemContent = document.createTextNode(value);
  newListItem.appendChild(newListItemContent);
  output.append(newListItem);
}

function sumOfPictureWidths(arr) {
  const initialValue = 0;
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
}

function displayTotal(sum) {
  total.textContent = `total width: ${sum}`;
}

const form = document.getElementById('form');
const output = document.getElementById('output');
const total = document.getElementById('total');
form.addEventListener('submit', formSubmit);
