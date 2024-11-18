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
        alertButton.innerText = "໒꒰ྀི   ˶˙Ⱉ˙˶   ꒱ྀིა";
    });

    alertButton.addEventListener("mouseout", () => {
        alertButton.innerText = "૮₍´˶• . • ⑅ ₎ა";
    });
}

//list of favourite things to do
const numbersList = document.getElementById("numbers");

if (numbersList) {
    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = i % 2 === 0 ? "even" : "odd";
        numbersList.apprendChild(listItem);
    }
}


//Greeting
const greetingElement = document.getElementById("Greeting");

if (greetingElement) {
    var i = new Date();
    var time = d.getHours();
    let greetingMessage = "";
    let greetingColor = "";
}

if (time < 12) {
    greetingMessage = "Good Morning!";
    greetingColor = "Greeting.morning";
} else if (time >= 12 && time < 17) {
    greetingMessage = "Good Afternoon";
    greetingColor = "Greeting.afternoon";
} else {
    greetingMessage = "Good Evening";
    greetingColor = "evening"
}

greetingElement.textContent = greetingMessage;
greetingElement.className = 'greeting ${greetingClass}'