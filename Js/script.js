const gridElement = document.querySelector('section#grid_100');



/* <article class="square"></article> */

for (let index = 0; index < 100; index++) {
    const squareElement = document.createElement('article'); // che sara' il mio <article>
    squareElement.classList.add('square');
    gridElement.appendChild(squareElement);
}