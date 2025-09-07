const buttons = document.querySelectorAll('.button');
let resultField = document.getElementById('display');
let currentExpression = ''; // Текущее выражение

// button в данном случае будет передаваться СОБЫТИЕ НАЖАТИЕ, где можно будет узнать кнопку по которой нажали через target и из которой можно будет доставать её значение
function handleButton(button) {
    const value = button.target.textContent; 

    // Обработка разных типов кнопок
    if (value === '=') {
      if (resultField.textContent.includes('%')){
            let n1 = resultField.textContent.split('%');
            resultField.textContent = (n1[0] / 100) * n1[1];
            resultField.textContent += '%';
        }
        else {
            resultField.textContent = eval(resultField.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/").replaceAll("+", "+"));
        }
    } 
    else if (value === 'AC') {
      resultField.textContent = '';
    } 
    else if(value === '%'){
      resultField.textContent = eval(resultField.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/").replaceAll("+", "+")) + '%';
    }
    else if(value === '+/-'){
       resultField.textContent = eval(resultField.textContent.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/").replaceAll("+", "+"))* -1;
    }
    else {
      resultField.textContent += value;
    }
}

// Для каждой кнопки добавляем обработчик клика
buttons.forEach(button => {
  button.addEventListener('click', handleButton);
})