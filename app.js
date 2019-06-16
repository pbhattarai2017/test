let display = '';
let result = document.getElementById('result');
let btnclear = document.getElementById('btnclear');
let btndivide = document.getElementById('btndivide');
let btnmultiply = document.getElementById('btnmultiply');
let btnbackspace = document.getElementById('btnbackspace');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btnminus = document.getElementById('btnminus');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btnplus = document.getElementById('btnplus');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btnparentheses = document.getElementById('btnparentheses');
let btn0 = document.getElementById('btn0');
let btnpoint = document.getElementById('btnpoint');
let btnplusminus = document.getElementById('btnplusminus');
let btnequal = document.getElementById('btnequal');

btnclear.addEventListener('click', buttonPressed('c'));
btndivide.addEventListener('click', buttonPressed('/'));
btnmultiply.addEventListener('click', buttonPressed('*'));
btnbackspace.addEventListener('click', buttonPressed('b'));
btn7.addEventListener('click', buttonPressed('7'));
btn8.addEventListener('click', buttonPressed('8'));
btn9.addEventListener('click', buttonPressed('9'));
btnminus.addEventListener('click', buttonPressed('-'));
btn4.addEventListener('click', buttonPressed('4'));
btn5.addEventListener('click', buttonPressed('5'));
btn6.addEventListener('click', buttonPressed('6'));
btnplus.addEventListener('click', buttonPressed('+'));
btn1.addEventListener('click', buttonPressed('1'));
btn2.addEventListener('click', buttonPressed('2'));
btn3.addEventListener('click', buttonPressed('3'));
btnparentheses.addEventListener('click', buttonPressed('p'));
btn0.addEventListener('click', buttonPressed('0'));
btnpoint.addEventListener('click', buttonPressed('.'));
btnplusminus.addEventListener('click', buttonPressed('pm'));
btnequal.addEventListener('click', buttonPressed('='));

updateDisplay();

function buttonPressed(btn) {
  switch (btn) {
    case 'c':
      //clear
      return (e) => {
        display = '';
        updateDisplay();
      };
    case 'b':
      //backspace
      return (e) => {
        if (display.length <= 1) {
          display = '';
        } else {
          display = display.substr(0, display.length - 1);
        }
        updateDisplay();
      };
    case '=':
      //equal
      return (e) => {
        try {
          display = String(eval(display));
          if (display.length > 13) {
            display = 'Overflow';
          }
        } catch (error) {
          display = 'Error';
        } finally {
          updateDisplay();
        }
      };
    case 'p':
      //parentheses
      return (e) => {
        //later
      };
    case 'pm':
      //plusminus
      return (e) => {
        //later
      };
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '+':
    case '-':
    case '/':
    case '*':
    case '.':
      return (e) => {
        display += btn;
        updateDisplay();
      };
  }
}

function updateDisplay() {
  if (display.length > 13) {
    display = display.substr(0, display.length - 1);
  }
  if (display === '') {
    result.innerText = '0';
  } else {
    result.innerText = display;
  }
}