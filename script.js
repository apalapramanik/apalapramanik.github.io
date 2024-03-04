/* script.js */
// console.log("Hello world!"); //this is executed first
// console.log("I'm doing JavaScript!"); //this is executed second
// console.log("I am APALA and this is my website");

// let message = 'This is a string'; //a String
// console.log(message);
// console.log(typeof message); //=> `string`

// let shoeSize = 6; //a Number
// console.log(shoeSize);
// console.log(typeof shoeSize); //=> 'number'

function validateForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById('message').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const email = document.getElementById('email').value;
    


    if (name === '') {
        alert('Please enter your name.');
        return false;
      }

    if (message === '') {
    alert('Please enter a message.');
    // const wordCount = message.trim().split(/\s+/).length;
    // document.getElementById('wordCount').innerText = `${wordCount} ${wordCount === 1 ? 'word' : 'words'}`;
    return false;
    }

    if (!rating) {
    alert('Please select a rating.');
    return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return false;
    }

    // const message = document.getElementById('message').value;
    // const wordCount = message.trim().split(/\s+/).length;
    // document.getElementById('wordCount').innerText = `${wordCount} ${wordCount === 1 ? 'word' : 'words'}`;

   

    return true;
}

function countWords() {
    const message = document.getElementById('message').value;
    const wordCount = message.trim().split(/\s+/).length;
    // document.getElementById('wordCount').innerText = `${wordCount} ${wordCount === 1 ? 'word' : 'words'}`;
    document.getElementById('wordCount').innerText = `${wordCount} words (${200 - wordCount} left)`;
  }
