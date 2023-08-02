function solve() {
  const input = document.querySelector("#input").value.split(".")
  input.pop() //clearing the last el that is empty
  const container = document.querySelector("#output")

  while(input.length > 0){
    const p = document.createElement("p")
    p.textContent = `${input.splice(0, 3).join(".")}.`;
    container.appendChild(p);
  }
}