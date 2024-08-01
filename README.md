# AES-256-CBC Encryption/Decryption Module

[![Code coverage](https://camo.githubusercontent.com/c7ee78e5fdc08a166cce54b4699ff743cb048bec3445622d25e69a9481f4f47f/68747470733a2f2f696d672e736869656c64732e696f2f636f766572616c6c732f4461766964416e736f6e2f6372632d686173682e737667)](https://coveralls.io/r/DavidAnson/crc-hash) [![License](https://camo.githubusercontent.com/90382615f57679553cf7f46c81cccf98b0c6fd0b170f052e2285fbc7013ff596/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f6372632d686173682e737667)](http://opensource.org/licenses/MIT)

This module provides functions to encrypt and decrypt text using AES-256-CBC in Node.js.

## Installation

Ensure you have Node.js installed on your system. You can install the module by cloning the repository and installing the dependencies:

```bash
npm i aes-256-cbc-encryption
```

## Usage

### Encrypt Function

The `encrypt` function encrypts a given text using a 32-byte key and a 16-byte initialization vector (IV).

#### Parameters

- `text` (string): The text to be encrypted.
- `key` (string): A key with a length of 32 bytes (256 bits).
- `initVector` (string): A 16-byte initialization vector (IV).

#### Returns

- `string`: The encrypted text in base64 format.

### Decrypt Function

The `decrypt` function decrypts a given encrypted text using a 32-byte key and a 16-byte initialization vector (IV).

#### Parameters

- `text` (string): The encrypted text in base64 format.
- `key` (string): A key with a length of 32 bytes (256 bits).
- `initVector` (string): A 16-byte initialization vector (IV).

#### Returns

- `string`: The decrypted text.

## Example

Here's an example of how to use the module:

Set environment variables, for example

```sh
# .env
AES_KEY=bf3c199c2470cb477d907b1e0917c17b
AES_IV=5183666c72eec9e4
```

```javascript
// index.js
const aes = require("aes-256-cbc-encryption"); // Replace with actual path to your module

const text = "Hello, World!";

// Encrypt the text
const encryptedText = aes.encrypt(text);
console.log(`Encrypted: ${encryptedText}`);

// Decrypt the text
const decryptedText = aes.decrypt(encryptedText);
console.log(`Decrypted: ${decryptedText}`);
```

OR you can passing parameter directly

```javascript
// index.js
const aes = require("aes-256-cbc-encryption"); // Replace with actual path to your module

const text = "Hello, World!";
const key = "your-32-byte-long-key-goes-here-123456789012"; // Example key
const initVector = "your-16-byte-iv123"; // Example IV

// Encrypt the text
const encryptedText = aes.encrypt(text, key, initVector);
console.log(`Encrypted: ${encryptedText}`);

// Decrypt the text
const decryptedText = aes.decrypt(encryptedText, key, initVector);
console.log(`Decrypted: ${decryptedText}`);
```

## Credits

[Nauval S](<[https://github.com/navsqi/aes-256-cbc-encryption](https://github.com/navsqi/aes-256-cbc-encryption)>)

## License

MIT License
