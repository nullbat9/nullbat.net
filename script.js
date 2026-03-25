secret_message = "eliter is fair and balanced";
keyPresses = [];
document.addEventListener("keydown", (event) => {
    keyPresses.push(event.key);
    if(keyPresses.join("").includes(secret_message)){
        window.location.assign("aidan.html");
        keyPresses = [];
    }
});
