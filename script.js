alert("JavaScript Working");

const texts = [
    "Aspiring Software Developer",
    "Java Developer",
    "Web Developer",
    "AI Enthusiast"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");
console.log(typingElement);
function typeText() {

    if (charIndex < texts[textIndex].length) {

        typingElement.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);

    }

}

function eraseText() {

    if (charIndex > 0) {

        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);

    }

}
window.onload = function (){
typeText();
}