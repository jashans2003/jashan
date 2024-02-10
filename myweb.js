const text = document.getElementById("info").innerText;
document.getElementById("info").innerText = ""; // Clear the text content

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("info").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 15); // Adjust typing speed here (milliseconds)
    }
}

typeWriter();
