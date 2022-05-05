function handleSelect(elm) {
   window.location = `${elm.value}.html`;
}

function toggleDarkMode() {
   var element = document.body;
   element.classList.toggle("dark_mode");
}