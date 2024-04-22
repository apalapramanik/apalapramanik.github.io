let isShowing = false;
let dropdownMenu = null;



function showDropdown() {
  hideDropdown(); // Hide any previously shown menu
  dropdownMenu = document.getElementById('researchDropdown');
  dropdownMenu.style.display = 'block';
  isShowing = true;
}

function hideDropdown() {
  if (isShowing && dropdownMenu) {
    dropdownMenu.style.display = 'none';
    isShowing = false;
  }
}