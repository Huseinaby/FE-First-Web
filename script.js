function functionDrop() {
  document.getElementById("dropDown").classList.toggle("show");
}


window.onclick = function(n) {
  if (!n.target.matches('.btn')) {
    const links = document.getElementsByClassName("link");

    for (let i = 0; i < links.length; i++) {
      var openDropdown = links[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}