function addItem() {
    const itemText = document.querySelector("#newItemText")
    const itemValue = document.querySelector("#newItemValue")

    const option = document.createElement('option')
    option.textContent = itemText.value
    option.setAttribute("value", itemValue.value)
    // option.value = itemValue.value ---> also works

    const select = document.querySelector("#menu")
    select.appendChild(option)

    itemText.value = ""
    itemValue.value = ""
}