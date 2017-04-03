'use strict';

var setupWindow = document.body.querySelector('.setup');
var listWizards = setupWindow.querySelector('.setup-similar-list');
var wizardTemplate = document.body.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор',
  'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

setupWindow.classList.remove('hidden');
setupWindow.querySelector('.setup-similar').classList.remove('hidden');
