document.getElementsByTagName('footer')[0].innerHTML = document.getElementsByTagName('footer')[0].innerHTML.replace('year', new Date().getFullYear());

function toggleMainNav() {
    mainNav.style.visibility = mainNav.style.visibility == 'visible' ? 'hidden' : 'visible';
}