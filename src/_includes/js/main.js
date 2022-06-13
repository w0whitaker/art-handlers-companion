const pictureWidths = [];

function formSubmit(event) {
  addToPictureWidthsArray(form.add_picture.value);
  addWallWidth(form.add_wall.value);
  form.reset();
  event.preventDefault();
}

function addWallWidth(val) {
  displayWallWidth(Number.parseInt(val));
}

function displayWallWidth(val) {
  totalWall.textContent = `wall width ${val}`;
}

function addToPictureWidthsArray(val) {
  pictureWidths.push(Number.parseInt(val));
  addToPictureList(Number.parseInt(val));
  displayTotalWidthOfPictures(sumOfPictureWidths(pictureWidths));
}

function addToPictureList(val) {
  const newListItem = document.createElement('li');
  const newListItemContent = document.createTextNode(val);
  newListItem.appendChild(newListItemContent);
  pictureList.append(newListItem);
}

function sumOfPictureWidths(arr) {
  const initialValue = 0;
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
}

function displayTotalWidthOfPictures(sum) {
  totalPictures.textContent = `total width: ${sum}`;
}

const form = document.getElementById('form');
const pictureList = document.getElementById('picture-list');
const totalPictures = document.getElementById('total-pictures');
const totalWall = document.getElementById('total-wall');
form.addEventListener('submit', formSubmit);
