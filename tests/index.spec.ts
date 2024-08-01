import mod from "../src/index";

beforeEach(async () => {
  process.env.AES_KEY = "assu";
  process.env.AES_IV = "5183666c72eec9e4";
});

describe("encryption & decyption function", () => {
  test("should return encrypted string", () => {
    const encrypt = mod.encrypt("nauval");
    expect(typeof encrypt).toBe("string");
  });

  test("should throw error if key not exist", () => {
    delete process.env["AES_KEY"];

    expect(() => {
      mod.encrypt("nauval");
    }).toThrow("Required key not provided");
  });

  test("should throw error if init vector not exist", () => {
    delete process.env["AES_IV"];

    expect(() => {
      mod.encrypt("nauval");
    }).toThrow("Required init vector not provided");
  });

  test("should return decrypted string", () => {
    const encrypt = mod.encrypt("nauval");
    const decrypt = mod.decrypt(encrypt);
    expect(decrypt).toBe("nauval");
  });
});
