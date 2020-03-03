const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const title = document.getElementById('title');

        if (xhr.status === 200) {
            title.textContent = xhr.responseText;
        } else if (xhr.status === 404) {
            console.log('Not Found');
        }
    } 
}

xhr.onprogress = () => {
    console.log('on progressing');
}

xhr.open('GET', 'hello.txt', true);
xhr.send();

console.log('async');