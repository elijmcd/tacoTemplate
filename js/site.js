function reverseString() {

    // First, get the user's input and validate it to be 2 or more characters.
    let userWord = document.getElementById("userInput").value;
    if (userWord.length < 2) {
        // alert("Phrase must be 2 or more characters")
        Swal.fire({
            title: 'Improper Palindrification',
            text: 'Input must be 2 or more characters.',
            icon: 'error',
            confirmButtonText: 'Try Again'
        })
        return;
    }
    // Now begin the reversal by stripping the string of all special characters
    // and storing it in a new variable cleanedWord
    let cleanedWord = userWord.replace(/[^A-Z0-9]/ig, "");
    let cleanUp = document.getElementById("cleanItUp")
    cleanUp.innerText = cleanedWord;

    // Create a variable for storing the reversed string, then iterate
    // through the cleanedWord and put the result in it
    let reversedWord = "";
    let start = cleanedWord.length - 1;
    for (let i = start; i >= 0; i--) {
        reversedWord += cleanedWord[i];
    }

    // Send the reversed string to the document for display
    let output = document.getElementById("outPal");
    output.innerText = reversedWord;

    // Perform a comparison to check for identicality. If identical, winner-winner-chicken-dinner!
    if (reversedWord == cleanedWord) {
        let palOut = document.getElementById("isItPal");
        palOut.innerText = "Yes, proper palindrification!";
        Swal.fire({
            title: 'Palindrome!',
            text: 'Palindrification Achieved',
            icon: 'success',
            confirmButtonText: '🥳 YAY 🥳'
        })
        confetti.start(1000);
    } else {
        let palOut = document.getElementById("isItPal");
        palOut.innerText = "No, improper palindrification!";
        Swal.fire({
            title: 'Improper Palindrification',
            text: 'Too bad, try again...',
            icon: 'error',
            confirmButtonText: '💩 Poop 💩'
        })
    }
}