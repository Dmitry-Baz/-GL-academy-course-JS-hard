/**
 * Функция обработки текста
 * @param {string} text - входной текст
 * @returns {string} - обработанный текст
 */
function processText(text) {
  // Если аргумент не передан, берем из поля ввода
  if (text === undefined) {
    text = document.getElementById("textInput").value;
  }

  const resultDiv = document.getElementById("result");

  // 1. Проверка, что аргумент - строка
  if (typeof text !== "string") {
    showAlert("❌ Ошибка: аргумент должен быть строкой!", "error");
    return;
  }

  // 2. Убираем пробелы в начале и конце
  const trimmedText = text.trim();

  // 3. Если строка длиннее 30 символов - обрезаем и добавляем "..."
  let finalText;
  if (trimmedText.length > 30) {
    finalText = trimmedText.substring(0, 30) + "...";
  } else {
    finalText = trimmedText;
  }

  // Показываем результат
  showAlert(`✅ Результат: "${finalText}"`, "success");

  return finalText;
}

/**
 * Функция для показа сообщений
 * @param {string} message - текст сообщения
 * @param {string} type - тип сообщения ('success' или 'error')
 */
function showAlert(message, type) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.className = `result ${type}`;
}

// ==========================================
// Дополнительные примеры использования:
// ==========================================

// Пример 1: Корректная строка
console.log("Пример 1:");
console.log(processText("Привет, мир!"));
// Вывод: "Привет, мир!"

// Пример 2: Длинная строка
console.log("\nПример 2:");
console.log(
  processText(
    "Это очень длинный текст, который содержит более тридцати символов"
  )
);
// Вывод: "Это очень длинный текст, кото..."

// Пример 3: Строка с пробелами
console.log("\nПример 3:");
console.log(processText("   Текст с пробелами в начале и конце   "));
// Вывод: "Текст с пробелами в начале и конце"

// Пример 4: Не строка (число)
console.log("\nПример 4:");
console.log(processText(12345));
// Вывод: Ошибка в консоли

// Пример 5: Не строка (объект)
console.log("\nПример 5:");
console.log(processText({ key: "value" }));
// Вывод: Ошибка в консоли

// Пример 6: Не строка (массив)
console.log("\nПример 6:");
console.log(processText(["элемент1", "элемент2"]));
// Вывод: Ошибка в консоли

// Пример 7: Пустая строка
console.log("\nПример 7:");
console.log(processText(""));
// Вывод: ""

// Пример 8: Строка ровно 30 символов
console.log("\nПример 8:");
console.log(processText("123456789012345678901234567890"));
// Вывод: "123456789012345678901234567890"

// Пример 9: Строка 31 символ
console.log("\nПример 9:");
console.log(processText("1234567890123456789012345678901"));
// Вывод: "123456789012345678901234567890..."
