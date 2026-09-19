const colorSelect = document.getElementById("colorSelect");

const removeBtn = document.querySelector('input[value="Select and Remove"]');

removeBtn.addEventListener("click", () => {
    colorSelect.remove(colorSelect.selectedIndex);
});