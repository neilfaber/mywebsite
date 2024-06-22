function scrollToElement(elementSelector, instance = 0){
    //Selext all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    //Checks if there are elements matching the selectore and if the requested instant exists
    if(elements.length > instance){
        //Scroll to the specifies instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    //Scroll to the sexond element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});