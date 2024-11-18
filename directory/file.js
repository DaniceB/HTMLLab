console.log('Hello!') ;

//Footer
const d = new Date();
console.log (d.getFullYear());
const footerYear = document.getElementById("footer");
footerYear.textContent = d.getFullYear();

//Alert
const alertButton = document.getElementById("૮₍´˶• . • ⑅ ₎ა");

if (alertButton) {
    alertButton.innerText = "૮₍´˶• . • ⑅ ₎ა"

    alertButton.addEventListener("click", () => {
        alert("Welcome to my website ᥫ᭡.");
    });

    alertButton.addEventListener("mouseover", () => {
        alertButton.innerText = "໒꒰ྀི˶˙Ⱉ˙˶꒱ྀིა";
    });

    alertButton.addEventListener("mouseout", () => {
        alertButton.innerText = "૮₍´˶• . • ⑅ ₎ა";
    });
}

//Greeting
const greetingElement = document.getElementById("Greeting");

if (greetingElement) {
    const hours = new Date().getHours();
    let greetingMessage = "";
    let greetingColor = "";
}

if (hours < 12) {
    greetingMessage = "Good Morning!";
    greetingColor = "morning";
} else if (hours >= 12 && hours < 17) {
    greetingMessage = "Good Afternoon";
    greetingColor = "afternoon";
} else {
    greetingMessage = "Good Evening";
    greetingColor = "evening"
}

greetingElement.textContent = greetingMessage;
greetingElement.className = 'greeting ${greetingClass}'
