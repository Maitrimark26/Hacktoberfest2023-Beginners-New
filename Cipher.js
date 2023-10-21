const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caeser(text, shift, direction) {
  let cipherText = '';

  for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    const index = alphabet.indexOf(letter);

    if (direction === 'encode') {
      let newIndex = (index + shift) % 26;
      cipherText += alphabet[newIndex];
    } else {
      let newIndex = (index - shift + 26) % 26;
      cipherText += alphabet[newIndex];
    }
  }

  console.log(`The ${direction === 'encode' ? 'encoded' : 'decoded'} text is ${cipherText}`);
}

const direction = prompt("Type 'encode' to encrypt, type 'decode' to decrypt:");
const text = prompt("Type your message:").toLowerCase();
const shift = parseInt(prompt("Type the shift number:"));

caeser(text, shift, direction);
