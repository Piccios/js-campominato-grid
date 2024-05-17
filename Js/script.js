const gridElement = document.querySelector('section#grid_100');



/* <article class="square"></article> */

for (let index = 0; index < 100; index++) {
    const squareElement = document.createElement('article'); // che sara' il mio <article>
    squareElement.classList.add('square');
    squareElement.addEventListener('click', function(){
        squareElement.classList.add('active');
        console.log((index) + 1);
    })

    squareElement.append((index) + 1);
    gridElement.appendChild(squareElement);
}