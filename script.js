const keyboardKeys = [
  ['Backquote', '`', '~', 'ё', 'Ё'],
  ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'],
  ['Digit3', '3', '#', '3', '№'],
  ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5', '%', '5', '%'],
  ['Digit6', '6', '^', '6', ':'],
  ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'],
  ['Digit9', '9', '(', '9', '('],
  ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'],
  ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
  ['KeyQ', 'q', 'Q', 'й', 'Й'],
  ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'],
  ['KeyR', 'r', 'R', 'к', 'К'],
  ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'],
  ['KeyU', 'u', 'U', 'г', 'Г'],
  ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'],
  ['KeyP', 'p', 'P', 'з', 'З'],
  ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'],
  ['Backslash', '\\', '|', '\\', '/'],
  ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
  ['KeyA', 'a', 'A', 'ф', 'Ф'],
  ['KeyS', 's', 'S', 'ы', 'Ы'],
  ['KeyD', 'd', 'D', 'в', 'В'],
  ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'],
  ['KeyH', 'h', 'H', 'р', 'Р'],
  ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'],
  ['KeyL', 'l', 'L', 'д', 'Д'],
  ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', "'", '"', 'э', 'Э'],
  ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['KeyZ', 'z', 'Z', 'я', 'Я'],
  ['KeyX', 'x', 'X', 'ч', 'Ч'],
  ['KeyC', 'c', 'C', 'с', 'С'],
  ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'],
  ['KeyN', 'n', 'N', 'т', 'Т'],
  ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'],
  ['Period', '.', '>', 'ю', 'Ю'],
  ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '▲', '▲', '▲', '▲'],
  ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
  ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' '],
  ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '◄', '◄', '◄', '◄'],
  ['ArrowDown', '▼', '▼', '▼', '▼'],
  ['ArrowRight', '►', '►', '►', '►'],
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
];
const uniqueKeys = [
  'Backspace',
  'Tab',
  'Enter',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'Delete',
  'AltRight',
  'AltLeft',
  'MetaLeft',
  'ArrowUp',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlLeft',
  'ControlRight',
];
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
        changeCase();
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
        changeCase();
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
