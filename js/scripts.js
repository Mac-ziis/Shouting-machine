function getAndSetCries (event) {
  event.preventDefault();
  const criesInput = document.getElementById("criesInput").value;

  document.querySelector("span#cries").innerText = criesInput;
  document.querySelector("span#cries2").innerText = criesInput;
  document.querySelector('div#story').removeAttribute('class');
}
//need to bring the return to uppercase

window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener('submit', getAndSetCries);

  // form.onsubmit = function(event) {
    // event.preventDefault();
    // getAndSetCries();
    // document.querySelector("div#story").removeAttribute("class");
};