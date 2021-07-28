const body = document.querySelector('body');
const heading = document.querySelector('h1 span');
const button = document.querySelector('button');
button.addEventListener('click', () => {
    const randomNumber = parseInt(((Math.random()) * 10) + 1); 
    switch (randomNumber){
        case 1:
            body.style.backgroundColor = "blue";
            heading.textContent = "Blue";
            break;
        case 2:
            body.style.backgroundColor = "#EF482A";
            heading.textContent = "Red";
            break;
        case 3:
            body.style.backgroundColor = "#407E2D";
            heading.textContent = "Green";
            break;
        case 4:
            body.style.backgroundColor = "#3A2D6B";
            heading.textContent = "Purple";
            break;
        case 5:
            body.style.backgroundColor = "#000000";
            heading.textContent = "Black";
            break;
        case 6:
            body.style.backgroundColor = "#F8A52F";
            heading.textContent = "Orange";
            break;
        case 7:
            body.style.backgroundColor = "#FAED33";
            heading.textContent = "Yellow";
            break;
        case 8:
            body.style.backgroundColor = "#FCCE31";
            heading.textContent = "Golden";
            break;
        case 9:
            body.style.backgroundColor = "#FEFEFE";
            heading.textContent = "White";
            break;
        case 10:
            body.style.backgroundColor = "#E77EFD";
            heading.textContent = "Pink";
            break;
        
            
    }
})