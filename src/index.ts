import * as crypto from "crypto";

function getKey(key?: string, iv?: string) {
  const aesKey = process.env.AES_KEY || key;
  const aesIV = process.env.AES_IV || iv;

  if (!aesKey) throw new Error("Required key not provided");
  if (!aesIV) throw new Error("Required init vector not provided");

  return { aesKey, aesIV };
}

function generateKey(str: string): string {
  return crypto
    .createHash("sha1")
    .update(String(str))
    .digest("hex")
    .substring(0, 32);
}

function generateInitVector(str: string): string {
  return crypto
    .createHash("sha1")
    .update(String(str))
    .digest("hex")
    .substring(0, 16);
}

/**
 *
 * @param text text to be encrypted
 * @param key key length of 32-byte (256 bit)
 * @param initVector 16-byte initialization vector (IV).
 * @returns {string} encrypted text
 */
export function encrypt(
  text: string,
  key?: string,
  initVector?: string
): string {
  const { aesKey, aesIV } = getKey(key, initVector);

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    generateKey(aesKey),
    generateInitVector(aesIV)
  );

  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}

/**
 *
 * @param text encrypted text
 * @param key key length of 32-byte (256 bit)
 * @param initVector 16-byte initialization vector (IV).
 * @returns {string} decrypted text
 */
export function decrypt(
  encrypted: string,
  key?: string,
  initVector?: string
): string {
  const { aesKey, aesIV } = getKey(key, initVector);

  let decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    generateKey(aesKey),
    generateInitVector(aesIV)
  );
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

export default {
  encrypt,
  decrypt,
};
