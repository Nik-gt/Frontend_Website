// �������� ������
const btn = document.querySelector(".btn-toggle");
// �������� ������� ������
const theme = document.querySelector("#theme-link");
// ����������� ������ �� ������
btn.addEventListener("click", function() {
  // ���� ������� ����� �������� "light-theme.css"
  if (theme.getAttribute("href") == "style.css") {
    // ��� ������������� �� "dark-theme.css"
    theme.href = "dark-style.css";
    // � ��������� ������ 
  } else {
    // �������������� �� "light-theme.css"
    theme.href = "style.css";
  }
});