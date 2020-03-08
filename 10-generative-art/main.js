const art = document.querySelector('#art');
const colors = ['#17202A', '#7D3C98', '#34495E', '#F1C40F', '#CB4335'];

function block() {

    if (document.querySelectorAll('.art-block').length < 400) {

        const artBlock = document.createElement('div');
        const borderRadius = Math.random() < .5 ? '0' : '30';
        const scale = Math.random();

        artBlock.classList.add('art-block');
        artBlock.style.background = colors[Math.floor(Math.random() * colors.length)];
        artBlock.style.borderRadius = `${borderRadius}px`;
        artBlock.style.transform = `scale(${scale})`;
        art.appendChild(artBlock)

    } else {

        clearInterval(build);

    }
}

let build = setInterval(block);

window.addEventListener('click', reset);

function reset() {
    art.innerHTML = '';
    build = setInterval(block);
    art.style.filter = `hue-rotate(${Math.floor(Math.random() * 360)}deg)`;
}