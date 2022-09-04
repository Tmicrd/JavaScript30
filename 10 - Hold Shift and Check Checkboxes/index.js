const checkboxes = Array.from(
  document.querySelectorAll(".inbox input[type='checkbox']")
);
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // console.log(e);
  let inBetween = false;
  // Check if they had the shift key down
  // & Check that they are checking it
  if(e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('inBetween');
      }
      if(inBetween) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleCheck)
})
