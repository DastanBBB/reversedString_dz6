const input = document.getElementById("input");
const addButton = document.getElementById("add_button");
const resultDiv = document.getElementById("result");
const list = document.getElementById("list");

let stringArray = [];

const renderList = () => {
    list.innerHTML = "";

    stringArray.forEach((str, index) => {
        const li = document.createElement("li");
        li.textContent = `Original: ${str} | Reversed: ${str.split('').reverse().join('')}`;
        li.classList.add('show');
        list.appendChild(li);
    });
};

addButton.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        resultDiv.textContent = "Введите строки";
        resultDiv.style.color = "red";
        return;
    }
    stringArray.push(inputValue);
    renderList(); // Обновляем список с помощью forEach
    input.value = "";
    resultDiv.textContent = "";
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addButton.click();
    }
});