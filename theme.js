// Выбираем кнопку
//const btn = document.querySelector(".btn-toggle");
btn = document.getElementById("theme_switch") 
// Выбираем таблицу стилей
const theme = document.querySelector("#theme-link");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function() {
  // Если текущий адрес содержит "light-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // …то переключаемся на "dark-theme.css"
    theme.href = "dark-style.css";
    // В противном случае… 
  } else {
    // …переключаемся на "light-theme.css"
    theme.href = "style.css";
  }
});