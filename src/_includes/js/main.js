const pictureWidths = [];
var wallWidth = '';
var insetValue = '';
var insideGap = '';
var outsideGap = '';

const pictureForm = document.getElementById('picture-form');
const wallForm = document.getElementById('wall-form');
const insetForm = document.getElementById('inset-form');
const pictureList = document.getElementById('picture-list');
const totalPictures = document.getElementById('total-pictures');
const totalWall = document.getElementById('total-wall');
const insetAmt = document.getElementById('total-inset');
const baseGap = document.getElementById('base-gap');

pictureForm.addEventListener('submit', pictureFormSubmit);

function pictureFormSubmit(event) {
  pictureHandler(pictureForm.enter_picture.value);
  pictureForm.reset();
  event.preventDefault();
}

function pictureHandler(val) {
  // console.log(`val @ pictureHandler: ${val}`);
  pictureWidths.push(Number.parseInt(val));
  addToPictureList(Number.parseInt(val));
  // console.log(`sumOfArray: ${sumOfArray(pictureWidths)}`);
  displayTotalWidthOfPictures(sumOfArray(pictureWidths));
}

function addToPictureList(val) {
  // console.log(`val @ addToPictureList: ${val}`);
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
  totalPictures.textContent = sum;
}

wallForm.addEventListener('submit', wallFormSubmit);

function wallFormSubmit(event) {
  wallHandler(wallForm.enter_wall.value);
  wallForm.reset();
  event.preventDefault();
}

function wallHandler(val) {
  wallWidth = Number.parseInt(val);
  displayWallWidth(Number.parseInt(val));
}

function displayWallWidth(val) {
  totalWall.textContent = val;
}

insetForm.addEventListener('submit', insetFormSubmit);

function insetFormSubmit(event) {
  insetHandler(insetForm.enter_inset.value);
  insetForm.reset();
  event.preventDefault();
}

function insetHandler(val) {
  insetValue = val;
  // console.log(`inset value: ${insetValue}`);
  displayInsetWidth(Number.parseInt(insetValue));
}

function displayInsetWidth(val) {
  insetAmt.textContent = insetValue * 2;
}

function doTheMath(event) {
  // p = width of pictures
  const p = sumOfArray(pictureWidths);
  // n = number of pictures
  const n = pictureWidths.length;
  // w = width of wall
  const w = wallWidth;
  // x = inset
  const x = insetValue;
  // y = gap between pictures
  //
  //
  // wall = 100
  // 5 pictures
  // 4 gaps
  // inset total = 4
  // 100-4=96
  // 10*5=50
  // 96-50=46
  // 46/4 = 11.5
  console.log('(-p + w - 2x) / (n - 1) = y');

  const y = (-p + w - 2 * x) / (n - 1);
  console.log(`negative sum of pictures (-p): ${-p}`);
  console.log(`number of pictures (n): ${n}`);
  console.log(`width of wall (w): ${w}`);
  console.log(`total inset (x): ${x * 2}`);
  console.log(`base gap (y): ${y}`);
  displayBaseGap(Number.parseFloat(y));
  event.preventDefault();
}

function displayBaseGap(val) {
  baseGap.textContent = `base gap: ${val}`;
}

calculate.addEventListener('click', doTheMath);
