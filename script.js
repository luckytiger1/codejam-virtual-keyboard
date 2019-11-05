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
  ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
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
  'ControlRight'
];
let lang = 'keyboard__english';
let caseState = 'caseDown';
let capsOn = false;

if (localStorage.lang === 'keyboard__russian') {
  changeLang();
}

function createKeyboard() {
  for (let i = 0; i < keyboardKeys.length; i++) {
    let div = document.createElement('div');
    div.classList.add('keyboard__key');
    div.classList.add(keyboardKeys[i][0]);
    div.insertAdjacentHTML(
      'afterbegin',
      `<span class="keyboard__russian hidden">
      <span class="caseDown hidden">${keyboardKeys[i][3]}</span>
      <span class="caseUp hidden">${keyboardKeys[i][4]}</span>
      </span>
      <span class="keyboard__english">
      <span class="caseDown">${keyboardKeys[i][1]}</span>
      <span class="caseUp hidden">${keyboardKeys[i][2]}</span>
      </span>`
    );
    keysContainer.appendChild(div);
  }
}
{
  /* <div class="keyboard__key KeyQ"><span class="keyboard__russian hidden">
      <span class="caseDown hidden">Q</span>
      <span class="caseUp hidden">й</span>
      </span>
      <span class="keyboard__english">
      <span class="caseDown">q</span>
      <span class="caseUp hidden">Q</span>
      </span>
      </div> */
}
function changeLang() {
  let rus = document.querySelectorAll('.keyboard__russian');
  let eng = document.querySelectorAll('.' + lang);
  for (let i = 0; i < eng.length; i++) {
    eng[i].classList.toggle('hidden');
    eng[i].querySelectorAll('.' + caseState)[0].classList.toggle('hidden');
  }
  if (lang === 'Keyboard__english') {
    lang = 'keyboard__russian';
    localStorage.setItem('lang', 'keyboard__russian');
  } else {
    lang = 'keyboard__english';
    localStorage.setItem('lang', 'keyboard__english');
  }
  for (let i = 0; i < rus.length; i++) {
    rus[i].classList.toggle('hidden');
    rus[i].querySelectorAll('.' + caseState)[0].classList.toggle('hidden');
  }
}
let keysContainer = document.createElement('div');
keysContainer.className = 'keyboard';
document.body.append(keysContainer);
// document.body.insertAdjacentHTML(
//   'afterBegin',
//   '<textarea id="text-result" rows="20" cols="100"></textarea>'
// );
document.addEventListener('DOMContentLoaded', () => {
  let input = document.createElement('textarea');
  input.rows = '20';
  input.cols = '100';
  input.setAttribute('id', 'text-result');
  document.body.prepend(input);
});
document.addEventListener('keydown', event => {
  document.querySelector('#text-result').focus();
  let text = document.querySelector('#text-result');
  let data = document.querySelectorAll('.' + event.code)[0];
  if (event.ctrlKey && event.altKey) {
    changeLang();
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
      case 'CapsLock':
        if (capsOn && event.repeat === false) {
          data.classList.remove('activated');
          capsOn = false;
        } else {
          data.classList.add('activated');
          capsOn = true;
        }
      default:
    }
  }
  if (
    event.code !== 'ShiftLeft' &&
    event.code !== 'ShiftRight' &&
    event.code !== 'CapsLock'
  ) {
    data.classList.add('activated');
  }
  event.preventDefault();
});

document.addEventListener('keyup', event => {
  let data = document.querySelectorAll('.' + event.code)[0];
  if (event.code !== 'CapsLock') {
    data.classList.remove('activated');
  }
});
createKeyboard();
