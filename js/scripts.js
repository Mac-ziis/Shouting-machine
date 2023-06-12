function getAndSetCries () {
  const criesInput = document.getElementById("criesInput").value;

  document.querySelector("span#cries").innerText = criesInput;
  document.querySelector("span#cries2").innerText = criesInput;
}
//need to bring the return to uppercase

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetCries();
    document.querySelector("div#story").removeAttribute("class");
  };
};