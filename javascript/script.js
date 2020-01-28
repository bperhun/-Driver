const imgThree1 = document.querySelector(".three-1");
const imgFive1 = document.querySelector(".five-1");
const imgThree = document.querySelector(".three");
const imgFive = document.querySelector(".five");
const contact = document.querySelector(".contact");
const price = document.querySelector(".price");

imgThree1.addEventListener("mouseover", function () {
    imgThree.src = 'image/16.png'
})
imgThree1.addEventListener("mouseout", function () {
    imgThree.src = 'image/3.png'
})

imgFive1.addEventListener("mouseover", function () {
    imgFive.src = 'image/17.png'
})
imgFive1.addEventListener("mouseout", function () {
    imgFive.src = 'image/2.png'
})

imgThree1.addEventListener('click', function () {
    if (contact.style.display == 'none') {
        contact.style.display = 'block';
    } else {
        contact.style.display = 'none';
    }
});

contact.addEventListener('click', function(){
    if(contact.style.display == 'block'){
        contact.style.display = 'none';
    }
});

imgFive1.addEventListener('click', function () {
    if (price.style.display == 'none') {
        price.style.display = 'block';
    } else {
        price.style.display = 'none';
    }
});

price.addEventListener('click', function(){
    if(price.style.display == 'block'){
        price.style.display = 'none';
    }
});

