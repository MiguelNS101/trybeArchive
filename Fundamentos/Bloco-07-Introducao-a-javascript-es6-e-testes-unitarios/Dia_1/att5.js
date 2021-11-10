let clickCount = 0;
let clickCounter = document.querySelector('#clickCounter');
document.querySelector("button").addEventListener("click", () => clickCounter.innerHTML = clickCount += 1);