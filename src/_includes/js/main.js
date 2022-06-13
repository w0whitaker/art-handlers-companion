const pictureWidths = [];

function pictureFormSubmit(event) {
  pictureHandler(pictureForm.enter_picture.value);
  pictureForm.reset();
  event.preventDefault();
}

function pictureHandler(val) {
  console.log(`val @ pictureHandler: ${val}`);
  pictureWidths.push(Number.parseInt(val));
  addToPictureList(Number.parseInt(val));
  console.log(`sumOfArray: ${sumOfArray(pictureWidths)}`);
  displayTotalWidthOfPictures(sumOfArray(pictureWidths));
}

function addToPictureList(val) {
  console.log(`val @ addToPictureList: ${val}`);
  const newListItem = document.createElement('li');
  const newListItemContent = document.createTextNode(val);
  newListItem.appendChild(newListItemContent);
  pictureList.append(newListItem);
}

function sumOfArray(arr) {
  const initialValue = 0;
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
}

function displayTotalWidthOfPictures(sum) {
  totalPictures.textContent = `total width: ${sum}`;
}

function wallFormSubmit(event) {
  wallHandler(wallForm.enter_wall.value);
  wallForm.reset();
  event.preventDefault();
}

function wallHandler(val) {
  displayWallWidth(Number.parseInt(val));
}

function displayWallWidth(val) {
  totalWall.textContent = `width: ${val}`;
}

function insetFormSubmit(event) {
  insetHandler(insetForm.enter_inset.value);
  insetForm.reset();
  event.preventDefault();
}

function insetHandler(val) {
  let total = val * 2;
  displayInsetWidth(Number.parseInt(total));
}

function displayInsetWidth(val) {
  totalInset.textContent = `inset: ${val}`;
}

const pictureForm = document.getElementById('picture-form');
const wallForm = document.getElementById('wall-form');
const insetForm = document.getElementById('inset-form');
const pictureList = document.getElementById('picture-list');
const totalPictures = document.getElementById('total-pictures');
const totalWall = document.getElementById('total-wall');
const totalInset = document.getElementById('total-inset');

pictureForm.addEventListener('submit', pictureFormSubmit);
wallForm.addEventListener('submit', wallFormSubmit);
insetForm.addEventListener('submit', insetFormSubmit);
