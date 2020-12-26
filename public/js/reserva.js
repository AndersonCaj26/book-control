function menu(){
    const menuOption = document.getElementById('menu-option');
    const main = document.getElementById('main');
    if (menuOption.getAttribute('value') === 'true') {
        menuOption.style.display = 'none';
        main.style.display = 'block';
        menuOption.setAttribute('value', 'false');                
        main.setAttribute('value', 'true');
    } else {
        menuOption.style.display = 'flex';
        main.style.display = 'none';
        menuOption.setAttribute('value', 'true');                
        main.setAttribute('value', 'false');
    }
}