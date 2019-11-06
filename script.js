import { keyboardKeys, uniqueKeys } from './keys.js';

let currentLang = 'keyboard__english';
let currentCase = 'caseDown';
let capsOn = false;
let shiftLeftOn = false;
let shiftRightOn = false;
const keysContainer = document.createElement('div');
keysContainer.className = 'keyboard';
document.body.append(keysContainer);

function createKeyboard() {
  for (let i = 0; i < keyboardKeys.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('keyboard__key');
    div.classList.add(keyboardKeys[i][0]);
    const spanRus = document.createElement('span');
    spanRus.classList.add('keyboard__russian', 'hidden');
    const spanRusDown = document.createElement('span');
    spanRusDown.classList.add('caseDown', 'hidden');
    // eslint-disable-next-line prefer-destructuring
    spanRusDown.innerHTML = keyboardKeys[i][3];
    const spanRusUp = document.createElement('span');
    spanRusUp.classList.add('caseUp', 'hidden');
    // eslint-disable-next-line prefer-destructuring
    spanRusUp.innerHTML = keyboardKeys[i][4];
    spanRus.prepend(spanRusDown);
    spanRus.append(spanRusUp);
    const spanEng = document.createElement('span');
    spanEng.classList.add('keyboard__english');
    const spanEngDown = document.createElement('span');
    spanEngDown.classList.add('caseDown');
    // eslint-disable-next-line prefer-destructuring
    spanEngDown.innerHTML = keyboardKeys[i][1];
    const spanEngUp = document.createElement('span');
    spanEngUp.classList.add('caseUp', 'hidden');
    // eslint-disable-next-line prefer-destructuring
    spanEngUp.innerHTML = keyboardKeys[i][2];
    spanEng.prepend(spanEngDown);
    spanEng.append(spanEngUp);
    div.prepend(spanRus);
    div.append(spanEng);
    keysContainer.append(div);
  }
}

function changeLang() {
  const langList = document.querySelectorAll(`.${currentLang}`);

  for (let i = 0; i < langList.length; i += 1) {
    langList[i].classList.toggle('hidden');
    langList[i]
      .querySelectorAll(`.${currentCase}`)[0]
      .classList.toggle('hidden');
  }
  if (currentLang === 'keyboard__english') {
    currentLang = 'keyboard__russian';
    localStorage.setItem('currentLang', 'keyboard__russian');
  } else {
    currentLang = 'keyboard__english';
    localStorage.setItem('currentLang', 'keyboard__english');
  }

  const langList2 = document.querySelectorAll(`.${currentLang}`);

  for (let i = 0; i < langList2.length; i += 1) {
    langList2[i].classList.toggle('hidden');
    langList2[i]
      .querySelectorAll(`.${currentCase}`)[0]
      .classList.toggle('hidden');
  }
}

function changeCase() {
  const langList = document.querySelectorAll(`.${currentLang}`);
  for (let i = 0; i < langList.length; i += 1) {
    langList[i].querySelectorAll('span')[0].classList.toggle('hidden');
    langList[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
  if (currentCase === 'caseUp') {
    currentCase = 'caseDown';
  } else {
    currentCase = 'caseUp';
  }
}
function changeCaseCaps() {
  const langList = document.querySelectorAll(`.${currentLang}`);
  for (let i = 14; i < langList.length; i += 1) {
    langList[i].querySelectorAll('span')[0].classList.toggle('hidden');
    langList[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
  if (currentCase === 'caseUp') {
    currentCase = 'caseDown';
  } else {
    currentCase = 'caseUp';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.createElement('textarea');
  input.rows = '20';
  input.cols = '100';
  input.setAttribute('id', 'text-result');
  document.body.prepend(input);
  if (localStorage.currentLang === 'keyboard__russian') {
    changeLang();
  }
});
document.addEventListener('keydown', (event) => {
  document.querySelector('#text-result').focus();
  const text = document.querySelector('#text-result');
  const data = document.querySelectorAll(`.${event.code}`)[0];
  if (!data) {
    event.preventDefault();
    return;
  }
  if (uniqueKeys.includes(event.code) === false) {
    text.value += data.querySelectorAll(':not(.hidden)')[1].textContent;
  } else {
    switch (event.code) {
      case 'Backspace':
        text.value = text.value.substr(0, text.value.length - 1);
        break;
      case 'Enter':
        text.value += '\n';
        break;
      case 'Tab':
        text.value += '\t';
        event.preventDefault();
        break;
      case 'Delete':
        if (text.selectionStart < text.value.length) {
          text.value =
            text.value.slice(0, text.selectionStart) +
            text.value.slice(text.selectionStart + 1, text.value.length);
          return;
        }
        break;
      case 'MetaLeft':
        event.preventDefault();
        break;
      case 'ShiftLeft':
        if (!shiftLeftOn && !shiftRightOn) {
          data.classList.add('activated');
          shiftLeftOn = true;
          changeCase();
        }
        break;
      case 'ShiftRight':
        if (!shiftLeftOn && !shiftRightOn) {
          data.classList.add('activated');
          shiftRightOn = true;
          changeCase();
        }
        break;
      case 'CapsLock':
        if (capsOn && event.repeat === false) {
          data.classList.remove('activated');
          capsOn = false;
        } else {
          data.classList.add('activated');
          capsOn = true;
        }
        changeCaseCaps();
        break;

      default:
    }
  }
  if (event.ctrlKey && event.altKey) changeLang();

  if (
    event.code !== 'ShiftLeft' &&
    event.code !== 'ShiftRight' &&
    event.code !== 'CapsLock'
  ) {
    data.classList.add('activated');
  }
  event.preventDefault();
});

document.addEventListener('keyup', (event) => {
  const data = document.querySelectorAll(`.${event.code}`)[0];
  if (event.code !== 'CapsLock') {
    data.classList.remove('activated');
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    changeCase();
    if (event.code === 'ShiftLeft') {
      shiftLeftOn = false;
      data.classList.remove('activated');
    } else if (event.code === 'ShiftRight') {
      shiftRightOn = false;
      data.classList.remove('activated');
    }
  }
});

document.addEventListener('mouseup', (event) => {
  const { target } = event;
  const text = document.querySelector('#text-result');
  if (target.tagName !== 'SPAN') return;
  const data = target.closest('div');
  const keyCode = data.classList[1];
  if (!uniqueKeys.includes(keyCode) && keyCode !== 'Space') {
    text.value += target.textContent;
  } else {
    switch (keyCode) {
      case 'Backspace':
        text.value = text.value.substr(0, text.value.length - 1);
        break;
      case 'Enter':
        text.value += '\n';
        break;
      case 'Space':
        text.value += ' ';
        break;
      case 'Tab':
        text.value += '\t';
        event.preventDefault();
        break;
      case 'CapsLock':
        if (capsOn) {
          data.classList.remove('activated');
          capsOn = false;
        } else {
          data.classList.add('activated');
          capsOn = true;
        }
        changeCaseCaps();
        break;
      case 'ShiftLeft':
        if (shiftLeftOn) {
          changeCase();
          shiftLeftOn = true;
        }
        break;
      case 'ShiftRight':
        if (shiftRightOn) {
          changeCase();
          shiftRightOn = true;
        }
        break;
      case 'MetaLeft':
        changeLang();
        break;
      default:
    }
  }
  if (keyCode !== 'CapsLock') {
    data.classList.add('activated');
    setTimeout(() => {
      data.classList.remove('activated');
    }, 200);
  }
});
createKeyboard();
