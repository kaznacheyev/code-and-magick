'use strict';

var setupWindow = document.body.querySelector('.setup');
var openSetup = document.body.querySelector('.setup-open');
var closeSetup = setupWindow.querySelector('.setup-close');
var setupUserName = setupWindow.querySelector('.setup-user-name');
var setupSubmit = setupWindow.querySelector('.setup-submit');

var wizardBlock = setupWindow.querySelector('.wizard');
var wizardCoat = wizardBlock.querySelector('.wizard-coat');
var wizardEyes = wizardBlock.querySelector('.wizard-eyes');
var wizardFireball = document.body.querySelector('.setup-fireball-wrap');

var listWizards = setupWindow.querySelector('.setup-similar-list');
var wizardTemplate = document.body.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEY_CODE = 27;
var ENTER_KEY_CODE = 13;

var getRandomElementFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var createWizard = function () {
  var wizard = {};
  wizard.name = getRandomElementFromArray(WIZARD_NAMES) + ' ' + getRandomElementFromArray(WIZARD_SURNAMES);
  wizard.coatColor = getRandomElementFromArray(WIZARD_COAT_COLORS);
  wizard.eyesColor = getRandomElementFromArray(WIZARD_EYES_COLORS);
  return wizard;
};

var wizards = [];
var wizardsCount = 4;

var createAllWizards = function (count) {
  for (var i = 0; i < count; i++) {
    wizards[i] = createWizard();
  }
};

var renderWizard = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var createFragments = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsCount; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  listWizards.appendChild(fragment);
};

createAllWizards(wizardsCount);
createFragments();

setupWindow.querySelector('.setup-similar').classList.remove('hidden');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElementFromArray(WIZARD_COAT_COLORS);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElementFromArray(WIZARD_EYES_COLORS);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomElementFromArray(WIZARD_FIREBALL_COLORS);
});

var openPopup = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onEscPress);
};

var closePopup = function () {
  setupWindow.classList.add('hidden');
  document.addEventListener('keydown', onEscPress);
};

var onEscPress = function (evt) {
  if (evt.keyCode === ESC_KEY_CODE) {
    closePopup();
  }
};

openSetup.addEventListener('click', function () {
  openPopup();
});

closeSetup.addEventListener('click', function () {
  closePopup();
});

var onEnterPress = function (evt) {
  return evt.keyCode === ENTER_KEY_CODE;
};

openSetup.addEventListener('keydown', function (evt) {
  if (onEnterPress(evt)) {
    openPopup();
  }
});

closeSetup.addEventListener('keydown', function (evt) {
  if (onEnterPress(evt)) {
    closePopup();
  }
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (onEnterPress(evt)) {
    closePopup();
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (onEscPress) {
    evt.stopPropagation();
  }
});
